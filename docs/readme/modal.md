# bModal

<a href="https://github.com/ZhangChengLin/b-components" target="_blank"><img alt="GitHub Stars" title="GitHub Stars" src="https://img.shields.io/github/stars/ZhangChengLin/b-components.svg?style=social"></a>

## Demo

[https://ZhangChengLin.github.io/b-components/docs/demo/modal.html](https://ZhangChengLin.github.io/b-components/docs/demo/modal.html)


---

## Table of Contents

| Contents                                        |
|:------------------------------------------------|
| [How to install](#how-to-install)               |
| [How to use](#how-to-use)                       |
| [Parameter Description](#parameter-description) |

## How to install

- Install via NPM package

```
npm i b-components-js --save
```

---

## How to use

```
<a href="javascript:;" onclick="bModal(parameter)">text</a>

<script src="./dist/umd/bModal.min.js"></script>
```

OR

```
<a href="javascript:;" id="xx">text</a>

<script src="./dist/umd/bModal.min.js"></script>
<script>
    const xx = document.querySelector("#xx");
    xx.addEventListener("click", function () {
        bModal(parameter);
    })
</script>
```

OR MORE


## Parameter Description

```
bModal(headerNodeElement, bodyNodeElement, footerNodeElement, ModalSizes, VerticallyCentered, ScrollingLongContent, Options, EventsType, EventsFunction)
```

**Return Values**

|  type  |        such as        |                 Description                 |
|:------:|:---------------------:|:-------------------------------------------:|
| String | modalId_1552756356601 | "modalId_" starts with a 13-digit timestamp |

---


| Order |       Argument       |                Type                |                        Default                         |                                                           Alternative                                                            |                                                                  Description                                                                  |
|:-----:|:--------------------:|:----------------------------------:|:------------------------------------------------------:|:--------------------------------------------------------------------------------------------------------------------------------:|:---------------------------------------------------------------------------------------------------------------------------------------------:|
|   1   |  headerNodeElement   | Node &#124; String &#124; Function |                           ""                           |                                                               None                                                               |                                                   h5.modal-title The content of the element                                                   |
|   2   |   bodyNodeElement    | Node &#124; String &#124; Function |                           ""                           |                                                               None                                                               |                                                   div.modal-body The content of the element                                                   |
|   3   |  footerNodeElement   | Node &#124; String &#124; Function |                           ""                           |                                                               None                                                               |                                                  div.modal-footer The content of the element                                                  |
|   4   |      ModalSizes      |               String               |                           ""                           | "sm" &#124; "lg" &#124; "xl" &#124; "full" &#124; "full-sm" &#124; "full-md" &#124; "full-lg" &#124; "full-xl" &#124; "full-xxl" | https://getbootstrap.com/docs/5.1/components/modal/#optional-sizes <br/> https://getbootstrap.com/docs/5.1/components/modal/#fullscreen-modal |
|   5   |  VerticallyCentered  |              Boolean               |                         false                          |                                                        true &#124; false                                                         |                                    https://getbootstrap.com/docs/5.1/components/modal/#vertically-centered                                    |
|   6   | ScrollingLongContent |              Boolean               |                         false                          |                                                        true &#124; false                                                         |                                  https://getbootstrap.com/docs/5.1/components/modal/#scrolling-long-content                                   |
|   7   |       Options        |               Object               | backdrop : true,<br/>keyboard : true,<br/>focus : true |          backdrop : true &#124; false &#124; "static",<br/>keyboard : true &#124; false,<br/>focus : true &#124; false           |                                          https://getbootstrap.com/docs/5.1/components/modal/#options                                          |
|   8   |      eventsType      |               String               |                          None                          |                             "show" &#124; "shown" &#124; "hide" &#124; "hidden" &#124; hidePrevented                             |                                          https://getbootstrap.com/docs/5.1/components/modal/#events                                           |
|   9   |      eventsFun       |              Function              |                          None                          |                                                               None                                                               |                                          https://getbootstrap.com/docs/5.1/components/modal/#events                                           |

---
