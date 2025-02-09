import { defineStore } from "pinia";
import { ref } from "vue";

export const useRegistrarStore = defineStore('registrar',() => {
    const nombre = ref('');
    const email = ref('');
    const GuardarRegistro = (nombreFormulario, emailFormulario) => {
        nombre.value = nombreFormulario;
        email.value = emailFormulario;
    }
    return {nombre,email, GuardarRegistro}
})