<template>
<div class="sidebar">
    <h2>Barra Lateral</h2>
    <ul>
        <li><router-link to="/Contador">Contador</router-link></li>
        <li><router-link to="/ListaDeTareas">ListaDeTareas</router-link></li>
        <li><router-link to="/Registro">Registro</router-link></li>
    </ul>
</div>
</template>

<script>
import { RouterLink } from 'vue-router';

</script>

<style>
.sidebar{
    width: 200px;
    background-color: blue;
    padding: 20px;
}
</style>