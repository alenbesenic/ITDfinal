<template>
  <div>
      <b-button v-b-toggle.sidebar-backdrop id="sidebarButton">
          <span class="material-icons">menu_open</span>
          <div class="sidebarText">Menu</div>
      </b-button>

      <b-sidebar id="sidebar-backdrop" backdrop shadow bg-variant="dark" text-variant="light">
            <b-button router-link to="/myaccount" class="/myaccount" variant="dark" block>
                <div class="d-flex align-items-center" variant="dark">
                    <b-avatar class="mr-3"></b-avatar>
                    <span class="mr-auto">{{currentUser}}</span>
                </div>
            </b-button> 
            <hr/>
            <b-list-group>
                <b-list-group-item class="sidebarlinks my-3" v-for="item in sidebarLinks" :key="item.title" router-link :to="item.route">
                    <span class="material-icons mr-2">{{item.icon}}</span>
                    {{item.title}}
                </b-list-group-item>
            </b-list-group>
      </b-sidebar>
  </div>
</template>

<script>
import firebase from 'firebase'
import db from '../firebaseConfig/firebaseInit'
export default {
    data(){
        return{
            currentUser:'',
            sidebarLinks:[
               { title:"Home", icon:"home", route:"/"},
               { title:"Categories", icon:"category", route:"/categories"},
               { title:"Stores", icon:"store", route:"/stores"}
            ]
        }
    },
    created(){
        if(firebase.auth().currentUser){
            const userUid = firebase.auth().currentUser.uid
            db.collection("users").where('id', '==', userUid).get().then(querySnapshot=>{
                querySnapshot.forEach(userinfo=>{
                    this.currentUser = userinfo.data().userName
                })
            })
        }
    }
}
</script>

<style>
    #sidebarButton{
        background-color: transparent;
        border: none;
    }
    .material-icons{
        color: white;
    }
    .sidebarlinks{
       background-color: inherit;
       color: white;
       border: none;
    }
    .sidebarlinks:hover .material-icons{
        color: black;
    }
</style>