/**
 * @param {Node | string} titleElement
 */
const modalHeader = (titleElement) => {
  let header = document.createElement('div')
  let title = document.createElement('h5')
  let btn = document.createElement('button')

  header.className = 'modal-header'

  title.className = 'modal-title'
  title.id = 'modalTitleLabel'
  titleElement instanceof HTMLElement ? title.append(titleElement) : title.innerHTML = titleElement

  btn.className = 'btn-close text-reset'
  btn.type = 'button'
  btn.dataset['bsDismiss'] = 'modal'
  btn.ariaLabel = 'Close'

  header.append(title, btn)
  return header
}

export default modalHeader
