<template>
  <div class="container">
      <b-form class="my-5">
          <b-form-group id="input-email" label="Email address:" label-for="email" description="We'll never share your email with anyone else.">
              <b-form-input id="email" type="email" required placeholder="Enter email" v-model="email"></b-form-input>
          </b-form-group>
          <b-form-group id="input-username" label="Username:" label-for="username">
              <b-form-input id="username" required placeholder="Enter your username" v-model="userName"></b-form-input>
          </b-form-group>
          <b-form-group id="input-city" label="City" label-for="city">
              <b-form-input id="city" placeholder="Hometown:" v-model="city"></b-form-input>
          </b-form-group>
          <b-form-group id="input-password" label="Password" label-for="password">
              <b-form-input id="password" placeholder="Enter password:" required type="password" v-model="password"></b-form-input>
          </b-form-group>
          <button type="submit" class="btn btn-primary" v-on:click="register">Register</button>
      </b-form>
  </div>
</template>

<script>
import firebase from 'firebase'
import db from '../firebaseConfig/firebaseInit'

export default {
    data(){
        return{
            email:'',
            password:'',
            userName:'',
            city:''
        }
    },
    methods:{
    register(e){
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(user => {
          alert(`Account created for ${user.user.email}`)
          return db.collection("users").doc(user.user.uid).set({
            id: user.user.uid,
            email: this.email,
            userName: this.userName,
            city: this.city,
            favoriteItems: []
          })
        },error => {
          alert(error.message)
        }).then(()=>{
          this.$router.go({path: this.$router.push('/')})
        })
      e.preventDefault();
    }
  }
}
</script>

<style>
    .container{
    width: 100%;
    height: 80%;
    position: absolute;
    right: 0;
    left: 0;
    justify-content: center;
    display: flex;
  }
</style>