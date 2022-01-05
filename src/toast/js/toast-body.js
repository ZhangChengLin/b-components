/**
 * @param {Node|String|Function} bodyNodeElement
 */
const toastBody = (bodyNodeElement) => {
  const body = document.createElement('div')

  body.className = 'toast-body'
  bodyNodeElement instanceof Function
    ? body.append(bodyNodeElement())
    : bodyNodeElement instanceof HTMLElement
      ? body.append(bodyNodeElement)
      : body.innerHTML = bodyNodeElement

  return body
}

export default toastBody
