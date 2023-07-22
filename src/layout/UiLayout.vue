<script setup lang="ts">
import Breadcrumb from '@/components/BreadcrumbComponent.vue';
import PageTitle from '@/components/PageTitle.vue';
import MainSidevar from '@/components/navigation/MainSidebar.vue';
import MainAppbar from '@/components/toolbar/MainAppbar.vue';
import { mapState } from '@/utils/maps';
const { customizeTheme } = mapState();
</script>

<template>
  <!-- ---------------------------------------------- -->
  <!---Main Sidebar -->
  <!-- ---------------------------------------------- -->
  <MainSidevar />
  <!-- ---------------------------------------------- -->
  <!---Top AppBar -->
  <!-- ---------------------------------------------- -->
  <MainAppbar />
  <!-- ---------------------------------------------- -->
  <!---MainArea -->
  <!-- ---------------------------------------------- -->
  <v-main
    v-touch="{
      left: () => (customizeTheme.mainSidebar = false),
      right: () => (customizeTheme.mainSidebar = true),
    }"
    class="main-container">
    <div class="d-none d-sm-block px-3">
      <PageTitle></PageTitle>
      <Breadcrumb></Breadcrumb>
    </div>

    <div class="flex-fill">
      <slot></slot>
    </div>
  </v-main>
</template>

<style scoped>
.scrollnav {
  height: calc(100vh - 326px);
}

.main-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
