<template>
    <div id="app">
        <Header></Header>
        <div id="content" class="columns">
            <div class="inlineDice column is-one-sixth">
                <img src="./assets/faceOne.png"/>
                <p id="1">
                </p>
                <div></div>
            </div>
            <div class="inlineDice column is-one-sixth">
                <img src="./assets/faceTwo.png"/>
                <p id="2">
                </p>
                <div></div>
            </div>
            <div class="inlineDice column is-one-sixth">
                <img src="./assets/faceThree.png"/>
                <p id="3">
                </p>
                <div></div>
            </div>
            <div class="inlineDice column is-one-sixth">
                <img src="./assets/faceFour.png"/>
                <p id="4">
                </p>
                <div></div>
            </div>
            <div class="inlineDice column is-one-sixth">
                <img src="./assets/faceFive.png"/>
                <p id="5">
                </p>
                <div></div>
            </div>
            <div class="inlineDice column is-one-sixth">
                <img src="./assets/faceSix.png"/>
                <p id="6">
                </p>
                <div></div>
            </div>
        </div>
        <button class="button is-primary" @click="rollDie()">ROLL</button>
        <button id="resetButton" class="button is-danger" @click="resetBoard()">RESET</button>
    </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
    name: 'app',
    components: {
        Header,
    },
    data() {
        return {
            diceRolls: [],
            diceRollKeyVals: {}
        }
    },
    methods: {
        rollDie() {
            var roll = Math.floor(Math.random() * 6) + 1;

            this.diceRolls.push(roll);

            var reduceArrayToKeyValPairs = this.diceRolls.reduce((acc, val) => {
                acc[val] = acc[val] === undefined ? 1 : acc[val] += 1;
                return this.diceRollKeyVals = acc;
            }, {});
            
            this.populateTags();

        },
        checkForWinner(key, val) {
            if (val == 5) {
                alert("Winner! Side " + key);
                resetBoard();
            }
        },
        populateTags() {
            for (const [key, value] of Object.entries(this.diceRollKeyVals)) {

                var one = document.getElementById("1");
                var two = document.getElementById("2");
                var three = document.getElementById("3");
                var four = document.getElementById("4");
                var five = document.getElementById("5");
                var six = document.getElementById("6");
        
                if (key == "1") {
                    one.innerText = value;
                    var height = value * 20;
                    one.parentElement
                        .querySelector("div")
                        .setAttribute("style", "background-color: pink; height: " + height + "%");
                    this.checkForWinner(key, value)         ;        
                } else if (key == "2") {
                    two.innerHTML = value;
                    var height = value * 20;
                    two.parentElement
                        .querySelector("div")
                        .setAttribute("style", "background-color: peachpuff; height: " + height + "%");
                    this.checkForWinner(key, value);
                } else if (key == "3") {
                    three.innerHTML = value;
                    var height = value * 20;
                    three.parentElement
                        .querySelector("div")
                        .setAttribute("style", "background-color: Khaki ; height: " + height + "%");
                    this.checkForWinner(key, value);
                } else if (key == "4") {
                    four.innerHTML = value;
                    var height = value * 20;
                    four.parentElement
                        .querySelector("div")
                        .setAttribute("style", "background-color: palegreen; height: " + height + "%");
                    this.checkForWinner(key, value);
                } else if (key == "5") {
                    five.innerHTML = value;
                    var height = value * 20;
                    five.parentElement
                        .querySelector("div")
                        .setAttribute("style", "background-color: paleturquoise; height: " + height + "%");
                    this.checkForWinner(key, value);
                } else if (key == "6") {
                    six.innerHTML = value;
                    var height = value * 20;
                    six.parentElement
                        .querySelector("div")
                        .setAttribute("style", "background-color: lightsteelblue; height: " + height + "%");
                    this.checkForWinner(key, value);
                }
            }
        },        
        resetBoard() {
            this.diceRolls = [];
            this.diceRollKeyVals = {};

            var one = document.getElementById("1");
            var two = document.getElementById("2");
            var three = document.getElementById("3");       
            var four = document.getElementById("4");
            var five = document.getElementById("5");
            var six = document.getElementById("6");

            one.innerText = "";
            two.innerText = "";
            three.innerText = "";
            four.innerText = "";
            five.innerText = "";
            six.innerText = "";

            one.parentElement.querySelector("div").setAttribute("style", "height: 0%");
            two.parentElement.querySelector("div").setAttribute("style", "height: 0%");
            three.parentElement.querySelector("div").setAttribute("style", "height: 0%");
            four.parentElement.querySelector("div").setAttribute("style", "height: 0%");
            five.parentElement.querySelector("div").setAttribute("style", "height: 0%");
            six.parentElement.querySelector("div").setAttribute("style", "height: 0%");
        }
    }
}
</script>

<style scoped>
.button {
    width: 150px;
    height: 60px;
    border: 1px solid darkgrey;    
      margin:auto;
    display:block;
    margin-bottom: 10px;
}

#resetButton {
    width: 120px;
    height: 40px;
    border: 1px solid darkgrey;    
    margin:auto;
    display:block;
}

.inlineDice  {
    display: inline-block;
    align-items: center;
    display: flex;
    width: 200px;
    height: 200px;
    border: 1px solid black;
    position: relative;
    background-color: WhiteSmoke;
    margin: 20px;
}

.inlineDice img {
    padding-left: 10px;
    text-align: center;
    width: 80px;
}

.inlineDice p {
    padding-left: 10px;
    vertical-align: middle;
    font-size: 26px;
    font-weight: bolder;
}

.inlineDice div {
    position:absolute; 
    height: 0%; 
    bottom: 0; 
    right: 0;
    margin-right: 15px;
    width: 40px;
}
</style>