// src/utils/exportCsv.js
const exportCsv = paginatedData => {
  const csvRows = []
  const headers = [
    'Employee Name',
    'Date',
    'Property Name',
    'Check In',
    'Check Out',
    'Time Worked (minutes)',
    'No Of Units',
    'Avg. Sec/Unit',
  ]
  csvRows.push(headers.join(','))

  paginatedData.forEach(row => {
    const csvRow = [
      row.name || '',
      row.date || '',
      row.propertyName || '',
      row.checkIn || '',
      row.checkOut || '',
      row.timeWorked || '',
      row.noOfUnits || '',
      row.avgSecPerUnit || '',
    ]
    csvRows.push(csvRow.join(','))
  })

  const csvString = csvRows.join('\n')
  const blob = new Blob([csvString], { type: 'text/csv' })
  const url = window.URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.setAttribute('hidden', '')
  a.setAttribute('href', url)
  a.setAttribute('download', 'employee_data.csv')
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}

export default exportCsv
