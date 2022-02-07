/*!
 * Name: b-components-js
 * Version: 0.0.1-rc.6
 * Author: ZhangChengLin
 * Email: 469946668@qq.com
 * Description: Generate Bootstrap components through JavaScript
 * Copyright (c) 2020 - 2022 ZhangChengLin
 * Licenses: MIT
 * under the MIT License (license terms are at https://opensource.org/licenses/MIT).
 * GitHub: https://github.com/ZhangChengLin/b-components
*/
import { Modal, Offcanvas, Toast } from 'bootstrap';

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
 * @param {HTMLElement} _modal
 * @param {String} eventsType
 * @param {function} eventsFun
 */
const modalEvents = (_modal, eventsType, eventsFun) => {
  switch (eventsType) {
    case 'show':
      _modal.addEventListener('show.bs.modal', () => eventsFun());
      break
    case 'shown':
      _modal.addEventListener('shown.bs.modal', () => eventsFun());
      break
    case 'hide':
      _modal.addEventListener('hide.bs.modal', () => eventsFun());
      break
    case 'hidden':
      _modal.addEventListener('hidden.bs.modal', () => eventsFun());
      break
    case 'hidePrevented':
      _modal.addEventListener('hidePrevented.bs.modal', () => eventsFun());
      break
  }
};

/**
 * @param {HTMLElement} _modal
 */
const removeModal = _modal => {
  _modal.addEventListener('hidden.bs.modal', () => {
    const x = Modal.getInstance(_modal);
    x.dispose();
    setTimeout(() => {
      _modal.remove();
    }, 2e3);
  });
};

/**
 * @param {String} modalId
 */
const modal = (modalId) => {
  const _modal = document.createElement('div');

  _modal.className = 'modal fade';
  _modal.id = modalId;
  _modal.tabIndex = -1;
  _modal.role = 'dialog';
  _modal.setAttribute('aria-labelledby', 'modalTitleLabel');

  return _modal
};

/**
 * @param {String} ModalSizes
 * @param VerticallyCentered
 * @param ScrollingLongContent
 */
const dialog = (ModalSizes = '', VerticallyCentered = false, ScrollingLongContent = false) => {
  const _dialog = document.createElement('div');

  _dialog.className = 'modal-dialog';

  switch (ModalSizes) {
    case 'sm':
      _dialog.classList.add('modal-sm');
      break
    case 'lg':
      _dialog.classList.add('modal-lg');
      break
    case 'xl':
      _dialog.classList.add('modal-xl');
      break
    case 'full':
      _dialog.classList.add('modal-fullscreen');
      break
    case 'full-sm':
      _dialog.classList.add('modal-fullscreen-sm-down');
      break
    case 'full-md':
      _dialog.classList.add('modal-fullscreen-md-down');
      break
    case 'full-lg':
      _dialog.classList.add('modal-fullscreen-lg-down');
      break
    case 'full-xl':
      _dialog.classList.add('modal-fullscreen-xl-down');
      break
    case '':
    case 'default':
      break
    default:
      _dialog.classList.add(ModalSizes);
      break
  }

  switch (VerticallyCentered) {
    case true:
      _dialog.classList.add('modal-dialog-centered');
      break
  }

  switch (ScrollingLongContent) {
    case true:
      _dialog.classList.add('modal-dialog-scrollable');
      break
  }

  return _dialog
};

const content = () => {
  const _content = document.createElement('div');

  _content.className = 'modal-content';

  return _content
};

/**
 * @param {Node|String|Function} headerNodeElement
 */
const header$2 = (headerNodeElement) => {
  if (isNull(headerNodeElement) || isEmpty(headerNodeElement)) {
    return ''
  }

  const _header = document.createElement('div');
  const _title = document.createElement('h5');

  _header.className = 'modal-header';

  _title.className = 'modal-title';
  _title.id = 'modalTitleLabel';
  headerNodeElement instanceof Function
    ? _title.append(headerNodeElement())
    : headerNodeElement instanceof HTMLElement
      ? _title.append(headerNodeElement)
      : _title.innerHTML = headerNodeElement;

  _header.append(_title, bsDismissBtn('modal'));

  return _header
};

