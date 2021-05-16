<template>
    <div>
        <b-container>
            <b-row>
                <b-col cols="12" class="text-left">
                    <b-form>
                        <b-form-group id="input-group-1" label="Email:" label-for="input-1" description="No compartiremos tu email con otra persona" :model="formLabelAlign">
                            <b-form-input id="input-1" type="email" placeholder="Ejemplo: pedrito@mail.com" v-model="formLabelAlign.user" required></b-form-input>
                        </b-form-group>
                    </b-form>
                    <b-form>
                        <b-form-group id="input-group-2" label="Contraseña:" label-for="input-1" description="No compartiremos tu contraseña con otra persona">
                            <b-form-input id="input-2" type="password" v-model="formLabelAlign.password" required></b-form-input>
                        </b-form-group>
                        <b-button @click="login({ formLabelAlign })"
                        variant="primary">Ingresar</b-button>
                    </b-form>
                </b-col>
            </b-row>
        </b-container>
    </div>
                
</template>
<script>
import { mapActions  } from "vuex";

export default {
  data() {
      return {
          formLabelAlign: {
            user: "",
            password: ""
        }
      }
  },
   methods: {
      ...mapActions(["login"]),
   },
}
</script>
<style scoped>
    .container{
        width: 460px;
        border: 1px solid #41b883;
        padding: 35px;
        border-radius: 15px;
    }
</style>