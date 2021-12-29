/**
 * @param {Node|string|Function} bodyNodeElement
 */
const offcanvasBody = (bodyNodeElement) => {
  let offcanvas_body = document.createElement('div')

  offcanvas_body.className = 'offcanvas-body'
  bodyNodeElement instanceof Function
    ? offcanvas_body.append(bodyNodeElement())
    : bodyNodeElement instanceof HTMLElement
      ? offcanvas_body.append(bodyNodeElement)
      : offcanvas_body.innerHTML = bodyNodeElement

  return offcanvas_body
}

export default offcanvasBody
