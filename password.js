const PASSWORDS_LIST = [
    "ABOUT", "AFTER", "AGAIN",
    "BELOW",
    "COULD",
    "EVERY",
    "FIRST", "FOUND",
    "GREAT",
    "HOUSE",
    "LARGE", "LEARN",
    "NEVER",
    "OTHER",
    "PLACE", "PLANT", "POINT",
    "RIGHT",
    "SMALL", "SOUND", "SPELL", "STILL", "STUDY",
    "THEIR", "THERE", "THESE", "THING", "THINK", "THREE",
    "WATER", "WHERE", "WHICH", "WORLD", "WOULD", "WRITE"
]

class Password { 

    static solve(columns) {
        columns = columns.map(v => v.toLowerCase())

        if (columns.length !== 5) {
            throw "Expected columns length 5, got " + columns.length
        }

        let passwords = PASSWORDS_LIST
        let index = 0

        for (let column of columns) {
            if (!(column === "")) {
                passwords = passwords.filter((word) => {
                    return column.includes(word.charAt(index).toLowerCase())
                })
            }
            index++
        }
        return passwords
    }
}

export default Password
