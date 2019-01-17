import Mock from 'mockjs'

const List = []
const count = 20

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    order_no: '@guid()',
    timestamp: +Mock.Random.date('T'),
    username: '@name()',
    price: '@float(1000, 15000, 0, 2)',
    'status|1': ['success', 'pending']
  }))
}

var fiedlAdempiere = Mock.mock({
  'dataAttributes|1': {
    'DisplayType|+1': [
      'Account',
      'Amount',
      'Binary',
      'Button',
      'Color',
      'CostsPrices',
      'Date',
      'DateTime',
      'FileName',
      'FilePath',
      'FilePathOrName',
      'Image',
      'Integer',
      'List',
      'Memo',
      'PrinterName',
      'ProdutAttribute',
      'Quantity',
      'Search',
      'String',
      'Text',
      'TextLong',
      'Time',
      'YesNo'
    ],
    'IsActive': 'Y',
    'IsDisplayed': 'Y',
    'IsRange': 'N',
    'DefaultValue|1-10000': 22
  }
})

var panelAdempiere = Mock.mock({
  'data|1-20': [
    fiedlAdempiere
  ]
})

export default {
  getPanel: () => {
    return {
      data: panelAdempiere.data
    }
  },
  getField: () => {
    return {
      dataAttributes: fiedlAdempiere.dataAttributes
    }
  }
}
