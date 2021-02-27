const mazeA = [
    [1,1,1,1,1,0,1,1,1,1,1],
    [1,0,0,0,1,0,1,0,0,0,0],
    [1,0,1,1,1,0,1,1,1,1,1],
    [1,0,1,0,0,0,0,0,0,0,1],
    [1,0,1,1,1,0,1,1,1,1,1],
    [1,0,0,0,1,0,1,0,0,0,1],
    [1,0,1,1,1,1,1,0,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,0,1,1,1,0,1],
    [1,0,0,0,1,0,1,0,0,0,1],
    [1,1,1,0,1,1,1,0,1,1,1]
]

const mazeB = [
    [1,1,1,1,1,0,1,1,1,1,1],
    [0,0,1,0,0,0,1,0,1,0,0],
    [1,1,1,0,1,1,1,0,1,1,1],
    [1,0,0,0,1,0,0,0,0,0,1],
    [1,0,1,1,1,0,1,1,1,1,1],
    [1,0,1,0,0,0,1,0,0,0,1],
    [1,1,1,0,1,1,1,0,1,0,1],
    [1,0,0,0,1,0,0,0,1,0,1],
    [1,0,1,0,1,0,1,1,1,0,1],
    [1,0,1,0,1,0,1,0,0,0,1],
    [1,0,1,1,1,0,1,1,1,1,1]
]

const mazeC = [
    [1,1,1,1,1,0,1,0,1,1,1],
    [1,0,0,0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,1,1,0,1],
    [0,0,1,0,1,0,0,0,0,0,1],
    [1,1,1,0,1,0,1,1,1,0,1],
    [1,0,1,0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0,1,0,1],
    [1,0,1,1,1,0,1,0,1,0,1],
    [1,0,0,0,0,0,1,0,1,0,1],
    [1,1,1,1,1,1,1,0,1,1,1]
]

const mazeD = [
    [1,1,1,0,1,1,1,1,1,1,1],
    [1,0,1,0,0,0,0,0,0,0,1],
    [1,0,1,0,1,1,1,1,1,1,1],
    [1,0,1,0,1,0,0,0,0,0,1],
    [1,0,1,1,1,0,1,1,1,0,1],
    [1,0,0,0,0,0,1,0,0,0,1],
    [1,0,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,0,1],
    [1,0,0,0,0,0,0,0,1,0,1],
    [1,1,1,1,1,0,1,1,1,0,1]
]

const mazeE = [
    [1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,1,0,1],
    [1,1,1,1,1,1,1,1,1,0,1],
    [1,0,0,0,0,0,1,0,0,0,0],
    [1,1,1,0,1,1,1,0,1,1,1],
    [1,1,1,0,0,0,0,0,1,0,1],
    [1,0,1,1,1,1,1,0,1,0,1],
    [1,0,0,0,0,0,1,0,0,0,1],
    [1,0,1,1,1,1,1,1,1,0,1],
    [1,0,1,0,0,0,0,0,0,0,1],
    [1,0,1,1,1,1,1,1,1,1,1]
]

const mazeF = [
    [1,0,1,1,1,0,1,1,1,1,1],
    [1,0,1,0,1,0,0,0,1,0,1],
    [1,0,1,0,1,0,1,1,1,0,1],
    [1,0,1,0,1,0,1,0,0,0,1],
    [1,1,1,0,1,0,1,0,1,1,1],
    [1,0,0,0,0,0,1,0,1,0,0],
    [1,1,1,0,1,1,1,0,1,0,1],
    [0,0,1,0,1,0,1,0,1,0,1],
    [1,1,1,0,1,0,1,0,1,1,1],
    [1,0,0,0,0,0,1,0,0,0,1],
    [1,1,1,1,1,1,1,0,1,1,1]
]

const mazeG = [
    [1,1,1,1,1,1,1,0,1,1,1],
    [1,0,0,0,0,0,1,0,1,0,1],
    [1,0,1,1,1,0,1,1,1,0,1],
    [1,0,1,0,0,0,0,0,0,0,1],
    [1,1,1,0,1,1,1,0,1,1,1],
    [0,0,0,0,1,0,0,0,1,0,0],
    [1,1,1,0,1,1,1,1,1,0,1],
    [1,0,1,0,1,0,0,0,0,0,1],
    [1,0,1,0,1,1,1,1,1,0,1],
    [1,0,0,0,0,0,0,0,1,0,1],
    [1,1,1,1,1,1,1,1,1,1,1]
]

const mazeH = [
    [1,0,1,1,1,1,1,0,1,1,1],
    [1,0,1,0,0,0,1,0,1,0,1],
    [1,1,1,1,1,0,1,1,1,0,1],
    [1,0,0,0,0,0,0,0,0,0,1],
    [1,0,1,1,1,1,1,1,1,0,1],
    [1,0,1,0,0,0,0,0,1,0,1],
    [1,0,1,1,1,0,1,1,1,1,1],
    [1,0,0,0,1,0,0,0,0,0,0],
    [1,0,1,0,1,1,1,1,1,1,1],
    [1,0,1,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,1,1]
]

const mazeI = [
    [1,0,1,1,1,1,1,1,1,1,1],
    [1,0,1,0,0,0,0,0,1,0,1],
    [1,0,1,0,1,1,1,0,1,0,1],
    [1,0,1,0,1,0,0,0,1,0,1],
    [1,1,1,1,1,0,1,1,1,0,1],
    [1,0,0,0,0,0,1,0,0,0,1],
    [1,0,1,0,1,1,1,0,1,1,1],
    [1,0,1,0,1,0,0,0,0,0,1],
    [1,0,1,0,1,0,1,1,1,0,1],
    [1,0,1,0,1,0,1,0,1,0,0],
    [1,1,1,0,1,1,1,0,1,1,1]
]

let maze = []
let path = []

class Maze {

    static solve(ind, start, end) {

        maze = choose_maze(ind)
        maze[end[0] * 2][end[1] * 2] = 2
        find(start[1] * 2, start[0] * 2)
        path = path.filter((element, index) => {
            return index % 2 === 0;
          })
        return path.reverse()
    }

}

function find(col, row, visited = new Set) { 

    const cellId = row * 11 + col;

    if (!maze[row] || !maze[row][col] || visited.has(cellId)) {
        return;
    }
    visited.add(cellId);

    if (maze[row][col] == 2) { 
        return [[col, row]];
    }
    

    for (const [addcol, addrow] of [[0, 1],[1, 0],[0, -1],[-1, 0]]) {
        
        const found = find(col+addcol, row+addrow, visited);

        if (found) {
            if (addcol == 1 && addrow == 0) path.push("RIGHT")
            else if (addcol == 0 && addrow == 1) path.push("DOWN")
            else if (addcol == -1 && addrow == 0) path.push("LEFT")
            else if (addcol == 0 && addrow == -1) path.push("UP")

            return [[col, row], ...found];
        }
    }
}

function choose_maze(ind) {
    switch (ind.join("")) {
        case "10":
        case "25":
            return mazeA
        case "14":
        case "31":
            return mazeB
        case "33":
        case "35":
            return mazeC
        case "00":
        case "30":
            return mazeD
        case "53":
        case "24":
            return mazeE
        case "40":
        case "42":
            return mazeF
        case "01":
        case "51":
            return mazeG
        case "03":
        case "32":
            return mazeH
        case "40":
        case "12":
            return mazeI

        default:
            throw "Unexpected indicator position, got " + ind
                                                                        
    }
}

module.exports = Maze