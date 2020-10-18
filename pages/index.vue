<template>
  <div>
    <Navbar />
    <div
      class="flex justify-center items-center"
      style="min-height: calc(100vh - 6rem); background-color: #2c2f33"
    >
      <div class="text-center">
        <h1 class="text-white text-6xl font-bold">Home</h1>
        <h1
          class="text-white text-6xl font-bold"
          v-if="this.$store.state.user.user"
        >
          Hey there {{ this.$store.state.user.user.username }}
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar";
//import store from "../plugins/store";
export default {
  components: {
    Navbar
  },
};
</script>
