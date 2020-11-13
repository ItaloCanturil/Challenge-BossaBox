<template>
  <section class="modal-add" v-if="openedModal == true">
    <div class="title">
      <h1>Add a new tool</h1>
      <button @click="closeModal()">
        <img src="assets/Icon-Close-2px@2x.png" alt="Close">
      </button>
    </div>
    <form class="form">
    <label for="form__name">Tool Name</label>
    <input type="text" class="form__name" v-model="name">
    <label for="form__link">Tool Link</label>
    <input type="text" class="form__link" v-model="link">
    <label for="form__description">Tool Description</label>
    <input type="text" class="form__description" v-model="description">
    <label for="form__tags">Tags</label>
    <input type="text" class="form__tags" v-model="tags">
    <button class="form__btn">Add Tool</button>
    </form>
  </section>
</template>

<script>
export default {
  name: 'modalAdd'
}
</script>

<style>

</style>