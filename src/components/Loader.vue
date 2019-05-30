<template>
  <div id="loader">
    <svg class="circular" viewBox="25 25 50 50">
      <circle
        class="path"
        cx="50"
        cy="50"
        r="20"
        fill="none"
        stroke-width="3"
        stroke-miterlimit="10"
      ></circle>
    </svg>
  </div>
</template>

<script>
export default {
  name: "Loader",
  props: {
    type: String
  }
};
</script>

<style scoped lang="scss">
#loader {
  position: relative;
  top: 100px;
  margin: 0 auto;
  width: 30px;
  max-height: auto;
  transition: max-height 0.33s;
  &:before {
    content: "";
    display: block;
    padding-top: 100%;
  }
}

.circular {
  animation: rotate 0.5s linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.path {
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  animation: dash 1s ease-in-out infinite, color 2s ease-in-out infinite;
  stroke-linecap: round;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
}

@keyframes color {
  100%,
  0% {
    stroke: #2abb9b;
  }
  25% {
    stroke: #3a98d8;
  }
  50% {
    stroke: #2abb9b;
  }
  75% {
    stroke: #3a98d8;
  }
}
</style>
