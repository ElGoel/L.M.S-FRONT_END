<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import navigation from '../../config/navigation';
import MainMenu from '@/components/navigation/MainMenu.vue';
import { mapState } from '@/utils/maps';
const nav = ref(navigation);

const { customizeTheme } = mapState();

onMounted(() => {
  scrollToBottom();
});

const scrollToBottom = () => {
  const contentArea = document.querySelector('.v-navigation-drawer__content');
  const activeItem = document.querySelector(
    '.v-list-item--active'
  ) as HTMLElement;

  setTimeout(() => {
    contentArea?.scrollTo({
      top: activeItem?.offsetTop,
    });
  }, 100);
};
</script>

<template>
  <v-navigation-drawer
    id="mainMenu"
    v-model="customizeTheme.mainSidebar"
    border="none"
    elevation="1">
    <!-- ---------------------------------------------- -->
    <!---Top Area -->
    <!-- ---------------------------------------------- -->
    <template v-if="!customizeTheme.miniSidebar" #prepend>
      <v-card
        style="box-shadow: rgba(0, 0, 0, 0.05) 0px 25px 15px -20px"
        height="100"
        class="d-flex align-center justify-center">
        <img
          v-if="customizeTheme.darkTheme"
          width="200"
          src="@/assets/logoLivestock.svg"
          alt="" />
        <img v-else width="200" src="@/assets/logoLivestock.svg" alt="" />
      </v-card>
    </template>

    <!-- ---------------------------------------------- -->
    <!---Nav List -->
    <!-- ---------------------------------------------- -->

    <main-menu :menu="nav.menu"></main-menu>
  </v-navigation-drawer>
</template>

<style scoped lang="scss"></style>
