<template>
  <section class="card">
    <div class="card__container">
      <a href="#" class="container__title"><p>{{item.title}}</p></a>
      <button class="container__close" @click="$emit('closecard')">Remove</button>
    </div>
    <p>{{item.description}}</p>
    <a href="#">{{item.link}}</a>
    <p>{{item.tags}}</p>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Card',
  
  props: {
    item: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      info: null
    }
  },

  mounted () {
    axios
      .get('http://localhost:3000/tools')
      .then( response => {this.info = response.data})
  },

}
</script>

<style>
 .card {
   border: 1px solid black;
   border-radius: 10px;
   margin: 30px 0 15px;
   padding: 15px;
   min-width: 350px;
 }

 .card__container {
   display: flex;
   justify-content: space-between;
 }
</style>