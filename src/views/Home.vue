<template>
  <div class="home">
    <v-container>
      <v-row justify="center" align="center">
          <v-col sm="12" md="6" cols="12">
            <v-card>
                <v-card-title primary-title>
                  <v-container>
                    <span class="headline">Name eingeben und Quiz starten</span>
                  </v-container>
                </v-card-title>
                <v-card-text>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <form>
                      <v-text-field
                        label="Vorname Nachname"
                        v-model="username"
                        :rules="requiredRule"
                      ></v-text-field>
                    </form>
                  </v-col>
                </v-card-text>
                <v-card-actions>
                  <v-container class="mt-0">
                    <v-btn
                      depressed
                      color="primary"
                      v-on:click="startQuiz"
                    >
                      Quiz starten
                    </v-btn>
                    
                  </v-container>
                </v-card-actions>
            </v-card>
          </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { uuid } from 'vue-uuid';

export default {
  data: function () {
    return {
      username: '',
      requiredRule: [
        value => !!value || 'Dieses Feld wird benötigt'
      ]
    }
  },
  methods: {
    startQuiz: function(){
      let deviceId = localStorage.getItem('deviceId');

      if(!deviceId){
        deviceId = uuid.v4();
        localStorage.setItem('deviceId', deviceId);
      }

      console.log(deviceId);
      console.log(this.username)
      this.$router.push('/quiz');
    }
  },
  mounted(){
    console.log(this.$store.state.backendServer)
  }
}
</script>
