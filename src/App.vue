<template>
  <div>
    <header class="header">
      <div class="container">
        <h1>VUTTR</h1>
        <h2>Very Useful Tools to Remember</h2>
      </div>
    </header>
    <div class="container">
      <nav class="nav-search">
        <input type="search" name="search" id="search" class="nav-search__input">
        <label for="search">
          <button>search</button>
        </label>

        <button @click="addModal()">+ Add</button>
      </nav>

      <modalAdd/>

      <section class="card-field">
        <card/>
        <card/>
      </section>
    </div>
  </div>
</template>

<script>
import Card from './components/Card'
import modalAdd from './components/ModalAdd'

export default {
  components: {
    Card,
    modalAdd
  },
  data () {
    return {
      openedModal: false,
      form: {
        name: '',
        link: '',
        description: '',
        tags: ''
      }
    }
  },
  methods: {
    addModal() {
      this.openedModal = true
    },
    closeModal() {
      this.openedModal = false
    }
  }
}
</script>

<style>
*, ::after, ::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
  font-family: 'Source Sans Pro', sans-serif;
}

.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 700px;
  margin: 0 auto;
  position: relative;
}

.header {
  background:#353372;
  color: #fff;
  width: 100%;
  text-align: center;
  padding-bottom: 50px;
}

.nav-search {
  margin-top: -30px;
}

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
