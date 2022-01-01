/**
 * @param {Node|String|Function} bodyNodeElement
 */
const toastBody = (bodyNodeElement) => {
  let toast_body = document.createElement('div')

  toast_body.className = 'toast-body'
  bodyNodeElement instanceof Function
    ? toast_body.append(bodyNodeElement())
    : bodyNodeElement instanceof HTMLElement
      ? toast_body.append(bodyNodeElement)
      : toast_body.innerHTML = bodyNodeElement

  return toast_body
}

export default toastBody
