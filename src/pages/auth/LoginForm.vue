
<route lang="yaml">
  meta:
    layout: blank
  </route>

<script setup lang="ts">
import { useHttpMutation } from '@/composables/http/http';
import { useMessage } from 'naive-ui';
import { ref } from 'vue';

const message = useMessage()
const {mutate,isPending} =useHttpMutation('/v1/auth/user/sign-in',{
  method:"POST",
  queryOptions:{
    onSuccess:() => {
      message.success("Login berhasil")
    }, onError:() => {
      message.error("Password atau email anda salah")
    }
  }
})
const formData = ref({
  
  "email": "string",
  "password": "string"

})
const handleSubmit= () => {
  mutate(formData.value)
}
</script>

<template>
  <div class="flex min-h-screen">
    <!-- Left Side (Form) -->
    <div class="w-1/2 flex justify-center items-center bg-white">
      <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 class="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Masuk
        </h2>
        <p class="text-center font-medium leading-9 text-gray-500">
          Silahkan Masukan Email dan Password Anda
        </p>

        <form class="space-y-6 mt-10" @submit.prevent="handleSubmit">
          <!-- Email -->
          <div>
            <div class="flex items-center justify-between">
              <label
                for="email"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Email</label
              >
            </div>
            <div class="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <!-- Password -->
          <div>
            <div class="flex items-center justify-between">
              <label
                for="password"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Password</label
              >
            </div>
            <div class="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <!-- Button and Lupa Password Container -->
          <div class="flex justify-between items-center mt-2">
            <n-button :loading="isPending" attr-type="submit" type="primary" size="medium">
              Masuk
            </n-button>
            

            <RouterLink to="/auth/forgot-password" class="font-semibold text-pink-600 hover:text-pink-500">
              Lupa Kata Sandi ?
            </RouterLink>
          </div>
          <div class="flex justify-center items-center">
            <p>Belum punya akun?
            <RouterLink to="/auth/registration-form" class="font-semibold text-pink-600 hover:text-pink-500">
              Daftar
            </RouterLink>
          </p>
          </div>
        </form>
      </div>
    </div>

    <!-- Right Side (Image) -->
    <div class="w-1/2 hidden md:block">
      <img
        src="/img1.jpeg"
        alt="Placeholder Image"
        class="h-screen w-full object-cover"
      />
    </div>
  </div>
</template>


<!-- <script>
export default {
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    login() {
      // Validasi email dan password
      if (this.email === "admin@example.com" && this.password === "password") {
        alert("Login successful!");
        this.errorMessage = "";
      } else {
        this.errorMessage = "Invalid email or password";
      }
    },
  },
};
</script>

<style scoped>
.login-form {
  width: 300px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 15px;
}

input {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #42b983;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #38a773;
}

.error {
  color: red;
  margin-top: 10px;
}
</style> -->
