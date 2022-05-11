import { Alert } from 'bootstrap'
import { bsDismissBtn, componentEvent } from '../../util'

/**
 * @param {String} type
 */
const alert = (type = 'success') => {
  const _alert = document.createElement('div')

  _alert.className = `alert alert-${type}`
  _alert.role = 'alert'

  return _alert
}

/**
 * @param {HTMLElement} parentContainer
 * @param {HTMLElement | string} content
 * @param {String | null} type
 * @param {String | null} EventsType
 * @param {Function | null} EventsFunction
 */
const bAlert = (parentContainer, content, type, EventsType, EventsFunction) => {
  const _alert = alert(type)

  typeof content === 'string' ? _alert.innerHTML = content : _alert.append(content)
  _alert.append(bsDismissBtn('alert'))
  _alert.classList.add('alert-dismissible')
  parentContainer.append(_alert)

  EventsType && EventsFunction ? componentEvent(_alert, EventsType, EventsFunction, 'alert') : ''

  return new Alert(_alert)
}

export default bAlert
