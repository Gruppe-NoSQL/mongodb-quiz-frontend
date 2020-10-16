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
                  <p>{{ f+1 }}/6</p>
                </v-card-text>
                <v-divider></v-divider>
                <br />
                <v-radio-group>
                  <v-radio
                    v-for="n in 4"
                    :key="n"
                    :label="`Antwort ${n}`"
                    :value="n"
                    class="ml-4"
                  ></v-radio>
                </v-radio-group>
                <br />
                <br />
                <v-card-actions>
                  <v-col offset-md="8">
                      <v-btn
                      color="primary"
                      elevation="3"
                      large
                      v-on:click="weiterButton(); textButton(); resultButton()"
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
    f: 0,
    textB: 'Weiter',
    result: ' '
  }),

  methods: {
    weiterButton() {
      this.f++;
    },
    textButton() {
      if (this.f > 4) {
        this.textB='Abschicken'
      }
    },
    resultButton() {
      if (this.f > 5) {
        this.$router.push('/result')
      }
    }
  }
}


</script>