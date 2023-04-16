import { createStore } from 'vuex'

const state = {
    user: null,
};

const store = createStore({
    state,
    getters: {
        user: (state) => {
            return state.user;
        },
    },
    actions: {
        getuser({commit}, user) {
            commit("user", user);
        },
    },
    mutations: {
        user(state, getuser) {
            state.user = getuser;
        },
    }
});


export default store;