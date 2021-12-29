import {isNull, isEmpty, bsDismissBtn} from "../../util/index";

/**
 * @param {Node|String|Function} headerNodeElement
 */
const modalHeader = (headerNodeElement) => {
  if (isNull(headerNodeElement) || isEmpty(headerNodeElement)) {
    return ''
  }

  let header = document.createElement('div')
  let title = document.createElement('h5')

  header.className = 'modal-header'

  title.className = 'modal-title'
  title.id = 'modalTitleLabel'
  headerNodeElement instanceof Function
    ? title.append(headerNodeElement())
    : headerNodeElement instanceof HTMLElement
      ? title.append(headerNodeElement)
      : title.innerHTML = headerNodeElement

  header.append(title, bsDismissBtn('offcanvas'))
  return header
}

export default modalHeader
