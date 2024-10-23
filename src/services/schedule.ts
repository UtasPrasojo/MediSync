import { API } from "@/composables/http/api-constant";
import { useHttp } from "@/composables/http/http";
import { computed, unref, type Ref } from "vue";

export const useReadSchedule = (params: Ref<Record<string, any>>) =>
    useHttp(API.USER_GET_SCHEDULE, {
        params
    })

export const useReadScheduleById = (id: Ref<string>) => {
    const url = computed(() => {
        return API.USER_GET_SCHEDULE_ID.replace('{id}', unref(id))
    })
    return useHttp(url)
}
