<template>
  <div class="flex justify-between bg-teal-500 cursor-pointer h-24 w-auto">
    <div class="img flex items-center m-8 " @click="$router.push('/')">
      <img class="h-12" src="~/assets/Rooty.svg" alt="Workcation" />
    </div>
    <nav class="flex items-center m-3 justify-center">
      <a
        @click="home"
        class=" text-3xl m-4 no-underline text-white"
        id="portfolio-button"
      >
        Home
      </a>
      <a
        href="/login"
        class=" text-3xl m-4 no-underline text-white"
        id="portfolio-button"
        v-if="!this.$store.state.user.user"
      >
        Login
      </a>
      <h1
        v-if="this.$store.state.user.user"
        class="class= text-3xl m-4 no-underline text-white"
      >
        {{ this.$store.state.user.user.username }}
      </h1>
      <div
        class="dropdown inline-block relative"
        v-if="this.$store.state.user.user"
      >
        <button
          class="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"
        >
          <span class="mr-1">Options</span>
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            />
          </svg>
        </button>
        <ul class="dropdown-menu absolute hidden text-gray-700 pt-1"><li class="">
            <a
              class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              @click="settings"
              >Settings</a
            >
          </li>
          <li class="">
            <a
              class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href="#"
              @click="logout"
              >Logout</a
            >
          </li>
          
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("user/logout");
    },
    settings() {
      this.$router.push("/settings");
    },
    home() {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.dropdown:hover .dropdown-menu {
  display: block;
}
@media (max-width: 554px) {
  .img {
    display: none;
  }
}
</style>
