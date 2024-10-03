<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-200">
    <div class="bg-white rounded-lg shadow-lg p-6 w-96">
      <!-- Header -->
      <div class="flex justify-between items-center border-b pb-3">
        <div class="flex items-center">
          <!-- SVG Icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M9 1.5C7.51664 1.5 6.06659 1.93987 4.83323 2.76398C3.59986 3.58809 2.63856 4.75943 2.07091 6.12987C1.50325 7.50032 1.35472 9.00832 1.64411 10.4632C1.9335 11.918 2.64781 13.2544 3.6967 14.3033C4.7456 15.3522 6.08197 16.0665 7.53683 16.3559C8.99168 16.6453 10.4997 16.4967 11.8701 15.9291C13.2406 15.3614 14.4119 14.4001 15.236 13.1668C16.0601 11.9334 16.5 10.4834 16.5 9C16.4978 7.01154 15.7069 5.10516 14.3009 3.69911C12.8948 2.29306 10.9885 1.50218 9 1.5ZM9 12.75C8.85167 12.75 8.70666 12.706 8.58332 12.6236C8.45999 12.5412 8.36386 12.4241 8.30709 12.287C8.25033 12.15 8.23547 11.9992 8.26441 11.8537C8.29335 11.7082 8.36478 11.5746 8.46967 11.4697C8.57456 11.3648 8.7082 11.2933 8.85368 11.2644C8.99917 11.2355 9.14997 11.2503 9.28701 11.3071C9.42406 11.3639 9.54119 11.46 9.6236 11.5833C9.70602 11.7067 9.75 11.8517 9.75 12C9.75 12.1989 9.67098 12.3897 9.53033 12.5303C9.38968 12.671 9.19891 12.75 9 12.75ZM9.75 9.75C9.75 9.94891 9.67098 10.1397 9.53033 10.2803C9.38968 10.421 9.19891 10.5 9 10.5C8.80109 10.5 8.61032 10.421 8.46967 10.2803C8.32902 10.1397 8.25 9.94891 8.25 9.75V6C8.25 5.80109 8.32902 5.61032 8.46967 5.46967C8.61032 5.32902 8.80109 5.25 9 5.25C9.19891 5.25 9.38968 5.32902 9.53033 5.46967C9.67098 5.61032 9.75 5.80109 9.75 6V9.75Z"
              fill="#C81E1E"
            />
          </svg>

          <!-- Text and Icon -->
          <div class="flex items-center text-red-600 ml-2">
            <i class="fas fa-exclamation-circle mr-2"></i>
            <span class="font-semibold">Hapus Akun</span>
          </div>
        </div>

        <!-- Close Button -->
        <button class="text-gray-500 hover:text-gray-700" >
          <i class="fas fa-times"></i>
        </button>
      </div>

      <!-- Message -->
      <div class="mt-4 text-gray-500">
        <p>Apakah Anda yakin ingin menghapus Akun ini? Tindakan ini tidak dapat dibatalkan.</p>
      </div>

      <!-- Checkbox -->
      <div class="mt-4 flex items-center">
        <input
          type="checkbox"
          id="deleteAccount"
          
          class="form-checkbox h-5 w-5 text-pink-600 checked:bg-pink-600 focus:ring-pink-600"
        />
        <label for="deleteAccount" class="ml-2">Ya, Hapus Akun</label>
      </div>

      <!-- Buttons -->
      <div class="mt-6 flex justify-end space-x-4">
        <button
          class="px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
         
        >
          Kembali
        </button>
        <button
          class="px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700"
          
        >
          Simpan
        </button>
      </div>
    </div>
  </div>
</template>
