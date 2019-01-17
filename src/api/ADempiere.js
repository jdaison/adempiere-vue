import request from '@/utils/request'

export function getField() {
  return request({
    url: '/adempiere/getField',
    method: 'get'
  })
}
