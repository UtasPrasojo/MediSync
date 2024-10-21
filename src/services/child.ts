import { API } from '@/composables/http/api-constant'
import { useHttpMutation, useHttp } from '@/composables/http/http'
import { createDiscreteApi } from 'naive-ui'
import { unref, type Ref } from 'vue'
import { useRouter } from 'vue-router'


const { message } = createDiscreteApi(
    ['message'],
  )

  export const useReadChild =() => useHttp(API.USER_GET_CHILD, {

  })
  
  export const useUserChildRegistration =() => {
    const router = useRouter()
    return useHttpMutation(API.USER_POST_CHILD, {
      method: 'POST',
      queryOptions: {
        onSuccess: () => {
          message.success('Registrasi anak berhasil')
          router.push('/user/setting-data-child')
        },
        onError: (error) => {
         
          message.error(error.data.message)
        }
      }
    })
  }

  export const useUserPutChild =(
    id: Ref<string>  ) => {
    const router = useRouter()
    return useHttpMutation(API.USER_PUT_CHILD.replace('{id}', unref(id)), {
      method: 'PUT',
      queryOptions: {
        onSuccess: () => {
          message.success('Update Data anak berhasil')
          router.push('/user/setting-data-child')
        },
        onError: () => {
          message.error('Update Data anak gagal')
        }
      }
    })
  }

  export const useUserDeleteChild =(
    id:string  ) => {
    const router = useRouter()
    return useHttpMutation(API.USER_DELETE_CHILD.replace('{id}',id), {
      method: 'DELETE',
      queryOptions: {
        onSuccess: () => {
          message.success('Hapus Data anak berhasil')
          router.push('/user/setting-data-child')
        },
        onError: () => {
          message.error('Hapus Data anak gagal')
        }
      }
    })
  }