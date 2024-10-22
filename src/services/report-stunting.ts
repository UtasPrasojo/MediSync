import { API } from '@/composables/http/api-constant'
import { useHttpMutation, useHttp } from '@/composables/http/http'
import { createDiscreteApi } from 'naive-ui'
import { unref, type Ref } from 'vue'
import { useRouter } from 'vue-router'


const { message } = createDiscreteApi(['message'])

export const useUserReportStunting = () => {
  const router = useRouter()
  return useHttpMutation(API.USER_POST_REPORT_STUNTING, {
    method: 'POST',
    queryOptions: {
      onSuccess: () => {
        message.success('Lapor Stunting berhasil ditambahkan')
        router.push('/user/report-stunting')
      },
      onError: (error) => {
        message.error(error.data.message)
      }
    }
  })
}
export const useReadReportStunting =() => useHttp(API.USER_GET_REPORT_STUNTING, {

})