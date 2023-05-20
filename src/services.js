const baseUrl = process.env.BACK_END_BASE_URL

async function createAccount(name, email, senha) {
    const response = await fetch('')

}
async function makeLogin() {

}
async function createShortenLink() {

}
async function getShortenLinkByID() {

}
async function redirect() {

}
async function deleteShortenLinkByID() {

}
async function getUserURL() {

}
async function getRanking() {
    const ranking = await fetch(`${baseUrl}/ranking`)
    return await ranking.json()
}

export default {createAccount, makeLogin, createShortenLink, getShortenLinkByID, redirect, deleteShortenLinkByID, getUserURL, getRanking };
