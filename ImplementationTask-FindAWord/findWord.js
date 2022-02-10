// implementation written by Wombats according to specs and tests received

const findWord = function(str, word) {
    // treat null string
    if (str == "") {
        return null
    }

    //remove dots etc
    clearStr = str.replace(/[.,;:/?{}!#$%¨*()-_=+`|{}]/g, "");

    //count word occurence
    const strArray = clearStr.split(" ");
    // console.log(strArray);
    let result = 0;
    for (let i = 0; i < strArray.length; i++) {
        if (word == strArray[i]) {
            result += 1;
        }
    }
    return result;
}

exports.findWord = findWord;