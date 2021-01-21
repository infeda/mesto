export default class UserInfo {
    constructor (userNameElementSelector, userInfoElementSelector, userAvatarElementSelector) {
      this._userNameElement = document.querySelector(userNameElementSelector);
      this._userInfoElement = document.querySelector(userInfoElementSelector);
      this._userAvatarElement = document.querySelector(userAvatarElementSelector);
    }
  
    getUserInfo () {
      return [this._userNameElement.textContent, this._userInfoElement.textContent];
    }
  
    setUserInfo (userInfo) {
      this._userNameElement.textContent = userInfo.name
      this._userInfoElement.textContent = userInfo.about;
      this._userAvatarElement.src = userInfo.avatar;
    }
  }