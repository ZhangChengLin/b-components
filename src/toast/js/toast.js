import toastHeader from './toast-header'
import toastBody from './toast-body'

/**
 * @param {Node|String|Function} headerNodeElement
 * @param {Node|String|Function} bodyNodeElement
 * @param {String} toastId
 */
const toast = (headerNodeElement, bodyNodeElement, toastId) => {
  const _toast = document.createElement('div')
  const header = toastHeader(headerNodeElement)
  const body = toastBody(bodyNodeElement)

  _toast.className = 'toast'
  _toast.id = toastId
  _toast.role = 'alert'
  _toast.ariaLive = 'assertive'
  _toast.ariaAtomic = 'true'

  _toast.append(header, body)

  return _toast
}

export default toast
