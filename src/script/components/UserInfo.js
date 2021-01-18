export default class UserInfo {
    constructor (userNameElementSelector, userInfoElementSelector) {
      this._userNameElement = document.querySelector(userNameElementSelector);
      this._userInfoElement = document.querySelector(userInfoElementSelector);
    }
  
    getUserInfo () {
      return [this._userNameElement.textContent, this._userInfoElement.textContent];
    }
  
    setUserInfo (userInfo) {
      [this._userNameElement.textContent, this._userInfoElement.textContent] = userInfo;
    }

    setAvatar (avatarUrl, avatarSelector) {
      const avatarElement = document.querySelector(avatarSelector);
      avatarElement.src = avatarUrl;
    }
  }
  