<template>
    <div>
        <h2>Lista de tares</h2>
        <input type="text" v-model="Bloc_notas" @keyup.enter="addTarea">
        <ul>
            <li v-for="(tarea, index) in Lista_vacia" :key="index">
                {{tarea}}
                <button @click="borrarTarea">borrar</button>
            </li>
        </ul>
        
    </div>
</template>

<script setup>
import {ref} from 'vue';
const Lista_vacia = ref([]);
const Bloc_notas = ref('');
const addTarea = () => {
    Lista_vacia.value.push(Bloc_notas.value);
    Bloc_notas.value = '';
}
const borrarTarea = (index) => {
    Lista_vacia.value.splice(index,1);
}
</script>

<style></style>