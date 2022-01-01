import {getTimeString} from "../../util/index"
import toast from "./toast"
import {toastContainerOutside, toastContainer} from "./toast-container";
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
  let toastId = 'toastId_' + getTimeString()

  let _containerOutsize = toastContainerOutside()
  let _container = toastContainer(Placement)
  let _toast = toast(headerNodeElement, bodyNodeElement, toastId)

  _container.append(_toast)
  _containerOutsize.append(_container)
  document.body.append(_containerOutsize)

  EventsType && EventsFunction ? toastEvents(_toast, EventsType, EventsFunction) : ''

  let xxx = Options ? new bootstrap.Toast(_toast, Options) : new bootstrap.Toast(_toast)
  xxx.show()
  removeToast(_toast)
  return toastId
}

export default bToast
