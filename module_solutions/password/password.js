passwords = ["about", "after", "again", "below", "could", "every", "first", "found", "great", "house", "large", "learn", "never", "other", "place", "plant", "point", "right", "small", "sound", "spell", "still", "study", "their", "there", "these", "thing", "think", "three", "water", "where", "which", "world", "would", "write"]

class Password { 

    // abcdef, ghijkl
    static solve(letters) {
        let letterArr = letters.split(", ")
        let index = 0;
        letterArr.forEach(row => {
            
            let rowArr = row.split("")
            passwords = passwords.filter(word => {
                // console.log(rowArr)
                if (rowArr[0] === word.charAt(index) ||
                    rowArr[1] === word.charAt(index) || 
                    rowArr[2] === word.charAt(index) || 
                    rowArr[3] === word.charAt(index) || 
                    rowArr[4] === word.charAt(index) || 
                    rowArr[5] === word.charAt(index)) {
                        return true
                }
            })
            index++
            if (passwords.length == 1) {
                console.log(passwords[0])
                return
            }
        });
    }
}

module.exports = Password