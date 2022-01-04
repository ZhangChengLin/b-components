/*!
 * Name: b-components-js
 * Version: 0.0.1-alpha.3
 * Author: ZhangChengLin
 * Email: 469946668@qq.com
 * Description: Generate Bootstrap components through JavaScript
 * Copyright (c) 2020 - 2022 ZhangChengLin
 * Licenses: MIT
 * under the MIT License (license terms are at https://opensource.org/licenses/MIT).
 * GitHub: https://github.com/ZhangChengLin/b-components
*/
const isNull = value => null === value;
const isEmpty = value => "string" === typeof value && '' === value;

const bsDismissBtn = DismissType => {
  let btn = document.createElement('button');

  btn.className = 'btn-close';
  btn.type = 'button';
  btn.dataset['bsDismiss'] = DismissType;
  btn.ariaLabel = 'Close';

  return btn
};

const getTimeString = () => new Date().getTime().toString();

/**
 * @param {Node|String|Function} headerNodeElement
 */
const toastHeader = (headerNodeElement) => {
  if (isNull(headerNodeElement) || isEmpty(headerNodeElement)) {
    return ''
  }

  let header = document.createElement('div');
  let title = document.createElement('h5');

  header.className = 'toast-header';

  title.className = 'toast-title';
  title.id = 'toastTitleLabel';
  headerNodeElement instanceof Function
    ? title.append(headerNodeElement())
    : headerNodeElement instanceof HTMLElement
      ? title.append(headerNodeElement)
      : title.innerHTML = headerNodeElement;

  header.append(title, bsDismissBtn('toast'));
  return header
};

/**
 * @param {Node|String|Function} bodyNodeElement
 */
const toastBody = (bodyNodeElement) => {
  let body = document.createElement('div');

  body.className = 'toast-body';
  bodyNodeElement instanceof Function
    ? body.append(bodyNodeElement())
    : bodyNodeElement instanceof HTMLElement
      ? body.append(bodyNodeElement)
      : body.innerHTML = bodyNodeElement;

  return body
};

/**
 * @param {Node|String|Function} headerNodeElement
 * @param {Node|String|Function} bodyNodeElement
 * @param {String} toastId
 */
const toast = (headerNodeElement, bodyNodeElement, toastId) => {
  let _toast = document.createElement('div');
  let header = toastHeader(headerNodeElement);
  let body = toastBody(bodyNodeElement);

  _toast.className = 'toast';
  _toast.id = toastId;
  _toast.role = 'alert';
  _toast.ariaLive = 'assertive';
  _toast.ariaAtomic = 'true';

  _toast.append(header, body);

  return _toast
};

const toastContainerOutside = (ariaLive) => {
  let containerOutside = document.createElement('div');

  containerOutside.className = 'position-relative';
  containerOutside.ariaLive = ariaLive ?? 'polite';
  containerOutside.ariaAtomic = 'true';

  return containerOutside
};

/**
 * @param {String} Placement
 */
const toastContainer = (Placement) => {
  let container = document.createElement('div');

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

/**
 * @param {HTMLElement} _toast
 * @param {String} EventsType
 * @param {Function} EventsFun
 */
const toastEvents = (_toast, EventsType, EventsFun) => {
  switch (EventsType) {
    case "show":
      _toast.addEventListener("show.bs.toast", () => EventsFun());
      break
    case "shown":
      _toast.addEventListener("shown.bs.toast", () => EventsFun());
      break
    case "hide":
      _toast.addEventListener("hide.bs.toast", () => EventsFun());
      break
    case "hidden":
      _toast.addEventListener("hidden.bs.toast", () => EventsFun());
      break
    default:
      throw 'EventsType error'
  }
};

/**
 * @param {HTMLElement} _toast
 */
const removeToast = _toast => {
  _toast.addEventListener("hidden.bs.toast", () => {
    let x = bootstrap.Toast.getInstance(_toast);
    x.dispose();
    setTimeout(() => {
      _toast.parentElement.removeChild(_toast);
    }, 3e3);
  });
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
  let toastId = 'toastId_' + getTimeString();

  let _containerOutsize = toastContainerOutside();
  let _container = toastContainer(Placement);
  let _toast = toast(headerNodeElement, bodyNodeElement, toastId);

  _container.append(_toast);
  _containerOutsize.append(_container);
  document.body.append(_containerOutsize);

  EventsType && EventsFunction ? toastEvents(_toast, EventsType, EventsFunction) : '';

  let xxx = Options ? new bootstrap.Toast(_toast, Options) : new bootstrap.Toast(_toast);
  xxx.show();
  removeToast(_toast);
  return toastId
};

export { bToast };
//# sourceMappingURL=bToast.js.map
