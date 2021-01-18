import UserInfo from "./UserInfo";

export default class Api {
  constructor(baseUrl, authorization) {
    this._baseUrl = baseUrl;
    this._authorization = authorization;
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
     headers: {
      authorization: this._authorization,
      'Content-Type': 'application/json'
      }
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
          }
          return Promise.reject(`Что-то пошло не так: ${res.status}`);
      })
  } 

  addNewCard(name, link) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: {
        authorization: this._authorization,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        link
      })
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
        }
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
    })
  }

  likeCard(cardId) {
    return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: {
        authorization: this._authorization,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        
      })
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
        }
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
    })
  }

  deleteLikeCard(cardId) {
    return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._authorization,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        link
      })
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
        }
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
    })
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: this._authorization,
        'Content-Type': 'application/json'
        }
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
          }
          return Promise.reject(`Что-то пошло не так: ${res.status}`);
      })
  }

  editUserInfo([name, about]) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._authorization,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        about
      })
    })
      .then(res => {
        return res.json();
      })
  }


}
