/**
 * @param {Node|String|Function} bodyNodeElement
 */
const modalBody = (bodyNodeElement) => {
  let modal_body = document.createElement('div')

  modal_body.className = 'modal-body'
  bodyNodeElement instanceof Function
    ? modal_body.append(bodyNodeElement())
    : bodyNodeElement instanceof HTMLElement
      ? modal_body.append(bodyNodeElement)
      : modal_body.innerHTML = bodyNodeElement

  return modal_body
}

export default modalBody
