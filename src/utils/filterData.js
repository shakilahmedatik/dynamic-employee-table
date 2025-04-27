// src/utils/filterData.js
import dayjs from 'dayjs'

const filterData = (rawData, searchText, selectedDate, dateRange) => {
  let filtered = [...rawData]

  if (searchText) {
    filtered = filtered.filter(
      item =>
        item.name.toLowerCase().includes(searchText.toLowerCase()) ||
        item.propertyName.toLowerCase().includes(searchText.toLowerCase())
    )
  }

  if (selectedDate) {
    const target = selectedDate.format('YYYY-MM-DD')
    filtered = filtered.filter(item => item.date === target)
  }

  if (dateRange.length === 2) {
    const [start, end] = dateRange
    filtered = filtered.filter(item =>
      dayjs(item.date).isBetween(start, end, null, '[]')
    )
  }

  return filtered
}

export default filterData
