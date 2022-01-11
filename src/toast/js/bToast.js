import toast from './toast'
import {containerOutside, container} from './toast-container'
import header from './toast-header'
import body from './toast-body'
import {toastEvents, removeToast, getTimeString} from './util/index'

/**
 * @param {Node|String|Function} headerNodeElement
 * @param {Node|String|Function} bodyNodeElement
 * @param {String} Placement
 * @param {Object} Options
 * @param {String} EventsType
 * @param {Function} EventsFunction
 */
const bToast = (headerNodeElement, bodyNodeElement, Placement, Options, EventsType, EventsFunction) => {
  const toastId = 'toastId_' + getTimeString()

  const _containerOutsize = containerOutside()
  const _container = document.querySelector('.toast-container') ?? container(Placement)
  const _toast = toast(toastId)
  const _header = header(headerNodeElement)
  const _body = body(bodyNodeElement)

  _toast.append(_header, _body)
  _container.append(_toast)
  _containerOutsize.append(_container)
  document.body.append(_containerOutsize)

  EventsType && EventsFunction ? toastEvents(_toast, EventsType, EventsFunction) : ''

  const xxx = Options ? new bootstrap.Toast(_toast, Options) : new bootstrap.Toast(_toast)
  xxx.show()
  removeToast(_toast)
  return toastId
}

export default bToast
