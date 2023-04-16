<template>
    <Transition name="modal">
        <div v-if="show" class="auth-wrapper fixed">
            <div class="auth-inner">
                <div class="relative">
                    <div class="relative modal-container shadow-lg bg-white rounded-none md:rounded-lg dark:bg-gray-700 p-4 ">
                        <button @click="$emit('close')" type="button"
                            class="btn btn-close">
                        </button>
                        <div class="px-6 py-6 lg:px-8">
                            <slot name="body">

                            </slot>
                        </div>
                        <div class="px-6 lg:px-8 pb-4 pt-0 flex justify-end">
                            <slot name="footer">

                            </slot>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script>
export default {
    name: 'ModalComponent',
    props: ['show'],
}
</script>

<style scoped>
* {
    box-sizing: border-box;
}

body {
    background: white;
    min-height: 100vh;
    display: flex;
    font-weight: 400;
    font-family: sans-serif;
}

body, html, #app, #root, .auth-wrapper {
    width: 100%;
    height: 100%;
}

.auth-wrapper {
    justify-content: center;
    flex-direction: column;
    text-align: left;
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    display: table;
}

.auth-inner {
    margin: auto;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
    transition: all .3s;
    display: table-cell;
    vertical-align: middle;
}

.modal-container {
    margin: 0px auto;
    background-color: rgba(255, 255, 255, 1.00);
    border-radius: 16px;
    transition: all 0.3s ease;
    width: 500px;
    border-radius: 15px;
}

.auth-wrapper .form-control:focus {
    border-color: black;
    box-shadow: none;
}

.auth-wrapper h3 {
    text-align: center;
    margin: 0;
    line-height: 1;
    padding-bottom: 20px;
}

@media only screen and (max-width: 600px) {
    .auth-inner {
        width: 100%;
        padding: 5px;
        margin: auto;
        box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
        padding: 0px;
        transition: all .3s;
        border-radius: 0px;
    }
    .modal-container {
        width: 100%;
        border-radius: 0px;
    }
}

</style>