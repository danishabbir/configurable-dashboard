import EditPanelTableProvider from '../components/EditPanelTableProvider';


const data = [
    {"customerName": "Basecamp", "status":"available", "syncedFrom": "Zuora", "startDate": "2019-01-01", "mrr": 1200, "termLength": 12, "invoiceNo": 1},
    {"customerName": "Intercom", "status":"available", "syncedFrom": "Stripe", "startDate": "2019-01-01", "mrr": 455, "termLength": 3, "invoiceNo": 2},
    {"customerName": "Dropbox", "status":"available", "syncedFrom": "Chargebee", "startDate": "2019-01-01", "mrr": 1200, "termLength": 5, "invoiceNo": 3},
    {"customerName": "Zoom", "status":"available", "syncedFrom": "Zuora", "startDate": "2019-01-01", "mrr": 446, "termLength": 6, "invoiceNo": 4},
    {"customerName": "Heroku", "status":"available", "syncedFrom": "Zuora", "startDate": "2019-01-01", "mrr": 1455, "termLength": 2, "invoiceNo": 5},
    {"customerName": "Apple", "status":"available", "syncedFrom": "Zuora", "startDate": "2019-01-01", "mrr": 899, "termLength": 6, "invoiceNo": 6},
    {"customerName": "Zeneifts", "status":"available", "syncedFrom": "Stripe", "startDate": "2019-01-01", "mrr": 5666, "termLength": 3, "invoiceNo": 7},
    {"customerName": "Notion", "status":"available", "syncedFrom": "Stripe", "startDate": "2019-01-01", "mrr": 1200, "termLength": 6, "invoiceNo": 8},
    {"customerName": "Italic", "status":"available", "syncedFrom": "Stripe", "startDate": "2019-01-01", "mrr": 1200, "termLength": 8, "invoiceNo": 9},
    {"customerName": "Netflix", "status":"available", "syncedFrom": "Zuora", "startDate": "2019-01-01", "mrr": 890, "termLength": 1, "invoiceNo": 10},
]

const columns = [
    {
      title: 'Name',
      dataIndex: 'customerName'
    },
    {
      title: 'Status',
      dataIndex: 'status'
    },
    {
      title: 'Source',
      dataIndex: 'syncedFrom'
    },
    {
      title: 'Start Date',
      dataIndex: 'startDate'
    },
    {
        title: 'MRR',
        dataIndex: 'mrr'
    },
    {
        title: 'Term Length',
        dataIndex: 'termLength'
    },
    {
        title: 'Invoice No.',
        dataIndex: 'invoiceNo'
    }
  ];


function Index () {
    return (
      <EditPanelTableProvider columns={columns} data={data}/> 

    )
}

export default Index;