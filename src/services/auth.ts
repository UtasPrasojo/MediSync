import { API } from '@/composables/http/api-constant'
import { useHttpMutation, useHttp } from '@/composables/http/http'
import { createDiscreteApi } from 'naive-ui'
import { useRouter } from 'vue-router'

const { message } = createDiscreteApi(
    ['message'],
  )
  

export const useUserSignin = () => {
  const router = useRouter()
  return useHttpMutation(API.AUTH_USER_SIGNIN, {
    method: 'POST',
    queryOptions: {
      onSuccess: ({data}) => {
        message.success('Login berhasil')
        localStorage.setItem('token', data.token)
        console.log(data.token)
        router.push('/auth/list-data-child')
      },
      onError: (error) => {
        // message.error('Password atau email anda salah')
        message.error(error.data.message)
      }
    }
  })
}
export const useUserSignup =() => {
  const router = useRouter()
  return useHttpMutation(API.AUTH_USER_SIGNUP, {
    method: 'POST',
    queryOptions: {
      onSuccess: () => {
        message.success('Registrasi berhasil')
        router.push('/auth/login')
      },
      onError: () => {
        message.error('Password atau email anda salah')
      }
    }
  })
}
 
export const useAuthProfile =() => useHttp(API.AUTH_GET_PROFILE, {

})

  export const useUserAccountRegistration =() => useHttpMutation(API.AUTH_USER_REGISTRATION, {
    method: 'PUT',
    queryOptions: {

    }

  })

 
