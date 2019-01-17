import request from '@/utils/request'

export function getDynamic() {
  return request({
    url: '/adempiere/dynamic',
    method: 'get'
  })
}
