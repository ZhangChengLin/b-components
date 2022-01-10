/**
 * @param {String} toastId
 */
const toast = (toastId) => {
  const _toast = document.createElement('div')

  _toast.className = 'toast'
  _toast.id = toastId
  _toast.role = 'alert'
  _toast.ariaLive = 'assertive'
  _toast.ariaAtomic = 'true'

  return _toast
}

export default toast
