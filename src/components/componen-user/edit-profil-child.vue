<script setup lang="ts">
import { computed, ref } from 'vue'
import { useUserDeleteChild } from '@/services/child'

const props = defineProps<{
  id: string
  onRefetch: () => void
}>()

// Define the showModal reactive reference
const options = [
  {
    label: 'Edite Profile Anak',
    key: 'editProfile'
  },
  {
    label: 'QR Pemeriksaan',
    key: 'QR'
  },
  {
    label: 'Hapus',
    key: 'delete'
  }
]
const emits = defineEmits<{
  (e: 'onRefetch'): void
}>()
// Handler untuk menangani klik opsi

const editProfilChild = ref(false)
const { mutate,  } = useUserDeleteChild(
  props.id
)
const handleOptionClick = (key: string) => {
  if (key === 'editProfile') {
    editProfilChild.value = true // Buka modal edit profil
  } else if (key === 'delete') {
    handleDelete(props.id) // Panggil fungsi delete
  }
}

const handleDelete = async (id: any) => {
  const confirmDelete = confirm('Apakah kamu yakin ingin menghapus data ini?')
  if (!confirmDelete) return
  console.log(props)
  try {
    // Panggil API useUserDeleteChild dengan ID anak
  mutate(id, {
    onSuccess: () => {
      props.onRefetch()
    }
  })
    console.log(id)
    alert('Data anak berhasil dihapus.')
    // Tambahkan logika jika perlu, seperti refresh data atau navigasi ulang

  } catch (error) {
    console.error('Error menghapus data:', error)
    alert('Terjadi kesalahan saat menghapus data anak.')
  }
}
</script>

<template>
  <n-dropdown :options="options" @select="handleOptionClick">
    <n-button>
      <i-mage:dots></i-mage:dots>
    </n-button>
  </n-dropdown>

  <n-modal v-model:show="editProfilChild" :on-after-leave="() => (editProfilChild = false)">
    <modal-input-user-edit-data-child :id="$props.id" @close="editProfilChild = false" />
  </n-modal>
</template>
