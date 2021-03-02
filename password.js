const passwords = ["about", "after", "again", "below", "could", "every", "first", "found", "great", "house", "large", "learn", "never", "other", "place", "plant", "point", "right", "small", "sound", "spell", "still", "study", "their", "there", "these", "thing", "think", "three", "water", "where", "which", "world", "would", "write"]

class Password { 

    static solve(letters) {
        let index = 0

        for (let row of letters) {
            let rowArr = row.split("")
            passwords = passwords.filter(word => {
                for (let x = 0; x <= 5; x++)
                    return rowArr[x] === word.charAt(index)
                })
            index++
            if (passwords.length == 1) {
                return passwords[0].toUpperCase()
            }
        }

        throw "Expected 1 result, got " + passwords
    }
}

export default Password
