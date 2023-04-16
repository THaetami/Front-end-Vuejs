<template>
    <div v-if="user" class="container">
      <div class="logo rounded"><img v-if="user" :src="`http://localhost:8080/gambar/${this.user.profile}`" alt="cc-logo" border="0">
      </div>
      <div class="illustration">
        <div class="hgroup">
          <span class="name">Hello, {{ user.name }}</span>
          <h1>Thank you for Signing Up</h1>
          <div class="thumbs">
            <span><img src="https://i.ibb.co/2g7tS2d/good.png" alt="good" border="0"></span>
          </div>
          <p class="rad">Rad stuff is here</p>
        </div>
      </div>

      <div class="button-wrap">
        <button class="explore">
          Explore
        </button>
      </div>
      <footer>
        Brand Name Inc © 2019
        <br>
        Somewhere in earth.
        <br>
        Tel: 00 1 460 5416
      </footer>
    </div>
      <div v-else class="p-5 text-center bg-light">
        <h1 class="mb-3">Heading</h1>
        <h4 class="mb-3">Subheading</h4>
        <a class="btn btn-primary" href="" role="button">Call to action</a>
      </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    name: 'LandingPage',
    computed: {
        ...mapGetters(['user'])
    },
}
</script>

<style scoped>
img {
    display: inline-block;
}
.container {
    max-width: 70%;
    margin: 20px auto;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, .1);
    min-height: 100px;
    position: relative;
}
.container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(to right, #0267c1, #d65108);
}
.logo {
    display: flex;
    margin: 30px auto 0;
    align-items: center;
    justify-content: center;
}
.logo a {
    display: block;
    width: 30px;
    height: 30px;
}
.logo img {
    width: 180px;
}
.logo .c-name {
    display: inline-block;
    font-weight: 600;
}
.thumbs {
    width: 100px;
    margin: auto;
    height: 136px;
}
.thumbs img {
    width: 100%;
}
.illustration {
    width: 100%;
    text-align: center;
    box-shadow: 0 10px 20px -5px rgba(0, 0, 0, .05);
    border-radius: 0 0 50% 50% / 1%;
    text-align: center;
}
.illustration img {
    width: 70%;
    margin: 50px auto;
}
.separator {
    display: block;
    height: 3px;
    width: 70%;
    margin: 10px auto;
    background-color: rgba(0, 0, 0, .05);
    border-radius: 10px;
    position: relative;
    overflow: hidden;
}
.separator::before, .separator::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 33%;
    border-radius: inherit;
    opacity: 0.05;
}
.separator::before {
    left: 0;
    background: #efa00b;
}
.separator::after {
    left: initial;
    right: 0;
    background: #d65108;
}
.hgroup {
    text-align: center;
    padding: 50px 30px 30px;
}
.name {
    display: block;
    color: #0267c1;
    font-weight: 600;
    font-size: 1.1rem;
}
.hgroup h2 {
    font-size: 19px;
}

.button-wrap {
    text-align: center;
    padding: 2rem;
}
button.explore {
    padding: 15px 25px;
    font: inherit;
    background: linear-gradient(to right, #0267c1, #0280ef);
    border-radius: 50px;
    border: 0;
    color: #fff;
    margin: auto;
    display: inline-block;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    box-shadow: 0 5px 10px rgba(0, 0, 0, .1);
}
button.explore:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 10px -7px rgba(0, 0, 0, .1);
}
footer {
    font-size: 12px;
    color: slategrey;
    text-align: center;
    padding: 30px;
}
 
</style>
