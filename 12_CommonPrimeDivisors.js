
function solution(A, B) {
    function gcd(a, b) {
        if (a < b) [a, b] = [b, a];

        while (b > 0) {
            [a, b] = [b, a % b]
        }

        return a
    }

    function simpleUniq(n) {
        var uniq = []
        var lastAdded = -1

        while (n % 2 === 0) {
            n /= 2

            if (2 !== lastAdded) {
                uniq.push(2)
                lastAdded = 2
            }
        }

        for (var i=3; i<=n; i+=2) {
            while (n % i === 0) {
                n /= i

                if (i !== lastAdded) {
                    uniq.push(i)
                    lastAdded = i
                }
            }
        }

        return uniq
    }
    
    var reps = A.length
    var response = 0
    for (let rep=0; rep<reps; rep++) {
        var N = A[rep]
        var M = B[rep]
        var G = gcd(N, M)

        // optimization
        N /= G
        M /= G
    
        if (G === 1) {
            continue
        }

        var uniqG = simpleUniq(G)
        var uniqGlen = uniqG.length

        for (let j=0; j<uniqGlen; j++) {
            while (N % uniqG[j] === 0)
                N /= uniqG[j]

            while (M % uniqG[j] === 0)
                M /= uniqG[j]
        }

        if (N === 1 && M === 1)
            response++

    }

    return response
}

solution([15], [75])