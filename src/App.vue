<template>
    <div id="app">
        <Header></Header>
        <div id="content">
            <div class="inlineDice">
                <img src="./assets/faceOne.png"/>
                <p id="1">
                </p>
            </div>
            <div>
                <img src="./assets/faceTwo.png"/>
                <p id="2">
                </p>
            </div>
            <div>
                <img src="./assets/faceThree.png"/>
                <p id="3">
                </p>
            </div>
            <div>
                <img src="./assets/faceFour.png"/>
                <p id="4">
                </p>
            </div>
            <div>
                <img src="./assets/faceFive.png"/>
                <p id="5">
                </p>
            </div>
            <div>
                <img src="./assets/faceSix.png"/>
                <p id="6">
                </p>
            </div>

            <button class="button is-primary" @click="rollDie()">asdf</button>
        </div>
            <!-- <Chart v-bind:stuff="stuff"/> -->
            <!-- <DiceCounters v-bind:stuff="stuff" v-bind:dict="dict"></DiceCounters> -->
    </div>
</template>

<script>
import Header from './components/Header.vue'
import DiceCounters from './components/DiceCounters.vue'
import DieRoller from './components/DieRoller.vue'

export default {
    name: 'app',
    components: {
        Header,
        DiceCounters,
        DieRoller,
    },
    data() {
        return {
            stuff: [],
            dict: {}
        }
    },
    methods: {
        rollDie() {
            var d1 = Math.floor(Math.random() * 6) + 1;
            this.stuff.push(d1)

            var uniqs = this.stuff.reduce((acc, val) => {
                acc[val] = acc[val] === undefined ? 1 : acc[val] += 1;
                return this.dict = acc;
            }, {});
            console.log(this.dict)
            this.populateTags();
            // console.log(this.stuff)
    //               this.stuff[0] += 1
    //               console.log(this.stuff)
        },
        populateTags() {
            for (const [key, value] of Object.entries(this.dict)) {
                var one = document.getElementById("1")
                var two = document.getElementById("2")
                var three = document.getElementById("3")
                var four = document.getElementById("4")
                var five = document.getElementById("5")
                var six = document.getElementById("6")

                if (key == "1") {
                    one.innerHTML = value;
                } else if (key == "2") {
                    two.innerHTML = value;
                } else if (key == "3") {
                    three.innerHTML = value;
                } else if (key == "4") {
                    four.innerHTML = value;
                } else if (key == "5") {
                    five.innerHTML = value;
                } else if (key == "6") {
                    six.innerHTML = value;
                }

                // console.log(`${key}: ${value}`);
            }
        }        
    }
}
</script>

<style scoped>

/* .inlineDice  {
        display: inline-block;
    width: 200px;
    height: 100px;
} */

#content div img {
    padding-top: 0;

}

#content div div {
    padding: 0;
    margin: 0;
}
#content div {
    display: inline-block;
    width: 200px;
    height: 100px;
}

</style>