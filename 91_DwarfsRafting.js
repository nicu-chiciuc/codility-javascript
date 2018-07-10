function solution(N, S, T) {
    const
        barrels = {FL:0, FR:0, BL:0, BR:0},
        dwarfs = {FL:0, FR:0, BL:0, BR:0}

    const half = N / 2
    const sqr = half * half
    const A = 'A'.charCodeAt(0)

    function getData(str, obj) {
        str.split` `.forEach(w => {
            if (w.length < 2) return
            
            var col = w.slice(-1).charCodeAt(0) - A + 1
            var row = +w.slice(0, -1)

            var front = row <= half
            var left = col <= half

            obj.FL += front && left
            obj.FR += front && !left
            obj.BL += !front && left
            obj.BR += !front && !left
        })
    }

    getData(S, barrels)
    getData(T, dwarfs)
    var ret = 0
    
    /// Main diagonal
    if (dwarfs.FL > dwarfs.BR) {
        var diffDwarfs = dwarfs.FL - dwarfs.BR
        dwarfs.BR += diffDwarfs
        ret += diffDwarfs
    }
    else {
        var diffDwarfs = dwarfs.BR - dwarfs.FL
        dwarfs.FL += diffDwarfs
        ret += diffDwarfs
    }

    var min = Math.min(sqr - (dwarfs.FL + barrels.FL), sqr - (dwarfs.BR + barrels.BR)) 
    if (min < 0) return -1
    ret += min * 2
    

    /// Secondary diagonal
    if (dwarfs.FR > dwarfs.BL) {
        var diffDwarfs = dwarfs.FR - dwarfs.BL
        dwarfs.BL += diffDwarfs
        ret += diffDwarfs
    }
    else {
        var diffDwarfs = dwarfs.BL - dwarfs.FR
        dwarfs.FR += diffDwarfs
        ret += diffDwarfs
    }

    var min = Math.min(sqr - (dwarfs.FR + barrels.FR), sqr - (dwarfs.BL + barrels.BL)) 
    if (min < 0) return -1
    ret += min * 2

    return ret
}

// solution(4, '1B 1C 4B 1D 2A', '3B 2D')
// solution(2, '1A', '1B 2B')
solution(2, '', '')