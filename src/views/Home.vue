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
      <p>Loading Random Snippets</p>
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
    };
  },
  methods: {
    queryFound(query) {
      console.log(query["data"]);
      this.snippets = query["data"];

      this.currentSnippets = "Query";
    },
  },
  mounted() {
    fetch("https://js-searchengine.herokuapp.com/")
      .then((res) => res.json())
      .then((snippets) => (this.snippets = snippets))
      .catch((err) => console.log(err.message));

    this.currentSnippets = "Random";
  },
};
</script>

<style></style>
