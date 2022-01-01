# bToast

<a href="https://github.com/ZhangChengLin/b-components" target="_blank"><img alt="GitHub Stars" title="GitHub Stars" src="https://img.shields.io/github/stars/ZhangChengLin/b-components.svg?style=social"></a>

## Demo

[https://ZhangChengLin.github.io/b-components/docs/demo-toast.html](https://ZhangChengLin.github.io/b-components/docs/demo-toast.html)


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
