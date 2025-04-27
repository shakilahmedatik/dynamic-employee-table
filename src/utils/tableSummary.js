// src/utils/tableSummary.js
const generateTableSummary = paginatedData => {
  const employeeNames = new Set()
  const employeeTimeMap = {}
  const employeeAvgSecMap = {}

  paginatedData.forEach(row => {
    if (!row.isTotal) {
      employeeNames.add(row.name)
    }
    if (row.isTotal) {
      employeeTimeMap[row.name] = row.timeWorked
      employeeAvgSecMap[row.name] = row.avgSecPerUnit
    }
  })

  const topEmployee = Object.entries(employeeTimeMap).sort(
    (a, b) => b[1] - a[1]
  )[0]
  const mostEfficientEmployee = Object.entries(employeeAvgSecMap).sort(
    (a, b) => a[1] - b[1]
  )[0]

  let topEmployeeText = ''
  if (topEmployee) {
    const [name, minutes] = topEmployee
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    topEmployeeText = `🥇 ${name} (${hours}h ${mins}m)`
  }

  let mostEfficientText = ''
  if (mostEfficientEmployee) {
    const [name, avgSec] = mostEfficientEmployee
    mostEfficientText = `🏆 ${name} (${avgSec} sec/unit)`
  }

  return {
    totalEmployees: employeeNames.size,
    topEmployeeText,
    mostEfficientText,
  }
}

export default generateTableSummary
