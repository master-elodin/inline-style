# inline-style.js
Create CSS styles easily within JavaScript!

Useful when:
* Creating Greasemonkey or Tampermonkey scripts with styles
* Testing out multiple style changes on a page using developer tools

## Using
Add your styles in the same format as you would add them to a CSS file:

```javascript
InlineStyle({
    "div": {
        "color": "white",
        "background-color" : "black"
    },
    "div .some-class": {
        "font-size" : "14px"
    },
    ".some-class__block": {
        "width": "200px",
        "height": "20px",
        "transition": "1s"
    },
    ".some-class__block:hover": {
        "width": "300px"
    }
});
```

If you need external CSS, add them after your other styles:

```javascript
InlineStyle({
    "div": {
        "color": "white",
        "background-color" : "black"
    },
    ...
}, ["https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
    "https://cdnjs.cloudflare.com/ajax/libs/chosen/1.6.2/chosen.min.css"]);
```
