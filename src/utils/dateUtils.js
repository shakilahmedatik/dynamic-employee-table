// src/utils/dateUtils.js
import dayjs from 'dayjs'

export const getCurrentDate = () => dayjs()

export const formatDate = date => dayjs(date).format('YYYY-MM-DD')
