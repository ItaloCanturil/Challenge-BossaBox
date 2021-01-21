<template>
  <section class="modal-remove">
    <div class="title">
      <h1>Remove this tool?</h1>
      <button @click="$emit('close')">
        <img src="assets/Icon-Close-2px@2x.png" alt="Close">
      </button>
    </div>
    
  </section>
</template>

<script>
export default {
  name: 'ModalRemove',

  props: {
    openedModal: {
      type: Boolean,
      default: false
    }
  },
}
</script>

<style>

</style>