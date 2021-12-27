import modalContent from "./modal-content"

/**
 * @param {Node|string|Function} headerNodeElement
 * @param {Node|string|Function} bodyNodeElement
 * @param {Node|string|Function} footerNodeElement
 * @param {string} ModalSizes
 * @param {boolean} VerticallyCentered
 * @param {boolean} ScrollingLongContent
 */
const modalDialog = (headerNodeElement, bodyNodeElement, footerNodeElement, ModalSizes = '', VerticallyCentered = false, ScrollingLongContent = false) => {
  const dialog = document.createElement('div')

  dialog.className = 'modal-dialog'

  switch (ModalSizes) {
    case "sm":
      dialog.classList.add('modal-sm')
      break
    case "lg":
      dialog.classList.add('modal-lg')
      break
    case "xl":
      dialog.classList.add('modal-xl')
      break
    case "full":
      dialog.classList.add('modal-fullscreen')
      break
    case "full-sm":
      dialog.classList.add('modal-fullscreen-sm-down')
      break
    case "full-md":
      dialog.classList.add('modal-fullscreen-md-down')
      break
    case "full-lg":
      dialog.classList.add('modal-fullscreen-lg-down')
      break
    case "full-xl":
      dialog.classList.add('modal-fullscreen-xl-down')
      break
    case "":
    case "default":
      break
    default:
      dialog.classList.add(ModalSizes)
      break
  }

  switch (VerticallyCentered) {
    case true:
      dialog.classList.add('modal-dialog-centered')
      break
    case false:
    default:
  }

  switch (ScrollingLongContent) {
    case true:
      dialog.classList.add('modal-dialog-scrollable')
      break
    case false:
    default:
  }

  dialog.append(modalContent(headerNodeElement, bodyNodeElement, footerNodeElement))

  return dialog
}

export default modalDialog
