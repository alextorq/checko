<template>
    <div>
        <el-form style="text-align: left" status-icon :rules="rules" label-position="top" ref="ruleForm" :model="role">
            <el-row  :gutter="24">
                <el-col :span="18">
                    <el-form-item label="Pagetitle" prop="pagetitle" :error="errorForm.pagetitleError" >
                        <el-input v-model="role.pagetitle" autocomplete="off"></el-input>
                    </el-form-item>

                    <el-form-item label="Longtitle" :error="errorForm.longtitleError" prop="longtitle">
                        <el-input v-model="role.longtitle" autocomplete="off"></el-input>
                    </el-form-item>

                    <el-form-item label="Description" prop="description">
                        <el-input v-model="role.description" autocomplete="off"></el-input>
                    </el-form-item>

                    <el-form-item label="Introtext" prop="introtext">
                        <el-input v-model="role.introtext" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>

                <el-col :span="4" :offset="2">
                    <el-form-item label="Public" prop="publish">
                        <el-checkbox v-model="role.publish" label="Public" border></el-checkbox>
                    </el-form-item>
                    <el-form-item label="Slug" prop="slug">
                        <el-input v-model="role.slug" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>

            </el-row>

            <VueEditor v-model="role.content"></VueEditor>

            <div class="mt_2">
                <el-button type="primary" @click="submitForm('ruleForm')">Save</el-button>
            </div>
        </el-form>
    </div>
</template>

<script>
    import { VueEditor } from "vue2-editor";


    export default {
        name: "onePage",
        data() {
            return {
                url: '/admin_api/v1/pages/',
                role: {
                    pagetitle: '',
                    longtitle: '',
                    description: '',
                    introtext: '',
                    publish: true,
                    content: "hello",
                    slug: ''
                },
                errorForm : {
                    pagetitleError: '',
                    longtitleError: ''
                },
                rules: {
                    pagetitle: [
                        { required: true, message: 'Please input Ability name', trigger: 'change' },
                        { min: 4, max: 50, message: 'The name must be at least 4 characters.', trigger: 'change' }
                    ]
                }
            }
        },
        components: {
            VueEditor
        },
        props: ['id'],
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        axios.put(this.url + this.id, this.role)
                            .then((responce) => {
                                this.$notify({
                                    title: 'Success',
                                    message: `Page updated`,
                                    type: 'success'
                                });
                            })
                            .catch((error) => {
                                //Если не прошло валидацию показываем ошибки
                                if (error.response.status === 422) {
                                    this.showErrors(JSON.parse(error.request.response))
                                }
                                console.log(error);
                            })
                    } else {
                        return false;
                    }
                });
            },
            showErrors(errors) {
                for (let error in errors) {
                    let errorField = `${error}Error`;
                    this.errorForm[errorField] = errors[error].join(',');
                }
            },
            updatePage(e) {
                if ((window.navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)  && e.keyCode == 83) {
                    e.preventDefault();
                    this.submitForm('ruleForm')
                }
            }
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                document.addEventListener("keydown", vm.updatePage, false);
            })
        },
        beforeRouteLeave(to, from, next) {
            document.removeEventListener("keydown", this.updatePage);
            next();
        },
        created() {
            axios.get(this.url + this.id).then((response) => {
                this.role = response.data;
            })
        }
    }
</script>
