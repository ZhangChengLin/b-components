import {isNull, isEmpty, bsDismissBtn} from './util/index'

/**
 * @param {Node|String|Function} headerNodeElement
 */
const offcanvasHeader = (headerNodeElement) => {
  if (isNull(headerNodeElement) || isEmpty(headerNodeElement)) {
    return ''
  }

  const header = document.createElement('div')
  const title = document.createElement('h5')

  header.className = 'offcanvas-header'

  title.className = 'offcanvas-title'
  title.id = 'offcanvasTitleLabel'
  headerNodeElement instanceof Function
    ? title.append(headerNodeElement())
    : headerNodeElement instanceof HTMLElement
      ? title.append(headerNodeElement)
      : title.innerHTML = headerNodeElement

  header.append(title, bsDismissBtn('offcanvas'))
  return header
}

export default offcanvasHeader
