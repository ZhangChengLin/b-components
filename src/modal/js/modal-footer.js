import {isEmpty, isNull} from './util/index'

/**
 * @param {Node|String|Function} footerNodeElement
 */
const footer = (footerNodeElement) => {
  if (isNull(footerNodeElement) || isEmpty(footerNodeElement)) {
    return ''
  }

  const _footer = document.createElement('div')

  _footer.className = 'modal-footer'
  footerNodeElement instanceof Function
    ? _footer.append(footerNodeElement())
    : footerNodeElement instanceof HTMLElement
      ? _footer.append(footerNodeElement)
      : _footer.innerHTML = footerNodeElement

  return _footer
}

export default footer
