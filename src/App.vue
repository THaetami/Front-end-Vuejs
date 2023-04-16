<template>
  <div>
  <nav-bar></nav-bar>
  <router-view></router-view>
 </div>
</template>
<script>
import axios from 'axios';
import { mapActions, mapGetters } from 'vuex';
import NavBar from './script/components/NavBar.vue'
export default {
  name: 'App',
  components: {
    NavBar
  },
  computed: {
    ...mapGetters(['user'])
  },
  created() {
    this.getUser()
  },
  methods: {
    ...mapActions(["getuser"]),
    async getUser() {
      try {
        const response = await axios('user', {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`
          }
        });
        this.getuser(response.data.user);
      } catch (error) {
        if (error.response) {
          console.log(error.response);
        } else if (error.request) {
          console.log(error.request)
        } else {
          console.log(error)
        }
      }
    }
  }
}
</script>



