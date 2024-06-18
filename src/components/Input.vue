<template>
    <div class="input">
        <input type="text" placeholder="New task" v-model="note" @keyup.enter="addNote">
        <button @click="addNote">
            <Plus /> Add
        </button>
    </div>
    <div class="button">
        <div class="button-yellow" @click="$emit('clearCompleted')"><galachka/> Clear Completed</div>
        <div class="button-red" @click="$emit('clearAll')"><trashcan/> Clear All</div>
    </div>
</template>

<script setup>
import {useDataStore} from '../stores/data'
import { storeToRefs } from 'pinia'
import Plus from './icons/plus.vue'
import galachka from "./icons/galachka.vue"
import trashcan from './icons/trashcan.vue'
import {ref} from 'vue'

const emits = defineEmits(['clearAll'])
const data = useDataStore()
const { notes } = storeToRefs(data)
const note = ref('')

const addNote = () => {
    if(note.value){
    notes.value.push({
        id: Math.random().toString(16).slice(2),
        name:note.value,
        isReady: false,
    })
    note.value = ""
    }
}

</script>

<style scoped>
.input {
    display: flex;
    height: 40px;
}

.input input {
    border: 1px solid #707070;
    padding: 5px 10px;
    width: 100%;
}

.input button {
    background: rgb(70, 70, 250);
    color: white;
    font-weight: 500;
    padding: 5px 10px;
    border: none;
    width: 100px;
    cursor: pointer;
    transition: all .3s;
}

.input button:hover {
    color: rgb(70, 70, 250);
    background: white;
    box-shadow: 0 0 10px rgb(207 207 250 / 50%);
}
.button-yellow{
    background: orange;
  color: color;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  font-weight: 600;
  color: white;
  border: none;
  height: 40px;
  gap: 3px;
  cursor: pointer;
  transition: all .3s;
}
.button-yellow:hover {
  background: rgb(192, 150, 74);
}
.button-red{
    background: red;
    color: #fff;
    border: none;
    font-weight: 600;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 100px;
    padding: 5px 10px;
    gap: 3px;
    cursor:pointer;
    transition: all .3s;
}
.button-red:hover{
    background: rgb(170, 70, 70);
  }
.button{
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
    gap: 1px;
}
</style>