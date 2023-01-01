/// test.js
(function() {
    "use strict";
    console.log("ASDFASDFASDFASDF");
})();

/// stackexchange-banner-remover.js
(function() {
    "use strict";
    window.addEventListener("load", function() {
        if (window.location.href.includes("stackoverflow.com/") || window.location.href.includes("stackexchange.com/")) {
            const cookiesBanner = document.querySelectorAll("div[class*='js-consent-banner']");
            cookiesBanner.forEach(banner => {
                banner.remove();
            });
        }
    });
})();


/// youtube-shorts-redirector.js
/// alias ysr.js
(function() {
    "use strict";
    let oldHref = document.location.href;
    if (window.location.href.indexOf("youtube.com/shorts") > -1) {
        window.location.replace(window.location.toString().replace("/shorts/", "/watch?v="));
    }
    window.onload = function() {
        let bodyList = document.querySelector("body");
        let observer = new MutationObserver(function(mutations) {
            mutations.forEach(function() {
                if (oldHref !== document.location.href) {
                    oldHref = document.location.href;
                    if (window.location.href.indexOf("youtube.com/shorts") > -1) {
                        window.location.replace(window.location.toString().replace("/shorts/", "/watch?v="));
                    }
                }
            });
        });
        let config = {
            childList: true,
            subtree: true
        };
        observer.observe(bodyList, config);
    };
})();

/// old-reddit-redirector.js
/// alias orr.js
(function() {
    "use strict";
    if (window.location.href.includes("/www.reddit.com/") && !window.location.href.includes("/www.reddit.com/gallery/") && !window.location.href.includes("/www.reddit.com/poll/")) {
        window.location.replace(window.location.toString().replace("/www.reddit.com/", "/old.reddit.com/"));
    }
})();
