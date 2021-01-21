<template>
  <section class="modal" v-if="openedRemove === true" @click.self="$emit('close-remove')">
    <section class="modal-remove">
      <div class="remove__org">
        <h1 class="org__title">Remove this tool?</h1>
        <button class="org__btn" @click="$emit('close-remove')">
          <img class="btn__img" src="../assets/Icon-Close-2px.svg" alt="Close">
        </button>
      </div>
        <button @click="$smit('remove')" class="remove__btn">
          Remove
        </button>
    </section>
  </section>
</template>

<script>
export default {
  name: 'ModalRemove',

  props: {
    openedRemove: {
      type: Boolean,
      default: false
    }
  },
}
</script>

<style>
.modal {
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
}

.modal-remove {
  background: #f2f2f2;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 24px;
  width: 300px;
}

.remove__org {
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 5px;
}

.org__title {
  font-size: clamp(1rem, 1.5vw, 1.2rem);
}

.org__btn {
  border: 0;
  cursor: pointer;
}

.btn__img {
  width: 15pt;
  height: 15pt;
}

.remove__btn {
  background: rgb(211, 9, 9);
  border-radius: 8px;
  border: 0;
  padding: 10px;
}


</style>