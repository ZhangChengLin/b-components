# bOffcanvas

## Demo

[https://ZhangChengLin.github.io/b-components-js/docs/demo-offcanvas.html](https://ZhangChengLin.github.io/b-components-js/docs/demo-offcanvas.html)

---

## Table of Contents

| Contents                                        |
|:------------------------------------------------|
| [How to install](#how-to-install)               |
| [How to use](#how-to-use)                       |
| [Parameter Description](#parameter-description) |

## How to install

```
npm i b-components-js --save
```

---

## How to use

```
<a href="javascript:;" onclick="bOffcanvas(parameter)">text</a>

<script src="./dist/umd/bOffcanvas.min.js"></script>
```

OR

```
<a href="javascript:;" id="xx">text</a>

<script src="./dist/umd/bOffcanvas.min.js"></script>
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
