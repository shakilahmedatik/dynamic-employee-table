import React, { useState } from 'react'
import { Table, Input, DatePicker, Space, Button } from 'antd'
import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'
import Container from './components/Container'
import { CloseOutlined } from '@ant-design/icons'
import filterData from './utils/filterData'
import processTableData from './utils/processTableData'
import exportCsv from './utils/exportCsv'
import generateTableSummary from './utils/tableSummary'
import { rawData } from './data/dummyData'
import { columns } from './data/columnData'
dayjs.extend(isBetween)

const { RangePicker } = DatePicker

const EmployeeTable = () => {
  const [searchText, setSearchText] = useState('')
  const [selectedDate, setSelectedDate] = useState(dayjs())
  const [dateRange, setDateRange] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(20)

  const handleSearch = e => {
    setSearchText(e.target.value)
    setCurrentPage(1)
  }

  const handleDateChange = date => {
    setSelectedDate(date)
    setDateRange([])
    setCurrentPage(1)
  }

  const handleRangeChange = dates => {
    setDateRange(dates || [])
    setSelectedDate(null)
    setCurrentPage(1)
  }

  const filteredData = filterData(rawData, searchText, selectedDate, dateRange)
  const processedData = processTableData(filteredData)
  const paginatedData = processedData

  return (
    <Container>
      <div className='py-12'>
        <div className='flex justify-between'>
          <h1 className='text-xl font-extrabold'>Payroll List</h1>
          <Button type='primary' onClick={() => exportCsv(paginatedData)}>
            Download CSV
          </Button>
        </div>
        <Space style={{ marginBottom: 16, flexWrap: 'wrap' }}>
          <Input
            placeholder='Search by Employee or Property Name'
            value={searchText}
            onChange={handleSearch}
            style={{ width: 300 }}
          />
          <DatePicker
            placeholder='Filter by Single Date'
            onChange={handleDateChange}
            value={selectedDate}
          />
          <RangePicker
            placeholder={['Start Date', 'End Date']}
            onChange={handleRangeChange}
            value={dateRange}
            presets={[
              {
                label: 'This Week',
                value: [dayjs().startOf('week'), dayjs().endOf('week')],
              },
              {
                label: 'Last Week',
                value: [
                  dayjs().subtract(1, 'week').startOf('week'),
                  dayjs().subtract(1, 'week').endOf('week'),
                ],
              },
              {
                label: 'This Month',
                value: [dayjs().startOf('month'), dayjs().endOf('month')],
              },
              {
                label: 'Last Month',
                value: [
                  dayjs().subtract(1, 'month').startOf('month'),
                  dayjs().subtract(1, 'month').endOf('month'),
                ],
              },
            ]}
          />
          <Button
            onClick={() => {
              setSearchText('')
              setSelectedDate(null)
              setDateRange([])
              setCurrentPage(1)
            }}
          >
            Clear Filter <CloseOutlined />
          </Button>
        </Space>

        <Table
          columns={columns}
          dataSource={paginatedData}
          rowKey='id'
          bordered
          pagination={{
            current: currentPage,
            pageSize: pageSize,
            total: filteredData.length,
            pageSizeOptions: ['3', '20', '50'],
            showSizeChanger: true,
            onChange: (page, pageSize) => {
              setCurrentPage(page)
              setPageSize(pageSize)
            },
          }}
          scroll={{ x: 'max-content', y: 400 }} // Enable horizontal scroll on smaller screens
          summary={() => {
            const { totalEmployees, topEmployeeText, mostEfficientText } =
              generateTableSummary(paginatedData)
            return (
              <Table.Summary fixed>
                <Table.Summary.Row>
                  <Table.Summary.Cell
                    index={0}
                    colSpan={8}
                    style={{ textAlign: 'right', fontWeight: 'bold' }}
                  >
                    Total Employees: {totalEmployees} | Top Time Worked:{' '}
                    {topEmployeeText} | Most Efficient:{' '}
                    <span style={{ color: 'blue' }}>{mostEfficientText}</span>
                  </Table.Summary.Cell>
                </Table.Summary.Row>
              </Table.Summary>
            )
          }}
        />
      </div>
    </Container>
  )
}
export default EmployeeTable
