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
        <label for="search">
        <input type="search" name="search" id="search" class="nav-search__input">
          <button class="btn--search">search</button>
        </label>

        <button @click="addModal()" class="btn--add">+ Add</button>
      </nav>

      <ModalAdd
        :openedModal='openedModal'
        @close="closeModal()"
        @form='addItem'
      />

      <section class="card-field">
        <card 
          :item="items"
          v-for="items in tools"
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
      tools: [],
      articleId: null
    }
  },

  mounted () {
    axios
      .get('http://localhost:3000/tools')
      .then( response => {this.tools = response.data})
  },

  methods: {
    addModal() {
      this.openedModal = true
    },
    closeModal() {
      this.openedModal = false
    },
     async addItem(items) {
      const response = await axios
          .post('http://localhost:3000/tools', items)

      this.tools = [...this.tools, response.data]
    },
     async removeItem(item) {
      await axios.delete('http://localhost:3000/tools/' + item.id)
      const newTools = this.tools
      const toolRemoved = newTools.findIndex(tool => tool.id === item.id)
      if( toolRemoved !== -1) {
        newTools.splice(toolRemoved, 1);
        this.tools = [...newTools]
      }
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
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: -45px;
}

.nav-search__input {
  border: 0;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  padding: 5px;
}

.btn--search {
  background: #ffb703;
  border: 0;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  cursor: pointer;
  padding: 5px;
}

.btn--add {
  background: #12a454;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  padding: 5px;
}
</style>
