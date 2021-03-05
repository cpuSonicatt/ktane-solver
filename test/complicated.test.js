import Complicated from "../complicated.js"
import Bomb from "../bomb.js"

test("All combinations of wire", () => {
    expect(Complicated.solve(["red", "white", "blue", "red white", "red blue", "white blue"], getBomb())).toEqual([])
})

function getBomb() {
    return new Bomb(2, true, false, false, true, 1)
}