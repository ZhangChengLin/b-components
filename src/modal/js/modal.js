import modalDialog from "./modal-dialog"


/**
 * @param {Node|String|Function} headerNodeElement
 * @param {Node|String|Function} bodyNodeElement
 * @param {Node|String|Function} footerNodeElement
 * @param {String} ModalSizes
 * @param {*} VerticallyCentered
 * @param {*} ScrollingLongContent
 * @param {String} modalId
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
