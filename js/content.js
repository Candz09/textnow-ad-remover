(function () {
    "use strict";

    [
        '#appContainer > div.flex-row.flex-fill > div:nth-child(3)',
        '#sidebar > div:nth-child(3)',
        '#bannerContainer',
    ]
        .forEach(selector => document.querySelector(selector).remove())
    ;
})();
