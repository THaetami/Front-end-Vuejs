<template>
    <section class="vh-100">
        <div class="container-fluid h-custom">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div v-if="imagePreview"  class="col-md-9 col-lg-6 col-xl-5 d-flex justify-content-center">
                    <img :src="imagePreview" width="350" alt="Preview" class="img-fluid">
                </div>
                <div v-else  class="col-md-9 col-lg-6 col-xl-5">
                    <img  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image">
                </div>
                <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                    <form @submit.prevent="handleSubmit">
                        <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                            <p class="lead fw-normal mb-0 me-3">Sign up</p>
                        </div>

                        <div class="divider d-flex align-items-center my-4">
                            <p class="text-center fw-bold mx-3 mb-0"></p>
                        </div>

                         <!-- Input Image -->
                        <div class="form-outline mb-2">
                            <input type="file" id="profile" ref="profile" @change="handleFileSelect" class="form-control form-control-lg"
                                placeholder="select your photo" />
                            <label class="form-label" for="form3Example4">Photo Profile :</label>
                            <span v-if="errors !== ''" class="text-danger">: {{  errors.profile }}</span>
                        </div>

                        <!-- Name input -->
                        <div class="form-outline mb-2">
                            <input type="text" v-model="name" class="form-control form-control-lg"
                                placeholder="Enter a your name" required/>
                            <label class="form-label" for="form3Example3">Name :</label>
                            <span v-if="errors !== ''" class="text-danger">: {{  errors.name }}</span>
                        </div>

                        <!-- Email input -->
                        <div class="form-outline mb-2">
                            <input type="email" v-model="email" class="form-control form-control-lg"
                                placeholder="Enter a valid email address" required/>
                            <label class="form-label" for="form3Example3">Email address :</label>
                            <span v-if="errors !== ''" class="text-danger">: {{  errors.email }}</span>
                        </div>

                        <!-- Password input -->
                        <div class="form-outline mb-2">
                            <input :type="passwordFieldType" v-model="password" class="form-control form-control-lg"
                                placeholder="Enter password" autocomplete="" required/>
                            <label class="form-label" for="form3Example4">Password :</label>
                            <span v-if="errors !== ''" class="text-danger">: {{  errors.password }}</span>
                        </div>

                        <div class="d-flex justify-content-between align-items-center">
                            <!-- Checkbox -->
                            <div class="form-check mb-0">
                            <input v-model="showPassword" class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                            <label class="form-check-label" for="form2Example3">
                                Show/Hide
                            </label>
                            </div>
                            <router-link :to="{ name: 'ForgetPassPage' }" class="text-body">Forgot password?</router-link>
                        </div>

                        <div class="text-center text-lg-start mt-2 pt-2">
                            <button type="submit" class="btn btn-primary btn-lg"
                                style="padding-left: 2.5rem; padding-right: 2.5rem;">Register</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
        <div class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-light">
            <div class="text-black mb-3 mb-md-0">
                Copyright © 2020. All rights reserved.
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
export default {
    name: 'RegisterPage',
    data() {
        return {
            name: '',
            email: '',
            password: '',
            file: '',
            errors: '',
            imagePreview: null,
            showPassword: false,
        }
    },
    computed: {
        passwordFieldType() {
            return this.showPassword ? 'text' : 'password';
        },
    },
    methods: {
        async handleSubmit() {
            try {
                const formData = new FormData();
                formData.append('name', this.name);
                formData.append('password', this.password);
                formData.append('email', this.email);
                formData.append('profile', this.file);

                const response = await axios.post('register', formData);
                this.email = '';
                this.name = '';
                this.file = '';
                this.password = '';
                this.$refs.profile.value = '';
                console.log(response);
                this.$router.push({ name: 'LoginPage' });
            } catch (error) {
                if (error.response) {
                    this.errors = error.response.data.errors;
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
            }
        },
        handleFileSelect(event) {
            this.file = event.target.files[0];
            this.imageUrl = URL.createObjectURL(this.file);
            const reader = new FileReader();

            reader.onload = () => {
                this.imagePreview = reader.result;
            };
            reader.readAsDataURL(this.file);
        },
    }
}
</script>
<style scoped>
</style>