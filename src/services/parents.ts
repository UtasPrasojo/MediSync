import { API } from '@/composables/http/api-constant'
import { useHttpMutation, useHttp } from '@/composables/http/http'
import { createDiscreteApi } from 'naive-ui'
import { unref, type Ref } from 'vue'
import { useRouter } from 'vue-router'

const { message } = createDiscreteApi(
    ['message'],
  )

  export const useUserParentAddData =() => {
    const router = useRouter()
    return useHttpMutation(API.USER_POST_PARENT, {
      method: 'POST',
      queryOptions: {
        onSuccess: () => {
          message.success('Registrasi anak berhasil')
          router.push('/user/setting-account')
        },
        onError: (error) => {
         
          message.error(error.data.message)
        }
      }
    })
  }

  export const useReadParent =() => useHttp(API.USER_GET_PARENT, {

  })

  export const useReadParentID =() => useHttp(API.USER_GET_PARENT_ID, {

  })

  export const useUserDeleteParent =(
    id:string  ) => {
    const router = useRouter()
    return useHttpMutation(API.USER_DELETE_PARENT_ID.replace('{id}',id), {
      method: 'DELETE',
      queryOptions: {
        onSuccess: () => {
          message.success('Hapus Data Orang Tua berhasil')
          router.push('/user/setting-data-child')
        },
        onError: () => {
          message.error('Hapus Data Orang Tua gagal')
        }
      }
    })
  }

  export const useUserPutParent =(
    id: Ref<string>  ) => {
    const router = useRouter()
    return useHttpMutation(API.USER_PUT_PARENT_ID.replace('{id}', unref(id)), {
      method: 'PUT',
      queryOptions: {
        onSuccess: () => {
          message.success('Update Data Orang Tua berhasil')
          router.push('/user/setting-data-parent')
        },
        onError: () => {
          message.error('Update Data Orang Tua gagal')
        }
      }
    })
  }