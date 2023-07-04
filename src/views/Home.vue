<!-- @format -->

<template>
	<div
		class="flex flex-wrap my-8 gap-1 mx-16">
		<CardComponent
			:firstName="'Sansa'"
			:lastName="'Stark'"
			:profilePicture="'https://i.pinimg.com/736x/71/31/de/7131deb4cc193c21af260e6effcf73c1.jpg'"
			:contactInfo="' contact'" />
		<CardComponent
			:firstName="'Ned'"
			:lastName="'Stark'"
			:profilePicture="'https://i.pinimg.com/736x/71/31/de/7131deb4cc193c21af260e6effcf73c1.jpg'"
			:contactInfo="' contact'" />
		<CardComponent
			:firstName="'Grey'"
			:lastName="'Worm'"
			:profilePicture="'https://i.pinimg.com/736x/71/31/de/7131deb4cc193c21af260e6effcf73c1.jpg'"
			:contactInfo="' contact'" />
		<CardComponent
			:firstName="'Tyrion'"
			:lastName="'Lannister'"
			:profilePicture="' '"
			:contactInfo="' contact'" />
		<CardComponent
			:firstName="'Arya'"
			:lastName="'Stark'"
			:profilePicture="' '"
			:contactInfo="' contact'" />
		<CardComponent
			:firstName="'Jamie'"
			:lastName="'Lannister'"
			:profilePicture="' '"
			:contactInfo="' contact'" />
	</div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import CardComponent from "../components/CardComponent.vue";
import axiosClient from "../views/axiosClient.js";

const firstName = ref([]);

onMounted(async () => {
	const response =
		await axiosClient.get("/");
	console.log(response.data.data);
	firstName.value = response.data.data;
});
</script>
<style scoped></style>
