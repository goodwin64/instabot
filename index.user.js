// ==UserScript==
// @name         InstaBot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       goodwin64
// @match        https://www.instagram.com/
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  setInterval(likePosts, 100);

  const defaultElement = document.createElement('div');

  function likePosts() {
    const heartsLike = Array.from(document.querySelectorAll('[class*="glyphsSpriteHeart"][aria-label="Like"]') || []);
    heartsLike.forEach((h, index) => {
      setTimeout(() => {
        const articleParentElement = h.closest('article') || defaultElement;
        const usernameElement = articleParentElement.querySelector('a.notranslate');
        if (usernameElement) {
          console.log('like:', usernameElement.innerText);
        }
        if (h) {
          h.click();
        }
      }, index * 5000);
    });
  }
})();