<template>
  <div class="home">
    <div class="page-title">
      <div class="hr">&nbsp;</div>
      <div v-html="post_title"/>
      <div v-html="post_tag"/>
      <div class="social">
        <a href="https://codepen.io/alexmourer/" target="_blank">
          <i class="fab fa-codepen"></i>
        </a>
        <a href="https://codesandbox.io/u/alexmourer" target="_blank">
          <i class="fas fa-laptop-code"></i>
        </a>
        <a href="https://dev.to/alexmourer" target="_blank">
          <i class="fab fa-dev"></i>
        </a>
        <a href="https://github.com/alexmourer" target="_blank">
          <i class="fab fa-github-square"></i>
        </a>
        <a href="https://bitbucket.org/%7B9a95b436-5c98-4e86-9ab5-a6b838544f3e%7D/" target="_blank">
          <i class="fab fa-bitbucket"></i>
        </a>
        <a href="https://www.linkedin.com/in/alexmourer/" target="_blank">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://dribbble.com/AlexMourer" target="_blank">
          <i class="fab fa-dribbble-square"></i>
        </a>
        <a href="https://www.instagram.com/alexmourer/" target="_blank">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://twitter.com/AlexMourer" target="_blank">
          <i class="fab fa-twitter-square"></i>
        </a>
        <a href="mailto:alex@alexmourer.com" target="_blank">
          <i class="fas fa-envelope"></i>
        </a>
      </div>
      <div class="hr">&nbsp;</div>
    </div>
    <div v-html="post_body"/>
    <div class="bottom" v-if="dataLoaded">
      <div class="col col-left">
        <h3>Recent Work History</h3>
        <DataList type="work_history"/>
        <h3>Code Examples</h3>
        <DataList type="code_example"/>
      </div>
      <div class="col col-left">
        <h3>Code Write-Ups</h3>
        <DataList type="publications"/>
        <h3>Interviews</h3>
        <DataList type="interviews"/>
        <h3>In The News</h3>
        <DataList type="in_the_news"/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DataList from '@/components/DataList.vue';

export default {
  name: 'home',
  components: {
    DataList,
  },
  data() {
    return {
      dataLoaded: false,
      post_title: null,
      post_tag: null,
      post_body: null,
      linked_items: null,
    };
  },
  mounted() {
    /* eslint-disable global-require */
    const KenticoCloud = require('kentico-cloud-delivery');
    /* eslint-enable global-require */

    class Article extends KenticoCloud.ContentItem {}

    const deliveryClient = new KenticoCloud.DeliveryClient({
      projectId: 'e75ce49a-4064-0098-b307-d687a6a064ab',
      enablePreviewMode: true,
      previewApiKey:
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI5NWM3YWM1Nzg3NTY0MGQyYmRhNjdhNTg3MDlmYzgyZiIsImlhdCI6IjE1NTg3MTM3MTciLCJleHAiOiIxOTA0MzEzNzE3IiwicHJvamVjdF9pZCI6ImU3NWNlNDlhNDA2NDAwOThiMzA3ZDY4N2E2YTA2NGFiIiwidmVyIjoiMS4wLjAiLCJhdWQiOiJwcmV2aWV3LmRlbGl2ZXIua2VudGljb2Nsb3VkLmNvbSJ9.EfF0RgdNpew-GbQAA40yacd0iVBa1VV5n750vTx319o',
      typeResolvers: [
        new KenticoCloud.TypeResolver('article', () => new Article()),
      ],
    });

    deliveryClient
      .item('home')
      .getObservable()
      .subscribe((response) => {
        this.post_title = response.item.title.value;
        this.post_tag = response.item.tag.value;
        this.post_body = response.item.body.value;
        this.linked_items = response.linkedItems;
        this.dataLoaded = true;
      });
  },
};
</script>
<style lang="scss">
@import url("https://use.fontawesome.com/releases/v5.8.2/css/all.css");

.social i {
  font-size: 1.6em;
  margin: 0px 4px;
}
</style>
