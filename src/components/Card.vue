<template>
  <section class="card">
    <div class="card__container">
      <a href="#" class="container__title"><p>{{item.title}}</p></a>
      <button class="container__close" @click="removeCard()">Remove</button>
    </div>
    <p>{{item.description}}</p>
    <a href="#">{{item.link}}</a>
    <p>{{item.tags}}</p>
  </section>
</template>

<script>

export default {
  name: 'Card',

  // data () {
  //   return {
  //     id: item.id
  //   }
  // },
  
  props: {
    item: {
      type: Object,
      required: true
    },

    methods: {
      removeCard () {
        this.$emit('id', {
          id: this.item.id
        })
      }
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
</style>