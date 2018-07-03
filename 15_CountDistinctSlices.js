function solution(M, A) {
    const inside = new Array(M+1).fill(0)

    var left = 0, right = 0
    var nrs = 0

    function sumAdd(n) {
        // n -> 1 + 2 + 3 + ... + n-1 + n
        return (n * (n+1)) / 2
    }

    const max = 1000000000



    while (true) {
        inside[A[right]]++

        right++
        if (right >= A.length) {
            nrs += sumAdd(right - left)
            if (nrs > max) {
                return max
            }
            break
        }

        while (inside[A[right]] > 0) {
            nrs += right - left
            if (nrs > max) {
                return max
            }

            inside[A[left]]--

            left ++

        }
    }
    
    return nrs
}

// solution(6, [6, 1, 3, 2, 6, 3, 4])
solution(6, [3, 4, 5, 5, 2]) 