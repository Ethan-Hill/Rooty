<template>
  <div>
    <div
      class="flex justify-center items-center"
      style="min-height:100vh; background-color: #2c2f33"
    >
      <div class="flex flex-col ">
        <h1 class="text-white text-6xl font-bold">404</h1>
        <button
          @click="$router.go(-1)"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Go back
        </button>
      </div>
    </div>
  </div>
</template>
