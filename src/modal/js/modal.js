import modalDialog from "./modal-dialog"

/**
 * @param {Node|string} titleElement
 * @param {Node|string} bodyElement
 * @param {Node|string} footerElement
 * @param {string} ModalSizes
 * @param {boolean} VerticallyCentered
 * @param {boolean} LongContentType
 * @param {string} modalId
 */
const modal = (titleElement, bodyElement, footerElement, ModalSizes, VerticallyCentered, LongContentType, modalId) => {
  const _modal = document.createElement('div')

  _modal.id = modalId
  _modal.className = "modal fade"
  _modal.tabIndex = -1
  _modal.role = "dialog"
  _modal.setAttribute('aria-labelledby', 'modalTitleLabel')

  _modal.append(modalDialog(titleElement, bodyElement, footerElement, ModalSizes, VerticallyCentered, LongContentType))

  return _modal
}

export default modal
