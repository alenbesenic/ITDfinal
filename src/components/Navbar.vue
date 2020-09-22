<template>
    <b-navbar toggleable="md" type="dark" variant="dark">
            <Sidebar v-if="isLoggedIn"/>
            <b-navbar-brand router-link to="/">
                <img src="../assets/logo.png" alt="" height="50">
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item v-if="!isLoggedIn">
                        <router-link to="/login">
                            <button class="btn" type="button">
                                <span class="material-icons mr-3">login</span>
                                <div class="iconText">Login</div>
                            </button>
                        </router-link> 
                    </b-nav-item>
                    <b-nav-item v-if="!isLoggedIn">
                        <router-link to="/register">
                            <button class="btn" type="button">
                                <span class="material-icons">person_add</span>
                                <div class="iconText">Signup</div>
                            </button>
                        </router-link>
                    </b-nav-item>
                    <b-button pill v-if="isLoggedIn" id="signoutButton" v-on:click="signout">Signout</b-button>
                </b-navbar-nav>
            </b-collapse>
    </b-navbar>
</template>

<script>
import firebase from 'firebase'
import Sidebar from './Sidebar'
export default {
    components:{
        Sidebar
    },
    data(){
        return{
            isLoggedIn: false,
        }
    },
    created(){
        if(firebase.auth().currentUser){
            this.isLoggedIn = true;
        }
    },
    methods:{
        signout(){
            firebase.auth().signOut().then(()=>{
                this.$router.go({path: this.$router.push('/login')})
            })
        }
    }
}
</script>

<style>
    .material-icons{
        color: white;
    }

    .iconText{
        color: white;
    }

    #signoutButton{
        background: transparent;
        color: white;
        border: none;
    }
</style>