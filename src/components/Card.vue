<template>
  <section class="card" v-bind="form">
    <div class="card__container">
      <a href="#" class="container__title">Test</a>
      <button class="container__close">Remove</button>
    </div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur laboriosam quis quaerat temporibus delectus, dicta sequi amet adipisci modi sapiente explicabo odio debitis at eius corporis? Inventore distinctio obcaecati ratione.</p>
    <p>#test #test #test #test #test</p>
  </section>
</template>

<script>
export default {
  name: 'Card'
}
</script>

<style>
 .card {
   border: 1px solid black;
   border-radius: 10px;
   margin: 30px 0 15px;
   padding: 15px;
 }

 .card__container {
   display: flex;
   justify-content: space-between;
 }
</style>