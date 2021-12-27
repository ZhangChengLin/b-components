import modalContent from "./modal-content"

/**
 * @param {Node|string} titleElement
 * @param {Node|string} bodyElement
 * @param {Node|string} footerElement
 * @param {string} ModalSizes
 * @param {boolean} VerticallyCentered
 * @param {boolean} LongContentType
 */
const modalDialog = (titleElement, bodyElement, footerElement, ModalSizes = '', VerticallyCentered = false, LongContentType = false) => {
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

  switch (LongContentType) {
    case true:
      dialog.classList.add('modal-dialog-scrollable')
      break
    case false:
    default:
  }

  dialog.append(modalContent(titleElement, bodyElement, footerElement))

  return dialog
}

export default modalDialog
