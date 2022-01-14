# bOffcanvas

<a href="https://github.com/ZhangChengLin/b-components" target="_blank"><img alt="GitHub Stars" title="GitHub Stars" src="https://img.shields.io/github/stars/ZhangChengLin/b-components.svg?style=social"></a>

## Demo

[https://ZhangChengLin.github.io/b-components/docs/demo/offcanvas.html](https://ZhangChengLin.github.io/b-components/docs/demo/offcanvas.html)

---

## Table of Contents

| Contents                                        |
|:------------------------------------------------|
| [How to use](#how-to-use)                       |
| [Parameter Description](#parameter-description) |

## How to use

```
<a href="javascript:;" onclick="bOffcanvas(parameter)">text</a>

<script src="./dist/bOffcanvas.min.js"></script>
```

OR

```
<a href="javascript:;" id="xx">text</a>

<script src="./dist/bOffcanvas.min.js"></script>
<script>
    const xx = document.querySelector("#xx");
    xx.addEventListener("click", function () {
        bOffcanvas(parameter);
    })
</script>
```

OR MORE


---

## Parameter Description

```
bOffcanvas(headerNodeElement, bodyNodeElement, Placement, Options, EventsType, EventsFunction)
```


**Return Values**

|  type  |          such as          |                   Description                   |
|:------:|:-------------------------:|:-----------------------------------------------:|
| String | offcanvasId_1552756356601 | "offcanvasId_" starts with a 13-digit timestamp |

---


| Order |     Argument      |                Type                | Default |                       Alternative                        |                            Description                            |
|:-----:|:-----------------:|:----------------------------------:|:-------:|:--------------------------------------------------------:|:-----------------------------------------------------------------:|
|   1   | headerNodeElement | Node &#124; String &#124; Function |   ""    |                           None                           |           h5.offcanvas-title The content of the element           |
|   2   |  bodyNodeElement  | Node &#124; String &#124; Function |   ""    |                           None                           |           div.offcanvas-body The content of the element           |
|   3   |     Placement     |               String               | 'start' |    "start" &#124; "top" &#124; "end" &#124; "bottom"     | https://getbootstrap.com/docs/5.1/components/offcanvas/#placement |
|   4   |      Options      |               Object               |   {}    | backdrop : true,<br/>keyboard : true,<br/>scroll : false |  https://getbootstrap.com/docs/5.1/components/offcanvas/#options  |
|   5   |    eventsType     |               String               |  None   |   "show" &#124; "shown" &#124; "hide" &#124; "hidden"    |  https://getbootstrap.com/docs/5.1/components/offcanvas/#events   |
|   6   |     eventsFun     |              Function              |  None   |                           None                           |  https://getbootstrap.com/docs/5.1/components/offcanvas/#events   |

---
