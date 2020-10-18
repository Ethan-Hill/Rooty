<template>
  <div>
    <Navbar />
    <div
      class="flex justify-center items-center"
      style="min-height: calc(100vh - 6rem); background-color: #2c2f33"
    >
      <div class="text-center">
        <h1 class="text-white text-6xl font-bold">Settings</h1>
        <h1
          class="text-white text-6xl font-bold"
          v-if="this.$store.state.user.user"
        >
          Username: {{ this.$store.state.user.user.username }}
        </h1>
        <h1
          class="text-white text-6xl font-bold"
          v-if="this.$store.state.user.user"
        >
          Email: {{ this.$store.state.user.user.email }}
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar";
//import store from "../plugins/store";
export default {
  middleware({ store, redirect }) {
      const isAuthenticated = store.state.user.user
      if (!isAuthenticated) {
        return redirect('/')
      }
    },
  components: {
    Navbar
  },
};
</script>
