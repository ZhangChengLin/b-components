/*!
    * Name: b-components-js
    * Version: 0.0.1-alpha.1
    * Author: ZhangChengLin
    * Email: 469946668@qq.com
    * Description: Generate Bootstrap components through JavaScript
    * Copyright (c) 2020 - 2021 ZhangChengLin
    * Licenses: MIT
    * under the MIT License (license terms are at https://opensource.org/licenses/MIT).
    * GitHub: https://github.com/ZhangChengLin/b-components
    * issues: https://github.com/ZhangChengLin/b-components/issues
*/
const getTimeString = () => {
  return new Date().getTime().toString()
};

/**
 * @param {String} modalId
 * @param {String} EventsType
 * @param {function} EventsFun
 */
const modalEvents = (modalId, EventsType, EventsFun) => {
  const modal = document.querySelector("#" + modalId);
  switch (EventsType) {
    case "show":
      modal.addEventListener("show.bs.modal", function () {
        return EventsFun()
      });
      break
    case "shown":
      modal.addEventListener("shown.bs.modal", function () {
        return EventsFun()
      });
      break
    case "hide":
      modal.addEventListener("hide.bs.modal", function () {
        return EventsFun()
      });
      break
    case "hidden":
      modal.addEventListener("hidden.bs.modal", function () {
        return EventsFun()
      });
      break
    case "hidePrevented":
      modal.addEventListener("hidePrevented.bs.modal", function () {
        return EventsFun()
      });
      break
  }
};

const removeModal = modalId => {
  const modal_element = document.querySelector("#" + modalId);
  modal_element.addEventListener("hidden.bs.modal", function () {
    let x = bootstrap.Modal.getInstance(modal_element);
    x.dispose();
    setTimeout(function () {
      modal_element.parentElement.removeChild(modal_element);
    }, 2e3);
  });
};

const isNull = value => null === value;
const isEmpty = value => "string" === typeof value && '' === value;

const bsDismissBtn = DismissType => {
  let btn = document.createElement('button');

  btn.className = 'btn-close text-reset';
  btn.type = 'button';
  btn.dataset['bsDismiss'] = DismissType;
  btn.ariaLabel = 'Close';

  return btn
};

/**
 * @param {Node|String|Function} headerNodeElement
 */
const modalHeader = (headerNodeElement) => {
  if (isNull(headerNodeElement) || isEmpty(headerNodeElement)) {
    return ''
  }

  let header = document.createElement('div');
  let title = document.createElement('h5');

  header.className = 'modal-header';

  title.className = 'modal-title';
  title.id = 'modalTitleLabel';
  headerNodeElement instanceof Function
    ? title.append(headerNodeElement())
    : headerNodeElement instanceof HTMLElement
      ? title.append(headerNodeElement)
      : title.innerHTML = headerNodeElement;

  header.append(title, bsDismissBtn('offcanvas'));
  return header
};

/**
 * @param {Node|String|Function} bodyNodeElement
 */
const modalBody = (bodyNodeElement) => {
  let modal_body = document.createElement('div');

  modal_body.className = 'modal-body';
  bodyNodeElement instanceof Function
    ? modal_body.append(bodyNodeElement())
    : bodyNodeElement instanceof HTMLElement
      ? modal_body.append(bodyNodeElement)
      : modal_body.innerHTML = bodyNodeElement;

  return modal_body
};

/**
 * @param {Node|String|Function} footerNodeElement
 */
const modalFooter = (footerNodeElement) => {
  if (isNull(footerNodeElement) || isEmpty(footerNodeElement)) {
    return ''
  }

  let modal_footer = document.createElement('div');

  modal_footer.className = 'modal-footer';
  footerNodeElement instanceof Function
    ? modal_footer.append(footerNodeElement())
    : footerNodeElement instanceof HTMLElement
      ? modal_footer.append(footerNodeElement)
      : modal_footer.innerHTML = footerNodeElement;

  return modal_footer
};

/**
 * @param {Node|String|Function} headerNodeElement
 * @param {Node|String|Function} bodyNodeElement
 * @param {Node|String|Function} footerNodeElement
 */
const modalContent = (headerNodeElement, bodyNodeElement, footerNodeElement) => {
  const content = document.createElement("div");

  content.className = "modal-content";

  content.append(
    modalHeader(headerNodeElement),
    modalBody(bodyNodeElement),
    modalFooter(footerNodeElement)
  );

  return content
};

/**
 * @param {Node|String|Function} headerNodeElement
 * @param {Node|String|Function} bodyNodeElement
 * @param {Node|String|Function} footerNodeElement
 * @param {String} ModalSizes
 */
const modalDialog = (headerNodeElement, bodyNodeElement, footerNodeElement, ModalSizes = '', VerticallyCentered = false, ScrollingLongContent = false) => {
  const dialog = document.createElement('div');

  dialog.className = 'modal-dialog';

  switch (ModalSizes) {
    case "sm":
      dialog.classList.add('modal-sm');
      break
    case "lg":
      dialog.classList.add('modal-lg');
      break
    case "xl":
      dialog.classList.add('modal-xl');
      break
    case "full":
      dialog.classList.add('modal-fullscreen');
      break
    case "full-sm":
      dialog.classList.add('modal-fullscreen-sm-down');
      break
    case "full-md":
      dialog.classList.add('modal-fullscreen-md-down');
      break
    case "full-lg":
      dialog.classList.add('modal-fullscreen-lg-down');
      break
    case "full-xl":
      dialog.classList.add('modal-fullscreen-xl-down');
      break
    case "":
    case "default":
      break
    default:
      dialog.classList.add(ModalSizes);
      break
  }

  switch (VerticallyCentered) {
    case true:
      dialog.classList.add('modal-dialog-centered');
      break
  }

  switch (ScrollingLongContent) {
    case true:
      dialog.classList.add('modal-dialog-scrollable');
      break
  }

  dialog.append(modalContent(headerNodeElement, bodyNodeElement, footerNodeElement));

  return dialog
};

/**
 * @param {Node|String|Function} headerNodeElement
 * @param {Node|String|Function} bodyNodeElement
 * @param {Node|String|Function} footerNodeElement
 * @param {String} ModalSizes
 * @param {*} VerticallyCentered
 * @param {*} ScrollingLongContent
 * @param {String} modalId
 */
const modal = (headerNodeElement, bodyNodeElement, footerNodeElement, ModalSizes, VerticallyCentered, ScrollingLongContent, modalId) => {
  const _modal = document.createElement('div');

  _modal.className = "modal fade";
  _modal.id = modalId;
  _modal.tabIndex = -1;
  _modal.role = "dialog";
  _modal.setAttribute('aria-labelledby', 'modalTitleLabel');

  _modal.append(modalDialog(headerNodeElement, bodyNodeElement, footerNodeElement, ModalSizes, VerticallyCentered, ScrollingLongContent));

  return _modal
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
  let timeString = getTimeString();
  let modalId = 'modalId_' + timeString;

  let _modal = modal(headerNodeElement, bodyNodeElement, footerNodeElement, ModalSizes, VerticallyCentered, ScrollingLongContent, modalId);
  document.body.append(_modal);

  EventsType && EventsFunction ? modalEvents(modalId, EventsType, EventsFunction) : "";

  let xxx = Options ? new bootstrap.Modal(_modal, Options) : new bootstrap.Modal(_modal);
  xxx.show();
  removeModal(modalId);
  return modalId
};

export { bModal };
//# sourceMappingURL=bModal.js.map
