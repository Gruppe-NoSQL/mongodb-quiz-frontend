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
                    <v-text-field
                      label="Vorname Nachname"
                    ></v-text-field>
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
      count: 0
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
    }
  },
  mounted(){
    console.log(this.$store.state.backendServer)
  }
}
</script>
