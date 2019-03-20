<template>
    <el-dialog
            title="Create Ability"
            :visible.sync="visible.status"
            width="30%">
        <el-form style="text-align: left" status-icon :rules="rules" label-position="top" ref="ruleForm" :model="role">
            <el-form-item label="Role name" prop="name" :error="errorForm.nameError" >
                <el-input v-model="role.name" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item label="Role title" :error="errorForm.titleError" prop="title">
                <el-input v-model="role.title" autocomplete="off"></el-input>
            </el-form-item>
        </el-form>

        <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="submitForm('ruleForm')">Create</el-button>
            <el-button @click="resetForm('ruleForm')">Reset</el-button>
        </span>
    </el-dialog>

</template>




<script>
    export default {
        name: "CreateAbility",
        data() {
            return {
                url: '/admin_api/v1/permissions/availability/create',
                role: {
                    name: '',
                    title: ''

                },
                errorForm : {
                    nameError: '',
                    titleError: ''
                },
                rules: {
                    name: [
                        { required: true, message: 'Please input Ability name', trigger: 'change' },
                        { min: 4, max: 50, message: 'The name must be at least 4 characters.', trigger: 'change' }
                    ],
                    title: [
                        { required: true, message: 'Please select Title', trigger: 'change' },
                        { min: 4, max: 50, message: 'The name must be at least 4 characters.', trigger: 'change' }
                    ]
                }
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        axios.post(this.url, this.role)
                            .then((responce) => {
                                this.$emit('create_ability');
                                this.visible.status = false;
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
            showErrors(errors) {
                for (let error in errors) {
                    let errorField = `${error}Error`;
                    this.errorForm[errorField] = errors[error].join(',');
                }
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        },
        props: ['visible']
    }
</script>

<style scoped>

</style>