import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import './firebaseConfig/firebaseInit'

Vue.config.productionTip = false

let app;
firebase.auth().onAuthStateChanged(user=>{
  console.log("user:", user)
  if(!app){
    app=new Vue({
        router,
        render: h => h(App)
        }).$mount('#app')
  }
})