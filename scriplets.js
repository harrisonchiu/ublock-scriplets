/***********************/
/* Specific Scriptlets */
/***********************/


/// StackexchangeBannerRemover.js
/// alias StackexchangeBannerRemover.js
(function() {
    "use strict";

    if (
        window.location.href.includes("/www.stackoverflow.com/")
        || window.location.href.includes("stackexchange.com/")
    ) {
        const cookiesBanner = document.querySelectorAll("div[class*='js-consent-banner']");

        cookiesBanner.forEach(banner => {
            banner.remove();
        });
    }
})();

/// YoutubeShortsRedirector.js
/// alias YoutubeShortsRedirector.js
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

/// OldRedditRedirector.js
/// alias OldRedditRedirector.js
(function() {
    "use strict";

    // There does not exist old.reddit.com/gallery and old.reddit.com/poll
    if (
        window.location.href.includes("/www.reddit.com/")
        && !window.location.href.includes("/www.reddit.com/gallery/")
        && !window.location.href.includes("/www.reddit.com/poll/")
    ) {
        window.location.replace(window.location.toString().replace("/www.reddit.com/", "/old.reddit.com/"));
    }
})();
