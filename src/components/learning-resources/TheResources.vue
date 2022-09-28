<template>
  <base-card>
    <base-button
      :mode="storedResButtonMode"
      v-on:click="setSelectedTab('stored-resources')"
      >Stored Resources</base-button
    >
    <base-button
      :mode="addResButtonMode"
      v-on:click="setSelectedTab('add-resource')"
      >Add Resource</base-button
    >
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';
export default {
  components: {
    StoredResources,
    AddResource,
  },
  data() {
    return {
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.org',
        },
      ],
      selectedTab: 'stored-resources',
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(res) {
      this.storedResources.unshift(res);
      this.selectedTab = 'stored-resources';
    },
    deleteResource(resId) {
      // this.storedResources = this.storedResources.filter((r) => {
      //   r.id !== res.id;
      // });
      // the up method not work's beacause it changes the refrence address of provided resources.

      const resIndex = this.storedResources.findIndex(
        (res) => res.id === resId
      );
      this.storedResources.splice(resIndex, 1);
    },
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    addResButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    },
  },
  provide() {
    return {
      addResource: this.addResource,
      resources: this.storedResources,
      deleteResource: this.deleteResource,
    };
  },
};
</script>
