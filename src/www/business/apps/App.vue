<template>
    <div class="main">
        <router-view
                keep-alive
                transition="fade"
                transition-mode='out-in'></router-view>
    </div>
</template>

<script>
import '@static/styles/main.css';

export default {
  name: 'App'
};
</script>
