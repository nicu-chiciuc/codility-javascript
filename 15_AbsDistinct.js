
function solution(A) {
    var N = A.length
    var left = 0
    var right = N-1

    var newOne = []

    while (left < right) {
        if (-A[left] >= A[right]) {
            newOne.push(-A[left])
            left++
        } else {
            newOne.push(A[right])
            right--
        }
    }
    // Or left
    newOne.push(Math.abs(A[right]))
    
    var distinct = 1
    for (let i=1; i<N; i++) {
        if (newOne[i] != newOne[i-1])
            distinct++
    }

    return distinct
}

// solution([-5, -3, -1, 0, 3, 6] )
// solution([-3, -2, -2, -2, -1, -1])
solution([1, 2, 2, 3, 3])