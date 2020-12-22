<template>
  <a
    href="#"
    class="w-96 h-14 mb-3 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
  >
    {{ title }}
  </a>
</template>

<script>
export default {
  props: ["id", "title"],
};
</script>

<style></style>
