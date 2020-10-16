<template>
  <div class="quiz">
     <v-container>
      <v-row justify="center" align="center">
          <v-col sm="12" md="10" lg="10" cols="12">
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
                  <v-data-table
                    :headers="header"
                    :items= "participants"
                    :items-per-page= "all"
                    :hide-default-footer="true">
                  </v-data-table>                 
                </v-card-text>
                <v-card-actions>
                  
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
        {text: 'Handout', href: '#'},

        {text: 'Lösungen', href: '#'},

        {text: 'Fynns 3. Link', href: '#'}
      ],
    header: [
        {
          text: 'Teilnehmer',
          align: 'start',
          sortable: 'false',
          value: 'name',
        },
        {
          text: 'Punkte', value: 'score', 
        },
    ],
    participants: [
        {
          name: 'Fynn',
          score: '100',
        },
        {
          name: 'Robin', 
          score: '97',
        },
    ],
  }),
  methods: {

  },
  mounted(){
    axios.get(this.$store.backendServer + '/user')
    .then((response)=>{
      console.log(response.data);
    })
    .catch((err)=>{
      console.log(err);
    });
  }
}
</script>
