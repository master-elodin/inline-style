function InlineStyle(styleConfig, externalStyles) {
    var styleString = "";
    Object.keys(styleConfig).forEach(function(selector) {
        var selectorStyle = styleConfig[selector];
        styleString += selector + "{";
        Object.keys(selectorStyle).forEach(function(key) {
            styleString += key + ":" + selectorStyle[key] + ";";
        });
        styleString += "}";
    });

    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = styleString;
    document.getElementsByTagName('head')[0].appendChild(style);

    if(externalStyles && externalStyles.constructor === Array) {
        var addExternal = function(url) {
            var external = document.createElement('link');
            external.href = url;
            external.rel = "stylesheet";
            document.getElementsByTagName('head')[0].appendChild(external);
        }
        externalStyles.forEach(function(url) {
            addExternal(url);
        });
    }
}
