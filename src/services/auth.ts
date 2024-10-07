import { API, useHttpMutation } from '@/composables/http/http'
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
    onError: () => {
      message.error('Password atau email anda salah')
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
