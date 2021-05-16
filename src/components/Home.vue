<template>
    <div>
        <h1>Bienvenido</h1>
        <p>Para salir del home, favor haga click en el botón debajo</p>
            <b-form>
               <b-button variant="primary" @click="cerrar()">Cerrar Sesión</b-button>
            </b-form>
    </div>
</template>

<script>
import { mapActions  } from "vuex";

export default {
    name: "Home",
    methods: {
      ...mapActions(["cerrar"]),
   },
}
</script>
