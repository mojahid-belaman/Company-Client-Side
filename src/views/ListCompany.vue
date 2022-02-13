<template>
	<div v-if="!isLogged">
	<button> <router-link to="/signin">Go to Sign-In</router-link></button>
	</div>
    <div v-else class="w-full h-full flex justify-center items-center bg-[azure]" style="height: 100vh;">
		<div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-wrap gap-4 w-[fit-content] h-[fit-content]">
			<table class="table-fixed">
				<thead>
					<tr class="bg-blue-700 text-center">
						<th class="w-1/6 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4 border-l border-transparent">name</th>
						<th class="w-1/6 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4 border-l border-transparent">email</th>
						<th class="w-1/6 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4 border-l border-transparent">address</th>
						<th class="w-1/6 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4 border-l border-transparent">start date</th>
						<th class="w-1/6 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4 border-l border-transparent">end date</th>
						<th class="w-1/6 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4 border-l border-transparent">status</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(item, index) in companies" :key="index">
						<td class="border-b border-[#E8E8E8] py-5 px-2 text-center font-medium">{{item.cname}}</td>
						<td class="border-b border-[#E8E8E8] py-5 px-2 text-center font-medium">{{item.email}}</td>
						<td class="border-b border-[#E8E8E8] py-5 px-2 text-center font-medium">{{item.address}}</td>
						<td class="border-b border-[#E8E8E8] py-5 px-2 text-center font-medium">lorem</td>
						<td class="border-b border-[#E8E8E8] py-5 px-2 text-center font-medium">lorem</td>
						<td class="border-b border-[#E8E8E8] py-5 px-2 text-center font-medium">lorem</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
export default {
  name: "ListCompany",
 data: function () {
    return {
      isLogged: false,
	  companies: [],
    }
  },
  mounted() {
    this.isLogged = this.$store.state.isLogged;
	this.companies = this.$store.state.companies;
  }
};
</script>

<style>
  @import '../assets/style.css';
</style>