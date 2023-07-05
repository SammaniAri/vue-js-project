<!-- @format -->

<template>
	<div class="card p-2">
		<div
			class="container flex items-center flex-col bg-[#a1a1aa] w-64 h-64 rounded-lg p-4">
			<div
				class="picture rounded-full bg-[#71717a] w-24 h-24 m-2">
				<img
					:src="props.profilePicture" />
			</div>
			<div class="p-2">
				<strong>
					{{ props.firstName }}
					<span>
						{{ props.lastName }}</span
					>
				</strong>
			</div>
			<button
				v-on:click="GetEmail"
				class="rounded-full bg-[#71717a] opacity-25 hover:bg-sky-700 w-24">
				Contact</button
			>

			<div v-show="showEmail">
				{{ props.contactInfo }}
			</div>
			<div v-show="showEmail"> </div>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	profilePicture: { type: String },
	contactInfo: {
		type: String,
	},
});
let showEmail = ref(false);
const GetEmail = () => {
	showEmail.value = true;
};
</script>
<style>
h1 {
	margin: 40px 0 0;
}
</style>
