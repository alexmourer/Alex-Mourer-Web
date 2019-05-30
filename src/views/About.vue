<template>
  <div class="about">
    <Loader v-if="!dataLoaded"/>
    <div v-if="dataLoaded">
      <div class="page-title">
        <div class="hr">&nbsp;</div>
        <div v-html="post_title"/>
        <div v-html="post_tag"/>
        <div class="hr">&nbsp;</div>
      </div>
      <div v-html="post_body"/>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Loader from "@/components/Loader.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "about",
  components: {
    Loader,
    Footer
  },
  data() {
    return {
      dataLoaded: false,
      post_title: null,
      post_tag: null,
      post_body: null,
      linked_items: null
    };
  },
  mounted() {
    /* eslint-disable global-require */
    const KenticoCloud = require("kentico-cloud-delivery");
    /* eslint-enable global-require */

    class Article extends KenticoCloud.ContentItem {}

    const deliveryClient = new KenticoCloud.DeliveryClient({
      projectId: "e75ce49a-4064-0098-b307-d687a6a064ab",
      enablePreviewMode: true,
      previewApiKey:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI5NWM3YWM1Nzg3NTY0MGQyYmRhNjdhNTg3MDlmYzgyZiIsImlhdCI6IjE1NTg3MTM3MTciLCJleHAiOiIxOTA0MzEzNzE3IiwicHJvamVjdF9pZCI6ImU3NWNlNDlhNDA2NDAwOThiMzA3ZDY4N2E2YTA2NGFiIiwidmVyIjoiMS4wLjAiLCJhdWQiOiJwcmV2aWV3LmRlbGl2ZXIua2VudGljb2Nsb3VkLmNvbSJ9.EfF0RgdNpew-GbQAA40yacd0iVBa1VV5n750vTx319o",
      typeResolvers: [
        new KenticoCloud.TypeResolver("article", () => new Article())
      ]
    });

    deliveryClient
      .item("about")
      .getObservable()
      .subscribe(response => {
        this.post_title = response.item.title.value;
        this.post_tag = response.item.tag.value;
        this.post_body = response.item.body.value;
        this.linked_items = response.linkedItems;
        this.dataLoaded = true;
      });
  }
};
</script>
