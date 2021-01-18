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

  // другие методы работы с API

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
}
