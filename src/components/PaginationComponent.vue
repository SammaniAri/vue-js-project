<!-- @format -->

<template>
	<nav aria-label="Page navigation">
		<ul class="list-style-none flex">
			<li
				v-for="pageNumber in numberOfPages">
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
<script>
export default {
	props: {
		numberOfPages: Number,
	},
	methods: {
		loadApiData(no) {
			this.$emit(
				"page-click-event",
				no
			);
		},
	},
};
</script>
<style></style>
