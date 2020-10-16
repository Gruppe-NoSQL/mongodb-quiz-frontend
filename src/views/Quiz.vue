<template>
  <div class="quiz">
     <v-container>
      <v-row justify="center" align="center">
          <v-col sm="12" md="6" cols="12">
            <v-card>
                <v-card-title primary-title>
                  <v-container class="blue darken-4" rounded>
                   <span class="headline white--text font-weight-black text-center">NoSQL</span>
                  </v-container>
                </v-card-title>
                <v-card-text>
                  <h2>Frage</h2>
                  <p>{{ counter+1 }}/6</p>
                </v-card-text>
                <v-divider></v-divider>
                <br />
                <v-radio-group v-model="answer">
                  <v-radio
                    label="Antwort1"
                    :value="1"
                    class="ml-4"
                  ></v-radio>
                  <v-radio
                    label="Antwort2"
                    :value="2"
                    class="ml-4"
                  ></v-radio>
                  <v-radio
                    label="Antwort3"
                    :value="3"
                    class="ml-4"
                  ></v-radio>
                  <v-radio
                    label="Anwort4"
                    :value="4"
                    class="ml-4"
                  ></v-radio> 
                </v-radio-group>
                <br />
                <label>{{ result }}</label>
                <span>Picked: {{ answer }}</span>
                <br />
                <v-card-actions>
                  <v-col offset-md="8">
                      <v-btn
                      color="primary"
                      elevation="3"
                      large
                      v-on:click="weiterButton(); textButton(); resultButton(); checkedBox()"
                    >{{ textB }}</v-btn>
                  </v-col>
                </v-card-actions>
            </v-card>
          </v-col>
      </v-row>
    </v-container>
  </div>
</template>


<script>

export default {
  data:() => ({
    counter: 0,
    textB: 'Weiter',
    result: [],
    answer: ' ',
    Antwort4: ' ',
  }),

  methods: {
    weiterButton() {
      this.counter++;
    },
    textButton() {
      if (this.counter > 4) {
        this.textB='Abschicken'
      }
    },
    resultButton() {
      if (this.counter > 5) {
        this.$router.push('/result')
      }
    },
    checkedBox(){
      if (this.answer=='1'){
        this.result.push("a")
        this.answer=' '
        //senden & array löschen
      }
      if (this.answer=='2'){
        this.result.push("b")
        this.answer=' '
      }
      if (this.answer=='3'){
        this.result.push("c")
        this.answer=' '
      }
      if (this.answer=='4'){
        this.result.push("d")
        this.answer=' '
      }

    },
    sendAnswer(){
        //
      }
    },
  }



</script>