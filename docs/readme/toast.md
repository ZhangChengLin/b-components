# bToast

<a href="https://github.com/ZhangChengLin/b-components" target="_blank"><img alt="GitHub Stars" title="GitHub Stars" src="https://img.shields.io/github/stars/ZhangChengLin/b-components.svg?style=social"></a>

## Demo

[https://ZhangChengLin.github.io/b-components/docs/demo/toast.html](https://ZhangChengLin.github.io/b-components/docs/demo/toast.html)


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
<a href="javascript:;" onclick="bToast(parameter)">text</a>

<script src="./dist/umd/bToast.min.js"></script>
```

OR

```
<a href="javascript:;" id="xx">text</a>

<script src="./dist/umd/bToast.min.js"></script>
<script>
    const xx = document.querySelector("#xx");
    xx.addEventListener("click", function () {
        bToast(parameter);
    })
</script>
```

OR MORE


## Parameter Description

```
bToast(headerNodeElement, bodyNodeElement, footerNodeElement, ModalSizes, VerticallyCentered, ScrollingLongContent, Options, EventsType, EventsFunction)
```

**Return Values**

|  type  |        such as        |                 Description                 |
|:------:|:---------------------:|:-------------------------------------------:|
| String | toastId_1552756356601 | "toastId_" starts with a 13-digit timestamp |

---

| Order |     Argument      |                Type                | Default |                                                                                                               Alternative                                                                                                                |                          Description                           |
|:-----:|:-----------------:|:----------------------------------:|:-------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:--------------------------------------------------------------:|
|   1   | headerNodeElement | Node &#124; String &#124; Function |   ""    |                                                                                                                   None                                                                                                                   |         h5.offcanvas-title The content of the element          |
|   2   |  bodyNodeElement  | Node &#124; String &#124; Function |   ""    |                                                                                                                   None                                                                                                                   |         div.offcanvas-body The content of the element          |
|   3   |     Placement     |               String               |  'be'   | "ts" (Top Start) &#124; "tc" (Top Center) &#124; "te" (Top End) &#124;<br/>"ms" (Middle Start) &#124; "mc" (Middle Center) &#124; "me" (Middle End) &#124;<br/> "bs" (Bottom Start) &#124; "bc" (Bottom Center) &#124; "be" (Bottom End) | https://getbootstrap.com/docs/5.1/components/toasts/#placement |
|   4   |      Options      |               Object               |   {}    |                                                                                         animation : true,<br/>autohide : true,<br/>delay : 5000                                                                                          |  https://getbootstrap.com/docs/5.1/components/toasts/#options  |
|   5   |    EventsType     |               String               |  None   |                                                                                           "show" &#124; "shown" &#124; "hide" &#124; "hidden"                                                                                            |  https://getbootstrap.com/docs/5.1/components/toasts/#events   |
|   6   |  EventsFunction   |              Function              |  None   |                                                                                                                   None                                                                                                                   |  https://getbootstrap.com/docs/5.1/components/toasts/#events   |
