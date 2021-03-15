module.exports = function towelSort (matrix) {
    for (i in matrix) {
        if (i % 2) { matrix[i].reverse() }
    }
    return matrix === undefined ? [] :  matrix.flat()
}