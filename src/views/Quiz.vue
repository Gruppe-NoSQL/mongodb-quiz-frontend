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
                  <p>1/6</p>
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
                  <v-col offset-md="9">
                      <v-btn
                      color="primary"
                      elevation="3"
                      large
                    >WEITER</v-btn>
                  </v-col>
                </v-card-actions>
            </v-card>
          </v-col>
      </v-row>
    </v-container>
  </div>
</template>
