<template>
  <main>
    <Loader v-if="control.loading" />
    <div v-else class="grid">
      <div class="article" v-for="(article, index) in articles" :key="index">
        <div class="title" :title="article.title">
          <a :href="article.url">
            {{ article.title }}
          </a>
        </div>
        <div class="published">
          {{ formatDate(new Date(article.publishedAt)) }}
          <a :href="article.url" :title="article.title">
            <img v-if="article.urlToImage" class="m-t-10" :src="article.urlToImage" :alt="article.title" />
            <img v-else class="m-t-10" src="@/assets/images/img-not-available.png" :alt="article.title" />
          </a>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios';

import Loader from '@/components/helpers/Loader';

export default {
  name: 'Main',
  components: { Loader },
  data() {
    return {
      articles: [],
      apiLang: localStorage.getItem('apiLang'),
      control: {
        loading: false,
      },
    };
  },
  watch: {
    apiLang() {
      this.loadArticles();
    },
  },
  created() {
    this.emitter.on('change-language', apiLang => (this.apiLang = apiLang));
  },
  mounted() {
    this.loadArticles();
  },
  methods: {
    formatDate(date) {
      const locale = localStorage.getItem('locale');

      const year = new Intl.DateTimeFormat('locale', { year: 'numeric' }).format(date);

      const unformattedMonth = new Intl.DateTimeFormat('locale', { month: 'short' }).format(date).substring(0, 3);

      const month = unformattedMonth.charAt(0).toUpperCase() + unformattedMonth.slice(1);

      const day = new Intl.DateTimeFormat('locale', { day: '2-digit' }).format(date);

      if (locale === 'pt-br') {
        return `${day} ${month}, ${year}`;
      }

      return `${month} ${day}, ${year}`;
    },
    async loadArticles() {
      this.control.loading = true;

      const apiKey = 'b77b5110977542929e989d6d049e222d';

      const response = await axios.get(
        `http://newsapi.org/v2/top-headlines?country=${this.apiLang}&category=entertainment&pageSize=100&apiKey=${apiKey}`
      );

      this.control.loading = false;

      this.articles = response.data.articles;
    },
  },
};
</script>

<style lang="scss" scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 330px));
  grid-gap: 50px;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  width: 80vw;
}

.article {
  display: flex;
  padding: 20px;
  flex-direction: column;
  height: 360px;
  background: var(--secondary-background-color);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  justify-content: space-between;
  box-shadow: 0 8px 24px 0 var(--box-shadow);
  transition: box-shadow 0.1s linear;

  &:hover {
    border: 1px solid var(--border-color-hover);
    box-shadow: 0 8px 24px 0 var(--box-shadow-hover);
  }

  .title {
    a {
      display: flex;
      color: var(--primary-text-color);
      text-align: start;
      font-size: 0.875rem;
      text-decoration: none;
    }
  }

  .published {
    color: var(--published-text-color);
    text-align: left;
    font-size: 0.7rem;
    font-weight: 500;

    img {
      width: 100%;
      height: 150px;
      border-radius: 10px;
    }
  }
}
</style>
