const LocalStorageGet = (object) => {
  return JSON.parse(localStorage.getItem(object))
}

const LocalStorageSet = (object, data) => {
  return localStorage.setItem(object, JSON.stringify(data))
}

export { LocalStorageGet, LocalStorageSet }
