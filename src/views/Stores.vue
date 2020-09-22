<template>
  <b-container>
    <b-row>
      <b-col cols="6" v-for="shop in stores" :key="shop.storeName">
          <b-card overlay :img-src="shop.storeLogo" img-alt="overlay-image" img-height=180 
              @mouseover="shop.hovered = true" 
              @mouseleave="shop.hovered = false"
              v-b-modal="shop.storeName"> 
              <b-card-title class="my-5" v-if="shop.hovered">
              {{shop.storeName}}
              </b-card-title>
          </b-card>
          <b-modal centered :id="shop.storeName" header-bg-variant="dark" body-bg-variant="dark" body-text-variant="light" footer-bg-variant="dark" ok-title="See Products" cancel-title="Web Location" @cancel="goToStorePage(shop.storeUrl)" @ok="goToRoute(shop.route)">
            <div slot="modal-header">
              <b-img class="modalImage" width="470%" height="200%" :src="shop.storeLogo"></b-img>
            </div>
            <div>{{shop.storeInfo}}</div>
          </b-modal>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data(){
    return{
      stores:[
        {storeName: 'Instar Informatika', 
        storeLogo:require('../assets/instar-logo.jpg'), route:'/instar',
        storeInfo:`Od svog osnivanja 2008. godine, tvrtka Instar informatika je jedan od lidera na tržištu IT opreme. Od male obiteljske tvrtke, Instar je izrastao u jednu od najperspektivnijih i najbrže rastućih domaćih trgovina informatičkom opremom. Proteklih godina smo naučili nešto i o vašim očekivanjima. Djelatnici Instar informatike svjesni su da naš uspjeh ovisi o vašem zadovoljstvu našim radom, stoga konstantno učimo i ulažemo u nova znanja. Otvoreni smo za sve vaše ideje i očekivanja. Zahvalni smo za svaku korisnu primjedbu kako raditi bolje. Instar se etablirao kao tvrtka koja je među prvima ponudila najpotpuniji specijalizirani asortiman proizvoda, definirala napredne oblike komunikacije sa kupcima i pokrenula online kupovinu. Tvrtka trenutno broji preko 50 zaposlenih.`,
        storeUrl:'https://www.instar-informatika.hr/',
        hovered: false,
        },
        {storeName: 'Links', 
        storeLogo:require('../assets/links-logo.jpeg'), route:'/links', 
        storeInfo:"Links d.o.o želi ponajprije zahvaliti svim onima koji su nam u proteklom periodu pružili povjerenje. Nadamo se da smo barem dijelom uspjeli opravdati Vaša očekivanja te Vam pomoći u odabiru informatičkog rješenja primjerenog Vašim zahtjevima. Tvrtka smo sa 15+ godišnjim iskustvom, koja se ističe kvalitetnom paletom proizvoda, brzom uslugom, originalnim rješenjima te stručnim kadrom. Poslovanje tvrtke bazira se na proizvodnji i prodaji računala te računalnih komponenti.",
        storeUrl:"https://www.links.hr/hr/",
        hovered: false},
        {storeName: 'HGSPOT', 
        storeLogo:require('../assets/hgspot-logo.png'), 
        route:'/hgspot', 
        storeInfo:"U HGSPOT informatici bavimo se prodajom raznovrsne informatičke opreme. U ponudi ćete naći računalne komponente, stolna i prijenosna računala, smartphone, tablete i razne dodatke za iste, periferiju, kamere, e-cigarete, fotoaparate te cjelokupan Apple asortiman i slično. HGSPOT je ime poznato odavno i većinu asocira na nabavu svog prvog računala i na prve korake u ITu. Trudimo se raznovrsnim izborom, najnovijim asortimanom i stručnim kadrom zadovoljiti različite potrebe naših kupaca. Od poznatih brandova računalne opreme uvijek biramo one najkvalitetnije i provjerene, tako da ćete kod nas naći Asus, Acer, Lenovo, HP, Western Digital, Logitech,  Zalman, Corsair, Intel, AMD, Samsung, LG i mnoge druge. Možemo se i pohvaliti kako smo kontinuiranim educiranjem svog osoblja postigli i to da smo proglašeni Authorised Reseller–om Apple proizvoda. Tako da kod nas možete i očekivati Dan Apple proizvoda kojemu se svi jako vesele i željno iščekuju. Kako volimo djelovati proaktivno uvijek pokušavamo naći nove i zanimljive načine približavanja ITa našim kupcima. Tako se možemo pohvaliti kako smo Hrvatskoj predstavili prvi hrvatski smartphone kao i 3D printer. Osim toga, otvaranjem novih tržišnih niša nastojimo povećati obujam poslovanja te smo tako u ponudu uvrstili i leasing računalne opreme za pravne osobe.",
        storeUrl:"https://www.hgshop.hr/",
        hovered: false}
      ]
    }
  },
  methods:{
    goToStorePage(a){
      window.open(a)
    },
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
  .modalImage{
    object-fit: cover;
  }
  >>>.modal-content footer{
    justify-content: space-between;
  }
  >>>.modal-content footer button{
    background-color: inherit;
    border: none;
  }
</style>