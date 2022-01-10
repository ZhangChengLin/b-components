/*!
 * Name: b-components-js
 * Version: 0.0.1-alpha.4
 * Author: ZhangChengLin
 * Email: 469946668@qq.com
 * Description: Generate Bootstrap components through JavaScript
 * Copyright (c) 2020 - 2022 ZhangChengLin
 * Licenses: MIT
 * under the MIT License (license terms are at https://opensource.org/licenses/MIT).
 * GitHub: https://github.com/ZhangChengLin/b-components
*/
/**
 * @param {String} toastId
 */
const toast = (toastId) => {
  const _toast = document.createElement('div');

  _toast.className = 'toast';
  _toast.id = toastId;
  _toast.role = 'alert';
  _toast.ariaLive = 'assertive';
  _toast.ariaAtomic = 'true';

  return _toast
};

const containerOutside = (ariaLive) => {
  const containerOutside = document.createElement('div');

  containerOutside.className = 'position-relative';
  containerOutside.ariaLive = ariaLive ?? 'polite';
  containerOutside.ariaAtomic = 'true';

  return containerOutside
};

/**
 * @param {String} Placement
 */
const container = (Placement) => {
  const container = document.createElement('div');

  Placement = Placement ?? 'be';
  switch (Placement) {
    case 'ts':
      Placement = 'top-0 start-0';
      break
    case 'tc':
      Placement = 'top-0 start-50 translate-middle-x';
      break
    case 'te':
      Placement = 'top-0 end-0';
      break
    case 'ms':
      Placement = 'top-50 start-0 translate-middle-y';
      break
    case 'mc':
      Placement = 'top-50 start-50 translate-middle';
      break
    case 'me':
      Placement = 'top-50 end-0 translate-middle-y';
      break
    case 'bs':
      Placement = 'bottom-0 start-0';
      break
    case 'bc':
      Placement = 'bottom-0 start-50 translate-middle-x';
      break
    case 'be':
      Placement = 'bottom-0 end-0';
      break
    default:
      throw 'Placement error'
  }

  container.className = `toast-container position-fixed ${Placement}`;

  return container
};

const isNull = value => value === null;
const isEmpty = value => typeof value === 'string' && value === '';

const bsDismissBtn = (dismissType, whiteVariant = false) => {
  const btn = document.createElement('button');

  btn.className = whiteVariant ? 'btn-close btn-close-white' : 'btn-close';
  btn.type = 'button';
  btn.dataset.bsDismiss = dismissType;
  btn.ariaLabel = 'Close';

  return btn
};

const getTimeString = () => Date.now().toString();

/**
 * @param {HTMLElement} _toast
 * @param {String} eventsType
 * @param {Function} eventsFun
 */
const toastEvents = (_toast, eventsType, eventsFun) => {
  switch (eventsType) {
    case 'show':
      _toast.addEventListener('show.bs.toast', () => eventsFun());
      break
    case 'shown':
      _toast.addEventListener('shown.bs.toast', () => eventsFun());
      break
    case 'hide':
      _toast.addEventListener('hide.bs.toast', () => eventsFun());
      break
    case 'hidden':
      _toast.addEventListener('hidden.bs.toast', () => eventsFun());
      break
    default:
      throw 'eventsType error'
  }
};

/**
 * @param {HTMLElement} _toast
 */
const removeToast = _toast => {
  _toast.addEventListener('hidden.bs.toast', () => {
    const x = bootstrap.Toast.getInstance(_toast);
    x.dispose();
    setTimeout(() => {
      _toast.remove();
    }, 3e3);
  });
};

/**
 * @param {Node|String|Function} headerNodeElement
 */
const header = (headerNodeElement) => {
  if (isNull(headerNodeElement) || isEmpty(headerNodeElement)) {
    return ''
  }

  const _header = document.createElement('div');
  const _title = document.createElement('strong');

  _header.className = 'toast-header';

  _title.className = 'toast-title me-auto';
  headerNodeElement instanceof Function
    ? _title.append(headerNodeElement())
    : headerNodeElement instanceof HTMLElement
      ? _title.append(headerNodeElement)
      : _title.innerHTML = headerNodeElement;

  _header.append(_title, bsDismissBtn('toast'));
  return _header
};

/**
 * @param {Node|String|Function} bodyNodeElement
 */
const body = (bodyNodeElement) => {
  const _body = document.createElement('div');

  _body.className = 'toast-body';
  bodyNodeElement instanceof Function
    ? _body.append(bodyNodeElement())
    : bodyNodeElement instanceof HTMLElement
      ? _body.append(bodyNodeElement)
      : _body.innerHTML = bodyNodeElement;

  return _body
};

/**
 * @param {Node|String|Function} headerNodeElement
 * @param {Node|String|Function} bodyNodeElement
 * @param {String} Placement
 * @param {Object} Options
 * @param {String} EventsType
 * @param {Function} EventsFunction
 */
const bToast = (headerNodeElement, bodyNodeElement, Placement, Options, EventsType, EventsFunction) => {
  const toastId = 'toastId_' + getTimeString();

  const _containerOutsize = containerOutside();
  const _container = document.querySelector('.toast-container') ?? container(Placement);// Todo:尝试让新 toast 的位置可控
  const _toast = toast(toastId);
  const _header = header(headerNodeElement);
  const _body = body(bodyNodeElement);

  _toast.append(_header, _body);
  _container.append(_toast);
  _containerOutsize.append(_container);
  document.body.append(_containerOutsize);

  EventsType && EventsFunction ? toastEvents(_toast, EventsType, EventsFunction) : '';

  const xxx = Options ? new bootstrap.Toast(_toast, Options) : new bootstrap.Toast(_toast);
  xxx.show();
  removeToast(_toast);
  return toastId
};

export { bToast };
//# sourceMappingURL=bToast.js.map
