import {Offcanvas} from 'bootstrap'

import offcanvas from './offcanvas'
import header from './offcanvas-header'
import body from './offcanvas-body'
import {offcanvasEvents, removeOffcanvas, getTimeString} from './util/index'

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

  const _offcanvas = offcanvas(Placement, offcanvasId)
  const _header = header(headerNodeElement)
  const _body = body(bodyNodeElement)

  _offcanvas.append(_header, _body)
  document.body.append(_offcanvas)

  EventsType && EventsFunction ? offcanvasEvents(_offcanvas, EventsType, EventsFunction) : ''

  const xxx = Options ? new Offcanvas(_offcanvas, Options) : new Offcanvas(_offcanvas)
  xxx.show()
  removeOffcanvas(_offcanvas)
  return offcanvasId
}

export default bOffcanvas
