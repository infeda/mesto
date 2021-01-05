export default class UserInfo {
    constructor ({userNameElementSelector, userInfoElementSelector}) {
      this._userNameElement = document.querySelector(userNameElementSelector);
      this._userInfoElement = document.querySelector(userInfoElementSelector);
    }
  
    getUserInfo () {
      const userInfo = [this._userNameElement.value, this._userInfoElement.value];
    }
  
    setUserInfo (userInfo) {
      this._userName.value = userInfo.name;
      this._userInfo.value = userInfo.info;
    }
  }
  