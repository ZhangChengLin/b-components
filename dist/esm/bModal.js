/*!
    * Name: b-components-js
    * Version: 0.0.1-alpha.0
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

const modalEvents = (modalId, EventsType, EventsFun) => {
  const modal = document.querySelector("#" + modalId);
  switch (EventsType) {
    case "show":
      modal.addEventListener("show.bs.modal", function () {
        return EventsFun();
      });
      break;
    case "shown":
      modal.addEventListener("shown.bs.modal", function () {
        return EventsFun();
      });
      break;
    case "hide":
      modal.addEventListener("hide.bs.modal", function () {
        return EventsFun();
      });
      break;
    case "hidden":
      modal.addEventListener("hidden.bs.modal", function () {
        return EventsFun();
      });
      break;
    case "hidePrevented":
      modal.addEventListener("hidePrevented.bs.modal", function () {
        return EventsFun();
      });
      break;
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

/**
 * @param {Node | string} titleElement
 */
const modalHeader = (titleElement) => {
  let header = document.createElement('div');
  let title = document.createElement('h5');
  let btn = document.createElement('button');

  header.className = 'modal-header';

  title.className = 'modal-title';
  title.id = 'modalTitleLabel';
  titleElement instanceof Function
    ? title.append(titleElement())
    : titleElement instanceof HTMLElement
      ? title.append(titleElement)
      : title.innerHTML = titleElement;

  btn.className = 'btn-close text-reset';
  btn.type = 'button';
  btn.dataset['bsDismiss'] = 'modal';
  btn.ariaLabel = 'Close';

  header.append(title, btn);
  return header
};

/**
 * @param {Node|string} bodyElement
 */
const modalBody = (bodyElement) => {
  let modal_body = document.createElement('div');

  modal_body.className = 'modal-body';
  bodyElement instanceof Function
    ? modal_body.append(bodyElement())
    : bodyElement instanceof HTMLElement
      ? modal_body.append(bodyElement)
      : modal_body.innerHTML = bodyElement;

  return modal_body
};

/**
 * @param {Node | string} footerElement
 */
const modalFooter = (footerElement) => {
  let modal_footer = document.createElement('div');

  modal_footer.className = 'modal-footer';
  footerElement instanceof Function
    ? modal_footer.append(footerElement())
    : footerElement instanceof HTMLElement
      ? modal_footer.append(footerElement)
      : modal_footer.innerHTML = footerElement;

  return modal_footer
};

/**
 * @param {Node|string} titleContent
 * @param {Node|string} bodyContent
 * @param {Node|string} footerContent
 */
const modalContent = (titleContent, bodyContent, footerContent) => {
  const content = document.createElement("div");

  content.className = "modal-content";

  content.append(
    modalHeader(titleContent),
    modalBody(bodyContent),
    modalFooter(footerContent)
  );

  return content
};

/**
 * @param {Node|string} titleElement
 * @param {Node|string} bodyElement
 * @param {Node|string} footerElement
 * @param {string} ModalSizes
 * @param {boolean} VerticallyCentered
 * @param {boolean} LongContentType
 */
const modalDialog = (titleElement, bodyElement, footerElement, ModalSizes = '', VerticallyCentered = false, LongContentType = false) => {
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

  switch (LongContentType) {
    case true:
      dialog.classList.add('modal-dialog-scrollable');
      break
  }

  dialog.append(modalContent(titleElement, bodyElement, footerElement));

  return dialog
};

/**
 * @param {Node|string} titleElement
 * @param {Node|string} bodyElement
 * @param {Node|string} footerElement
 * @param {string} ModalSizes
 * @param {boolean} VerticallyCentered
 * @param {boolean} LongContentType
 * @param {string} modalId
 */
const modal = (titleElement, bodyElement, footerElement, ModalSizes, VerticallyCentered, LongContentType, modalId) => {
  const _modal = document.createElement('div');

  _modal.id = modalId;
  _modal.className = "modal fade";
  _modal.tabIndex = -1;
  _modal.role = "dialog";
  _modal.setAttribute('aria-labelledby', 'modalTitleLabel');

  _modal.append(modalDialog(titleElement, bodyElement, footerElement, ModalSizes, VerticallyCentered, LongContentType));

  return _modal
};

const bModal = (headerNodeElement, bodyNodeElement, footerNodeElement, ModalSizes, VerticallyCentered, LongContentType, Options, EventsType, EventsFunction) => {
  let timeString = getTimeString();
  let mId = 'modalId_' + timeString;

  document.body.append(modal(headerNodeElement, bodyNodeElement, footerNodeElement, ModalSizes, VerticallyCentered, LongContentType, mId));

  EventsType && EventsFunction ? modalEvents(mId, EventsType, EventsFunction) : "";

  const modal_element = document.querySelector("#" + mId);
  const xxx = Options ? new bootstrap.Modal(modal_element, Options) : new bootstrap.Modal(modal_element);
  xxx.show();
  removeModal(mId);
  return mId;
};

export { bModal };
//# sourceMappingURL=bModal.js.map
