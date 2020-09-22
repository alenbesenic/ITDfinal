<template>
  <b-container>
    <b-row>
      <b-col cols="6" v-for="category in categories" :key="category.title">
          <b-card overlay :img-src="category.image" img-alt="overlay-image" img-height=180 
              @mouseover="category.hovered = true" 
              @mouseleave="category.hovered = false"
              @click="goToRoute(category.route)"> 
              <b-card-title class="my-5" v-if="category.hovered">
              {{category.title}}
              </b-card-title>
          </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data(){
    return{
      categories:[
                {title:"Laptops", image: "https://images.unsplash.com/photo-1453133451515-5ff7c1d0d63c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80", hovered:false, route:"/laptops"},
                {title:"Keyboards", image:"https://images.unsplash.com/photo-1586820266346-a12b444dc61f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80", hovered:false, route:"/keyboards"},
                {title:"Mouses", image:"https://images.unsplash.com/photo-1567017527057-19a636aa9fca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80", hovered:false, route:"/mouses"},
                {title:"Headphones", image:"https://images.unsplash.com/photo-1420161900862-9a86fa1f5c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80", hovered:false, route:"/headphones"},
                {title:"Chargers", image:"https://images.unsplash.com/photo-1534434050285-43398fb24198?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80", hovered:false, route:"/chargers"},
                {title:"Video Games", image:"https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80", hovered:false, route:"/videogames"},
                {title:"Mobile Phones", image:"https://images.unsplash.com/photo-1585811759577-def8da43028b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80", hovered:false, route:"/mobilephones"},
                {title:"Printers", image:"https://images.unsplash.com/photo-1551781069-73a1da89e333?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80", hovered:false, route:"/printers"},
                
            ]
    }
  },
  methods:{
    goToRoute(a){
      this.$router.push(a)
    }
  }
}
</script>

<style scoped>
  .row{
    max-width: 100%;
  }
  .card{
    margin-bottom: 50px;
    margin-top: 50px;
    width: 70%;
    outline: none;
  }
  .card:hover img{
    transition: 1s;
    filter: brightness(10%);
  } 
  .card:hover .card-title{
    color: white;
    font-weight: 600;
    transition: 1s;
  }
</style>