/**
 * @param {Node|String|Function} bodyNodeElement
 */
const body$2 = (bodyNodeElement) => {
  const _body = document.createElement('div');

  _body.className = 'modal-body';
  bodyNodeElement instanceof Function
    ? _body.append(bodyNodeElement())
    : bodyNodeElement instanceof HTMLElement
      ? _body.append(bodyNodeElement)
      : _body.innerHTML = bodyNodeElement;

  return _body
};

/**
 * @param {Node|String|Function} footerNodeElement
 */
const footer = (footerNodeElement) => {
  if (isNull(footerNodeElement) || isEmpty(footerNodeElement)) {
    return ''
  }

  const _footer = document.createElement('div');

  _footer.className = 'modal-footer';
  footerNodeElement instanceof Function
    ? _footer.append(footerNodeElement())
    : footerNodeElement instanceof HTMLElement
      ? _footer.append(footerNodeElement)
      : _footer.innerHTML = footerNodeElement;

  return _footer
};

/**
 * @param {Node|String|Function|null} headerNodeElement
 * @param {Node|String|Function|null} bodyNodeElement
 * @param {Node|String|Function|null} footerNodeElement
 * @param {String|null} ModalSizes
 * @param {Boolean|null} VerticallyCentered
 * @param {Boolean|null} ScrollingLongContent
 * @param {Object|null} Options
 * @param {String|null} EventsType
 * @param {Function|null} EventsFunction
 */
const bModal = (headerNodeElement, bodyNodeElement, footerNodeElement, ModalSizes, VerticallyCentered, ScrollingLongContent, Options, EventsType, EventsFunction) => {
  const modalId = 'modalId_' + getTimeString();

  const _modal = modal(modalId);
  const _dialog = dialog(ModalSizes, VerticallyCentered, ScrollingLongContent);
  const _content = content();
  const _header = header$2(headerNodeElement);
  const _body = body$2(bodyNodeElement);
  const _footer = footer(footerNodeElement);

  _content.append(_header, _body, _footer);
  _dialog.append(_content);
  _modal.append(_dialog);
  document.body.append(_modal);

  EventsType && EventsFunction ? modalEvents(_modal, EventsType, EventsFunction) : '';

  const xxx = Options ? new Modal(_modal, Options) : new Modal(_modal);
  xxx.show();
  removeModal(_modal);
  return modalId
};

/**
 * @param {HTMLElement} _offcanvas
 * @param {String} eventsType
 * @param {Function} eventsFun
 */
const offcanvasEvents = (_offcanvas, eventsType, eventsFun) => {
  switch (eventsType) {
    case 'show':
      _offcanvas.addEventListener('show.bs.offcanvas', () => eventsFun());
      break
    case 'shown':
      _offcanvas.addEventListener('shown.bs.offcanvas', () => eventsFun());
      break
    case 'hide':
      _offcanvas.addEventListener('hide.bs.offcanvas', () => eventsFun());
      break
    case 'hidden':
      _offcanvas.addEventListener('hidden.bs.offcanvas', () => eventsFun());
      break
    default:
      throw 'eventsType error'
  }
};

/**
 * @param {HTMLElement} _offcanvas
 */
const removeOffcanvas = _offcanvas => {
  _offcanvas.addEventListener('hidden.bs.offcanvas', () => {
    const x = Offcanvas.getInstance(_offcanvas);
    x.dispose();
    setTimeout(() => {
      _offcanvas.remove();
    }, 3e3);
  });
};

/**
 * @param {String} Placement
 * @param {String} offcanvasId
 */
