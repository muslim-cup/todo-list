<template>
    <div class="main">
        <div class="wrapper">
            <div class="main__body">
                <h1>Tasks</h1>
                <Input @clear-all="notes = []" @clear-completed="clearCompleted(notes.isReady)" />
                <div>
                <Notes class='input-text' 
                :isReady="note.isReady"
                :note="note.name" 
                v-for="note in notes" 
                :key="note.id"
                @delete="deleteAll(id)"
                @change-ready="note.isReady = !note.isReady"
                />
            </div>
         </div>
      </div>
    </div>
</template>

<script setup>
import {useDataStore} from '../stores/data'
import { storeToRefs } from 'pinia'
import Input from '../components/Input.vue'
import Notes from '../components/Notes.vue'

const data = useDataStore()
const { notes } = storeToRefs(data)

const deleteAll = (id) => {
    const defIndex = notes.value.findIndex((el) => el.id === id)

    notes.value.splice(defIndex, 1)
}

const clearCompleted = () => notes.value = notes.value.filter((notes) => notes.isReady === false)
</script>

<style scoped>
.main {
    background: aquamarine;
}

.wrapper {
    min-width: 100vw;
    min-height: 100vh;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.main__body {
    width: 100%;
    max-width: 600px;
    padding: 20px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px #00000021;
}

.main h1 {
    font-weight: 600;
    color: black;
    margin-bottom: 20px;
}
.input-text{
    margin-top: 15px;
    transition: all .3s;
}
</style>