<template>
  <b-container>
    <b-card no-body class="accountCard my-5" bg-variant="dark" text-variant="white" header="My Account">
      <b-list-group flush>
          <b-list-group-item class="accountList">
            <span>Email: {{userInfo.email}}</span>
            <b-button v-b-modal.changeEmail pill size="sm">Change</b-button>
            <b-modal id="changeEmail" title="Change your email" centered header-bg-variant="dark" header-text-variant="light" body-bg-variant="dark" body-text-variant="light" footer-bg-variant="dark" ok-title="Change" @ok="newEmail">
              <form ref="form">
                <b-form-group label="New email" label-for="newEmail">
                  <b-form-input id="newEmail" v-model="newemail"></b-form-input>
                </b-form-group>
              </form>
            </b-modal>
        </b-list-group-item>

        <b-list-group-item class="accountList">
          <span>Username: {{userInfo.userName}}</span>
          <b-button v-b-modal.changeUsername pill size="sm">Change</b-button>
          <b-modal id="changeUsername" title="Change your username" centered header-bg-variant="dark" header-text-variant="light" body-bg-variant="dark" body-text-variant="light" footer-bg-variant="dark" ok-title="Change" @ok="newUsername">
              <form ref="form">
                <b-form-group label="New username" label-for="newUsername">
                  <b-form-input id="newuserName" v-model="newusername"></b-form-input>
                </b-form-group>
              </form>
            </b-modal>
        </b-list-group-item>

        <b-list-group-item class="accountList">
          <span>Hometown: {{userInfo.city}}</span>
          <b-button v-b-modal.changeHometown pill size="sm">Change</b-button>
          <b-modal id="changeHometown" title="Change your howetown" centered header-bg-variant="dark" header-text-variant="light" body-bg-variant="dark" body-text-variant="light" footer-bg-variant="dark" ok-title="Change" @ok="newHometown">
              <form ref="form">
                <b-form-group label="New hometown" label-for="newHometown">
                  <b-form-input id="newHometown" v-model="newhometown"></b-form-input>
                </b-form-group>
              </form>
            </b-modal>
        </b-list-group-item>
      </b-list-group>
      <b-card-body v-if="userInfo.favoriteItems!=0">
          <b-button v-b-modal.favoriteModal block>My Items</b-button>
          <b-modal id="favoriteModal" centered size="lg">
            <b-carousel :interval="5000" controls indicators> 
              <b-carousel-slide v-for="item in userInfo.favoriteItems" :key="item.id" :img-src="item.image"> </b-carousel-slide>
            </b-carousel>
          </b-modal>
      </b-card-body>
      <b-card-body v-if="userInfo.favoriteItems==0"><span>There are no items to be shown</span></b-card-body>
    </b-card>
  </b-container>
</template>

<script>
import firebase from 'firebase'
import db from '../firebaseConfig/firebaseInit'
export default {
  data(){
    return{
      newemail:'',
      newusername:'',
      newhometown:'',
      userInfo:{}
    }
  },
  methods:{
    newEmail(){
      const currentUseruid = firebase.auth().currentUser.uid
      var userEmail = firebase.auth().currentUser
      userEmail.updateEmail(this.newemail)
      return db.collection("users").doc(currentUseruid).update({
        email: this.newemail
      }).then(()=>{
        this.$router.go()
      })
    },
    newUsername(){
      const currentUseruid = firebase.auth().currentUser.uid
      return db.collection("users").doc(currentUseruid).update({
        userName: this.newusername
      }).then(()=>{
        this.$router.go()
      })
    },
    newHometown(){
      const currentUseruid = firebase.auth().currentUser.uid
      return db.collection("users").doc(currentUseruid).update({
        city: this.newhometown
      }).then(()=>{
        this.$router.go()
      })
    }
  },
  created(){
    if(firebase.auth().currentUser){
      const currentUseruid = firebase.auth().currentUser.uid
      db.collection("users").where('id', '==', currentUseruid).get().then(querySnapshot=>{
        querySnapshot.forEach(userinfo => {
          this.userInfo = {
            'userName': userinfo.data().userName,
            'email': userinfo.data().email,
            'city': userinfo.data().city,
            'favoriteItems': userinfo.data().favoriteItems
          },
          console.log("UserInfo:", this.userInfo)
        })
      })
    }
  }
}
</script>

<style scoped>
  .accountCard{
    width: 70%;
    height: 60%;
  }
  .accountList{
    background-color: inherit;
    justify-content: space-between;
  }
  .accountList span{
    float: left;
  }
  .accountList button{
    background-color: inherit;
    border: none;
    float: right;
  }
  >>>.modal-footer{
    justify-content: space-between;
  }
  >>>.modal-content footer button{
    background-color: inherit;
    border: none;
  }
  .card-body button{
    background-color: transparent;
    border: none;
  }
  >>>.img-fluid{
    height: 250px;
  }
</style>