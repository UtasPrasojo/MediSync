import { API } from '@/composables/http/api-constant'
import { useHttpMutation } from '@/composables/http/http'
import { createDiscreteApi } from 'naive-ui'

const { message } = createDiscreteApi(
    ['message'],
  )
  

export const useUserSignin = () => useHttpMutation(API.AUTH_USER_SIGNIN, {
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
export const useUserSignup =() => useHttpMutation(API.AUTH_USER_SIGNUP, {
    method: 'POST',
    queryOptions: {
      onSuccess: () => {
        message.success('Registrasi berhasil')
      },
      onError: () => {
        message.error('Password atau email anda salah')
      }
    }
  })
