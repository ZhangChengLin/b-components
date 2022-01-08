import {getTimeString} from "../../util/index"
import toast from "./toast"
import {toastContainerOutside, toastContainer} from "./toast-container"
import {toastEvents, removeToast} from "./util/index"

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

  const _containerOutsize = toastContainerOutside()
  const _container = document.querySelector('.toast-container') ?? toastContainer(Placement)// Todo:尝试让新toast的位置可控
  const _toast = toast(headerNodeElement, bodyNodeElement, toastId)

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
