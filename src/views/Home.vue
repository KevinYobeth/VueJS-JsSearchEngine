<template>
  <div class="home">
    <h1 class="text-4xl font-bold mb-3">Random Code</h1>
    <div v-for="snippet in snippets" :key="snippet.id">
      <Snippet :id="snippet.id" :title="snippet.title" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Snippet from "@/components/Snippet.vue";

export default {
  name: "Home",
  data() {
    return {
      snippets: [],
    };
  },
  components: {
    Snippet,
  },
  mounted() {
    fetch("https://js-searchengine.herokuapp.com/")
      .then((res) => res.json())
      .then((snippets) => (this.snippets = snippets))
      .catch((err) => console.log(err.message));
  },
};
</script>
