<template>
    <div class="columns">
        <div>
            <label>ones</label>
        </div>
        <div>
            <label>twos</label>
        </div>
        <div>
            <label>threes</label>
        </div>
        <div>
            <label>fours</label>
        </div>
        <div>
            <label>fives</label>
        </div>
        <div>
            <label>sixes</label>
        </div>
    </div>
</template>

<script>



export default {
    name: "DiceCounters"
}
</script>

<style scoped>

.cols {
    max-width: 60%;
    /* justify-content: center; */

}

 div div {
    background-color: beige;
    padding: 50px;
    flex: auto;
    /* width: 200px; */
    /* text-align: center; */
    /* display: inline-block; */
    justify-content: center;
    /* position: fixed;  */
    /* bottom:0; */
    /* width: 60%; */
    /* height: 60px; */
}

</style>