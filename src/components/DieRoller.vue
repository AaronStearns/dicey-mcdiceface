<template>
    <div>
        <div>
            <p>die</p>
        </div>
        <a class="button is-primary" v-on:click="rollDie()">Primary</a>
    </div>
</template>

<script>

export default {
    name: "DieRoller",
    data() {

    },
    methods: {
        rollDie() {
            var d1 = Math.floor(Math.random() * 6) + 1;
            console.log(d1)
        }
    }
}
</script>

<style scoped>

</style>