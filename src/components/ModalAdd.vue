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
      <input type="text" class="form__name" v-model="toolName">
      <label for="form__link">Tool Link</label>
      <input type="text" class="form__link" v-model="link">
      <label for="form__description">Tool Description</label>
      <input type="text" class="form__description" v-model="description">
      <label for="form__tags">Tags</label>
      <input type="text" class="form__tags" v-model="tags">
      <button class="form__btn" @click="addTool()">Add Tool</button>
    </form>
  </section>
</template>

<script>
export default {
  name: 'modalAdd',
  forms: {
    toolName: '',
    link: '',
    description: '',
    tags: ''
  },
  item: [],

  props: {
    openedModal: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    closeModal() {
      this.openedModal = false
    },
    addTool() {
      if(!this.toolName, !this.link, !this.description, !this.tags) return

      console.log(this.item.unshift(this.toolName, this.link, this.description, this.tags))

      this.toolName = '',
      this.link = '',
      this.description = '',
      this.tags = ''
    }
  }
}
</script>

<style>
.modal-add {
  background: rgb(112, 112, 112);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50vh;
  position: absolute;
  width: 100%;
}

.title {
  display: flex;
  justify-content: space-between;
  width: 90%;
}

.form {
  display: flex;
  flex-direction: column;
  width: 90%;
}
</style>
