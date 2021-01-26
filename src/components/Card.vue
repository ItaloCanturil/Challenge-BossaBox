<template>
  <section class="card">
    <div class="card__container">
      <a href="#" class="container__title"><p>{{item.title}}</p></a>
      <button class="container__close" @click="addModal()">
        <svg class="svg-icon" viewBox="0 0 20 20">
          <path fill="none" d="M16.471,5.962c-0.365-0.066-0.709,0.176-0.774,0.538l-1.843,10.217H6.096L4.255,6.5c-0.066-0.362-0.42-0.603-0.775-0.538C3.117,6.027,2.876,6.375,2.942,6.737l1.94,10.765c0.058,0.318,0.334,0.549,0.657,0.549h8.872c0.323,0,0.6-0.23,0.656-0.549l1.941-10.765C17.074,6.375,16.833,6.027,16.471,5.962z"></path>
          <path fill="none" d="M16.594,3.804H3.406c-0.369,0-0.667,0.298-0.667,0.667s0.299,0.667,0.667,0.667h13.188c0.369,0,0.667-0.298,0.667-0.667S16.963,3.804,16.594,3.804z"></path>
          <path fill="none" d="M9.25,3.284h1.501c0.368,0,0.667-0.298,0.667-0.667c0-0.369-0.299-0.667-0.667-0.667H9.25c-0.369,0-0.667,0.298-0.667,0.667C8.583,2.985,8.882,3.284,9.25,3.284z"></path>
        </svg>
        Remove
      </button>
    </div>
    <p>{{item.description}}</p>
    <a href="#">{{item.link}}</a>
    <p>
      <span v-for="(tag, index) in formattedTags" :key="index">{{ `#${tag} ` }}</span>
    </p>
    <ModalRemove
      :opened-remove='openedRemove'
      @close-remove="closeModal()"
      @remove="$emit('removeCard')"
    />
  </section>
</template>

<script>
import ModalRemove from './ModalRemove'

export default {
  name: 'Card',

  data () {
    return {
      openedRemove: false
    }
  },

  props: {
    item: {
      type: Object,
      required: true
    }
  },

  components: {
    ModalRemove
  },

  computed: {
    formattedTags () {
      const tagsArray = this.item.tags.split(' ') // O ? diz para aplicação que pode não haver valor algum
      return tagsArray
    }
  },

  methods: {
    addModal () {
      this.openedRemove = true
    },
    closeModal () {
      this.openedRemove = false
    }
  }
}
</script>

<style>
 .card {
   background: #a4c3b2;
   border-radius: 10px;
   color: #fff;
   margin: 30px 0 15px;
   padding: 15px;
   width: 500px;
   max-width: 100vw;
 }

 .card__container {
   display: flex;
   justify-content: space-between;
 }

 .container__close {
   background-color: #e63946;
   border: 0;
   border-radius: 10px;
   color: #fff;
   cursor: pointer;
   padding: 5px;
 }

 .container__close:active {
   box-shadow: inset -3px black;
 }

 .svg-icon {
  width: 2em;
  height: 1em;
}

.svg-icon path,
.svg-icon polygon,
.svg-icon rect {
  fill: #f2f2f2;
}
</style>
