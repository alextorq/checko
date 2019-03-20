<template>
    <el-dialog
            title="Add Ability"
            :visible.sync="visible.status"
            width="20%">
        <el-row>
            <el-select
                    v-model="value"
                    filterable
                    remote
                    reserve-keyword
                    placeholder="Please enter a keyword"
                    :remote-method="querySearch"
                    :loading="loading">
                <el-option
                        v-for="item in list"
                        :key="item.value"
                        :label="item.name"
                        :value="item.value">
                </el-option>
            </el-select>
            <el-button style="margin-left: 10px" type="primary" @click="attachAbilityToRole">Add</el-button>
        </el-row>
    </el-dialog>
</template>

<script>
    export default {
        name: "AddAbilityToRole",
        data() {
            return {
                url: '/admin_api/v1/permissions/availability/allow',
                value: '',
                list: [],
                loading: true
            }
        },
        computed: {
            listAbilities() {
             return this.$store.getters.availabilities;
            },
            listAlreadyAttachmentAbilities() {
                return this.parent_abilities.map((ability) => ability.name.toUpperCase());
            }
        },
        methods: {
            querySearch(queryString) {
                let result = this.filterAbility(queryString);
                result= result.map((ability) => {
                    return {
                        name: ability.name,
                        value: ability.id
                    }
                });
                this.list = result
            },
            filterAbility(queryString) {
                return this.listAbilities.filter((ability) => {
                    return ability.name.toUpperCase().indexOf(queryString.toUpperCase()) !== -1 &&
                    !this.listAlreadyAttachmentAbilities.includes(ability.name.toUpperCase())
                });
            },
            attachAbilityToRole() {
                if (!this.value || this.loading) {
                    return
                }
                axios.post(this.url, {
                    abilityID: this.value,
                    roleID: this.role_id
                })
                .then((responce) => {
                    this.value = '';
                    this.$emit('attach');
                    this.visible.status = false;
                    this.$notify({
                        title: 'Success',
                        message: `Ability attach`,
                        type: 'success'
                    });
                })
                .catch((error) => {
                    console.log(error);
                })
            }
        },
        created() {
            if (!this.$store.getters.availabilities.length) {
                this.$store.dispatch('getavailabilities').then(() => {
                    this.loading = false;
                })
            }else {
                this.loading = false;
            }
        },
        props: {
            visible: {
                type: Object,
                required: true,
                default: {}
            },
            parent_abilities: {
                type: Array,
                default: []
            },
            role_id: {
                type: Number,
                required: true,
                default: 0
            }
        }
    }
</script>

<style scoped>

</style>