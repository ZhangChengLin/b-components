/**
 * @param {Node | string} headerNodeElement
 */
const modalHeader = (headerNodeElement) => {
  let header = document.createElement('div')
  let title = document.createElement('h5')
  let btn = document.createElement('button')

  header.className = 'modal-header'

  title.className = 'modal-title'
  title.id = 'modalTitleLabel'
  headerNodeElement instanceof Function
    ? title.append(headerNodeElement())
    : headerNodeElement instanceof HTMLElement
      ? title.append(headerNodeElement)
      : title.innerHTML = headerNodeElement

  btn.className = 'btn-close text-reset'
  btn.type = 'button'
  btn.dataset['bsDismiss'] = 'modal'
  btn.ariaLabel = 'Close'

  header.append(title, btn)
  return header
}

export default modalHeader
