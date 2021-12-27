/**
 * @param {Node | string} footerElement
 */
const modalFooter = (footerElement) => {
  let modal_footer = document.createElement('div')

  modal_footer.className = 'modal-footer'
  footerElement instanceof Function
    ? modal_footer.append(footerElement())
    : footerElement instanceof HTMLElement
      ? modal_footer.append(footerElement)
      : modal_footer.innerHTML = footerElement

  return modal_footer
}

export default modalFooter
