<template>
  <div>
    <Navbar />
    <div
      class="flex justify-center items-center h-auto w-auto"
      style="height: calc(100vh - 6rem); background-color: #2c2f33"
    >
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <h1 class="text-gray-700 text-center text-base font-bold mb-2">
            Login
          </h1>
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            v-model="email"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="********"
            v-model="password"
          />
        </div>
        <div class="flex flex-col items-center">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            @click="login"
          >
            Login
          </button>
          <a
            class="text-blue cursor-pointer font-bold mt-3"
            type="button"
            @click="$router.push('register')"
          >
            Need a account?
          </a>
        </div>
        <br />
        <div
          class="bg-red-100 text-center border border-red-400 text-red-700 px-10 py-3 rounded relative"
          role="alert"
          v-if="this.$store.state.user.loginError"
        >
          <span class="block sm:inline">{{
            this.$store.state.user.loginMessage
          }}</span>
        </div>
        <div
          class="bg-green-100 text-center border border-green-400 text-green-700 px-10 py-3 rounded relative"
          role="alert"
          v-if="this.$store.state.user.loginSuccess"
        >
          <span class="block sm:inline">{{
            this.$store.state.user.loginMessage
          }}</span>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar";
export default {
  components: {
    Navbar
  },
  data() {
    return {
      email: null,
      password: null
    };
  },
  methods: {
    login() {
      let formData = {
        email: this.email,
        password: this.password
      };
      this.$store.dispatch("user/login", formData);
    }
  }
};
</script>

<style scoped></style>
