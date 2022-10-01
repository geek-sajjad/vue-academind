import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';

const app = createApp(App);
const router = createRouter({
  routes: [
    {
      path: '/teams',
      component: TeamsList,
    },
    {
      path: '/teams/:teamId',
      component: TeamMembers,
    },
    {
      path: '/users',
      component: UsersList,
    },
  ],
  history: createWebHistory(),
  linkActiveClass: 'active',
});

app.use(router);
app.mount('#app');
