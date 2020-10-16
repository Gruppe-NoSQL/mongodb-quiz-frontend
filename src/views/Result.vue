<template>
  <div class="quiz">
     <v-container>
      <v-row justify="center" align="center">
          <v-col sm="12" md="10" lg="10" cols="12">
            <v-card>
                <v-card-title primary-title>
                  <v-container>
                    <span class="headline">Ergebnis Seite</span>
                  </v-container>
                </v-card-title>
                <v-card-text>
                  <v-list>
                  <v-list-item class="mx-aut0">
                    <v-list-item-content>
                        <a v-for="(link, i) in links"
                        :key = i
                        :href = link.href
                        target="_blanc">
                          <v-list-item-title>
                            {{ link.text }} <br/><br/>
                          </v-list-item-title>
                        </a>
                    </v-list-item-content>
                  </v-list-item>
                  </v-list>
                  <v-data-table
                    :headers="header"
                    :items= "participants"
                    :items-per-page= "all"
                    :hide-default-footer="true"
                    v-onhover>

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
export default {
  data:() => ({
    links: [
        {text: 'Handout', href: '#'},

        {text: 'Lösungen', href: '#'},

        {text: 'Fynns 3. Link', href: '#'}
      ],
    header: [
        {
          text: 'Participants',
          align: 'start',
          sortable: 'false',
          value: 'name',
        },
        {
          text: 'Score', value: 'score',
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
}
</script>
