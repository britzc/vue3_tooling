<script setup>
import { onMounted } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

import storeUrl from '/pinia.svg'

onMounted(() => {
	document.getElementById('store_logo').src = storeUrl

	const fileName = "data"
	import(`./assets/${fileName}`).then((content) => {
		const data = content.default.data
		document.getElementById('debug').innerHTML = data.lastName
	})
})
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
		<img id="store_logo" class="logo" />
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
	<div id="debug"></div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
