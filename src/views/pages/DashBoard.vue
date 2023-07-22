<script setup lang="ts"></script>
<template>
  <div class="pa-5">
    <!-- ---------------------------------------------- -->
    <!---First Row -->
    <!-- ---------------------------------------------- -->
    <v-row class="flex-0" dense>
      <v-col cols="12" xl="4">
        <!-- Sales Card -->
        <v-card class="card-shadow" height="420">
          <!-- <sales-card></sales-card> -->
          <!-- <sales-card
            :value="1837.32"
            class="h-100"
            :percentage="3.2"
            style="min-height: 380px"
            :percentage-label="dashboard.lastweek"
            :action-label="dashboard.viewReport"></sales-card> -->
        </v-card>
      </v-col>
      <v-col cols="12" md="6" xl="4">
        <!-- Activity Card -->
        <v-card class="card-shadow" height="420"> </v-card>
      </v-col>
      <v-col cols="12" md="6" xl="4">
        <!-- Trafiic Card-->
        <v-card class="card-shadow h-full" height="420"> </v-card>
      </v-col>
    </v-row>
    <!-- ---------------------------------------------- -->
    <!---Second Row -->
    <!-- ---------------------------------------------- -->
    <v-row class="card-shadow flex-grow-0" dense>
      <v-col cols="12" xl="6">
        <!-- Table Card-->
        <v-card class="card-shadow" height="420"> </v-card>
      </v-col>
      <v-col cols="12" xl="6">
        <!-- Task Card-->
        <v-card class="card-shadow" height="420"> </v-card>
      </v-col>
    </v-row>
    <!-- ---------------------------------------------- -->
    <!---Third Row -->
    <!-- ---------------------------------------------- -->
    <v-row class="card-shadow flex-grow-0" dense>
      <v-col cols="12" xl="6">
        <!-- Target Card-->
        <v-card class="card-shadow" height="420"></v-card>
      </v-col>
      <v-col cols="12" xl="6">
        <v-card class="card-shadow" height="420"></v-card>
      </v-col>
    </v-row>
  </div>
</template>
<style lang="scss" scoped></style>
