import { toast } from 'react-toastify'

const options = {
  position: 'top-center',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true
}

const showSuccess = message => toast.success(`🚀 ${message}`, options)
const showWarn = message => toast.warn(`☢️️ ${message}`, options)
const showError = message => toast.error(`💩 ${message}`, options)

export { showSuccess, showWarn, showError }
