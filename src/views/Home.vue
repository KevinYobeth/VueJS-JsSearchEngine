<template>
  <div class="home flex flex-col items-center">
    <SearchBar @queryFound="queryFound" />
    <h1 v-if="currentSnippets == 'Random'" class="text-4xl font-bold mb-3 mt-5">
      Random Snippets
    </h1>
    <h1 v-if="currentSnippets == 'Query'" class="text-4xl font-bold mb-3 mt-5">
      Query Snippets
    </h1>
    <div v-if="snippets.length != 0">
      <div v-for="snippet in snippets" :key="snippet.id">
        <router-link :to="{name: 'SnippetDetail', params: {id: snippet.id}}"
          ><Snippet :id="snippet.id" :title="snippet.title"
        /></router-link>
      </div>
    </div>
    <div v-else>
      <p v-if="message">{{ message }}</p>
      <button
        @click="refresh"
        v-if="message === 'Result not found'"
        type="button"
        class="bg-gray-800 hover:bg-gray-600 text-white ml-3 p-2 mt-3 px-5 rounded-md"
      >
        Refresh
      </button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Snippet from "@/components/Snippet.vue";
import SearchBar from "@/components/SearchBar.vue";

export default {
  name: "Home",
  components: {
    SearchBar,
    Snippet,
  },
  data() {
    return {
      snippets: [],
      currentSnippets: "Random",
      message: "",
    };
  },
  methods: {
    queryFound(query) {
      this.snippets = query["data"];

      this.currentSnippets = "Query";

      if (this.snippets.length == 0) {
        this.message = "Result not found";
      }
    },
    refresh() {
      fetch("https://js-searchengine.herokuapp.com/")
        .then((res) => res.json())
        .then((snippets) => (this.snippets = snippets))
        .catch((err) => console.log(err.message));

      this.currentSnippets = "Random";
      this.message = "Loading snippets";
    },
  },
  mounted() {
    fetch("https://js-searchengine.herokuapp.com/")
      .then((res) => res.json())
      .then((snippets) => (this.snippets = snippets))
      .catch((err) => console.log(err.message));

    this.currentSnippets = "Random";
    this.message = "Loading snippets";
  },
};
</script>

<style></style>
