<template>
<div class="sidebar">
    <h2>Bienvenido</h2>
    <h3>nombre:{{ RegistrarStore.nombre }}</h3>
    <h3>email:{{RegistrarStore.email}}</h3>
    <ul>
        <li><router-link to="/Contador">Contador</router-link></li>
        <li><router-link to="/ListaDeTareas">ListaDeTareas</router-link></li>
        <li><router-link to="/Registro">Registro</router-link></li>
        <li><router-link to="/calcular">Calcular</router-link></li>
    </ul>
</div>
</template>

<script setup>
import { useRegistrarStore } from '@/Modules/Registro/Stores/RegistrarStore';

const RegistrarStore = useRegistrarStore();
</script>

<style>
.sidebar{
    width: 200px;
    background-color: blue;
    padding: 20px;
}
</style>