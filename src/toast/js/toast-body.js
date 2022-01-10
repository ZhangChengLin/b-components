/**
 * @param {Node|String|Function} bodyNodeElement
 */
const body = (bodyNodeElement) => {
  const _body = document.createElement('div')

  _body.className = 'toast-body'
  bodyNodeElement instanceof Function
    ? _body.append(bodyNodeElement())
    : bodyNodeElement instanceof HTMLElement
      ? _body.append(bodyNodeElement)
      : _body.innerHTML = bodyNodeElement

  return _body
}

export default body
