import UserInfo from "./UserInfo";

export default class Api {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
     headers: this._headers
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
      headers: this._headers,
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

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
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
      headers: this._headers
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
      headers: this._headers
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
      headers: this._headers
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
      headers: this._headers,
      body: JSON.stringify({
        name,
        about
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
          }
          return Promise.reject(`Что-то пошло не так: ${res.status}`);
      })
  }

  editAvatar(avatar) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
          }
          return Promise.reject(`Что-то пошло не так: ${res.status}`);
      })
  }
}
