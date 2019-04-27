<template>
  <div class="learning">
    <h1>Here i keep some useful articles</h1>
    <div class="learning__wrapper">
      <div
        v-for="(article, $index) in usefulArticles"
        :key="$index"
        class="learning__article-card-wrapper"
      >
        <a
          :href="article.link"
          target="_blank"
          class="learning__article-card">
          <div class="learning__article-title-wrapper">
            <div class="learning__article-title">
              {{article.title}}
            </div>
            <!--<a
              class="learning__article-link"
              :href="article.link"
              target="_blank">
              <icon-base class="learning__article-link-icon" :icon-name="'Open link'">
                <icon-link>
                </icon-link>
              </icon-base>
            </a>-->
          </div>
          <div class="learning__article-description">
            {{article.description}}
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  // import IconLink from '@/components/icons/IconLink'
  // import IconBase from '@/components/icons/IconBase'

  export default {
    data() {
      return {
        usefulArticles: [
          {
            title: 'ES6 — Map vs Object — What and when?',
            description: 'Introduction to "Map" javascript type. The difference between "Map" and "Object" types. When to use.',
            link: 'https://medium.com/front-end-weekly/es6-map-vs-object-what-and-when-b80621932373',
            priority: 0,
          },
          {
            title: 'Vue.js guide',
            description: 'Official vue guide. Every time I read it I learn something new. Most useful one.',
            link: 'https://vuejs.org/v2/guide/',
            priority: 1,
          }
        ]
      }
    },
    components: {
      // IconBase,
      // IconLink
    }
  }
</script>
