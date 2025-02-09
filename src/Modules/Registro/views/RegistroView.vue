<template>
    <div>
        <h2>Formulario de Registro</h2>
        <Form :validation-schema="schema" @submit="onSubmit">
            <div>
                <label for="nombre">Nombre</label>
                <Field v-model="nombre" type="text" name="nombre" id="nombre" placeholder="Ingrese su nombre"/>
                <ErrorMessage name="nombre"></ErrorMessage>
            </div>
            <div>
                <label for="correo">Correo</label>
                <Field v-model="email" type="email" name="email" id="correo" placeholder="Ingrese su email"/>
                <ErrorMessage name="email"></ErrorMessage>
            </div>
            <div>
                <button type="submit">Registrar</button>
            </div>
        </Form>
    </div>
</template>

<script setup>
import {Form, Field, ErrorMessage} from 'vee-validate';
import {schema} from '../schemas/ValidationSchema';
import { useRegistrarStore } from '../Stores/RegistrarStore';
import {ref} from 'vue';

const RegistrarStore = useRegistrarStore();

const nombre = ref('');
const email = ref('');

const onSubmit = () => {
    RegistrarStore.GuardarRegistro(nombre.value, email.value);
    console.log('Se ha enviado el formulario');
}
</script>

<style scoped>
.form{
    margin-bottom: 10px;
}
</style>


