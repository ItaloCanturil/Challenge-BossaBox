<template>
  <section class="card">
    <div class="card__container">
      <a href="#" class="container__title"><p>{{item.title}}</p></a>
      <button class="container__close" @click="removeCard()">Remove</button>
    </div>
    <p>{{item.description}}</p>
    <a href="#">{{item.link}}</a>
    <p>{{item.tags}}</p>
    <ModalRemove/>
  </section>
</template>

<script>
import ModalRemove from './ModalRemove'

export default {
  name: 'Card',
  
  props: {
    item: {
      type: Object,
      required: true
    }
  },

  components : {
    ModalRemove
  },

  methods: {
    removeCard () {
      this.$emit('removeCard', {
        id: this.item.id
      })
    }
  }

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

 .container__close {
   background-color: #e63946;
   border: 0;
   border-radius: 10px;
   cursor: pointer;
   padding: 5px;
 }

 .container__close:active {
   box-shadow: inset -3px black;
 }
</style>