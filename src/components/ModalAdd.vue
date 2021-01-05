<template>
  <section class="modal-add" v-if="openedModal == true">
    <div class="title">
      <h1>Add a new tool</h1>
      <button @click="$emit('close')">
        <img src="assets/Icon-Close-2px@2x.png" alt="Close">
      </button>
    </div>
    <section class="form">
      <label for="form__name">Tool name</label>
      <input type="text" class="form__name" v-model="toolName">
      <label for="form__link">Tool Link</label>
      <input type="text" class="form__link" v-model="link">
      <label for="form__description">Tool Description</label>
      <textarea class="form__description" v-model="description"></textarea>
      <label for="form__tags">Tags</label>
      <input type="text" class="form__tags" v-model="tags">
      <button class="form__btn" @click="addTool()">Add Tool</button>
    </section>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'modalAdd',

  data () {
    return {
      toolName: '',
      link: '',
      description: '',
      tags: '',
      info: null
    }
  },

  mounted () {
    axios
      .get('https://gitlab.com/bossabox/challenge-fake-api/tree/master')
      .then( response => {this.info = response})
  },

  props: {
    openedModal: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    addTool() {
      if(!this.toolName || !this.link || !this.description || !this.tags) return

      this.$emit('form', {
        toolName: this.toolName,
        link: this.link,
        description: this.description,
        tags: this.tags
      })

      this.toolName = ''
      this.link = ''
      this.description = ''
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

.form__name, .form__link, .form__tags {
  border-radius: 5px;
  border: none;
  padding: 5px;
  margin-bottom: 10px;
}

.form__description {
  max-height: 100px;
  max-width: 100%;
}

.form__btn {
  border-radius: 5px;
  border: none;
  width: 60%;
  margin: 0 auto;
  padding: 5px;
}
</style>
