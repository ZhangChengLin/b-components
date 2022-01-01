/**
 * @param {Node|String|Function} bodyNodeElement
 */
const offcanvasBody = (bodyNodeElement) => {
  let body = document.createElement('div')

  body.className = 'offcanvas-body'
  bodyNodeElement instanceof Function
    ? body.append(bodyNodeElement())
    : bodyNodeElement instanceof HTMLElement
      ? body.append(bodyNodeElement)
      : body.innerHTML = bodyNodeElement

  return body
}

export default offcanvasBody
