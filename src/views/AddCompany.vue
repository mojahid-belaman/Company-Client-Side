<template>
	<div v-if="!isLogged">
		<button> <router-link to="/signin">Go to Sign-In</router-link></button>
	</div>
    <div v-else class="w-full h-full flex justify-center items-center bg-[azure]" style="height: 100vh;">
		<div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-wrap gap-4 w-[fit-content] h-[fit-content]">
			<div class="w-full">
			  <label class="block text-grey-darker text-sm font-bold mb-2" for="name">
				Company Name
			  </label>
			  <input v-model="cname" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="name" type="text" placeholder="Username">
			</div>

			<div class="flex w-full gap-2">
				<div class="w-full">
				  <label class="block text-grey-darker text-sm font-bold mb-2" for="email">
					Email
				  </label>
				  <input v-model="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="email" type="text" placeholder="Username">
				</div>
	
				<div class="w-full">
				  <label class="block text-grey-darker text-sm font-bold mb-2" for="address">
					Address
				  </label>
				  <input v-model="address"  class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="address" type="text" placeholder="Username">
				</div>
			</div>

			<div class="flex w-full gap-2">
				<div class="w-full">
				  <label class="block text-grey-darker text-sm font-bold mb-2" for="start-date">
					Start date
				  </label>
				  <input type="date" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="start-date" placeholder="start date">
				</div>
	
				<div class="w-full">
				  <label class="block text-grey-darker text-sm font-bold mb-2" for="end-date">
					Fiscal year end date
				  </label>
				  <input type="date" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="end-date" placeholder="end date">
				</div>
			</div>

			<div class="w-full">
				<label class="block text-grey-darker text-sm font-bold mb-2" for="status">
				  Status
				</label>
				<select name="status" id="status" class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3">
				  <option value="active">Active</option>
				  <option value="disable">Disabled</option>
				</select>
			</div>

			<div class="flex items-center justify-center w-full">
			  <button class="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded" type="button" @click="addCompany" >
				Submit
			  </button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: "AddCompany",
  data: function () {
    return {
      isLogged: false,
	  cname: '',
	  address:'',
	  email:'',
    }
  },
   methods: {
	  addCompany: function (){
		  this.$store.dispatch('addCompany', {
			  company: {
				cname: this.cname,
				address: this.address,
				email:this.email, 
			  }
		  });
	  },
  },
   mounted() {
    this.isLogged = this.$store.state.isLogged;
  }
};
</script>


<style>
  @import '../assets/style.css';
</style>