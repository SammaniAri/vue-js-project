<!-- @format -->

<template>
	<div
		class="flex justify-center flex-wrap my-32 gap-1 mx-16">
		<CardComponent
			v-for="employee of employeeInformation"
			:firstName="employee.first_name"
			:lastName="employee.last_name"
			:profilePicture="employee.avatar"
			:contactInfo="employee.email" />
	</div>
	<div class="flex justify-center">
		<PaginationComponent
			@page-click-event="loadData"
			:numberOfPages="pages" />
	</div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import CardComponent from "../components/CardComponent.vue";
import PaginationComponent from "../components/PaginationComponent.vue";
import axios from "axios";

let employeeInformation = ref([]);
let pages = ref([]);
onMounted(async () => {
	loadData(1);
});

function loadData(pageNumber) {
	axios
		.get(
			"https://reqres.in/api/users?page=" +
				pageNumber
		)
		.then((response) => {
			employeeInformation.value =
				response.data.data;
			pages = response.data.total_pages;
		});
}
</script>
