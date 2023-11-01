/*
 * @Author: growydp
 * @Date: 2023-11-01 12:03:01
 * @Description: 
 */
import * as dayjs from 'dayjs'

export function formatDate(timestamp: number) {
  const format = `${dayjs().year() != dayjs(timestamp).year() ? 'YYYY年' : ''}M月D日 HH:mm`
  return dayjs(timestamp).format(format)
}