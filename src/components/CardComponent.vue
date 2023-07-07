<!-- @format -->

<template>
	<div class="card p-2">
		<div
			class="container flex justify-center items-center flex-col bg-[#f3f4f6] w-48 h-48 rounded-lg p-4">
			<div class="picture">
				<img
					class="image"
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
				v-on:click="ToggleEmail"
				class="rounded-full bg-[#71717a] opacity-25 hover:bg-sky-700 w-24">
				<span v-if="showEmail">
					Hide
				</span>
				<span v-else> Contact </span>
			</button>
			<div v-show="showEmail">
				{{ props.contactInfo }}
			</div>
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
const ToggleEmail = () => {
	showEmail.value = !showEmail.value;
};
</script>
<style>
.picture {
	display: flex;
	justify-content: center;
	width: 50%;
	height: 50%;
}
.image {
	border-radius: 50%;
}
</style>
