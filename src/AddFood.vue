<template>
  <v-ons-modal :visible="modalVisible">
    <v-ons-page class="food-form">
      <v-ons-toolbar>
        <div class="center">
          new food
        </div>
        <div class="right">
          <v-ons-button class="close" ripple @click="close">cancel</v-ons-button>
        </div>
      </v-ons-toolbar>
      
      <ons-row align="center" class="food-form-row">
        <ons-col width="50%" class="food-label">
          Name of Food
        </ons-col>
        <ons-col width="50%">
          <input class="text-input--underbar" float 
            placeholder="Name of Food" 
            v-model="foodName"></input>
        </ons-col>
      </ons-row>

      <ons-row align="center" class="food-form-row">
        <ons-col width="50%" class="food-label">
          Calories
        </ons-col>
        <ons-col width="50%">
          <input class="text-input--underbar" float 
            placeholder="Calories" 
            v-model="cal"></input>
        </ons-col>
      </ons-row>

      <ons-row align="center" class="food-form-row">
        <ons-col width="50%" class="food-label">
          Number of Servings
        </ons-col>
        <ons-col width="50%">
          <input class="text-input--underbar" float 
            placeholder="Number" 
            v-model="serving"></input>
        </ons-col>
      </ons-row>

      <ons-row align="center" class="food-form-row">
        <ons-col width="50%" class="food-label">
          {{petName}}'s Reaction
        </ons-col>
        <ons-col width="50%">
          <input class="text-input--underbar" float 
            placeholder="reaction(0~5)" 
            v-model="reaction"></input>
        </ons-col>
      </ons-row>
      <hr class="my-hr" style="width:90%">

      <ons-row align="center" class="food-form-row">
        <textarea class="textarea--transparent food-textarea" rows="4"
          placeholder="Add some note" 
          v-model="note"></textarea>
      </ons-row>

      <ons-row id="bottom" align="center">
        <ons-col style="text-align: center">
          <v-ons-button id="add-food-btn" ripple @click="addFood">Done</v-ons-button>
        </ons-col>
      </ons-row>
    </v-ons-page>
  </v-ons-modal>
</template>

<script>
export default {
  props: ['modalVisible'],
  data() {
    return {
      foodName: '',
      cal: '',
      serving: '',
      reaction: '',
      note: '',
      petName: 'Latte',
    }
  },
  methods: {
    addFood() {
      var foodRepository = require('./Repositories/FoodRepository');
      var self = this;

      var name = (!this.foodName ? '' : this.foodName);
      var cal = (!this.cal ? '' : this.cal);
      var serving = (!this.serving ? '' : this.serving);
      var reaction = (!this.reaction ? '' : this.reaction);
      var note = (!this.note ? '' : this.note);

      this.foodName = this.cal = this.serving = this.reaction = this.note = '';

      var data = {
        name: name,
        cal: cal,
        serving: serving,
        reaction: reaction,
        note: note,
      }

      foodRepository.insert(data).then(function() {
        self.$emit('close');
      }).catch(function(error) {
        console.log(error);
        self.$ons.notification.alert("webSQL didn't work");
      });
      
    },
    close() {
      this.foodName = this.cal = this.serving = this.reaction = this.note = '';
      this.$emit('close');
    }
  }
}
</script>

<style>
  #add-food-btn {
    width: 80%;
    background-color: rgba(255, 60, 120, 0.5);
    color: black;
    font-family: Skia;
    font-weight: lighter;
  }
  
  .close {
    background-color: transparent;
    margin-right: 10%;
    color: rgb(128, 128, 255);
    font-family: Skia;
    font-weight: lighter;
  }

  .food-form {
    width: 90%;
    height: 60%;
    border-radius: 2%;
    position: relative;
    top: 40%;
    left: 5%;
  }

  .food-form-row {
    height: 15%;
  }

  .food-label {
    padding-left: 5%;
    text-align: left;
  }

  .text-input--underbar input {
    text-align: right;
  }

  .food-textarea {
    width: 90%;
    margin-left: 5%;
    margin-top: 2%;
  }
</style>

