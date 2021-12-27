import offcanvasHeader from "./offcanvas-header"
import offcanvasBody from "./offcanvas-body"
import {getTimeString} from "./util/index"


/**
 * @param {Node|string|null} headerElement
 * @param {Node|string|null} bodyElement
 * @param {string|null} placement
 */
const offcanvas = (headerElement = null, bodyElement = null, placement) => {
  let _offcanvas = document.createElement('div')
  let header = offcanvasHeader(headerElement)
  let body = offcanvasBody(bodyElement)
  let timeString = getTimeString()

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
  _offcanvas.id = 'Offcanvas_' + timeString
  _offcanvas.tabIndex = -1
  _offcanvas.setAttribute('aria-labelledby', 'offcanvasTitleLabel')

  _offcanvas.append(header, body)

  return _offcanvas
}

export default offcanvas
