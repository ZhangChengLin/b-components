/**
 * @param {Node|string} contentElement
 */
const offcanvasBody = (contentElement) => {
  let offcanvas_body = document.createElement('div')

  offcanvas_body.className = 'offcanvas-body'

  contentElement instanceof HTMLElement ? offcanvas_body.append(contentElement) : offcanvas_body.innerHTML = contentElement

  return offcanvas_body
}

export default offcanvasBody
