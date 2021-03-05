const passwords = [
    "ABOUT", "AFTER", "AGAIN", "BELOW",
    "COULD", "EVERY", "FIRST", "FOUND",
    "GREAT", "HOUSE", "LARGE", "LEARN",
    "NEVER", "OTHER", "PLACE", "PLANT",
    "POINT", "RIGHT", "SMALL", "SOUND",
    "SPELL", "STILL", "STUDY", "THEIR",
    "THERE", "THESE", "THING", "THINK",
    "THREE", "WATER", "WHERE", "WHICH",
    "WORLD", "WOULD", "WRITE"
]

class Password { 

    static solve(letters) {
        letters = letters.map(v => v.toLowerCase())
        let index = 0

        for (let row of letters) {
            let rowArr = row.split("")
            passwords = passwords.filter(word => {
                for (let x = 0; x <= 5; x++)
                    return rowArr[x] === word.charAt(index)
                })
            index++
            if (passwords.length == 1) {
                return passwords[0]
            }
        }

        throw "Expected 1 result, got " + passwords
    }
}

export default Password
