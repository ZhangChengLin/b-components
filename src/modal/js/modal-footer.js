import {isEmpty, isNull} from "../../util/index"

/**
 * @param {Node|String|Function} footerNodeElement
 */
const modalFooter = (footerNodeElement) => {
  if (isNull(footerNodeElement) || isEmpty(footerNodeElement)) {
    return ''
  }

  let footer = document.createElement('div')

  footer.className = 'modal-footer'
  footerNodeElement instanceof Function
    ? footer.append(footerNodeElement())
    : footerNodeElement instanceof HTMLElement
      ? footer.append(footerNodeElement)
      : footer.innerHTML = footerNodeElement

  return footer
}

export default modalFooter
