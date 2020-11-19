<template>
  <section class="card">
    <div class="card__container">
      <a href="#" class="container__title"><p>{{item.name}}</p></a>
      <button class="container__close" @click="$emit('closecard')">Remove</button>
    </div>
    <p>{{item.description}}</p>
    <p>{{item.link}}</p>
    <p>{{item.tags}}</p>
  </section>
</template>

<script>
export default {
  name: 'Card',
  
  props: {
    item: {
      type: Object,
      required: true
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