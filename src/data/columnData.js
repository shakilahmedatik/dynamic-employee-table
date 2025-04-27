export const columns = [
  {
    title: 'Employee Name',
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name),
    sortDirections: ['ascend', 'descend'],
    onCell: record => ({
      rowSpan: record.isTotal ? 0 : record.rowSpan,
    }),
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    onCell: record => ({
      style: record.isTotal ? { fontWeight: 'bold' } : {},
    }),
  },
  {
    title: 'Property Name',
    dataIndex: 'propertyName',
    key: 'propertyName',
    onCell: record => ({
      style: record.isTotal ? { fontWeight: 'bold' } : {},
    }),
  },
  {
    title: 'Check In',
    dataIndex: 'checkIn',
    key: 'checkIn',
    responsive: ['md'],
    onCell: record => ({
      style: record.isTotal ? { fontWeight: 'bold' } : {},
    }),
  },
  {
    title: 'Check Out',
    dataIndex: 'checkOut',
    key: 'checkOut',
    responsive: ['md'],
    onCell: record => ({
      style: record.isTotal ? { fontWeight: 'bold' } : {},
    }),
  },
  {
    title: 'Time Worked',
    dataIndex: 'timeWorked',
    key: 'timeWorked',
    onCell: record => ({
      style: record.isTotal ? { fontWeight: 'bold', color: 'green' } : {},
    }),
    render: text => {
      const hours = Math.floor(text / 60)
      const minutes = text % 60
      const formatted = `${hours}h ${minutes}m`
      return formatted
    },
  },
  {
    title: 'No Of Units',
    dataIndex: 'noOfUnits',
    key: 'noOfUnits',
    onCell: record => ({
      style: record.isTotal ? { fontWeight: 'bold', color: 'green' } : {},
    }),
  },
  {
    title: 'Avg. Sec/Unit',
    dataIndex: 'avgSecPerUnit',
    key: 'avgSecPerUnit',
    onCell: record => ({
      style: record.isTotal ? { fontWeight: 'bold', color: 'green' } : {},
    }),
  },
]
