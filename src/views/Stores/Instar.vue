<template>
  <b-container>
    <productCard v-bind:allProducts="allProducts"></productCard>
  </b-container>
</template>

<script>
import productCard from '@/components/productCard'
import db from '@/firebaseConfig/firebaseInit'
export default {
  components:{
    productCard
  },
  data(){
    return{
      allProducts:[]
    }
  },
  created(){
    db.collection("products").where('store', '==', 'InstarInformatika').get().then(querySnapshot => {
      querySnapshot.forEach(product => {
        const data = {
          'id': product.id,
          'category': product.data().category,
          'image': product.data().image,
          'newPrice': product.data().newPrice,
          'oldPrice': product.data().oldPrice,
          'productName': product.data().productName,
          'store': product.data().store,
        }
        this.allProducts.push(data)
      })
    })
  }
}
</script>

<style>

</style>