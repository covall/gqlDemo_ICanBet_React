import { message } from 'antd'

message.config({
  top: 54,
  duration: 3,
  maxCount: 3
})

const showSuccess = text => message.success(`🚀 ${text}`)
const showWarn = text => message.warning(`☢️️ ${text}`)
const showError = text => message.error(`💩 ${text}`)

export { showSuccess, showWarn, showError }
