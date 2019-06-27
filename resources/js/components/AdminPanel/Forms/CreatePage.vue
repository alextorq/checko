<template>
    <div>
        <el-form style="text-align: left" status-icon :rules="rules" label-position="top" ref="ruleForm" :model="role">

            <el-row  :gutter="25">
                <el-col :span="18">


                    <el-form-item label="Pagetitle" prop="pagetitle" :error="errorForm.pagetitleError" >
                        <el-input @change="createSlug" v-model="role.pagetitle" autocomplete="off"></el-input>
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

                <el-col :span="6" :offset="1">
                    <el-form-item label="Public" prop="publish">
                        <el-checkbox v-model="role.publish" label="Public" border></el-checkbox>
                    </el-form-item>

                </el-col>

            </el-row>

            <VueEditor v-model="role.content"></VueEditor>

            <div class="mt_2">
                 <el-button type="primary" @click="submitForm('ruleForm')">Create</el-button>
             </div>
        </el-form>


   </div>

</template>

<script>


    function urlLit(w,v) {
        var tr='a b v h d e ["zh","j"] z y y k l m n o p r s t u f h c ch sh ["shh","shch"] ~ y ~ e yu ya ~ ["jo","e"] ["ye","ie"] '.split(' ');
        tr[36] = 'ye';
        tr[38] = 'i';
        tr[39] = 'i';
        tr[97] = 'g';
        var ww=''; w=w.toLowerCase();
        for(var i=0; i<w.length; ++i) {
            var cc = w.charCodeAt(i);
            var ch = (cc>=1072?tr[cc-1072]:w[i]);
            if(ch.length<3) ww+=ch; else ww+=eval(ch)[v];
        }
        return(ww.replace(/[^a-zA-Z0-9\-]/g,'-').replace(/[-]{2,}/gim, '-').replace( /^\-+/g, '').replace( /\-+$/g, ''));
    }

    import { VueEditor } from "vue2-editor";


    export default {
        name: "CreatePage",
        data() {
            return {
                url: '/admin_api/v1/pages/create',
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
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        axios.post(this.url, this.role)
                            .then((responce) => {
                                this.$notify({
                                    title: 'Success',
                                    message: `Ability create`,
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
            createSlug() {
                this.role.slug = urlLit(this.role.pagetitle, 0);
            },
            showErrors(errors) {
                for (let error in errors) {
                    let errorField = `${error}Error`;
                    this.errorForm[errorField] = errors[error].join(',');
                }
            },
        },
    }
</script>