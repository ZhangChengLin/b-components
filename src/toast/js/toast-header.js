import {isNull, isEmpty, bsDismissBtn} from "../../util/index"

/**
 * @param {Node|String|Function} headerNodeElement
 */
const toastHeader = (headerNodeElement) => {
  if (isNull(headerNodeElement) || isEmpty(headerNodeElement)) {
    return ''
  }

  const header = document.createElement('div')
  const title = document.createElement('strong')

  header.className = 'toast-header'

  title.className = 'toast-title me-auto'
  headerNodeElement instanceof Function
    ? title.append(headerNodeElement())
    : headerNodeElement instanceof HTMLElement
      ? title.append(headerNodeElement)
      : title.innerHTML = headerNodeElement

  header.append(title, bsDismissBtn('toast'))
  return header
}

export default toastHeader
