<!-- @format -->

<template>
	<nav aria-label="Page navigation">
		<ul class="list-style-none flex">
			<li
				v-for="pageNumber in props.numberOfPages">
				<a
					class="text-base rounded bg-transparent px-3 py-1.5 text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
					href="#"
					v-on:click="
						loadApiData(pageNumber)
					">
					{{ pageNumber }}
				</a>
			</li>
		</ul>
	</nav>
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps({
	numberOfPages: {
		type: Number,
		required: true,
	},
});
const loadApiData = (no) => {
	alert("clicked" + no);
};
</script>
<style></style>
