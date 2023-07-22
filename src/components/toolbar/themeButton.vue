<template>
  <div class="theme-area">
    <div v-if="customizeTheme.darkTheme" class="px-3 py-3">
      <v-btn
        icon
        elevation="2"
        color="grey-darken-5"
        class="text-white"
        @click="customizeTheme.darkTheme = !customizeTheme.darkTheme">
        <Icon width="30" icon="line-md:moon-filled-loop" />
      </v-btn>
      <span class="ml-5">Dark Mode</span>
    </div>
    <div v-else class="px-3 py-3">
      <v-btn
        elevation="2"
        icon
        color="white"
        class="text-red"
        @click="customizeTheme.darkTheme = !customizeTheme.darkTheme">
        <Icon
          width="30"
          icon="line-md:moon-filled-alt-to-sunny-filled-loop-transition" />
      </v-btn>
      <span class="ml-5">Light Mode</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { mapState } from '@/utils/maps';

const { customizeTheme } = mapState();
</script>
