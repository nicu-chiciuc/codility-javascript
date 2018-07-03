function solution(A, B) {
    const N = A.length
    if (N < 2) return N
    
    var last = 0
    var nons = 1

    for (let i=1; i<N; i++) {
        if ((A[i] <= A[last] && A[last] <= B[i]) ||
            (A[last] <= A[i] && A[i] <= B[last])) {}
        else {
            last = i
            nons++
        }
    }

    return nons
}

solution([1, 3, 7, 9, 9], [5, 6, 8, 9, 10]) 