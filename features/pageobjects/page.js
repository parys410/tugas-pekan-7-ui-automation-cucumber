module.exports = class Page {
  open (path) {
    return browser.url(`https://parabank.parasoft.com/parabank/${path}`)
  }
}
