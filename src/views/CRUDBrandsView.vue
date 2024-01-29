<template>
  <div id="crud-brands" class="container">
    <h1>CRUD de Marcas</h1>
    <div class="modal fade" id="regBrandModal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Registrar Marca</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form action="/store" method="post">
            <label for="name">Nombre:</label>
            <input type="text" class="form-control" name="name" required>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" class="btn btn-primary">Aceptar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#regBrandModal">Registrar Marca</button>
      <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(brand, index) in this.brands" :key="index">
          <td>{{ brand.name }}</td>
          <td>{{ brand.name }}</td>
        </tr>
      </tbody>
    </table>
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
#crud-brands{
    margin-top: 5%;
  }
</style>

<script>
import axios from 'axios';

  export default{
    name: 'brands',
    data(){
     return {
      brands: []
     } 
    },
    mounted(){
      this.getBrands();
    },
    methods: {
      getBrands(){
        axios.get('http://127.0.0.1:8000/api/brands').then(res=>{
          this.brands = res.data.brands
          console.log(this.brands)
        })
      }
    }
  }
</script>
