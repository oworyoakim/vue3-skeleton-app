<template>
  <div class="mt-1">
    <h1>This is the home page!</h1>
    <p>
      Laravel Sanctum, formerly known as Airlock, is a Laravel package created for the authentication of Single Page Applications (SPAs), mobile applications, and basic token-based APIs. It can be used to issue API Tokens to your users and authenticate Single Page Applications using Laravel’s session. Laravel Sanctum poses as a simple alternative to the existing Laravel Passport package. Here are some reasons you might want to choose Sanctum over Passport:
    </p>
    <ExampleComponent/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ExampleComponent from '@/components/ExampleComponent.vue';

export default defineComponent({
  name: 'Home',
  components: {
    ExampleComponent,
  },
});
</script>
