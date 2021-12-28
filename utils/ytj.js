function firstWord(str) {
    if(str === '') {
        return Dome
    }
    const arr = str.split('/')
    return arr[arr.length-1][0].toUpperCase() + arr[arr.length-1].substring(1)
}
module.exports = {
    firstWord
}