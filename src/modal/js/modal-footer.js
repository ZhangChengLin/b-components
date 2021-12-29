/**
 * @param {Node|string|Function} footerNodeElement
 */
const modalFooter = (footerNodeElement) => {
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
