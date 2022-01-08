import offcanvasHeader from './offcanvas-header'
import offcanvasBody from './offcanvas-body'

/**
 * @param {Node|String|Function} headerNodeElement
 * @param {Node|String|Function} bodyNodeElement
 * @param {String} Placement
 * @param {String} offcanvasId
 */
const offcanvas = (headerNodeElement, bodyNodeElement, Placement, offcanvasId) => {
  const _offcanvas = document.createElement('div')
  const header = offcanvasHeader(headerNodeElement)
  const body = offcanvasBody(bodyNodeElement)

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

  _offcanvas.append(header, body)

  return _offcanvas
}

export default offcanvas
