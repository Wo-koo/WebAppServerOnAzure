<template>
  <div class="home">
    <Search/>
  </div>
</template>

<script>
const Search = require("./Search.vue");

module.exports = { // This is important, I got errors when using `export default`
    data () {
        return {
            who: "World"
        }
    },
    components: {Search},
    mounted () {
        setTimeout(() => {
            console.log('We can use ES6 too!')
        }, 1000)
    }
}

</script>
