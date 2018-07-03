function solution(A) {
    A.sort((a, b)=> a-b)
    const N = A.length
    var trigs = 0

    for (let i=0; i<N; i++) {
        

        let y = i+2

        for (let j=i+1; j<N; j++) {
            while (y < N && A[i] + A[j] > A[y])
                y++
            trigs += y-j -1
        }
    }

    return trigs
    
}

// solution([10, 5, 8, 12] )
solution([1])