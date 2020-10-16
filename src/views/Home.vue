<template>
  <div class="home">
    <v-container>
      <v-row justify="center" align="center">
          <v-col sm="12" md="8" lg="8" cols="12">
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
                    lg="5"
                  >
                    <v-form ref="form" v-model="isValid" lazy-validation>
                      <v-text-field
                        label="Vorname Nachname"
                        v-model="username"
                        :rules="requiredAndlengthRule"
                        required
                      ></v-text-field>
                    </v-form>
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
import axios from 'axios';

export default {
  data: function () {
    return {
      username: '',
      isValid: true,
      requiredAndlengthRule: [
        value => !!value || 'Bitte gib deinen Namen ein um fortzufahren',
        value => value.length>=6 || 'Der Name muss mindestens 6 Zeichen haben'
      ]
    }
  },
  methods: {
    startQuiz: function(){
      //validate form
      if(this.$refs.form.validate()) {
        //retrive uuid from localStorage
        let deviceId = localStorage.getItem('deviceId');

        //if client has no deviceId gernate uuid and safe to local storage
        if(!deviceId){
          deviceId = uuid.v4();
          localStorage.setItem('deviceId', deviceId);
        }

        //prepare request payload
        let payload = {
          'username': this.username,
          'deviceId': deviceId
        }
        
        //send request to the server
        axios.post(this.$store.state.backendServer + '/user', payload)
        .then(()=>{
          this.$router.push('/quiz');
        })
        .catch((err)=>{
          console.log(err);
        });
      }
    }
  },
  mounted(){
  }
}
</script>