const offcanvas = (Placement, offcanvasId) => {
  const _offcanvas = document.createElement('div');


  Placement = Placement ?? 'start';
  switch (Placement) {
    case 'start':
    case 'top':
    case 'end':
    case 'bottom':
      break
    default:
      throw 'Placement error'
  }

  _offcanvas.className = `offcanvas offcanvas-${Placement}`;
  _offcanvas.id = offcanvasId;
  _offcanvas.tabIndex = -1;
  _offcanvas.role = 'dialog';
  _offcanvas.setAttribute('aria-labelledby', 'offcanvasTitleLabel');

  return _offcanvas
};

/**
 * @param {Node|String|Function} headerNodeElement
 */
const header$1 = (headerNodeElement) => {
  if (isNull(headerNodeElement) || isEmpty(headerNodeElement)) {
    return ''
  }

  const _header = document.createElement('div');
  const _title = document.createElement('h5');

  _header.className = 'offcanvas-header';

  _title.className = 'offcanvas-title';
  _title.id = 'offcanvasTitleLabel';
  headerNodeElement instanceof Function
    ? _title.append(headerNodeElement())
    : headerNodeElement instanceof HTMLElement
      ? _title.append(headerNodeElement)
      : _title.innerHTML = headerNodeElement;

  _header.append(_title, bsDismissBtn('offcanvas'));

  return _header
};

/**
 * @param {Node|String|Function} bodyNodeElement
 */
const body$1 = (bodyNodeElement) => {
  const _body = document.createElement('div');

  _body.className = 'offcanvas-body';
  bodyNodeElement instanceof Function
    ? _body.append(bodyNodeElement())
    : bodyNodeElement instanceof HTMLElement
      ? _body.append(bodyNodeElement)
      : _body.innerHTML = bodyNodeElement;

  return _body
};

/**
 * @param {Node|String|Function|null} headerNodeElement
 * @param {Node|String|Function} bodyNodeElement
 * @param {String|null} Placement
 * @param {Object|null} Options
 * @param {String|null} EventsType
 * @param {Function|null} EventsFunction
 */
const bOffcanvas = (headerNodeElement, bodyNodeElement, Placement, Options, EventsType, EventsFunction) => {
  const offcanvasId = 'offcanvasId_' + getTimeString();

  const _offcanvas = offcanvas(Placement, offcanvasId);
  const _header = header$1(headerNodeElement);
  const _body = body$1(bodyNodeElement);

  _offcanvas.append(_header, _body);
  document.body.append(_offcanvas);

  EventsType && EventsFunction ? offcanvasEvents(_offcanvas, EventsType, EventsFunction) : '';

  const xxx = Options ? new Offcanvas(_offcanvas, Options) : new Offcanvas(_offcanvas);
  xxx.show();
  removeOffcanvas(_offcanvas);
  return offcanvasId
};

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
    const x = Toast.getInstance(_toast);
    x.dispose();
    setTimeout(() => {
      _toast.remove();
    }, 3e3);
  });
};

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
 * @param {String|null} Placement
 * @param {Object|null} Options
 * @param {String|null} EventsType
 * @param {Function|null} EventsFunction
 */
const bToast = (headerNodeElement, bodyNodeElement, Placement, Options, EventsType, EventsFunction) => {
  const toastId = 'toastId_' + getTimeString();

  const _containerOutsize = containerOutside();
  const _container = document.querySelector('.toast-container') ?? container(Placement);
  const _toast = toast(toastId);
  const _header = header(headerNodeElement);
  const _body = body(bodyNodeElement);

  _toast.append(_header, _body);
  _container.append(_toast);
  _containerOutsize.append(_container);
  document.body.append(_containerOutsize);

  EventsType && EventsFunction ? toastEvents(_toast, EventsType, EventsFunction) : '';

  const xxx = Options ? new Toast(_toast, Options) : new Toast(_toast);
  xxx.show();
  removeToast(_toast);
  return toastId
};

export { bModal, bOffcanvas, bToast };
//# sourceMappingURL=bComponents.esm.js.map
