import {
  useMutation,
  useQuery,
  type UseMutationOptions,
  type UseQueryOptions
} from '@tanstack/vue-query'
import type { AxiosError, AxiosRequestConfig } from 'axios'

import axios from 'axios'
import type { AxiosResponse } from 'node_modules/axios/index.cjs'
import { unref, type Ref } from 'vue'

export const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL
})

http.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token && config.headers) {
    Object.assign(config.headers, { Authorization: `Bearer ${token}` })
  }
  return config
})

type ResponseData<TData = any> = {
  data: TData
}

type Config<TData = any, TError = DefaultError> = {
  keys?: any[]
  params?: Record<string, any>
  httpOptions?: AxiosRequestConfig
  queryOptions?: UseQueryOptions<TData, TError>
}

type DefaultError = {
  message: string
  validation: {}
}

/**
  * API GET Method request only.
  * @example
      const { data: items, isLoading, isError } = useHttp<number, string>('/', {
        keys: ['id']
        queryOptions: {
          onSuccess: function (data) {
            return
          },
          onError: function (data) {
            data
          },
        },
      })
  * @param url URL API
  * @param options HTTP Mutation Options
  */
export function useHttp<TData = any, TError = any>(
  url: Ref<string>,
  options?: Config<TData, TError>
) {
  const defaultOptions = {
    queryKey: [url],
    queryFn: async () => {
      try {
        const defaultConfig = {}

        if (options?.params) {
          Object.assign(defaultConfig, { params: options.params })
        }
        const { data } = await http.get<ResponseData>(unref(url), defaultConfig)
        return data?.data ?? null
      } catch (e: any) {
        Promise.reject(e?.response ?? e)
        return e
      }
    }
  }

  if (options?.queryOptions) {
    Object.assign(defaultOptions, options.queryOptions)
  }
  return useQuery(defaultOptions)
}

type HttpMutationOptions<TData = any, TError = any, TVariables = any, TContext = any> = {
  method: 'GET' | 'HEAD' | 'POST' | 'OPTIONS' | 'PUT' | 'DELETE' | 'PATCH'
  httpOptions?: AxiosRequestConfig
  queryOptions?: UseMutationOptions<TData, TError, TVariables, TContext>
}

/**
  * Update data to the server.
  * @example
    const {mutate, isLoading, isError, error} =  useHttpMutation<TData, TError>('todos/:id', {
      method: 'POST',
      httpOptions: { // axios options
        timeout: 30000,
      },
      queryOptions: { // vue-query options
        onSuccess: function (data) {
          console.log(data);
        },
        onError: function (data) {
          console.log(data);
        },
      },
      })
      const onSubmitForm = (data) => {
        mutate(data)
      }
  * @param url URL API
  * @param options HTTP Mutation Options
  */
export function useHttpMutation<
  TData = any,
  TError = AxiosResponse<DefaultError>,
  TVariables = any
>(url: string, options: HttpMutationOptions<TData, TError>) {
  return useMutation({
    mutationFn: (value: TVariables) => {
      return new Promise<TData>((resolve, reject) => {
        return http
          .request<TData>({
            url: url,
            method: options.method,
            ...options.httpOptions,
            data: value
          })
          .then((response) => {
            resolve(response.data)
          })
          .catch((error: AxiosError<TError>) => {
            reject(error.response ?? error.message)
          })
      })
    },
    ...options.queryOptions
  })
}
