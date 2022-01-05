/**
 * @param {Node|String|Function} bodyNodeElement
 */
const modalBody = (bodyNodeElement) => {
  const body = document.createElement('div')

  body.className = 'modal-body'
  bodyNodeElement instanceof Function
    ? body.append(bodyNodeElement())
    : bodyNodeElement instanceof HTMLElement
      ? body.append(bodyNodeElement)
      : body.innerHTML = bodyNodeElement

  return body
}

export default modalBody
