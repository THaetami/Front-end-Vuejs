<template>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <router-link :to="{ name: 'LandingPage' }" class="navbar-brand me-4">Hidden brand</router-link>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 mr-5">
              <li class="nav-item">
              </li>
            </ul>
            <div class="d-flex" role="search">
              <router-link v-if="!user" :to="{ name: 'LoginPage' }" class="btn btn-outline-primary me-3" type="submit">Login</router-link>
              <router-link v-if="!user" :to="{ name: 'RegisterPage' }" class="btn btn-outline-primary me-3" type="submit">Register</router-link>
              <router-link v-if="user" :to="{ name: 'DashboardPage' }" class="btn btn-outline-primary me-3" type="submit">Dashboard</router-link>
              <span v-if="user" @click="logout" class="btn btn-outline-primary" type="submit">Logout</span>
            </div>
          </div>
        </div>
      </nav>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'NavBar',
    methods: {
      logout() {
        sessionStorage.removeItem('token')
        this.$router.push({ name: 'LoginPage' })
        this.$router.go()
      }
    },
    computed: {
    ...mapGetters(['user'])
  },
}
</script>