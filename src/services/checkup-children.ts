import { API } from '@/composables/http/api-constant'
import { useHttpMutation, useHttp } from '@/composables/http/http'
import { createDiscreteApi } from 'naive-ui'
import { unref, type Ref } from 'vue'
import { useRouter } from 'vue-router'

const { message } = createDiscreteApi(['message'])

export const useUserCheckupChild = () => {
  const router = useRouter()
  return useHttpMutation(API.USER_POST_CHECKUP_CHILDREN, {
    method: 'POST',
    queryOptions: {
      onSuccess: () => {
        message.success('Perkembangan anak berhasil ditambahkan')
        router.push('/user/checkup-child')
      },
      onError: (error) => {
        message.error(error.data.message)
      }
    }
  })
}
export const useReadChildCheckup =() => useHttp(API.USER_GET_CHECKUP_CHILDREN, {

})
