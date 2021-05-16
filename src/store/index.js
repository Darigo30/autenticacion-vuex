import Vue from "vue";
import Vuex from "vuex";
import Firebase from "firebase"
import { Message } from 'element-ui'
import router from "@/router"


Vue.use(Vuex);


export default new Vuex.Store({
    state: {
        formLabelAlign: {
            user: "",
            password: ""
        }
    },
    mutations: {
        setUser(state, payload){
            state.formLabelAlign.user = payload;
        },
        setPass(state,payload){
            state.formLabelAlign.password = payload;
        }
    },
    actions: {
        login({ commit }, payload) {
            console.log(payload.formLabelAlign.user, payload.formLabelAlign.password)
            Firebase.auth()
            .signInWithEmailAndPassword(
                payload.formLabelAlign.user,
                payload.formLabelAlign.password
             )
             .then(
                 acept => {
                     router.push('home');
                     commit("setUser", payload.formLabelAlign.user);
                     commit("setPass", payload.formLabelAlign.password);
                     console.log("paso", acept)
                 },
                 reject => {
                    Message({
                        showClose: true,
                        message: reject.message,
                        type: 'error'
                    })
                 });

            },
            cerrar(){
                Firebase.auth().signOut()
                .then(() => {
                    router.push('login');
                });
            }   
        } 
});
