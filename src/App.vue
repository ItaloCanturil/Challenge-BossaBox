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

      <ModalAdd
        :openedModal='openedModal'
        @close="closeModal()"
        @form='addItem'
      />

      <section class="card-field">
        <card 
          :item="items"
          v-for="items in info"
          :key="items"
          @removeCard='removeItem($event)'
         />
      </section>
    </div>
  </div>
</template>

<script>
import Card from './components/Card'
import ModalAdd from './components/ModalAdd'
import axios from 'axios'

export default {
  components: {
    Card,
    ModalAdd
  },

  data () {
    return {
      openedModal: false,
      removeModal: false,
      info: null,
      articleId: null
    }
  },

  mounted () {
    axios
      .get('http://localhost:3000/tools')
      .then( response => {this.info = response.data})
  },

  methods: {
    addModal() {
      this.openedModal = true
    },
    closeModal() {
      this.openedModal = false
    },
    addItem(items) {
      axios
          .post('http://localhost:3000/tools', items)
          .then( response => this.articleId = response.data.id)
    },
    removeItem(id) {
      axios
          .delete('http://localhost:3000/tools/' + id.id)
          .then( response => console.log(response))
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
  height: 25vh;
  width: 100%;
  text-align: center;
}

.nav-search {
  margin-top: -30px;
}

.nav-search__input {
  border: 0;
  border-radius: 5px;
  margin-right: 5px; 
  padding: 5px;
}
</style>
