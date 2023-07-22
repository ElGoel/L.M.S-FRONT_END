<template>
  <v-breadcrumbs
    v-if="breadcrumbs.length > 0"
    :items="breadcrumbs"
    class="ml-n3 text-body-2">
  </v-breadcrumbs>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { RouteLocationRaw, useRoute } from 'vue-router';

interface LinkProps {
  href: string | undefined;
  replace: boolean | undefined;
  to: RouteLocationRaw | undefined;
  exact: boolean | undefined;
}

type BreadcrumbItem =
  | string
  | (Partial<LinkProps> & {
      title: string;
      disabled?: boolean;
    });

const route = useRoute();

const breadcrumbs = ref<BreadcrumbItem[]>([]);

watchEffect(() => {
  if (route.meta && route.meta.title) {
    breadcrumbs.value = [
      {
        title: route.meta.category as string,
        disabled: false,
      },
      { title: route.meta.title as string, disabled: true },
    ];
  } else {
    breadcrumbs.value = [];
  }
});
</script>
