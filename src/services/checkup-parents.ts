import { API } from '@/composables/http/api-constant'
import { useHttpMutation, useHttp } from '@/composables/http/http'
import { createDiscreteApi } from 'naive-ui'
import { unref, type Ref } from 'vue'
import { useRouter } from 'vue-router'


const { message } = createDiscreteApi(['message'])

export const useUserCheckupParents = () => {
  const router = useRouter()
  return useHttpMutation(API.USER_POST_CHECKUP_PARENTS, {
    method: 'POST',
    queryOptions: {
      onSuccess: () => {
        message.success('Kesehatan Orang Tua berhasil ditambahkan')
        router.push('/user/health-mom')
      },
      onError: (error) => {
        message.error(error.data.message)
      }
    }
  })
}

export const useReadParentsCheckup =() => useHttp(API.USER_GET_CHECKUP_PARENTS, {

})