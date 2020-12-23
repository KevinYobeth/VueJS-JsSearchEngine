<template>
  <router-link to="/">
    <p class="ml-5 mb-5 cursor-pointer inline-block">return</p>
  </router-link>
  <div v-if="snippet" class="snippet ml-5">
    <p class="text-3xl font-bold">{{ snippet.title }}</p>
    <p>Code ID: {{ id }}</p>
    <br />
    <p class="text-xl font-bold">Description</p>
    <p>{{ snippet.description }}</p>
    <br />

    <p class="text-xl font-bold">Tags</p>
    <p>{{ snippet.tags }}</p>
    <br />

    <p class="text-xl font-bold">Snippet</p>
    <div class="border border-gray-400 bg-gray-100 rounded-md p-5 mr-5 mb-5">
      <p>{{ snippet.code }}</p>
    </div>
  </div>
  <div v-else>
    <p>Loading snippet...</p>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      snippet: null,
    };
  },
  mounted() {
    fetch("https://js-searchengine.herokuapp.com/code/" + this.id)
      .then((res) => res.json())
      .then((snippet) => (this.snippet = snippet))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style>
.snippet {
  white-space: pre-wrap;
}
</style>
