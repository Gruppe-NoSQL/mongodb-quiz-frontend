<template>
  <div class="quiz">
     <v-container>
      <v-row justify="center" align="center">
          <v-col sm="12" md="8" lg="8" cols="12">
            <v-card>
                <v-card-title primary-title>
                  <v-container class="blue darken-4" rounded>
                    <span class="headline white--text font-weight-black text-center">Ergebnis Seite</span>
                  </v-container>
                </v-card-title>
                <v-card-text>
                  <v-row justify="center">
                    <a v-for="(link, i) in links"
                      :key = i
                      :href = link.href
                      class="subheading font-weight-black mx-3"
                      target="_blank">
                        {{ link.text }}
                    </a>
                  </v-row><br/><br/>
                  <v-simple-table>
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-left">
                            Platzierung
                          </th>
                          <th class="text-left">
                            Name
                          </th>
                          <th class="text-left">
                            Punktzahl
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(item, i) in participants"
                          :key="item.username"
                        >
                          <td>{{ i + 1 }}</td>
                          <td>{{ item.username }}</td>
                          <td>{{ item.score }}</td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>                
                </v-card-text>
                <v-card-actions>
                  <v-col offset-md="8">
                      <v-btn
                      color="primary"
                      elevation="3"
                      large
                      v-on:click ="zurAuswertung()"
                    > Auswertung</v-btn>
                  </v-col>
                </v-card-actions>
            </v-card>
          </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data:() => ({
    links: [
        {text: 'Handout', href: 'https://github.com/Gruppe-NoSQL/nosql-quiz-handout'},

        {text: 'Lösungen', href: '#'},

        {text: 'Fynns 3. Link', href: '#'}
      ],
    participants: [
    ],
  }),
  methods: {
    zurAuswertung() {
      this.$router.push("/feedback");
    },

  },
  mounted(){
    let vm = this;
    axios.get(this.$store.state.backendServer + '/user')
    .then(function (response) {
      console.log(response.data);
      vm.participants = response.data;
      console.log(vm.participants);
    })
    .catch((err)=>{
      console.log(err);
    });
  }
}
</script>
