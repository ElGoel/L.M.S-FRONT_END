<script setup lang="ts">
// import CattleList from './components/CattleList.vue';
// import CattleForm from './components/CattleForm.vue';
import { computed } from 'vue';
import DefaultLayout from './layout/DefaultLayout.vue';
import UiLayout from './layout/UiLayout.vue';
import { mapState } from './utils/maps';
import { useRoute } from 'vue-router';
import FlotingAlert from './components/alerts/FlotingAlert.vue';

const { customizeTheme } = mapState();

// const dialog = ref(false);

const layouts = {
  default: DefaultLayout,
  ui: UiLayout,
};

const route = useRoute();

const isRouterLoaded = computed(() => {
  if (route.name !== null) return true;
  return false;
});

type LayoutName = 'default' | 'ui';

const currentLayout = computed(() => {
  const layoutName = route.meta.layout as LayoutName;
  if (!layoutName) {
    return DefaultLayout;
  }
  return layouts[layoutName];
});
</script>

<template>
  <v-app :theme="customizeTheme.darkTheme ? 'dark' : 'light'">
    <FlotingAlert />
    <component :is="currentLayout" v-if="isRouterLoaded">
      <router-view></router-view>
    </component>
  </v-app>
</template>
