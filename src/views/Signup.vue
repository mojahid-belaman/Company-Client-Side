<template>
    	<div class="w-full h-full flex justify-center items-center bg-[azure]" style="height: 100vh;">
		<div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col gap-4 w-[fit-content] h-[fit-content]">
			<div class="mb-4">
			  <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
				Email
			  </label>
			  <input v-model="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Email">
			</div>
			<div class="mb-6">
			  <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
				Password
			  </label>
			  <input v-model="password" class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************">
			</div>
			<div class="mb-6">
			  <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
				Confirm Password
			  </label>
			  <input v-model="confirmPassword" class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************">
			  <p class="text-red text-xs italic">Please confirm your password.</p>
			</div>
			<div class="mb-6">
			  <label class="block text-grey-darker text-sm font-bold mb-2" for="role">
				Role
			  </label>
			  <select name="role" id="role" class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3">
				<option value="manager">Manager</option>
				<option value="consultant">Consultant</option>
			  </select>
			</div>
			<div class="flex items-center justify-between">
			  <button class="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded" type="button" @click="onClick">
				Sign Up
			  </button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: "SignUp",
data: function () {
    return {
      email: '',
	  password: '',
	  confirmPassword: '',
    }
  },
  methods: {
	  onClick: function (e){
		  if (this.email.length > 0 && this.password.length > 0 && this.password ===  this.confirmPassword)
		  	this.$store.commit('setLogged');
			this.$router.push({ path: '/add-company' });
	  },
  }
};
</script>

<style>
  @import '../assets/style.css';
</style>