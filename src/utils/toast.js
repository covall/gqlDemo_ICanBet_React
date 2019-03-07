import { message } from 'antd'

const showSuccess = text => message.success(`🚀 ${text}`)
const showWarn = text => message.warning(`☢️️ ${text}`)
const showError = text => message.error(`💩 ${text}`)

export { showSuccess, showWarn, showError }
