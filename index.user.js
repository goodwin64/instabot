// ==UserScript==
// @name         InstagramPostsLiker
// @namespace    http://tampermonkey.net/
// @version      0.1.1
// @description  Clicks "like" button when sees it. Just scroll the page as you usually do.
// @author       goodwin64
// @match        https://www.instagram.com/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  console.debug('InstaBot start');
  setInterval(likePosts, 100);

  const defaultElement = document.createElement('div');

  function likePosts() {
    const likeSelectors = ['Like', 'Подобається']
      .map(word => `[aria-label="${word}"][width="24"]`)
      .join(',');
    const heartsLike = Array.from(document.querySelectorAll(likeSelectors) || []);
    heartsLike.forEach((h, index) => {
      setTimeout(() => {
        const articleParentElement = h.closest('article') || defaultElement;
        const usernameElement = articleParentElement.querySelector('a.notranslate');
        if (usernameElement) {
          console.log('like:', usernameElement.innerText);
        }
        if (h && h.parentElement) {
          h.parentElement.click();
        }
      }, index * 5000);
    });
  }
})();
