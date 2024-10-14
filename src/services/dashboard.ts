import { createDiscreteApi } from 'naive-ui'
import { useHttpMutation } from '@/composables/http/http'
import {API} from '@/composables/http/api-constant'

const { message } = createDiscreteApi(
    ['message'],
  )

  console.log(API.USER_POST)

  export const useUserPost = () => useHttpMutation(API.USER_POST, {
    method: 'POST',
    queryOptions: {
      onSuccess: () => {
        message.success('Login berhasil')
      },
      onError: (error) => {
        // message.error('Password atau email anda salah')
        message.error(error.data.message)
      }
    }
  })