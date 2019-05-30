<template>
  <div id="footer">
    Site made with Vue.js.
    <a
      target="_blank"
      href="https://github.com/alexmourer/Alex-Mourer-Web"
    >Source code</a>&nbsp;
    <a href="mailto:alex@alexmourer.com" target="_blank">Contact</a>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    type: String
  }
};
</script>
