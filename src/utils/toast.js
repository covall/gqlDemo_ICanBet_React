import { toast } from 'react-toastify'

const options = {
  position: 'top-center',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true
}

const success = message => toast.success(`🚀 ${message}`, options)
const warn = message => toast.warn(`☢️️ ${message}`, options)
const error = message => toast.error(`💩 ${message}`, options)

export { success, warn, error }
