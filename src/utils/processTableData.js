// src/utils/processTableData.js
import dayjs from 'dayjs'

const processTableData = data => {
  const grouped = {}

  data.forEach(item => {
    if (!grouped[item.name]) {
      grouped[item.name] = []
    }
    grouped[item.name].push(item)
  })

  const processed = []

  Object.keys(grouped).forEach(name => {
    const records = grouped[name]

    const recordsWithTime = records.map(record => {
      const checkInTime = dayjs(
        `${record.date} ${record.checkIn}`,
        'YYYY-MM-DD hh:mm A'
      )
      const checkOutTime = dayjs(
        `${record.date} ${record.checkOut}`,
        'YYYY-MM-DD hh:mm A'
      )
      const calculatedTimeWorked = checkOutTime.diff(checkInTime, 'minute')
      return {
        ...record,
        timeWorked: calculatedTimeWorked,
        avgSecPerUnit: record.noOfUnits
          ? Math.round((calculatedTimeWorked * 60) / record.noOfUnits)
          : 0,
      }
    })

    recordsWithTime.forEach((record, index) => {
      processed.push({
        ...record,
        rowSpan: index === 0 ? recordsWithTime.length + 1 : 0,
        isTotal: false,
      })
    })

    const totalTimeWorked = recordsWithTime.reduce(
      (sum, r) => sum + r.timeWorked,
      0
    )
    const totalUnits = recordsWithTime.reduce((sum, r) => sum + r.noOfUnits, 0)
    const totalAvgSecPerUnit = totalUnits
      ? Math.round((totalTimeWorked * 60) / totalUnits)
      : 0

    processed.push({
      id: `total-${name}`,
      name,
      date: 'Total',
      propertyName: '',
      checkIn: '',
      checkOut: '',
      timeWorked: totalTimeWorked,
      noOfUnits: totalUnits,
      avgSecPerUnit: totalAvgSecPerUnit,
      isTotal: true,
      rowSpan: 0,
    })
  })

  return processed
}

export default processTableData
