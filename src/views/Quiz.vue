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
                  <h2>{{ questionArr[counter] }}</h2>
                  <p>{{ counter+1 }}/{{ questionArr.length }}</p>
                </v-card-text>
                <v-divider></v-divider>
                <br />
                <v-radio-group v-model="answer">
                  <v-radio
                    :label= answer1Arr[counter] 
                    :value="1"
                    class="ml-4"
                  ></v-radio>
                  <v-radio
                    :label= answer2Arr[counter]
                    :value="2"
                    class="ml-4"
                  ></v-radio>
                  <v-radio
                    :label= answer3Arr[counter]
                    :value="3"
                    class="ml-4"
                  ></v-radio>
                  <v-radio
                    :label= answer4Arr[counter]
                    :value="4"
                    class="ml-4"
                  ></v-radio> 
                </v-radio-group>
                <br />
                <p> {{ result }} </p>
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
import axios from 'axios';

export default {
  data:() => ({
    counter: 0,
    textB: 'Weiter',
    result: [],
    answer: ' ',
    info: [],
    user: [],
    questionArr: [],
    answer1Arr: [],
    answer2Arr: [],
    answer3Arr: [],
    answer4Arr: [],
    questionIDArr: [],
    userIDArr: []
  }),

  methods: {
    weiterButton() {
      this.counter++;

    },
    textButton() {
      let x = this.questionArr.length-2
      if (this.counter > x) {
        this.textB='Abschicken'
      }
    },
    resultButton() {
      let x = this.questionArr.length-1
      if (this.counter > x) {
        this.$router.push('/result')
      }
    },
    checkedBox(){
      this.result.push(this.questionIDArr[this.counter])
      if (this.answer=='1'){
        this.result.push("a")
        this.answer=' '
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
      
      }
    },
    mounted(){
      let vm = this;
    axios.get(vm.$store.state.backendServer + '/question')
    .then(function (response) {
      vm.info=response.data;
      for(let i=0; i<vm.info.length; i++) {
        vm.questionArr.push(vm.info[i].question)
        vm.answer1Arr.push(vm.info[i].answer1)
        vm.answer2Arr.push(vm.info[i].answer2)
        vm.answer3Arr.push(vm.info[i].answer3)
        vm.answer4Arr.push(vm.info[i].answer4)
        vm.questionIDArr.push(vm.info[i]._id)

      }
      axios.get(vm.$store.state.backendServer + '/user')
      .then(function (response){
        vm.user=response.data;
        for(let i=0; i<vm.user.length; i++) {
          vm.userIDArr.push(vm.user[i]._id)
        }
      })
      .catch((err)=>{
      console.log(err);
      });
    })

    .catch((err)=>{
      console.log(err);
    });

    
  }
  }



</script>