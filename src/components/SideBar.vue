<template>
<div class="sidebar">
    <h2>Bienvenido</h2>
    <h3>nombre:{{ nombre }}</h3>
    <h3>email:{{email}}</h3>
    <ul>
        <li><router-link to="/Contador">Contador</router-link></li>
        <li><router-link to="/ListaDeTareas">ListaDeTareas</router-link></li>
        <li><router-link to="/Registro">Registro</router-link></li>
    </ul>
</div>
</template>

<script setup>
import { useRegistrarStore } from '@/Modules/Registro/Stores/RegistrarStore';
import {ref, watch} from 'vue';

const RegistrarStore = useRegistrarStore();
const nombre = ref(RegistrarStore.nombre.value);
const email = ref(RegistrarStore.email.value);
watch(() => RegistrarStore.nombre, (newValue) =>{
    nombre.value = newValue;
});
watch(() => RegistrarStore.email, (newValue) => {
    email.value = newValue;
})
</script>

<style>
.sidebar{
    width: 200px;
    background-color: blue;
    padding: 20px;
}
</style>