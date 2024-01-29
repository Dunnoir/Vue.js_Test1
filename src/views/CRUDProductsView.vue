<template>
  <div id="crud-products" class="container">
    <h1>CRUD de Productos</h1>
    <div class="modal fade" id="regProductModal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Registrar producto</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form action="/store" method="post">
            <label for="name">Nombre:</label>
            <input type="text" class="form-control" name="name" required>
            <label for="name">Descripción:</label>
            <input type="text" class="form-control" name="description" required>
            <label for="name">Precio:</label>
            <input type="text" class="form-control" name="price" required>
            <label for="name">Stock:</label>
            <input type="text" class="form-control" name="stock" required>
            <label for="name">Marca:</label>
            <select class="form-select" name="brand_id" required>
              <option selected>Seleccione</option>
              <option value="1">Uno</option>
              <option value="2">Dos</option>
              <option value="3">Tres</option>
            </select>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" class="btn btn-primary">Aceptar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#regProductModal">Registrar Producto</button>
      <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Descripción</th>
          <th scope="col">Precio</th>
          <th scope="col">Stock</th>
          <th scope="col">Marca</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in this.products" :key="index">
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.description }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.stock }}</td>
          <td>{{ product.brand_id }}</td>
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
#crud-products{
    margin-top: 5%;
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
