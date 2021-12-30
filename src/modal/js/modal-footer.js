import {isEmpty, isNull} from "../../util/index"

/**
 * @param {Node|String|Function} footerNodeElement
 */
const modalFooter = (footerNodeElement) => {
  if (isNull(footerNodeElement) || isEmpty(footerNodeElement)) {
    return ''
  }

  let modal_footer = document.createElement('div')

  modal_footer.className = 'modal-footer'
  footerNodeElement instanceof Function
    ? modal_footer.append(footerNodeElement())
    : footerNodeElement instanceof HTMLElement
      ? modal_footer.append(footerNodeElement)
      : modal_footer.innerHTML = footerNodeElement

  return modal_footer
}

export default modalFooter
