<template>
    <div>
        <CheckListName></CheckListName>
        <ProgressBar></ProgressBar>
        <CheckListDescription></CheckListDescription>
        <CreateCheckList></CreateCheckList>
    </div>
</template>

<script>
    import ProgressBar from '../ProgressBar'
    import CheckListDescription from '../CheckListDescription'
    import CreateCheckList  from '../CreateCheckList'
    import CheckListName from '../CheckListName'

    export default {
        name: "BlankCheckList",
        components: {
            ProgressBar,
            CreateCheckList,
            CheckListDescription,
            CheckListName
        }
    }
</script>
