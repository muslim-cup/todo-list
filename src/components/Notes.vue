<template>
  <div class="card">
    <div class="text" @click="$emit('changeReady')" :class="{'is-ready': isReady}" >{{  note }}</div>
    <button class="btn" @click="$emit('delete')" ><deleter/> </button>
  </div>
</template>
<script setup>
import deleter from './icons/deleter.vue'
const emits = defineEmits(['delete'])
const props = defineProps({
  note: String,
  isReady: Boolean
})
</script>
<style>
.btn{
  background: red;
  border:none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  cursor: pointer;
  transition: all 0.3s;
  height: 40px;
}
.btn:hover {
  background-color: rgb(192, 68, 68)
}
.card{
  display: flex;
}
.text{
  background: #f2f2f2;
  width:100%;
  padding: 8px 10px;
  color: black;
  font-weight: 400;
  font-size: 14px;
  border: 1px solid #d9d9d9;
  border-right: none;
  cursor:pointer;
  transition: all .3s;
}

.is-ready{
  text-decoration: line-through;
  background-color: rgb(106, 244, 106);
}
</style>