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
        <card :item="items" v-for="items in item" :key="items" @closecard='removeItem()'/>
      </section>
    </div>
  </div>
</template>

<script>
import Card from './components/Card'
import ModalAdd from './components/ModalAdd'

export default {
  components: {
    Card,
    ModalAdd
  },
  data () {
    return {
      openedModal: false,
      item: []
    }
  },
  methods: {
    addModal() {
      this.openedModal = true
    },
    closeModal() {
      this.openedModal = false
    },
    addItem(items) {
      this.item.unshift(items)
    },
    removeItem() {
      this.item.splice(this.item, 1)
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
</style>
