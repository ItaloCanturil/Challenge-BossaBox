<template>
  <section class="modal" v-if="openedModal == true" @click.self="$emit('close')">
    <section class="modal__add">
      <div class="title">
        <h1>Add a new tool</h1>
        <button class="add__btn" @click="$emit('close')">
          <img class="btn__close" src="../assets/Icon-Close-2px.svg" alt="Close">
        </button>
      </div>
      <section class="form">
        <label for="form__name">Tool name</label>
        <input type="text" class="form__name" v-model="title">
        <label for="form__link">Tool Link</label>
        <input type="text" class="form__link" v-model="link">
        <label for="form__description">Tool Description</label>
        <textarea class="form__description" v-model="description"></textarea>
        <label for="form__tags">Tags</label>
        <input type="text" class="form__tags" v-model="tags">
        <button class="form__btn" @click="addTool()">Add Tool</button>
      </section>
    </section>
  </section>
</template>

<script>
import axiosInstance from '../../services/api'

export default {
  name: 'modalAdd',

  data () {
    return {
      title: '',
      link: '',
      description: '',
      tags: '',
      info: null
    }
  },

  mounted () {
    axiosInstance
      .get('/tools')
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
      if(!this.title || !this.link || !this.description || !this.tags) return

      this.$emit('form', {
        title: this.title,
        link: this.link,
        description: this.description,
        tags: this.tags
      })

      this.title = ''
      this.link = ''
      this.description = ''
      this.tags = ''
    }
  }
}
</script>

<style scoped>
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

.modal__add {
  background: rgb(112, 112, 112);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 450px;
  width: 450px;
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
  cursor: pointer;
  width: 60%;
  margin: 0 auto;
  padding: 5px;
}

.add__btn {
  border: 0;
  cursor: pointer;
}


.btn__close {
  height: 20pt;
  width: 20pt;
}
</style>
