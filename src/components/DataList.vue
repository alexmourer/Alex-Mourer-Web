<template>
  <div>
    <div v-for="item in dataResult">
      <div v-html="item"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "DataList",
  props: {
    type: String
  },
  data: function() {
    return {
      dataResult: [],
      linked_items: this.$parent.linked_items
    };
  },
  mounted() {
    var linkedType = this.type;
    var dataResult = [];
    this.$parent.linked_items.forEach(function(element) {
      if (element[linkedType]) {
        dataResult.push(element[linkedType].value);
      }
    });
    this.dataResult = dataResult;
  }
};
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>