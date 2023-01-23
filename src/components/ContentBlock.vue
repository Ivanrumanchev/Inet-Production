<template>
  <v-container>
    <v-row
        align="center"
        justify="center"
        class="ma-4"
    >
      <v-col cols="12">
        <v-img
            :src="require('../assets/logo.svg')"
            class="my-3"
            contain
            height="200"
        />
      </v-col>

      <v-col
          cols="12"
          md="4"
      >
        <custom-filter />
      </v-col>

      <v-col
          cols="12"
          md="6"
      >
        <custom-user-list />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import CustomFilter from './custom-filter';
  import CustomUserList from './custom-user-list';

  export default {
    name: 'ContentBlock',

    components: {
      CustomFilter,
      CustomUserList,
    },
  }
</script>
