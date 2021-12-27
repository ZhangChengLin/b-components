/**
 * @param {Node|string} bodyElement
 */
const offcanvasBody = (bodyElement) => {
  let offcanvas_body = document.createElement('div')

  offcanvas_body.className = 'offcanvas-body'
  bodyElement instanceof Function
    ? offcanvas_body.append(bodyElement())
    : bodyElement instanceof HTMLElement
      ? offcanvas_body.append(bodyElement)
      : offcanvas_body.innerHTML = bodyElement

  return offcanvas_body
}

export default offcanvasBody
