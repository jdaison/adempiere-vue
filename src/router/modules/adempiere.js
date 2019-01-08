/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const chartsRouter = {
  path: '/adempiere',
  component: Layout,
  redirect: 'noredirect',
  name: 'ADempiere',
  meta: {
    title: 'ADempiere',
    icon: 'chart'
  },
  children: [
    {
      path: 'dynamic',
      component: () => import('@/views/ADempiere/Dynamic'),
      name: 'Dynamic',
      meta: { title: 'Dynamic Component', noCache: true }
    },
    {
      path: 'amount',
      component: () => import('@/views/ADempiere/AmountDemo'),
      name: 'Amount',
      meta: { title: 'Amount', noCache: true }
    },
    {
      path: 'binary',
      component: () => import('@/components/ADempiere/Binary'),
      name: 'Binary',
      meta: { title: 'Binary', noCache: true }
    },
    {
      path: 'button',
      component: () => import('@/components/ADempiere/Button'),
      name: 'Button',
      meta: { title: 'Button', noCache: true }
    },
    {
      path: 'date',
      component: () => import('@/views/ADempiere/DateDemo'),
      name: 'Date',
      meta: { title: 'Date', noCache: true }
    },
    {
      path: 'dateTime',
      component: () => import('@/components/ADempiere/DateTime'),
      name: 'DateTime',
      meta: { title: 'Date Time', noCache: true }
    },
    {
      path: 'filePathOrName',
      component: () => import('@/components/ADempiere/FilePathOrName'),
      name: 'FilePathOrName',
      meta: { title: 'File Path Or Name', noCache: true }
    },
    {
      path: 'Image',
      component: () => import('@/views/ADempiere/ImageDemo'),
      name: 'Image',
      meta: { title: 'Image', noCache: true }
    },
    {
      path: 'Integer',
      // component: () => import('@/components/ADempiere/Integer'),
      component: () => import('@/views/ADempiere/IntegerDemo'),
      name: 'Integer',
      meta: { title: 'Integer', noCache: true }
    },
    {
      path: 'Memo',
      component: () => import('@/views/ADempiere/MemoDemo'),
      name: 'Memo',
      meta: { title: 'Memo', noCache: true }
    },
    {
      path: 'Quantity',
      component: () => import('@/components/ADempiere/Quantity'),
      name: 'Quantity',
      meta: { title: 'CostsPrices', noCache: true }
    },
    {
      path: 'String',
      component: () => import('@/components/ADempiere/String'),
      name: 'String',
      meta: { title: 'String', noCache: true }
    },
    {
      path: 'Text',
      component: () => import('@/components/ADempiere/Text'),
      name: 'Text',
      meta: { title: 'Text', noCache: true }
    },
    {
      path: 'Time',
      component: () => import('@/components/ADempiere/Time'),
      name: 'Time',
      meta: { title: 'Time', noCache: true }
    },
    {
      path: 'YesNo',
      component: () => import('@/components/ADempiere/YesNo'),
      name: 'YesNo',
      meta: { title: 'Yes or No', noCache: true }
    }
  ]
}

export default chartsRouter
