// import JSON from '';
let value = {
    metas : false 
}

localStorage.getItem('userData') == undefined ? ocalStorage.setItem('userData', JSON.stringify(value)) : null

function StorageSet(value) {
    console.log('StorageSet', value)
    localStorage.setItem('userData', JSON.stringify(value))
}
function StorageGet(value) {
    // let userData = localStorage.getItem('userData')
    // console.log(userData)
    if (localStorage.getItem('userData') == undefined) {
        return null
    } else {
        console.log('localStorageGET',JSON.parse(localStorage.getItem('userData')).metas)
        return JSON.parse(localStorage.getItem('userData'))
    }

}

export {
    StorageSet,
    StorageGet
}