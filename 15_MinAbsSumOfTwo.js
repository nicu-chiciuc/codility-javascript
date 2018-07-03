function solution(A) {
    A.sort((a,b)=>a-b)
    const N = A.length
    var left = 0, right=N-1

    var calc = (l, r) => Math.abs( A[l] + A[r] )

    var min = calc(left, right)

    while (left < right) {
        var changeLeft  = calc(left+1, right)
        var changeRight = calc(left, right-1)

        if (changeLeft < changeRight) {
            min = Math.min(min, changeLeft)
            left++
        }
        else {
            min = Math.min(min, changeRight)
            right--
        }
    }

    return min
}

// solution([1, 4, -3])
solution([-8, 4, 5, -10, 3])