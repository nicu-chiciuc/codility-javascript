function solution(A, B, C) {
    const M = C.length
    const N = A.length
    const Max = M*2+2
    const temp = new Array(Max).fill(0)
    
    function covers(at) {
        temp.length = 0
        temp.length = Max

        for (let i=0; i<=at; i++)
            temp[C[i]] = 1
        
        var now = 0
        for (let i=0; i<Max; i++) {
            if (temp[i] == 1) now++

            temp[i]=now
        }

        // for each plank

        for (let i=0; i<N; i++) {
            if (temp[B[i]]-temp[A[i]-1] === 0)
                return false
        }

        return true
    }

    var min=0, max=M-1, mid, result=-2

    while (min <= max) {
        mid = Math.floor((min+max)/2)

        if (covers(mid)) {
            result = mid
            max = mid-1
        }
        else {
            min = mid+1
        }
    }
    
    return result+1

}

// solution([1, 4, 5, 8], [4, 5, 9, 10], [4, 6, 7, 10, 2])
solution([1, 5, 7], [3, 7, 8], [7, 2, 1, 1])