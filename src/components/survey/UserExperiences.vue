<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadMore">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading data</p>
      <ul v-else-if="!isLoading && results.length > 0">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
      <p v-else-if="!isLoading && error">{{ error }}</p>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';
import axios from 'axios';

export default {
  data() {
    return {
      results: [],
      isLoading: false,
      error: null,
    };
  },
  components: {
    SurveyResult,
  },
  methods: {
    async loadMore() {
      try {
        this.isLoading = true;
        this.error = null;
        const res = await axios.get('http://localhost:3000/survey/');
        this.isLoading = false;
        this.results = res.data;
      } catch (error) {
        this.isLoading = false;

        this.error = error.message;
      }
    },
  },
  mounted() {
    this.loadMore();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
