var S = 'CAGCCTA'
var P = [2, 5, 0]
var Q = [4, 5, 6]

function solution(S, P, Q) {
    var len = S.length

    var toRight = new Array([], [], [], [])

    for (let i=len-1; i>=0; i--) {
        if (i==len-1) {
            toRight[0][len-1] =
            toRight[1][len-1] =
            toRight[2][len-1] =
            toRight[3][len-1] = -1
        } else {
            toRight[0][i] = toRight[0][i+1]
            toRight[1][i] = toRight[1][i+1]
            toRight[2][i] = toRight[2][i+1]
            toRight[3][i] = toRight[3][i+1]
        }

        switch (S[i]) {
            case 'A': toRight[0][i]=i; break
            case 'C': toRight[1][i]=i; break
            case 'G': toRight[2][i]=i; break
            case 'T': toRight[3][i]=i; break
        }
    }

    console.table(toRight)
    var cases = P.length
    var output = []

    for (let j=0; j<cases; j++) {
        for (let k=0; k<4; k++) {
            if (toRight[k][P[j]] <= Q[j] && toRight[k][P[j]] != -1) {
                output.push(k+1)
                break
            }
        }
    }

    return output
}

solution(S, P, Q)