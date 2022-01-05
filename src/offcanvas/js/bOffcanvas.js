import {getTimeString} from "../../util/index"
import offcanvas from "./offcanvas"
import {offcanvasEvents, removeOffcanvas} from "./util/index"

/**
 * @param {Node|String|Function} headerNodeElement
 * @param {Node|String|Function} bodyNodeElement
 * @param {String} Placement
 * @param {Object} Options
 * @param {String} EventsType
 * @param {Function} EventsFunction
 */
const bOffcanvas = (headerNodeElement, bodyNodeElement, Placement, Options, EventsType, EventsFunction) => {
  const offcanvasId = 'offcanvasId_' + getTimeString()

  const _offcanvas = offcanvas(headerNodeElement, bodyNodeElement, Placement, offcanvasId)
  document.body.append(_offcanvas)

  EventsType && EventsFunction ? offcanvasEvents(_offcanvas, EventsType, EventsFunction) : ''

  const xxx = Options ? new bootstrap.Offcanvas(_offcanvas, Options) : new bootstrap.Offcanvas(_offcanvas)
  xxx.show()
  removeOffcanvas(_offcanvas)
  return offcanvasId
}

export default bOffcanvas
