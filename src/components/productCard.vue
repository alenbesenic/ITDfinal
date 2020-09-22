<template>
  <b-container>
    <b-row>
      <b-col cols="4" v-for="product in allProducts" :key="product.id">
          <b-card>
            <div slot="header">
              <b-img :src="product.image" fluid></b-img>
            </div>
            <p>{{product.productName}}</p>
            <div class="prices">
              <p class="oldprice">{{product.oldPrice}} kn</p>
              <p class="newprice">{{product.newPrice}} kn</p>
            </div>
            <div slot="footer" v-if="isLoggedIn">
                <b-button block v-on:click="favoriteItem(product)">
                  <span class="material-icons">favorite</span>
                </b-button>
            </div>
          </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import firebase from 'firebase'
import db from '../firebaseConfig/firebaseInit'
export default {
    props:['allProducts'],
    data(){
        return{
            isLoggedIn: false
        }
    },
    created(){
        if(firebase.auth().currentUser){
            this.isLoggedIn = true;
        }
    },
    methods:{
    favoriteItem(id){
      const currentUserUid = firebase.auth().currentUser.uid
      let item = id
      var saveProduct = db.collection("users").doc(currentUserUid)
      saveProduct.update({
        favoriteItems:
          firebase.firestore.FieldValue.arrayUnion(item)
      })
      alert(`Item added to My Items`)
    }
  }
}
</script>

<style scoped>
    .card{
    margin-bottom: 40px;
    margin-top: 40px;
    outline: none;
    width: 70%;
    height: 90%;
  }
  .card-header{
    background-color: transparent;
  }
  .card-header img{
    height: 13vw;
  }
  .oldprice{
    text-decoration: line-through;
    font-size: small;
  }
  .material-icons{
    color: red;
  }
  .btn{
    background-color: white;
    border: none;
  }
  .card-footer{
    background-color: transparent;
  }
</style>