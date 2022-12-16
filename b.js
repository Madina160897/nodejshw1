function getFirstWord(item) {
    let arr = item.split(' ');
    return arr[0];
};

function getLastWord(item) {
    let arr = item.split(' ');
    return arr[arr.length - 1];
}

module.exports = { getFirstWord, getLastWord };