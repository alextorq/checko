<template>
        <router-view></router-view>
</template>

<script>

    import Header from './components/Frontend/Header'
    import Layout from './components/Frontend/Layout'
    export default {
        name: "FrontApp",
        components: {
            Header,
            Layout
        },
        methods: {
          checkCheckList() {
              if (document.location.pathname.indexOf('frontend/checklist/') !== -1) {
                  axios
                      .get(document.location.pathname)
                      .then(response => {
                          this.$store.commit('initStateCheckItems', response.data.check_items);
                          this.$store.commit('initStateCheckList', response.data);
                      }).catch((err) => {
                          console.log(err)
                  })
              }
          }  
        },
        created() {
            this.checkCheckList();
            this.$store.commit('loadSettings');
        }
    }
</script>
