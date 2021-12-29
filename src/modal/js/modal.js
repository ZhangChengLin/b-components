import modalDialog from "./modal-dialog"


/**
 * @param {Node|string|Function} headerNodeElement
 * @param {Node|string|Function} bodyNodeElement
 * @param {Node|string|Function} footerNodeElement
 * @param {string} ModalSizes
 * @param {boolean} VerticallyCentered
 * @param {boolean} ScrollingLongContent
 * @param {string} modalId
 */
const modal = (headerNodeElement, bodyNodeElement, footerNodeElement, ModalSizes, VerticallyCentered, ScrollingLongContent, modalId) => {
  const _modal = document.createElement('div')

  _modal.className = "modal fade"
  _modal.id = modalId
  _modal.tabIndex = -1
  _modal.role = "dialog"
  _modal.setAttribute('aria-labelledby', 'modalTitleLabel')

  _modal.append(modalDialog(headerNodeElement, bodyNodeElement, footerNodeElement, ModalSizes, VerticallyCentered, ScrollingLongContent))

  return _modal
}

export default modal
