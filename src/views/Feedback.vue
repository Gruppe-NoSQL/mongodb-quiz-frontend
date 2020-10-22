<template>
    <div class="feedback">
        <v-container>
            <v-row justify="center" align="center">
                <v-col sm="12" md="12" lg="12" cols="12">
                    <v-card>
                        <v-card-title primary-title>
                            <v-container class="blue darken-4" rounded>
                                <span class="headline white--text font-weight-black text-center">NoSQL - Auswertung</span>
                            </v-container>
                        </v-card-title>
                        <v-card-text>
                            <h2>Frage</h2>
                                <p>{{ page+1 }}/ {{ this.fragen.length }}</p>
                            <h2>{{ aktFrage }}</h2>
                        </v-card-text>
                        <v-divider></v-divider>
                        <br />
                        <v-radio-group disabled> 
                            <v-radio
                            :label="radio[0].inhalt"
                            :value="1"
                            :v-model="radio[0].answer"
                            :class="radio[0].class"
                            ></v-radio>
                            <v-radio
                            :label="radio[1].inhalt"
                            :value="2"
                            :v-model="radio[1].answer"
                            :class="radio[1].class"
                            ></v-radio>
                            <v-radio
                            :label="radio[2].inhalt"
                            :value="3"
                            :v-model="radio[2].answer"
                            :class="radio[2].class"
                            ></v-radio>
                            <v-radio
                            :label="radio[3].inhalt"
                            :value="4"
                            :v-model="radio[3].answer"
                            :class="radio[3].class"
                            ></v-radio>
                        </v-radio-group>
                        <br />
                        <br />
                        <v-card-actions>
                            <v-col offset-md="1">
                            <v-btn
                            color="primary"
                            large
                            v-on:click="previous();"
                            :disabled="btn1"
                            >zurück</v-btn>
                            </v-col>
                            <v-col offset-md="5">
                            <v-btn
                            color="primary"
                            large
                            v-on:click="next();"
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
import axios from 'axios';
export default {
    data:() => ({
        page: 0, 
        btn1: false,
        correct: 'ml-4 green lighten-1',
        normal: 'ml-4',
        wrong: 'ml-4 red lighten-3',
        antworten: [],
        radio: [
            {
                class: 'ml-4',
                answer: false,
                inhalt: '',
            },
            {
                class: 'ml-4',
                answer: false,
                inhalt: '',
            },
            {
                class: 'ml-4',
                answer: false,
                inhalt: '',
            },
            {
                class: 'ml-4',
                answer: false,
                inhalt: '',
            }
        ],
        fragen: [],
        textB: 'weiter',
        aktFrage: 'Erste Frage'
    }),
    methods: {
        checkPage(){
            /*Diese methode stellt die Knöpfe zum weiter, bzw. zurück, 
            gehen in der Feedbackpage ein, damit der user nicht auserhalb des Arrays gelangen kann*/ 
            if(this.page == 0) {
                this.btn1 = true;
            }
            else{
                this.btn1 = false;
            }
            if(this.page == this.fragen.length-1) {
                this.textB= 'zum Scoreboard';
            }
            else{
                this.textB= 'weiter';
            }
            this.buttonsAnswer();

            
        },
        previous() {
            /*Setzt den wert der Seite um eins zurück */
            this.page = this.page-1;
            if(this.page != this.fragen.length){
                this.checkPage();
            }
        },
        next(){
            /*Überprüft, ob der Knopf zum Scoreboard führt, oder zur nächsten Frage. In dem Fall setzt die Methode den Wert um eins hoch */
            if(this.page <this.fragen.length-1 ){
                this.page = this.page+1;
                this.checkPage();
            }
            else{
                this.zumScoreboard();
            }
        },

        buttons() {
            /*Überprüft, welche bzw. Ob eine Antwort vom User bei der bestimmten Frage angekreuzt wurde und Ob diese Richtig war.
            Färbt die Antworten entsprechend */
            let qId = this.fragen[this.page]._Id;
            let temp = this.fragen[this.page]
            this.aktFrage = temp.question;
            let antwort;
            for(let i = 0; i< this.antworten.length; i++){
                if(qId == this.antworten.questionId){
                    antwort = this.antworten;
                    break;
                }
            }
            for(let i = 0; i<this.radio.length; i++){
                this.radio[i].class = this.normal;
                this.radio[i].answer = false;
            }
            
            this.radio[0].inhalt = temp.answer1;
            this.radio[1].inhalt = temp.answer2;
            this.radio[2].inhalt = temp.answer3;
            this.radio[3].inhalt = temp.answer4;
            if(antwort.answerCorrect) {

                switch (antwort.submission) {
                    case 'a':
                        this.radio[0].class = this.correct; 
                        this.radio[0].answer = true;
                        break;
                    case 'b':
                        this.radio[1].class = this.correct;
                        this.radio[1].answer = true;
                        break;
                    case 'c':
                        this.radio[2].class = this.correct;
                        this.radio[2].answer = true;
                        break;
                    case 'd':
                        this.radio[3].class = this.correct;
                        this.radio[3].answer = true;
                        break;
                    default: 
                        break;
                }
            }else {
                switch (antwort.submission) {
                    case 'a':
                        this.radio[0].class = this.wrong; 
                        this.radio[0].answer = true;
                        break;
                    case 'b':
                        this.radio[1].class = this.wrong;
                        this.radio[1].answer = true;
                        break;
                    case 'c':
                        this.radio[2].class = this.wrong;
                        this.radio[2].answer = true;
                        break;
                    case 'd':
                        this.radio[3].class = this.wrong;
                        this.radio[3].answer = true;
                        break;
                    default: 
                        break;
                }
                switch (temp.correctAnswer) {
                    case 'a':
                        this.radio[0].class = this.correct; 
                        break;
                    case 'b':
                        this.radio[1].class = this.correct;
                        break;
                    case 'c':
                        this.radio[2].class = this.correct;
                        break;
                    case 'd':
                        this.radio[3].class = this.correct;
                        break;
                    default: 
                        break;
                }


            }
        },
        zumScoreboard(){
            /* Ruft die scoreborad Seite auf */
            this.$router.push("/result");
        }
        
    },
    mounted(){
        /*befüllt das Array fragen mit den Fragen und den korrekten Antworten aus dem Backend. 
        befüllt das Array antworten mit der questionId, der Antwort des Users und ob diese richitg war.
        lädt danach die Buttons der ersten Seite */
        let vm = this;
        axios.get(vm.$store.state.backendServer + '/question' + localStorage.getItem('deviceId'))
        .then(function (response) {
            console.log(response.data)
            vm.fragen = response.data; 
            axios.get(vm.$store.state.backendServer + '/user/' + localStorage.getItem('deviceId'))
            .then(function (response) {
                console.log(response.data);
                vm.antworten = response.data.submissions;
                console.log(vm.antworten);
            })
            .catch((err)=>{
                console.log(err)
            });
        })
    .catch((err)=>{
      console.log(err);
    });
    this.checkPage();
  }

}


</script>