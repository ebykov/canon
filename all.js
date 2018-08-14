var Special=function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=function(e){return e&&e.__esModule?e:{default:e}}(n(1)),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(9));var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.keyCodes={enter:13},this.params={container:document.body},r.default.sendPageView&&i.sendPageView()}return a(e,[{key:"saveParams",value:function(){Object.assign(this.params,r.default),this.container=this.params.container,this.addEventListeners()}},{key:"loadStyles",value:function(e){return new Promise(function(t,n){var a=document.createElement("link");a.rel="stylesheet",a.href=e,a.onload=function(){return t()},a.onerror=function(){return n()},document.body.appendChild(a)})}},{key:"addEventListeners",value:function(){var e=this;this.params.listenedEvents.forEach(function(t){e.container.addEventListener(t,function(n){return e.defaultEventHandler(n,t)})})}},{key:"defaultEventHandler",value:function(e,t){for(var n=e.target,a=void 0;n.parentNode&&n!==e.currentTarget&&(a=n.dataset[t],"click"===t&&"a"===n.tagName.toLowerCase()&&i.sendEvent(n.href),!a);)n=n.parentNode;(a=n.dataset[t])&&this[a]&&this[a](e.target,e)}}]),e}();t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"Special",analyticsCategory:"Category Name",sendPageView:!1,listenedEvents:["click","input"]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.makeElement=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];e=e.toLowerCase();var r=document.createElement(e);for(var i in t&&("object"===(void 0===t?"undefined":a(t))?t.forEach(function(e){r.classList.add(e)}):"string"==typeof t&&r.classList.add(t)),n)if("data"===i){var o=n[i];for(var s in o)r.dataset[s]=o[s]}else r[i]=n[i];return r},t.cacheElements=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"view",n={},a=document.querySelectorAll("[data-"+t+"]");Array.prototype.forEach.call(a,function(e){var a=e.dataset[t];n[a]=e}),Object.assign(e,n)},t.getSiblings=function(e){for(var t=[],n=e.parentNode.firstChild;n;n=n.nextSibling)1===n.nodeType&&n!==e&&t.push(n);return t},t.removeChildren=function(e){for(;e.firstChild;)e.removeChild(e.firstChild)},t.removeElement=function(e){e&&e.parentNode.removeChild(e)},t.htmlStringToNode=function(e){var t=document.createElement("div");return t.innerHTML=e,t.firstChild},t.prepend=function(e,t){e.insertBefore(t,e.firstChild)},t.isElementInDom=function(e){return e.parentNode}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.getMostFrequentValue=function(e){var t=[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(e));return t.sort(function(e,n){return t.filter(function(t){return t===e}).length-t.filter(function(e){return e===n}).length}).pop()},t.shuffle=function(e){var t=void 0,n=void 0,a=void 0;for(a=e.length-1;a>0;a--)t=Math.floor(Math.random()*(a+1)),n=e[a],e[a]=e[t],e[t]=n},t.toArray=function(e){return Array.prototype.slice.call(e)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={refresh:'<svg width="15" height="15"><path d="M14.62.674c-.268-.11-.495-.065-.684.136l-1.27 1.26A7.58 7.58 0 0 0 10.278.542 7.357 7.357 0 0 0 7.5 0a7.298 7.298 0 0 0-2.91.596 7.565 7.565 0 0 0-2.393 1.601A7.567 7.567 0 0 0 .596 4.59 7.298 7.298 0 0 0 0 7.5c0 1.015.199 1.986.596 2.91a7.567 7.567 0 0 0 1.601 2.393 7.57 7.57 0 0 0 2.393 1.601A7.298 7.298 0 0 0 7.5 15c1.12 0 2.185-.236 3.194-.708a7.333 7.333 0 0 0 2.578-1.997.32.32 0 0 0 .073-.22.27.27 0 0 0-.093-.2l-1.338-1.348a.376.376 0 0 0-.244-.087c-.104.013-.179.052-.224.117a4.904 4.904 0 0 1-1.748 1.436A4.925 4.925 0 0 1 7.5 12.5a4.87 4.87 0 0 1-1.938-.395 5.034 5.034 0 0 1-1.597-1.07A5.038 5.038 0 0 1 2.896 9.44 4.87 4.87 0 0 1 2.5 7.5c0-.677.132-1.323.396-1.938a5.036 5.036 0 0 1 1.07-1.597c.449-.45.98-.806 1.596-1.07A4.87 4.87 0 0 1 7.5 2.5c1.309 0 2.445.446 3.409 1.338L9.56 5.186c-.202.195-.248.42-.137.674.11.26.303.39.576.39h4.375a.6.6 0 0 0 .44-.185.6.6 0 0 0 .185-.44V1.25a.584.584 0 0 0-.38-.576z"/></svg>'}},function(e,t,n){"use strict";var a=i(n(6)),r=i(n(11));function i(e){return e&&e.__esModule?e:{default:e}}e.exports.QA=a.default,e.exports.Kern=r.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();n(7);var r=u(n(0)),i=n(2),o=n(3),s=u(n(10)),l=u(n(4));function u(e){return e&&e.__esModule?e:{default:e}}var c="Canon",d={},f=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return Object.assign(n.params,e),n.saveParams(),s.default&&e.data&&Object.assign(s.default,e.data),n.params.css?n.loadStyles(n.params.css).then(function(){return n.init()}):n.init(),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.default),a(t,[{key:"createElements",value:function(){d.qa=(0,i.makeElement)("div",c+"__qa"),d.logo=(0,i.makeElement)("img",c+"__logo",{src:"images/ab.jpg",srcset:"images/ab@2x.jpg 2x"}),d.desc=(0,i.makeElement)("div",c+"__desc",{textContent:s.default.description}),d.pages=(0,i.makeElement)("div",c+"__pages"),d.options=(0,i.makeElement)("div",c+"__options"),d.option1=(0,i.makeElement)("div",c+"__option"),d.option2=(0,i.makeElement)("div",c+"__option"),d.option1.addEventListener("click",this.makeAnswer.bind(this)),d.option2.addEventListener("click",this.makeAnswer.bind(this)),d.optionSep=(0,i.makeElement)("div",c+"__option-sep",{textContent:"или"}),d.optionsArr=[],d.optionsArr.push(d.option1),d.optionsArr.push(d.option2),d.result=(0,i.makeElement)("div",c+"__result"),d.rScore=(0,i.makeElement)("div",c+"__score"),d.rScoreText=(0,i.makeElement)("div",c+"__score-text"),d.rRestartBtn=(0,i.makeElement)("div",c+"__restart-btn",{innerHTML:"<span>Пройти еще раз</span>"+l.default.refresh,data:{click:"restart"}}),d.result.appendChild(d.rScore),d.result.appendChild(d.rScoreText),d.result.appendChild(d.rRestartBtn),d.options.appendChild(d.option1),d.options.appendChild(d.optionSep),d.options.appendChild(d.option2),d.qa.appendChild(d.logo),d.qa.appendChild(d.desc),d.qa.appendChild(d.pages),d.qa.appendChild(d.options)}},{key:"makePages",value:function(){var e=this;(0,i.removeChildren)(d.pages),s.default.questions.forEach(function(t,n){var a=(0,i.makeElement)("div");n<=e.activeIndex&&a.classList.add("is-filled"),d.pages.appendChild(a)})}},{key:"makeNextQuestion",value:function(){var e=s.default.questions[this.activeIndex];this.makePages();var t=e.options.map(function(e,t){return e.id=t,e});(0,o.shuffle)(t),t.forEach(function(t,n){d.optionsArr[n].classList.remove("is-correct"),d.optionsArr[n].classList.remove("is-incorrect"),d.optionsArr[n].dataset.id=t.id,d.optionsArr[n].innerHTML='<div class="'+c+'__option-title" style="'+t.titleStyle+'">'+e.title+'</div><div class="'+c+'__option-text" style="'+e.textStyle+'">'+e.text+"</div>"})}},{key:"makeAnswer",value:function(e){var t=this;if(!this.inAnswer){this.inAnswer=!0;var n=e.currentTarget,a=n.dataset.id;s.default.questions[this.activeIndex].options[a].isCorrect?(this.correctAnswers++,n.classList.add("is-correct")):n.classList.add("is-incorrect"),setTimeout(function(){t.inAnswer=!1,t.activeIndex<s.default.questions.length-1?(t.activeIndex++,t.makeNextQuestion()):t.makeResult()},1e3)}}},{key:"makeResult",value:function(){d.qa.removeChild(d.pages),d.qa.removeChild(d.options),d.rScore.textContent=this.correctAnswers+"/"+s.default.questions.length,d.rScoreText.textContent=s.default.results[this.correctAnswers],d.qa.appendChild(d.result)}},{key:"restart",value:function(){this.activeIndex=0,this.correctAnswers=0,d.qa.removeChild(d.result),d.qa.appendChild(d.pages),d.qa.appendChild(d.options),this.makeNextQuestion()}},{key:"init",value:function(){this.activeIndex=0,this.correctAnswers=0,this.createElements(),(0,i.removeChildren)(this.container),this.container.appendChild(d.qa),this.makeNextQuestion()}}]),t}();t.default=f},function(e,t,n){},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sendPageView=t.sendEvent=void 0;var a=function(e){return e&&e.__esModule?e:{default:e}}(n(1));t.sendEvent=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Click",n=a.default.analyticsCategory+" — "+e+" — "+t;void 0!==window.dataLayer&&a.default.analyticsCategory&&window.dataLayer.push({event:"data_event",data_description:n})},t.sendPageView=function(){void 0!==window.dataLayer&&window.dataLayer.push({event:"Page — View",post_details:{},section:"special",tags:[],title:document.title,url:window.location.pathname})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={description:"Некоторые шрифты особенно хорошо сочетаются, составляя пару для заголовка и текста. Попробуйте угадать, какие.",questions:[{title:"Ещё одна<br>особенность",text:"Прозрачные емкости, расположенные спереди, позволяют определить уровень чернил, а за счет особой конструкции принтера перезаправка проходит быстро.",textStyle:"font-family: Verdana; line-height: 24px;",options:[{titleStyle:"font-family: Georgia; line-height: 24px;",isCorrect:!0},{titleStyle:"font-family: Times New Roman; line-height: normal; margin-bottom: 15px;"}]},{title:"Преимущество",text:"Система подачи бумаги вмещает 100 листов бумаги. Она обеспечивает прохождение самых разных типов носителей, включая глянцевую квадратную фотобумагу.",textStyle:"font-family: Bookman Old Style; line-height: 23px;",options:[{titleStyle:"font-family: Roboto; line-height: 25px; margin-bottom: 16px;",isCorrect:!0},{titleStyle:"font-family: PT Serif; line-height: 25px; margin-bottom: 15px;"}]},{title:"Подойдёт для<br>офиса",text:"Компания Canon разработала пигментные черные и цветные чернила для больших объёмов печати.",textStyle:"font-family: Fira Sans; line-height: 24px;",options:[{titleStyle:"font-family: Courier New; line-height: 24px; margin-bottom: 11px",isCorrect:!0},{titleStyle:"font-family: Arial; line-height: normal; margin-bottom: 15px;"}]}],results:["Шрифты — это не ваше","Вам только в экспресс-дизайн.","У вас есть задатки дизайнера!","Дизайн спасёт мир."]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=s(n(0)),i=n(2),o=(n(3),s(n(12)));s(n(4));function s(e){return e&&e.__esModule?e:{default:e}}var l="Canon",u={},c=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return Object.assign(n.params,e),n.saveParams(),o.default&&e.data&&Object.assign(o.default,e.data),n.init(),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.default),a(t,[{key:"createElements",value:function(){u.kern=(0,i.makeElement)("div",l+"__kern"),u.logo=(0,i.makeElement)("img",l+"__logo",{src:"images/va.jpg",srcset:"images/va@2x.jpg 2x"}),u.desc=(0,i.makeElement)("div",[l+"__desc",l+"__desc--kern"],{textContent:o.default.description}),u.pages=(0,i.makeElement)("div",l+"__pages"),u.string=(0,i.makeElement)("div",[l+"__string",l+"-str"]),u.sSample=(0,i.makeElement)("div",l+"-str__sample"),u.lettersArr=[],o.default.questions.forEach(function(e,t){var n=(0,i.makeElement)("div",[l+"-str__letters",l+"-str__letters--"+(t+1)],{innerHTML:e.svg+"<span></span>"});!function(e){var t,n,a=e.children[0];function r(e){t&&(t.classList.remove("is-dragged"),t=null)}function i(e){var t=a.getScreenCTM();return{x:(e.clientX-t.e)/t.a,y:(e.clientY-t.f)/t.d}}e.addEventListener("mousedown",function(e){"path"===e.target.tagName&&e.target.previousSibling&&e.target.nextSibling&&(t=e.target,n=i(e),t.classList.add("is-dragged"),t.getAttribute("data-x")&&(n.x-=parseFloat(t.getAttribute("data-x"))))}),e.addEventListener("mousemove",function(e){if(t){e.preventDefault();var a=i(e),r=a.x-n.x;t.setAttribute("transform","translate("+r+", 0)"),t.setAttribute("data-x",r)}}),e.addEventListener("mouseup",r),e.addEventListener("mouseleave",r)}(n),u.lettersArr.push(n)}),u.notice=(0,i.makeElement)("div",l+"__notice"),u.compare=(0,i.makeElement)("div",l+"__compare"),u.nextBtn=(0,i.makeElement)("button",l+"__next-btn",{textContent:"Далее",data:{click:"continue"}}),u.kern.appendChild(u.logo),u.kern.appendChild(u.desc),u.kern.appendChild(u.pages),u.kern.appendChild(u.string),u.kern.appendChild(u.notice),u.kern.appendChild(u.nextBtn)}},{key:"makePages",value:function(){var e=this;(0,i.removeChildren)(u.pages),o.default.questions.forEach(function(t,n){var a=(0,i.makeElement)("div");n<=e.activeIndex&&a.classList.add("is-filled"),u.pages.appendChild(a)})}},{key:"lettersShift",value:function(e){var t=e.querySelectorAll("path:not(:first-child):not(:last-child)");[].slice.call(t).forEach(function(e){var t=20*Math.random()-10;e.setAttribute("transform","translate("+t+", 0)"),e.setAttribute("data-x",t)})}},{key:"lettersCompare",value:function(e){var t=e.querySelectorAll("path:not(:first-child):not(:last-child)"),n=void 0;return n=[].slice.call(t).map(function(e,t){var n=e.getAttribute("data-x"),a=Math.round(100*Math.abs(n/20));return a>100?100:a}),console.log(n),100-Math.round(n.reduce(function(e,t){return e+t},0)/n.length)}},{key:"makeNextQuestion",value:function(){var e=o.default.questions[this.activeIndex];this.makePages(),(0,i.removeChildren)(u.string),u.string.classList="",u.string.classList.add(l+"__string"),u.string.classList.add(l+"-str"),u.string.classList.add(l+"-str--"+(this.activeIndex+1)),this.lettersShift(u.lettersArr[this.activeIndex]),u.string.appendChild(u.lettersArr[this.activeIndex]),u.notice.textContent=e.notice,u.nextBtn.dataset.click="compare"}},{key:"compare",value:function(){var e=o.default.questions[this.activeIndex];this.results[this.activeIndex]=this.lettersCompare(u.lettersArr[this.activeIndex]),u.sSample.innerHTML=e.svg,u.string.appendChild(u.sSample),u.kern.removeChild(u.notice),u.compare.textContent=this.results[this.activeIndex]+"%",u.kern.appendChild(u.compare),u.nextBtn.dataset.click="continue"}},{key:"continue",value:function(){this.activeIndex<o.default.questions.length-1?(this.activeIndex++,u.string.removeChild(u.sSample),u.kern.removeChild(u.compare),u.kern.appendChild(u.notice),this.makeNextQuestion()):(console.log("result"),console.log(Math.round(this.results.reduce(function(e,t){return e+t},0)/this.results.length)))}},{key:"init",value:function(){this.activeIndex=0,this.results=[],this.createElements(),(0,i.removeChildren)(this.container),this.container.appendChild(u.kern),this.makeNextQuestion()}}]),t}();t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={description:"Выверенные расстояния между буквами — свойство хорошего шрифта. Попробуйте выставить правильные расстояния вручную, двигая буквы внутри слов.",questions:[{notice:"Используя трекинг, можно раздвинуть текст — равномерно увеличить все интервалы между буквами.",svg:'<svg viewBox="0 0 368.79 85.31"><path d="M50.15 3.51A38.31 38.31 0 0 0 33.26 0H0v85.31h17.58V55.25h15.41q15.18 0 23.73-7.21t8.61-19.8a27.7 27.7 0 0 0-3.93-14.71A25.82 25.82 0 0 0 50.15 3.51zm-6.26 34.22q-3.63 3.28-10.63 3.28H17.58V14.24h16.11q6.5.12 10.2 4a14.07 14.07 0 0 1 3.69 10.07q0 6.14-3.69 9.42z"/><path d="M78.57 0h17.58v85.31H78.57z"/><path d="M180.29 0h-20.21l-16 29.41L128.09 0h-20.22l24.85 42.3-25.49 43.01h20.45l16.4-29.88 16.41 29.88h20.45L155.45 42.3 180.29 0z"/><path d="M234.73 61.88L212.81 0h-22.97v85.31h17.58V61.99l-1.76-40.19 22.97 63.51h12.07l23.03-63.57-1.76 40.25v23.32h17.64V0h-23.09l-21.79 61.88z"/><path d="M336.85 0h-16.29l-31.75 85.31h18.69l5.86-17.58h30.82l5.92 17.58h18.69zM318.1 53.5l10.61-31.93 10.72 31.93H318.1z"/></svg>'},{notice:"Используя трекинг, можно раздвинуть текст — равномерно увеличить все интервалы между буквами.",svg:'<svg viewBox="0 0 473.38 116.72"><path d="M80.57 31.34h-4.51a50.45 50.45 0 0 0-5.86-11.43q-4-6.09-7.38-6.56-1.87-.23-4.63-.41t-4.75-.18h-2.75v65.23a8.81 8.81 0 0 0 .76 3.71 5.46 5.46 0 0 0 3 2.52 28.06 28.06 0 0 0 4.16 1.11q2.87.53 4.86.76v4.61H17.11v-4.57l4.75-.43a17.77 17.77 0 0 0 4.22-.82 5.46 5.46 0 0 0 3-2.52 8.57 8.57 0 0 0 .85-3.79v-65.8h-2.8q-2 0-4.75.18t-4.63.41q-3.4.47-7.44 6.56a51.67 51.67 0 0 0-5.8 11.43H0V7.56h80.57v23.78z"/><path d="M143.15 43.3a12.11 12.11 0 0 1-2.75 7.85 9 9 0 0 1-7.27 3.34 12 12 0 0 1-7.27-2.17 7.44 7.44 0 0 1-2.93-6.39 13.14 13.14 0 0 1 .29-3.16q.29-1.17.53-2.17a12.34 12.34 0 0 0-5.68 1.88 18.7 18.7 0 0 0-5.27 4.69v32.16a7.87 7.87 0 0 0 .65 3.4 4.55 4.55 0 0 0 2.17 2.11 15.62 15.62 0 0 0 4.16 1.11q2.93.41 4.22.47v4.28H84.79v-4.28q1.46-.12 2.93-.29a16 16 0 0 0 2.58-.59 4.31 4.31 0 0 0 2.58-2 7.6 7.6 0 0 0 .7-3.52V45.93a7.08 7.08 0 0 0-1-3.75 8.51 8.51 0 0 0-2.4-2.7 9.63 9.63 0 0 0-2.7-1.17 18.18 18.18 0 0 0-3.55-.61v-4.3l28-1.53.88.88v8.5h.24a34.2 34.2 0 0 1 8.55-7.32 18.43 18.43 0 0 1 9.49-2.7 11.58 11.58 0 0 1 8.73 3.4 11.73 11.73 0 0 1 3.33 8.67z"/><path d="M214.22 89.47a44.27 44.27 0 0 1-6.09 2.05 28.77 28.77 0 0 1-7.44.94q-7.21 0-10.61-2.11a10.85 10.85 0 0 1-4.63-6.15h-.35a36.49 36.49 0 0 1-3.87 3.4 21.14 21.14 0 0 1-3.93 2.4 26.45 26.45 0 0 1-5.37 1.87 30.14 30.14 0 0 1-7.09.64 17.59 17.59 0 0 1-11.6-4 13.25 13.25 0 0 1-4.8-10.66 17.4 17.4 0 0 1 1.05-6.45 14.62 14.62 0 0 1 3-4.75 15.71 15.71 0 0 1 4-3.11 47.51 47.51 0 0 1 5.1-2.29q5.27-1.93 12.66-4a73.17 73.17 0 0 0 10.78-3.75v-5.57q0-1.46-.23-3.87a12.52 12.52 0 0 0-1-4 7.34 7.34 0 0 0-7.21-4.45 10.91 10.91 0 0 0-4.34.76 13.68 13.68 0 0 0-2.75 1.46 22.9 22.9 0 0 0 1 3.57 14.3 14.3 0 0 1 .82 4.63 8.07 8.07 0 0 1-.53 2.52 5.57 5.57 0 0 1-1.52 2.34 10 10 0 0 1-3 1.82 14.91 14.91 0 0 1-5.1.64q-4.92 0-7.44-2.34a8.2 8.2 0 0 1-2.52-6.21 8.08 8.08 0 0 1 2.58-5.86 21.43 21.43 0 0 1 6.39-4.34 35.55 35.55 0 0 1 8.5-2.7 44.06 44.06 0 0 1 8.91-1 71.44 71.44 0 0 1 10.43.7 24.21 24.21 0 0 1 8.55 2.75 14.62 14.62 0 0 1 5.74 6 20.64 20.64 0 0 1 2.17 10.14q0 6.62-.29 15.7t-.26 11.91a9.41 9.41 0 0 0 .76 4.16 5.19 5.19 0 0 0 2.46 2.29 8.88 8.88 0 0 0 3.11.59q2.17.06 3.93.06v4.28zM185.1 58.94q-3.28 1.11-6.5 2.58a25.08 25.08 0 0 0-5.27 3 11.29 11.29 0 0 0-3.4 4.18 13.49 13.49 0 0 0-1.23 6q0 4.57 2 6.62a7.12 7.12 0 0 0 5.23 2.06 9.76 9.76 0 0 0 5.27-1.29 15.59 15.59 0 0 0 3.69-3.28z"/><path d="M252.19 92.57a41 41 0 0 1-14.41-2.34 28.67 28.67 0 0 1-10.26-6.53 26.5 26.5 0 0 1-6-9.84 37.11 37.11 0 0 1-2-12.36 28.7 28.7 0 0 1 2.4-11.6 32 32 0 0 1 6.62-9.67 31 31 0 0 1 10.61-6.8 37.24 37.24 0 0 1 14.06-2.58q10.78 0 17.05 4.1t6.27 11a10 10 0 0 1-2.23 6.8q-2.23 2.58-7.68 2.58a12.48 12.48 0 0 1-7.38-2.11 6.49 6.49 0 0 1-2.95-5.52 17.87 17.87 0 0 1 .94-5.68 23.89 23.89 0 0 0 1.11-4.32 4.24 4.24 0 0 0-1.64-1.58 6.33 6.33 0 0 0-3.11-.59 9.56 9.56 0 0 0-4.8 1.23 11.85 11.85 0 0 0-4 4.34 25.83 25.83 0 0 0-2.93 7.85 57.32 57.32 0 0 0-1.06 11.84q0 10.43 4.86 16.82T257.38 84q6.5 0 10.31-2.87a26.24 26.24 0 0 0 6.86-8.26l4.39 3a34.1 34.1 0 0 1-4.34 6.56 28.06 28.06 0 0 1-6 5.21 31.52 31.52 0 0 1-7.5 3.63 28.81 28.81 0 0 1-8.91 1.3z"/><path d="M299.42 21.5a11.58 11.58 0 0 0 8.09-3.11 10 10 0 0 0 3.42-7.61 10 10 0 0 0-3.4-7.62A11.54 11.54 0 0 0 299.42 0a11.74 11.74 0 0 0-8.2 3.16 10 10 0 0 0-3.4 7.62 10 10 0 0 0 3.4 7.62 11.87 11.87 0 0 0 8.2 3.1zM316.59 85.84a19.78 19.78 0 0 1-2.58-.94 5.38 5.38 0 0 1-2.52-2.11 6.71 6.71 0 0 1-.88-3.52V32.75l-.88-.88-28.71 1.53v4.3a20.24 20.24 0 0 1 3.87.82 12.43 12.43 0 0 1 3.22 1.35 7.67 7.67 0 0 1 2.34 2.52 6.68 6.68 0 0 1 .94 3.57v34.1a7.11 7.11 0 0 1-.76 3.52 4.91 4.91 0 0 1-2.64 2 10.4 10.4 0 0 1-2.52.59q-1.47.18-3 .29v4.24h37v-4.28a17.68 17.68 0 0 1-2.88-.58z"/><path d="M402.25 90.7h-35.32v-4.28l2.7-.29a7.4 7.4 0 0 0 2.4-.59 3.73 3.73 0 0 0 1.8-1.84 9.63 9.63 0 0 0 .53-3.63V52.61q0-6-2.23-9a7.4 7.4 0 0 0-6.45-3 13.46 13.46 0 0 0-4.39.7 16.45 16.45 0 0 0-3.93 2.05 14.27 14.27 0 0 0-2.75 2.4q-1 1.23-1.7 2.17v31.46a9 9 0 0 0 .59 3.46 4.11 4.11 0 0 0 1.93 2.05 11.22 11.22 0 0 0 2.34.94 18.25 18.25 0 0 0 2.75.59v4.27h-35.59v-4.28q1.46-.12 2.93-.29a15.94 15.94 0 0 0 2.58-.59 4.3 4.3 0 0 0 2.58-2 7.6 7.6 0 0 0 .7-3.52V45.93a7.52 7.52 0 0 0-.94-3.57 8.37 8.37 0 0 0-2.46-2.87 9.62 9.62 0 0 0-2.7-1.17 18.19 18.19 0 0 0-3.52-.64V33.4l27.95-1.52.88.87v8.5h.23q1.64-1.46 4-3.52a38.45 38.45 0 0 1 4.34-3.34 21 21 0 0 1 5.68-2.4 27.39 27.39 0 0 1 7.5-1q9.55 0 14.3 5.45t4.8 14.36v28.71a7.79 7.79 0 0 0 .64 3.46 4.55 4.55 0 0 0 2.4 2.05 21.18 21.18 0 0 0 2.29.82 17.58 17.58 0 0 0 3.16.59v4.27z"/><path d="M473.38 39.14h-12.89a18.06 18.06 0 0 1 3.4 5.45 15.67 15.67 0 0 1 1.17 6 14.45 14.45 0 0 1-2.13 7.59 17.73 17.73 0 0 1-5.68 5.74 29.79 29.79 0 0 1-8.38 3.57 40.15 40.15 0 0 1-10.43 1.29h-9.55a8.57 8.57 0 0 0-1.58 1.7 3.67 3.67 0 0 0-.82 2.17 3.62 3.62 0 0 0 2.05 3.57q2.05 1 7.44 1.11t10.78.47q5.45.29 7.79.35a22.8 22.8 0 0 1 6.74 1.41 20 20 0 0 1 5.8 3.11 16.35 16.35 0 0 1 4.45 5.27 14.83 14.83 0 0 1 1.76 7.32 17.07 17.07 0 0 1-2.17 8.38 18.85 18.85 0 0 1-6.5 6.8 37.17 37.17 0 0 1-11.13 4.63 66 66 0 0 1-16 1.64q-15.41 0-23.44-3.75t-8-11.25q0-4.63 4.34-7.62t13.48-3.28v-.7a21.8 21.8 0 0 1-8.44-4.8 9.75 9.75 0 0 1-3-7 7.15 7.15 0 0 1 1.17-4.16 12.59 12.59 0 0 1 3.11-3 15.73 15.73 0 0 1 4-1.87q2.34-.82 3.93-1.29v-.67q-7.91-2.93-11.66-7.15a15.11 15.11 0 0 1-3.69-10.31q0-8.61 7.91-13.77t20.16-5.16a41 41 0 0 1 7.68.7q3.75.64 5.68 1.17h22.73v6.33zm-27.45 11.19q0-6.86-2.17-10.84a7.62 7.62 0 0 0-10.66-2.87 7.67 7.67 0 0 0-2.78 3.08 14.67 14.67 0 0 0-1.39 4.71 41.27 41.27 0 0 0-.35 5.45 21.86 21.86 0 0 0 2.23 10.49q2.23 4.1 6.33 4.1a7.1 7.1 0 0 0 6.45-3.69q2.34-3.69 2.34-10.43zm9.84 49.22a8.11 8.11 0 0 0-1.11-4q-1.11-1.93-5-3.16a56.18 56.18 0 0 0-7-.47q-4.8-.12-13.24-.12a16.22 16.22 0 0 0-3.46 4.16 11.68 11.68 0 0 0-1.35 5.8 7.71 7.71 0 0 0 .82 3.22 10 10 0 0 0 2.58 3.28 15.67 15.67 0 0 0 4.57 2.64 21.94 21.94 0 0 0 7.62 1q7.56 0 11.54-2.93t4.01-9.42z"/></svg>'},{notice:"Кернинг нужен, чтобы сдвинуть определённые пары букв. К примеру, A и V, стороны которых созданы друг для друга.",svg:'<svg viewBox="0 0 502.15 101.07"><path d="M21.91 50.69V64h4.34q4.34 0 6.15 1.7a5.48 5.48 0 0 1 1.87 4.3 5.59 5.59 0 0 1-1.87 4.34Q30.58 76 26.25 76H8.02q-4.34 0-6.21-1.64A5.75 5.75 0 0 1 0 70a5.41 5.41 0 0 1 1.88-4.28Q3.75 64 8.02 64H9.9V17H8.02q-4.34 0-6.21-1.64A5.75 5.75 0 0 1 0 11a5.56 5.56 0 0 1 1.81-4.38q1.88-1.7 6.21-1.7L26.25 5q4.34 0 6.15 1.64A5.48 5.48 0 0 1 34.27 11a5.66 5.66 0 0 1-1.87 4.39Q30.58 17 26.25 17h-4.34v17.81l21.33-18.34a9.3 9.3 0 0 1-2.58-2.52 5.49 5.49 0 0 1-.7-2.87 5.81 5.81 0 0 1 1.82-4.45q1.88-1.7 6.21-1.7L60.23 5q4.34 0 6.15 1.64A5.48 5.48 0 0 1 68.26 11a5.59 5.59 0 0 1-1.87 4.34Q64.57 17 60.64 17L39.08 35.86a37.9 37.9 0 0 1 11.31 10.55A74 74 0 0 1 59.82 64h3.22q4.28 0 6.09 1.7a5.48 5.48 0 0 1 1.88 4.3 5.68 5.68 0 0 1-1.85 4.36Q67.38 76 63.04 76H52.16a182.16 182.16 0 0 0-8.2-17.11q-3.63-6.62-6.91-9.61a24.36 24.36 0 0 0-7.73-4.86z"/><path d="M136.64 55.49H87.36a15.45 15.45 0 0 0 6.62 7.56q4.8 2.87 12.95 2.87 6.68 0 17.75-2.87a30.71 30.71 0 0 1 6.33-1.17 5.4 5.4 0 0 1 4 1.7 5.91 5.91 0 0 1 1.64 4.28 5.25 5.25 0 0 1-1.76 4Q132.59 74 123.51 76a83.84 83.84 0 0 1-17.46 1.93q-14.41 0-23.09-8.14a26.5 26.5 0 0 1-8.61-20q0-12.66 9.32-20.57a32.33 32.33 0 0 1 21.56-8 34.09 34.09 0 0 1 13.42 2.58 28.55 28.55 0 0 1 9.14 5.57 35.13 35.13 0 0 1 7 10.72 26.4 26.4 0 0 1 1.88 10.31v5.1zm-13.3-12a18.57 18.57 0 0 0-7.18-7.69 20.81 20.81 0 0 0-10.61-2.58 20.69 20.69 0 0 0-10.57 2.58 18.94 18.94 0 0 0-7.27 7.68h35.63z"/><path d="M176.07 22.8v7.5a66.67 66.67 0 0 1 11.89-7.3 21.57 21.57 0 0 1 8.2-1.82 18.2 18.2 0 0 1 11.37 4.34q3.75 2.93 3.75 6a6 6 0 0 1-1.82 4.39 5.82 5.82 0 0 1-4.3 1.77 7.2 7.2 0 0 1-4.69-2.23q-2.46-2.23-4.39-2.23-2.52 0-7.56 3.16a121.9 121.9 0 0 0-12.48 9.49V64h17.12q4.33 0 6.15 1.7a5.48 5.48 0 0 1 1.85 4.3 5.59 5.59 0 0 1-1.87 4.34Q197.52 76 193.16 76h-36.25q-4.34 0-6.21-1.64a5.74 5.74 0 0 1-1.82-4.36 5.49 5.49 0 0 1 1.82-4.28q1.88-1.7 6.21-1.7h7.15V34.81h-4.34q-4.33 0-6.21-1.64a5.75 5.75 0 0 1-1.82-4.39 5.49 5.49 0 0 1 1.82-4.28q1.88-1.7 6.21-1.7h16.35z"/><path d="M238.47 22.8v4a22.85 22.85 0 0 1 7.21-4.22 25.7 25.7 0 0 1 8.61-1.41q10.66 0 16.88 6.62 4.92 5.27 4.92 13.83V64q3.81 0 5.63 1.7a6 6 0 0 1-.06 8.67Q279.84 76 275.5 76h-10.84q-4.34 0-6.21-1.64a5.74 5.74 0 0 1-1.81-4.36 5.49 5.49 0 0 1 1.82-4.28q1.82-1.7 5.63-1.7V41.31q0-3.93-2.11-5.74-2.75-2.34-8.26-2.34a15.69 15.69 0 0 0-7.32 1.64q-3.11 1.58-7.91 6.8V64q4.63 0 6 .88a5.68 5.68 0 0 1 2.83 5.12 5.59 5.59 0 0 1-1.87 4.34Q243.63 76 239.29 76h-13.65q-4.33 0-6.21-1.64a6.11 6.11 0 0 1 1-9.49q1.41-.88 6-.88V34.81q-3.81 0-5.62-1.7a5.68 5.68 0 0 1-1.82-4.34 5.49 5.49 0 0 1 1.82-4.28q1.88-1.7 6.21-1.7h11.43z"/><path d="M349.21 65.69Q347.4 64 343.06 64h-14.41V22.8h-21.68q-4.34 0-6.21 1.7a5.49 5.49 0 0 0-1.82 4.28 5.66 5.66 0 0 0 1.88 4.39q1.88 1.64 6.15 1.64h9.67V64h-14.42q-4.34 0-6.21 1.7a5.49 5.49 0 0 0-1.85 4.3 5.75 5.75 0 0 0 1.82 4.39q1.91 1.61 6.24 1.61h40.84q4.34 0 6.15-1.64a5.59 5.59 0 0 0 1.88-4.36 5.48 5.48 0 0 0-1.88-4.31zM312.72 0h14.3v12.71h-14.3z"/><path d="M382.61 22.8v4a22.85 22.85 0 0 1 7.21-4.22 25.7 25.7 0 0 1 8.61-1.41q10.66 0 16.88 6.62 4.92 5.27 4.92 13.83V64q3.81 0 5.63 1.7a6 6 0 0 1-.06 8.67Q423.98 76 419.64 76H408.8q-4.34 0-6.21-1.64a5.75 5.75 0 0 1-1.81-4.36 5.49 5.49 0 0 1 1.82-4.28q1.82-1.7 5.63-1.7V41.31q0-3.93-2.11-5.74-2.75-2.34-8.26-2.34a15.69 15.69 0 0 0-7.32 1.64q-3.11 1.58-7.91 6.8V64q4.63 0 6 .88a5.68 5.68 0 0 1 2.83 5.12 5.59 5.59 0 0 1-1.87 4.34Q387.77 76 383.43 76h-13.65q-4.34 0-6.21-1.64a6.11 6.11 0 0 1 1-9.49q1.41-.88 6-.88V34.81q-3.81 0-5.62-1.7a5.68 5.68 0 0 1-1.79-4.34 5.49 5.49 0 0 1 1.82-4.28q1.88-1.7 6.21-1.7h11.43z"/><path d="M480.05 26.37V22.8h14.11q4.34 0 6.15 1.7a5.48 5.48 0 0 1 1.85 4.33 5.59 5.59 0 0 1-1.87 4.34q-1.82 1.64-6.15 1.64h-2.05v43.71a21.72 21.72 0 0 1-2.7 11 22.56 22.56 0 0 1-8.14 8.14 23.17 23.17 0 0 1-12.42 3.4h-13.62q-4.34 0-6.21-1.7a5.49 5.49 0 0 1-1.84-4.26 5.75 5.75 0 0 1 1.82-4.39q1.88-1.64 6.21-1.64h13.24q5.51 0 8.55-3a10.14 10.14 0 0 0 3-7.56v-5.85a32.94 32.94 0 0 1-8.14 3.87 29.44 29.44 0 0 1-28.95-6.86 27.37 27.37 0 0 1-8.26-20.21 27.25 27.25 0 0 1 8.26-20.21A28 28 0 0 1 463.47 21a28.34 28.34 0 0 1 16.58 5.37zm-.06 23a15.61 15.61 0 0 0-4.92-11.48 16 16 0 0 0-11.72-4.86 16.17 16.17 0 0 0-11.78 4.86 16.06 16.06 0 0 0 0 23 16.27 16.27 0 0 0 11.78 4.8 16.07 16.07 0 0 0 11.72-4.8A15.68 15.68 0 0 0 480 49.4z"/></svg>'}],results:[{range:[0,50],text:"Буквы слиплись."},{range:[50,75],text:"Шрифты требуют большей внимательности."},{range:[75,90],text:" У вас неплохой глазомер."},{range:[90,100],text:"Горячо!"}]}}]);
//# sourceMappingURL=all.js.map