/*!
 * Name: b-components-js
 * Version: 0.0.1-alpha.6
 * Author: ZhangChengLin
 * Email: 469946668@qq.com
 * Description: Generate Bootstrap components through JavaScript
 * Copyright (c) 2020 - 2022 ZhangChengLin
 * Licenses: MIT
 * under the MIT License (license terms are at https://opensource.org/licenses/MIT).
 * GitHub: https://github.com/ZhangChengLin/b-components
*/
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
    const x = bootstrap.Modal.getInstance(_modal);
    x.dispose();
    setTimeout(() => {
      _modal.remove();
    }, 2e3);
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
const body = (bodyNodeElement) => {
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
 * @param {Node|String|Function} headerNodeElement
 * @param {Node|String|Function} bodyNodeElement
 * @param {Node|String|Function} footerNodeElement
 * @param {String} ModalSizes
 * @param {Boolean} VerticallyCentered
 * @param {Boolean} ScrollingLongContent
 * @param {Object} Options
 * @param {String} EventsType
 * @param {Function} EventsFunction
 */
const bModal = (headerNodeElement, bodyNodeElement, footerNodeElement, ModalSizes, VerticallyCentered, ScrollingLongContent, Options, EventsType, EventsFunction) => {
  const modalId = 'modalId_' + getTimeString();

  const _modal = modal(modalId);
  const _dialog = dialog(ModalSizes, VerticallyCentered, ScrollingLongContent);
  const _content = content();
  const _header = header(headerNodeElement);
  const _body = body(bodyNodeElement);
  const _footer = footer(footerNodeElement);

  _content.append(_header, _body, _footer);
  _dialog.append(_content);
  _modal.append(_dialog);
  document.body.append(_modal);

  EventsType && EventsFunction ? modalEvents(_modal, EventsType, EventsFunction) : '';

  const xxx = Options ? new bootstrap.Modal(_modal, Options) : new bootstrap.Modal(_modal);
  xxx.show();
  removeModal(_modal);
  return modalId
};

export { bModal };
//# sourceMappingURL=bModal.js.map
