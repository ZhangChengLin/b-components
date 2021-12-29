import offcanvasHeader from "./offcanvas-header"
import offcanvasBody from "./offcanvas-body"


/**
 * @param {Node|string|Function} headerElement
 * @param {Node|string|Function} bodyElement
 * @param {string} placement
 * @param {string} offcanvasId
 */
const offcanvas = (headerElement = null, bodyElement = null, placement, offcanvasId) => {
  let _offcanvas = document.createElement('div')
  let header = offcanvasHeader(headerElement)
  let body = offcanvasBody(bodyElement)

  placement = placement ?? 'start'
  switch (placement) {
    case 'start':
    case 'top':
    case 'end':
    case 'bottom':
      break
    default:
      throw `placement 参数错误`
  }

  _offcanvas.className = `offcanvas offcanvas-${placement}`
  _offcanvas.id = offcanvasId
  _offcanvas.tabIndex = -1
  _offcanvas.role = 'dialog'
  _offcanvas.setAttribute('aria-labelledby', 'offcanvasTitleLabel')

  _offcanvas.append(header, body)

  return _offcanvas
}

export default offcanvas
