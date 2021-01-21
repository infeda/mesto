(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o){var i=o.handleCardClick,a=o.handleLikeClick,c=o.handleDeleteLikeClick,u=o.handleDeleteClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._item=e,this._cardTemplate=n,this._userId=r,this._handleCardClick=i,this._handleLikeClick=a,this._handleDeleteLikeClick=c,this._handleDeleteClick=u}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardTemplate).content.children[0].cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this;this._cardLike.addEventListener("click",(function(){e._cardLike.classList.contains("card__like_active")?e._handleDeleteLikeClick():e._handleLikeClick()})),this._element.querySelector(".card__delete").addEventListener("click",(function(){return e._handleDeleteClick(e._item._id,e._element)})),this._cardImage.addEventListener("click",this._handleCardClick)}},{key:"createCard",value:function(){return this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".card__image"),this._cardLike=this._element.querySelector(".card__like"),this._likesCounter=this._element.querySelector(".card__like-counter"),this._setEventListeners(),this._element.querySelector(".card__heading").textContent=this._item.name,this._cardImage.src=this._item.link,this._cardImage.alt=this._item.name,this.setLikes(this._item.likes),this.setDeleteButton(),this._element}},{key:"_isLiked",value:function(){this._cardLike.classList.contains("card__like_active")}},{key:"setLikes",value:function(e){var t=this;this._likesCounter.textContent=e.length,Object.values(e).some((function(e){return e._id===t._userId}))?this._cardLike.classList.add("card__like_active"):this._cardLike.classList.remove("card__like_active")}},{key:"setDeleteButton",value:function(){this._item.owner._id!==this._userId&&this._element.querySelector(".card__delete").classList.add("card__delete_invisible")}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._invalidInputClass=t.invalidInputClass,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector),this._errors=this._formElement.querySelectorAll(this._inputErrorClass)}var t,r;return t=e,(r=[{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e._toggleButtonState()}))})),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e.resetValidation()}))}},{key:"_isValid",value:function(e){e.validity.valid?(this._hideInputError(e),e.classList.remove(this._invalidInputClass)):(this._showInputError(e,e.validationMessage),e.classList.add(this._invalidInputClass))}},{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this._buttonElement.classList.add(this._inactiveButtonClass):this._buttonElement.classList.remove(this._inactiveButtonClass)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"resetValidation",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t),t.classList.remove(e._invalidInputClass)})),this._toggleButtonState()}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&n(t.prototype,r),e}(),o={formSelector:".popup-container__form",inputSelector:".popup-container__form-item",submitButtonSelector:".popup-container__submit-button",inactiveButtonClass:"popup-container__submit-button_inactive",inputErrorClass:"popup-container__form-item_type_error",errorClass:"popup-container__form-item-error-active",invalidInputClass:"popup-container__form-item_invalid"},i=document.querySelector(".profile__edit-button"),a=document.querySelector(".profile__add-button"),c=document.querySelector(".profile__avatar-container"),u=document.querySelector(".popup-container__form-item_el_name"),s=document.querySelector(".popup-container__form-item_el_text"),l=document.querySelector(".popup-container__form_edit"),f=document.querySelector(".popup-container__form_add"),p=document.querySelector(".popup-container__form_edit-avatar");function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._container=document.querySelector(n),this._renderer=r}var t,n;return t=e,(n=[{key:"renderElements",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&h(t.prototype,n),e}();function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleClickClose",value:function(e){(e.target.classList.contains("popup_opened")||e.target.classList.contains("popup__close-icon"))&&this.close()}},{key:"setEventListeners",value:function(){var e=this;document.addEventListener("keydown",(function(t){return e._handleEscClose(t)})),this._popup.addEventListener("click",(function(t){return e._handleClickClose(t)}))}}])&&_(t.prototype,n),e}();function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t,n){return(b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(r);if(o){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return g(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupImage=t._popup.querySelector(".popup-container-image__image"),t._popupHeading=t._popup.querySelector(".popup-container-image__heading"),t}return t=a,(n=[{key:"open",value:function(e){this._popupImage.src=e.link,this._popupHeading.textContent=e.name,this._popupHeading.alt=e.name,b(E(a.prototype),"open",this).call(this)}}])&&v(t.prototype,n),a}(y);function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,t,n){return(w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=I(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e,t){return!t||"object"!==S(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=I(r);if(o){var n=I(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return O(this,e)});function a(e,t){var n,r=e.popupSelector,o=e.submitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,r))._submitForm=o,n._resetValidation=t,n._formElement=n._popup.querySelector(".popup-container__form"),n._submitButton=n._popup.querySelector(".popup-container__submit-button"),n}return t=a,(n=[{key:"_getInputValues",value:function(){return Array.from(this._popup.querySelectorAll(".popup-container__form-item")).map((function(e){return e.value}))}},{key:"renderLoading",value:function(e){this._submitButton.textContent=e?"Сохранение...":"Сохранить"}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("submit",(function(){e.renderLoading(!0),e._submitForm(e._getInputValues()),e.close()})),w(I(a.prototype),"setEventListeners",this).call(this)}},{key:"open",value:function(){this._resetValidation(),w(I(a.prototype),"open",this).call(this)}},{key:"close",value:function(){this._resetValidation(),this._formElement.reset(),w(I(a.prototype),"close",this).call(this)}}])&&L(t.prototype,n),a}(y);function q(e){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(e,t,n){return(A="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=D(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function U(e,t){return!t||"object"!==q(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function D(e){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=D(r);if(o){var n=D(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return U(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._handleSubmitCallback=null,t._button=t._popup.querySelector(".popup-container__submit-button"),t}return t=a,(n=[{key:"setSubmitAction",value:function(e){this._handleSubmitCallback=e}},{key:"setEventListeners",value:function(){var e=this;this._button.addEventListener("click",(function(t){t.preventDefault(),e._handleSubmitCallback()})),A(D(a.prototype),"setEventListeners",this).call(this)}}])&&R(t.prototype,n),a}(y);function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var V=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userNameElement=document.querySelector(t),this._userInfoElement=document.querySelector(n),this._userAvatarElement=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return[this._userNameElement.textContent,this._userInfoElement.textContent]}},{key:"setUserInfo",value:function(e){this._userNameElement.textContent=e.name,this._userInfoElement.textContent=e.about,this._userAvatarElement.src=e.avatar}}])&&B(t.prototype,n),e}();function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var H=function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=n,this._headers=r}var t,n;return t=e,(n=[{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Что-то пошло не так: ".concat(e.status))}))}},{key:"addNewCard",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then((function(e){return e.ok?e.json():Promise.reject("Что-то пошло не так: ".concat(e.status))}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Что-то пошло не так: ".concat(e.status))}))}},{key:"likeCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Что-то пошло не так: ".concat(e.status))}))}},{key:"deleteLikeCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Что-то пошло не так: ".concat(e.status))}))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Что-то пошло не так: ".concat(e.status))}))}},{key:"editUserInfo",value:function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(t,n)||function(e,t){if(e){if("string"==typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?N(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:o,about:i})}).then((function(e){return e.ok?e.json():Promise.reject("Что-то пошло не так: ".concat(e.status))}))}},{key:"editAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject("Что-то пошло не так: ".concat(e.status))}))}}])&&F(t.prototype,n),e}();function J(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var $=null,z=new r(o,l);z.enableValidation();var G=new r(o,f);G.enableValidation();var K=new r(o,p);K.enableValidation();var Q=new V(".profile__header",".profile__subheader",".profile__avatar"),W=new C(".popup_image");W.setEventListeners();var X=new x(".popup_delete");function Y(e){var n=new t(e,"#card-template",$,{handleCardClick:function(){W.open(e)},handleLikeClick:function(){ee.likeCard(e._id).then((function(e){n.setLikes(e.likes)}))},handleDeleteLikeClick:function(){ee.deleteLikeCard(e._id).then((function(e){n.setLikes(e.likes)}))},handleDeleteClick:function(e,t){X.setSubmitAction((function(){ee.deleteCard(e).then((function(){t.remove(),X.close()})).catch((function(e){return console.log(e)}))})),X.open()}});return n.createCard()}X.setEventListeners();var Z=new d({renderer:function(e){var t=Y(e);Z.addItem(t)}},".elements"),ee=new H({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-19",headers:{authorization:"45595d98-1f05-41ff-b759-a22d91a48b67","Content-Type":"application/json"}}),te=new P({popupSelector:".popup_edit",submitForm:function(e){ee.editUserInfo(e).then((function(e){Q.setUserInfo(e)})).catch((function(e){console.log(e)})).finally((function(){te.renderLoading(!1)}))}},(function(){z.resetValidation()})),ne=new P({popupSelector:".popup_add",submitForm:function(e){var t={name:e[0],link:e[1]};ee.addNewCard(t.name,t.link).then((function(e){var t=Y(e);Z.addItem(t)})).catch((function(e){console.log(e)})).finally((function(){ne.renderLoading(!1)}))}},(function(){G.resetValidation()})),re=new P({popupSelector:".popup_edit-avatar",submitForm:function(e){ee.editAvatar(e[0]).then((function(e){Q.setUserInfo(e)})).catch((function(e){return console.log(e)})).finally((function(){re.renderLoading(!1)}))}},(function(){K.resetValidation()}));Promise.all([ee.getUserInfo(),ee.getInitialCards()]).then((function(e){var t=J(e,2),n=t[0],r=t[1];$=n._id,Q.setUserInfo(n),Z.renderElements(r)})).catch((function(e){console.log(e)})),te.setEventListeners(),ne.setEventListeners(),re.setEventListeners(),i.addEventListener("click",(function(){var e=J(Q.getUserInfo(),2);u.value=e[0],s.value=e[1],te.open()})),a.addEventListener("click",(function(){ne.open()})),c.addEventListener("click",(function(){re.open()}))})();
//# sourceMappingURL=index.js.map