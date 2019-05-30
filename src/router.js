import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Alex Mourer - Front-End Web Developer',
        metaTags: [
          {
            name: 'description',
            content:
              "Alex Mourer's portfolio website. Front-End Developer, Designer, Creator, and Community Enthusiast.",
          },
          {
            property: 'og:description',
            content:
              "Alex Mourer's portfolio website. Front-End Developer, Designer, Creator, and Community Enthusiast.",
          },
        ],
      },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
      meta: {
        title: "About Alex Mourer's portfolio website",
        metaTags: [
          {
            name: 'description',
            content:
              "Alex Mourer's portfolio website. Front-End Developer, Designer, Creator, and Community Enthusiast.",
          },
          {
            property: 'og:description',
            content:
              "Alex Mourer's portfolio website. Front-End Developer, Designer, Creator, and Community Enthusiast.",
          },
        ],
      },
    },
    {
      path: '/community',
      name: 'community',
      component: () => import('./views/Community.vue'),
    },
  ],
});
