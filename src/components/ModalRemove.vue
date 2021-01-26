<template>
  <section class="modal" v-if="openedRemove === true" @click.self="$emit('close-remove')">
    <section class="modal-remove">
      <div class="remove__org">
        <h1 class="org__title">Remove this tool?</h1>
        <button class="org__btn" @click="$emit('close-remove')">
          <svg class="btn__img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61.414 61.42"><g transform="translate(-568.793 -714.793)"><path class="a" d="M80,20.005l-60,60m60,0L20,20" transform="translate(549.501 695.5)"/></g></svg>
        </button>
      </div>
        <button class="remove__btn" @click="$emit('remove')">
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
  }
}
</script>

<style scoped>
.modal {
  background: rgba(0, 0, 0, 0.8);
  color: #0b090a;
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
  fill: #0b090a;
  stroke:#02040f;
  stroke-width: 4px;
  width: 15pt;
  height: 15pt;
}

.remove__btn {
  background: rgb(211, 9, 9);
  border-radius: 8px;
  border: 0;
  cursor: pointer;
  padding: 10px;
}

</style>
