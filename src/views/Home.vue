<!-- @format -->

<template>
	<div
		class="flex flex-wrap my-8 gap-1 mx-16">
		<CardComponent /> <CardComponent />
	</div>
</template>
<script setup>
import { onMounted } from "vue";
import CardComponent from "../components/CardComponent.vue";
import axiosClient from "../views/axiosClient.js";
onMounted(async () => {
	const response =
		await axiosClient.get("/");
	console.log(response.data);
});
</script>
<style scoped></style>
