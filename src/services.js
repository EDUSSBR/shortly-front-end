
export const services = {
  baseUrl: process.env.NEXT_PUBLIC_BACK_END_BASE_URL,
  createAccount: async function createAccount(name, email, password, confirmPassword) {
    return await fetch(`${this.baseUrl}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, password, confirmPassword })
    })
  },
makeLogin:async function makeLogin(email, password) {
    return fetch(`${this.baseUrl}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    })
},
createShortenLink:async function createShortenLink(token, url) {
  return fetch(`${this.baseUrl}/urls/shorten`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      url
    })
  })
},
getShortenLinkByID:async function getShortenLinkByID(id) {
  const shortenLink = await fetch(`${this.baseUrl}/urls/${id}`)
  return await shortenLink.json()
},
redirect:async function redirect(shortenLink) {
  return await fetch(`${this.baseUrl}/shortUrl/${shortenLink}`)
},
deleteShortenLinkByID:async function deleteShortenLinkByID(shortenLinkID, token) {
  return fetch(`${this.baseUrl}/urls/${shortenLinkID}`, {
    method: "DELETE",
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })
},
getUserURL:async function getUserURL(token) {
  return fetch(`${this.baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })
},
getRanking:async function getRanking() {
  const ranking = await fetch(`${this.baseUrl}/ranking`)
  return await ranking.json()
}}

