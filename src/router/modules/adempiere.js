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
      path: 'TabDemo',
      component: () => import('@/views/ADempiere/Tab'),
      name: 'TabDemo',
      meta: { title: 'Tab Component', noCache: true }
    },
    {
      path: 'List',
      component: () => import('@/views/ADempiere/ListDemo'),
      name: 'List',
      meta: { title: 'List', noCache: true }
    },
    {
      path: 'Search',
      component: () => import('@/views/ADempiere/SearchDemo'),
      name: 'Search',
      meta: { title: 'Search', noCache: true }
    },
    {
      path: 'Color',
      component: () => import('@/views/ADempiere/ColorDemo'),
      name: 'Color',
      meta: { title: 'Color', noCache: true }
    },
    {
      path: 'amount',
      component: () => import('@/views/ADempiere/AmountDemo'),
      name: 'Amount',
      meta: { title: 'Amount', noCache: true }
    },
    {
      path: 'binary',
      component: () => import('@/views/ADempiere/BinaryDemo'),
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
      path: 'FileName',
      component: () => import('@/views/ADempiere/FileNameDemo'),
      name: 'FileName',
      meta: { title: 'FileName', noCache: true }
    },
    {
      path: 'FilePath',
      component: () => import('@/views/ADempiere/FilePathDemo'),
      name: 'FilePath',
      meta: { title: 'FilePath', noCache: true }
    },
    {
      path: 'filePathOrName',
      component: () => import('@/components/ADempiere/FilePathOrName'),
      name: 'FilePathOrName',
      meta: { title: 'File Path Or Name', noCache: true }
    },
    {
      path: 'Integer',
      // component: () => import('@/components/ADempiere/Integer'),
      component: () => import('@/views/ADempiere/IntegerDemo'),
      name: 'Integer',
      meta: { title: 'Integer', noCache: true }
    },
    {
      path: 'Image',
      component: () => import('@/views/ADempiere/ImageDemo'),
      name: 'Image',
      meta: { title: 'Image', noCache: true }
    },
    {
      path: 'Location',
      component: () => import('@/views/ADempiere/LocationDemo'),
      name: 'Location',
      meta: { title: 'Location', noCache: true }
    },
    {
      path: 'Locator',
      component: () => import('@/views/ADempiere/LocatorDemo'),
      name: 'Locator',
      meta: { title: 'Locator', noCache: true }
    },
    {
      path: 'Memo',
      component: () => import('@/views/ADempiere/MemoDemo'),
      name: 'Memo',
      meta: { title: 'Memo', noCache: true }
    },
    {
      path: 'CostsPrices',
      component: () => import('@/views/ADempiere/CostsPricesDemo'),
      name: 'CostsPrices',
      meta: { title: 'CostsPrices', noCache: true }
    },
    {
      path: 'PrinterName',
      component: () => import('@/views/ADempiere/PrinterNameDemo'),
      name: 'PrinterName',
      meta: { title: 'PrinterName', noCache: true }
    },
    {
      path: 'Quantity',
      // component: () => import('@/components/ADempiere/Integer'),
      component: () => import('@/views/ADempiere/QuantityDemo'),
      name: 'Quantity',
      meta: { title: 'Quantity', noCache: true }
    },
    {
      path: 'String',
      component: () => import('@/views/ADempiere/StringDemo'),
      name: 'String',
      meta: { title: 'String', noCache: true }
    },
    {
      path: 'TableDirect',
      component: () => import('@/views/ADempiere/TableDirectDemo'),
      name: 'Table Direct',
      meta: { title: 'Table Direct', noCache: true }
    },
    {
      path: 'Table',
      component: () => import('@/views/ADempiere/TableDemo'),
      name: 'Table',
      meta: { title: 'Table', noCache: true }
    },
    {
      path: 'Text',
      component: () => import('@/components/ADempiere/Text'),
      name: 'Text',
      meta: { title: 'Text', noCache: true }
    },
    {
      path: 'TextLong',
      component: () => import('@/views/ADempiere/TextLongDemo'),
      name: 'TextLong',
      meta: { title: 'TextLong', noCache: true }
    },
    {
      path: 'Time',
      component: () => import('@/views/ADempiere/TimeDemo'),
      name: 'Time',
      meta: { title: 'Time', noCache: true }
    },
    {
      path: 'Url',
      component: () => import('@/views/ADempiere/UrlDemo'),
      name: 'Url',
      meta: { title: 'Url', noCache: true }
    },
    {
      path: 'YesNo',
      component: () => import('@/views/ADempiere/YesNoDemo'),
      name: 'YesNo',
      meta: { title: 'Yes or No', noCache: true }
    }
  ]
}

export default chartsRouter
