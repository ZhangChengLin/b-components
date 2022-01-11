import {isNull, isEmpty, bsDismissBtn} from './util/index'

/**
 * @param {Node|String|Function} headerNodeElement
 */
const header = (headerNodeElement) => {
  if (isNull(headerNodeElement) || isEmpty(headerNodeElement)) {
    return ''
  }

  const _header = document.createElement('div')
  const _title = document.createElement('strong')

  _header.className = 'toast-header'

  _title.className = 'toast-title me-auto'
  headerNodeElement instanceof Function
    ? _title.append(headerNodeElement())
    : headerNodeElement instanceof HTMLElement
      ? _title.append(headerNodeElement)
      : _title.innerHTML = headerNodeElement

  _header.append(_title, bsDismissBtn('toast'))

  return _header
}

export default header
