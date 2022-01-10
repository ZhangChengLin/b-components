import {isNull, isEmpty, bsDismissBtn} from './util/index'

/**
 * @param {Node|String|Function} headerNodeElement
 */
const header = (headerNodeElement) => {
  if (isNull(headerNodeElement) || isEmpty(headerNodeElement)) {
    return ''
  }

  const _header = document.createElement('div')
  const _title = document.createElement('h5')

  _header.className = 'modal-header'

  _title.className = 'modal-title'
  _title.id = 'modalTitleLabel'
  headerNodeElement instanceof Function
    ? _title.append(headerNodeElement())
    : headerNodeElement instanceof HTMLElement
      ? _title.append(headerNodeElement)
      : _title.innerHTML = headerNodeElement

  _header.append(_title, bsDismissBtn('modal'))
  return _header
}

export default header
