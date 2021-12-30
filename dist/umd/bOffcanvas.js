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
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.bOffcanvas = factory());
})(this, (function () { 'use strict';

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
  const offcanvasHeader = (headerNodeElement) => {
    if (isNull(headerNodeElement) || isEmpty(headerNodeElement)) {
      return ''
    }

    let header = document.createElement('div');
    let title = document.createElement('h5');

    header.className = 'offcanvas-header';

    title.className = 'offcanvas-title';
    title.id = 'offcanvasTitleLabel';
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
  const offcanvasBody = (bodyNodeElement) => {
    let offcanvas_body = document.createElement('div');

    offcanvas_body.className = 'offcanvas-body';
    bodyNodeElement instanceof Function
      ? offcanvas_body.append(bodyNodeElement())
      : bodyNodeElement instanceof HTMLElement
        ? offcanvas_body.append(bodyNodeElement)
        : offcanvas_body.innerHTML = bodyNodeElement;

    return offcanvas_body
  };

  /**
   * @param {Node|String|Function} headerNodeElement
   * @param {Node|String|Function} bodyNodeElement
   * @param {String} placement
   * @param {String} offcanvasId
   */
  const offcanvas = (headerNodeElement, bodyNodeElement, placement, offcanvasId) => {
    let _offcanvas = document.createElement('div');
    let header = offcanvasHeader(headerNodeElement);
    let body = offcanvasBody(bodyNodeElement);

    placement = placement ?? 'start';
    switch (placement) {
      case 'start':
      case 'top':
      case 'end':
      case 'bottom':
        break
      default:
        throw `placement 参数错误`
    }

    _offcanvas.className = `offcanvas offcanvas-${placement}`;
    _offcanvas.id = offcanvasId;
    _offcanvas.tabIndex = -1;
    _offcanvas.role = 'dialog';
    _offcanvas.setAttribute('aria-labelledby', 'offcanvasTitleLabel');

    _offcanvas.append(header, body);

    return _offcanvas
  };

  const getTimeString = () => {
    return new Date().getTime().toString()
  };

  /**
   * @param {String} offcanvasId
   * @param {String} EventsType
   * @param {Function} EventsFun
   */
  const offcanvasEvents = (offcanvasId, EventsType, EventsFun) => {
    const offcanvas = document.querySelector("#Offcanvas_" + offcanvasId);
    switch (EventsType) {
      case "show":
        offcanvas.addEventListener("show.bs.offcanvas", function () {
          return EventsFun()
        });
        break
      case "shown":
        offcanvas.addEventListener("shown.bs.offcanvas", function () {
          return EventsFun()
        });
        break
      case "hide":
        offcanvas.addEventListener("hide.bs.offcanvas", function () {
          return EventsFun()
        });
        break
      case "hidden":
        offcanvas.addEventListener("hidden.bs.offcanvas", function () {
          return EventsFun()
        });
        break
      default:
        throw 'eventName error'
    }
  };

  const removeOffcanvas = offcanvasId => {
    const offcanvas_element = document.querySelector("#" + offcanvasId);
    offcanvas_element.addEventListener("hidden.bs.offcanvas", function () {
      let x = bootstrap.Offcanvas.getInstance(offcanvas_element);
      x.dispose();
      setTimeout(function () {
        offcanvas_element.parentElement.removeChild(offcanvas_element);
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
  const bOffcanvas = (headerNodeElement, bodyNodeElement, Placement, Options, EventsType, EventsFunction) => {
    let timeString = getTimeString();
    let offcanvasId = 'offcanvasId_' + timeString;

    let _offcanvas = offcanvas(headerNodeElement, bodyNodeElement, Placement, offcanvasId);
    document.body.append(_offcanvas);

    EventsType && EventsFunction ? offcanvasEvents(timeString, EventsType, EventsFunction) : '';

    let xxx = Options ? new bootstrap.Offcanvas(_offcanvas, Options) : new bootstrap.Offcanvas(_offcanvas);
    xxx.show();
    removeOffcanvas(offcanvasId);
    return offcanvasId
  };

  return bOffcanvas;

}));
//# sourceMappingURL=bOffcanvas.js.map
