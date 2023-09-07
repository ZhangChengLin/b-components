import { Offcanvas } from 'bootstrap'
import { componentEvent, removeAfterHiding, getTimeString, isNull, isEmpty, bsDismissBtn } from './util/index'

/**
 * @param {String} Placement
 * @param {String} offcanvasId
 */
const offcanvas = (Placement, offcanvasId) => {
  const _offcanvas = document.createElement('div')

  Placement = Placement ?? 'start'
  switch (Placement) {
    case 'start':
    case 'top':
    case 'end':
    case 'bottom':
      break
    default:
      throw 'Placement error'
  }

  _offcanvas.className = `offcanvas offcanvas-${Placement}`
  _offcanvas.id = offcanvasId
  _offcanvas.tabIndex = -1
  _offcanvas.role = 'dialog'
  _offcanvas.setAttribute('aria-labelledby', 'offcanvasTitleLabel')

  return _offcanvas
}

/**
 * @param {Node|String|Function} headerNodeElement
 */
const header = (headerNodeElement) => {
  if (isNull(headerNodeElement) || isEmpty(headerNodeElement)) {
    return ''
  }

  const _header = document.createElement('div')
  const _title = document.createElement('h5')

  _header.className = 'offcanvas-header'

  _title.className = 'offcanvas-title'
  _title.id = 'offcanvasTitleLabel'
  headerNodeElement instanceof Function
    ? _title.append(headerNodeElement())
    : (headerNodeElement instanceof HTMLElement
      ? _title.append(headerNodeElement)
      : _title.innerHTML = headerNodeElement)

  _header.append(_title, bsDismissBtn('offcanvas'))

  return _header
}

/**
 * @param {Node|String|Function} bodyNodeElement
 */
const body = (bodyNodeElement) => {
  const _body = document.createElement('div')

  _body.className = 'offcanvas-body'
  bodyNodeElement instanceof Function
    ? _body.append(bodyNodeElement())
    : (bodyNodeElement instanceof HTMLElement
      ? _body.append(bodyNodeElement)
      : _body.innerHTML = bodyNodeElement)

  return _body
}

/**
 * @param {Node|String|Function|null} headerNodeElement
 * @param {Node|String|Function} bodyNodeElement
 * @param {String|null} Placement
 * @param {Object|null} Options
 * @param {String|null} EventsType
 * @param {Function|null} EventsFunction
 */
const bOffcanvas = (
  headerNodeElement,
  bodyNodeElement,
  Placement,
  Options,
  EventsType,
  EventsFunction
) => {
  const offcanvasId = 'offcanvasId_' + getTimeString()

  const _offcanvas = offcanvas(Placement, offcanvasId)
  const _header = header(headerNodeElement)
  const _body = body(bodyNodeElement)

  _offcanvas.append(_header, _body)
  document.body.append(_offcanvas)

  EventsType && EventsFunction ? componentEvent(_offcanvas, EventsType, EventsFunction, 'offcanvas') : ''

  const xxx = Options ? new Offcanvas(_offcanvas, Options) : new Offcanvas(_offcanvas)
  xxx.show()
  removeAfterHiding(_offcanvas)
  return offcanvasId
}

export default bOffcanvas
