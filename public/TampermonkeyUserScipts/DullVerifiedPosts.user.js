// ==UserScript==
// @name         Dull Verified Posts
// @namespace    http://xqzpop7.github.io/
// @version      0.0.1
// @description  Dull posts made by verified accounts on Twitter.
// @author       Xqzpop7
// @updateUrl    http://xqzpop7.github.io/TampermonkeyUserScripts/DullVerifiedPosts.user.js
// @downloadUrl  http://xqzpop7.github.io/TampermonkeyUserScripts/DullVerifiedPosts.user.js
// @match        https://x.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=x.com
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle('article:has(svg[data-testid="icon-verified"][aria-label="Verified account"]) { opacity: 0.33; }')

(function() {
    'use strict';

    // Your code here...
})();