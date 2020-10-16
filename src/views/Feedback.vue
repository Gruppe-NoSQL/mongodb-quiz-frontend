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
                                <p>{{ page+1 }}/ {{ this.fragen.length}}</p>
                        </v-card-text>
                        <v-divider></v-divider>
                        <br />
                        <v-radio-group disabled> 
                            <v-radio
                            label="Antwort1"
                            :value="1"
                            :v-model="answer1"
                            class="ml-4"
                            ></v-radio>
                            <v-radio
                            label="Antwort2"
                            :value="2"
                            :v-model="answer2"
                            class="ml-4"
                            ></v-radio>
                            <v-radio 
                            label="Antwort3"
                            :value="3"
                            :v-model="answer3"
                            class="ml-4"
                            ></v-radio>
                            <v-radio 
                            label="Antwort4"
                            :value="4"
                            :v-model="answer4"
                            class="ml-4"
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
        answer1: false,
        answer2: false,
        answer3: false,
        answer4: false,
        btn1: false,
        antworten: [],
        fragen: [],
        textB: 'weiter',
    }),
    methods: {
        checkPage(){
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
        },
        previous() {
            this.page = this.page-1;
            if(this.page== this.fragen.length){
                this.zumScoreboard();
            }
            else{
                this.nextQuestion();
            }
        },
        next(){
            if(this.page <this.fragen.length-1 ){
                this.page = this.page+1;
                this.nextQuestion();
            }
            else{
                this.zumScoreboard();
            }
            
        },
        nextQuestion() {
            this.checkPage();
        },
        buttonsCorrection() {
            this.answer1 = false;
            this.answer2 = false;
            this.answer3 = false;
            this.answer4 = false;
        },
        zumScoreboard(){
            this.$router.push("/result");
        }
        
    },
    mounted(){
        let vm = this;
        axios.get(vm.$store.state.backendServer + '/question')
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