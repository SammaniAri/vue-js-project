<!-- @format -->

<template>
	<div
		class="flex flex-wrap my-8 gap-1 mx-16">
		<CardComponent
			v-for="employee of employeeInformation"
			:firstName="employee.first_name"
			:lastName="employee.last_name"
			:profilePicture="employee.avatar"
			:contactInfo="employee.email" />
	</div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import CardComponent from "../components/CardComponent.vue";
import axiosClient from "../views/axiosClient.js";

let employeeInformation = ref([]);
onMounted(async () => {
	const response =
		await axiosClient.get("/");
	console.log(response.data.data);

	employeeInformation.value =
		response.data.data;
});
</script>
<style scoped></style>
