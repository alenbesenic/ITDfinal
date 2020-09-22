<template>
  <div class="container">
      <b-form class="my-5">
          <b-form-group id="input-email" label="Email address:" label-for="email">
              <b-form-input id="email" type="email" required placeholder="Enter email" v-model="email"></b-form-input>
          </b-form-group>
          <b-form-group id="input-password" label="Password" label-for="password">
              <b-form-input id="password" required type="password" placeholder="Password:" v-model="password"></b-form-input>
          </b-form-group>
          <button type="submit" class="btn btn-primary" v-on:click="login">Login</button>
      </b-form>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  data(){
    return{
      email:'',
      password:''
    }
  },
  methods:{
    login(e){
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          alert(`You are logged in as ${user.user.email}`)
          this.$router.go({path: this.$router.push('/')})
        },error => {
          alert(error.message)
        })

      e.preventDefault();
    }
  }
}
</script>

<style>

</style>