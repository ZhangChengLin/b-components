import offcanvasHeader from "./offcanvas-header"
import offcanvasBody from "./offcanvas-body"


/**
 * @param {Node|String|Function} headerNodeElement
 * @param {Node|String|Function} bodyNodeElement
 * @param {String} placement
 * @param {String} offcanvasId
 */
const offcanvas = (headerNodeElement, bodyNodeElement, placement, offcanvasId) => {
  let _offcanvas = document.createElement('div')
  let header = offcanvasHeader(headerNodeElement)
  let body = offcanvasBody(bodyNodeElement)

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
