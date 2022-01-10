import header from './toast-header'
import body from './toast-body'

/**
 * @param {Node|String|Function} headerNodeElement
 * @param {Node|String|Function} bodyNodeElement
 * @param {String} toastId
 */
const toast = (headerNodeElement, bodyNodeElement, toastId) => {
  const _toast = document.createElement('div')
  const _header = header(headerNodeElement)
  const _body = body(bodyNodeElement)

  _toast.className = 'toast'
  _toast.id = toastId
  _toast.role = 'alert'
  _toast.ariaLive = 'assertive'
  _toast.ariaAtomic = 'true'

  _toast.append(_header, _body)

  return _toast
}

export default toast
