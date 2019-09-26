<template>
    <div class="columns">
        <!-- <div v-for="(value, key) in this.dict">{{ key }}: {{ value }} > -->
            <!-- <div>
                <ul>
                    <li v-for="(value, key) in this.dict">{{ key }}: {{ value }} </li>
                </ul>
            </div> -->
            <!-- <div id="1" class="column is-one-ssixth">
                <p v-if: key = "1" >thing</p>
                <label>ones</label>
            </div>
            <div id="2" class="column is-one-sixth">
                <p v-if: key = "2" >thing</p>
                <label>twos</label>
            </div>
            <div id="3" class="column is-one-sixth">
                <label>threes</label>
            </div>
            <div id="4" class="column is-one-sixth">
                <label>fours</label>
            </div>
            <div id="5" class="column is-one-sixth">
                <label>fives</label>
            </div>
            <div id="6" class="column is-one-sixth">
                <label>sixes</label>
            </div> 
        </div> -->
    </div>
</template>

<script>
export default {
    name: "DiceCounters",
    props: ["stuff", "dict"],
    methods: {
        // reducer() {
        //     var uniqs = this.stuff.reduce((acc, val) => {
        //     acc[val] = acc[val] === undefined ? 1 : acc[val] += 1;
        //     return acc;
        // }, {});
        // console.log(uniqs)
        // }
    }

}
</script>

<style scoped>

.columns div {
    /* background-color: grey; */
}

 div div {
    background-color: beige;
    padding: 50px;
    flex: auto;
    border-right: 1px solid black;
    border-left: 1px solid black;

    /* width: 200px; */
    /* text-align: center; */
    /* display: inline-block; */
    justify-content: center;
    text-align: center;
    /* position: fixed;  */
    /* bottom:0; */
    /* width: 60%; */
    /* height: 60px; */
}

</style>