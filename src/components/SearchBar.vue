<template>
  <div class="pt-2 relative mx-auto text-gray-600">
    <form @submit.prevent="handleSubmit">
      <input
        class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
        name="query"
        v-model="query"
        placeholder="Search"
      />
      <button
        type="submit"
        class="bg-gray-800 hover:bg-gray-600 text-white ml-3 p-2 px-5 rounded-md"
      >
        Search
      </button>
    </form>

    <!-- <p>{{ query }}</p> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      query: "",
      queryResult: "",
    };
  },
  methods: {
    handleSubmit() {
      axios
        .post(
          "https://js-searchengine.herokuapp.com/search?query=" + this.query
        )
        .then((res) => {
          this.queryResult = res;
          this.$emit("queryFound", this.queryResult);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
