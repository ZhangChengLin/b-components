import content from "./modal-content"


const modalDialog = (titleElement, bodyElement, footerElement, ModalSizes, VerticallyCentered, LongContentType) => {
  const dialog = document.createElement('div')

  dialog.className = 'modal-dialog'

  switch (ModalSizes) {
    case "default":
      break
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
    default:
      dialog.classList.add(ModalSizes)
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

  dialog.append(content(titleElement, bodyElement, footerElement))

  return dialog
}

export default modalDialog
