/**
 * @param {String} ModalSizes
 * @param VerticallyCentered
 * @param ScrollingLongContent
 */
const dialog = (ModalSizes = '', VerticallyCentered = false, ScrollingLongContent = false) => {
  const _dialog = document.createElement('div')

  _dialog.className = 'modal-dialog'

  switch (ModalSizes) {
    case 'sm':
      _dialog.classList.add('modal-sm')
      break
    case 'lg':
      _dialog.classList.add('modal-lg')
      break
    case 'xl':
      _dialog.classList.add('modal-xl')
      break
    case 'full':
      _dialog.classList.add('modal-fullscreen')
      break
    case 'full-sm':
      _dialog.classList.add('modal-fullscreen-sm-down')
      break
    case 'full-md':
      _dialog.classList.add('modal-fullscreen-md-down')
      break
    case 'full-lg':
      _dialog.classList.add('modal-fullscreen-lg-down')
      break
    case 'full-xl':
      _dialog.classList.add('modal-fullscreen-xl-down')
      break
    case '':
    case 'default':
      break
    default:
      _dialog.classList.add(ModalSizes)
      break
  }

  switch (VerticallyCentered) {
    case true:
      _dialog.classList.add('modal-dialog-centered')
      break
    case false:
    default:
  }

  switch (ScrollingLongContent) {
    case true:
      _dialog.classList.add('modal-dialog-scrollable')
      break
    case false:
    default:
  }

  return _dialog
}

export default dialog
