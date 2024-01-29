<template>
  <div id="products" class="container">
    <h1>Productos</h1>
    <div class="products row">
      <div v-for="(product, index) in this.products" :key="index" class="card col" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{product.name}}</h5>
          <p class="card-text"> US${{ product.price }}</p>
          <p class="card-text">{{ product.description }}</p>
          <a href="#" class="btn btn-primary">Comprar</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
#products{
    margin-top: 5%;
  }
.card{
  margin: 20px;
}
</style>

<script>
import axios from 'axios';

  export default{
    name: 'products',
    data(){
     return {
      products: []
     } 
    },
    mounted(){
      this.getProducts();
    },
    methods: {
      getProducts(){
        axios.get('http://127.0.0.1:8000/api/products').then(res=>{
          this.products = res.data.products
          console.log(this.products)
        })
      }
    }
  }
</script>
