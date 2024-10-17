
<script setup lang="ts">
import { useAuthProfile } from '@/services/auth';



const { data } = useAuthProfile()

</script>


<template>
    
    <div class=" justify-end items-center my-4 mr-8 hidden md:flex">
        <div class="flex items-center space-x-4">
          <i class="fas fa-bell text-xl"></i>
          <div class="flex items-center space-x-2">
            <ui-avatar :seed="data?.fullName" />
            <span class="font-medium">{{ data?.fullName }}</span>
          </div>
        </div>
      </div>

</template>