function solution(A, X) {
    A.sort((a,b)=>a-b)
    const N = A.length
    const MAX = 1000000000

    if (N < 4) return 0
    
    var B = []

    var last = A[0]
    var nums = 0
    
    for (let i=0; i<N; i++) {
        if (A[i] === last) {
            nums ++
        }
        else {
            B.push([last, nums])
            last = A[i]
            nums = 1
        }
    }
    B.push([last, nums])

    var count = 0

    // Filter unneded values
    const C = []
    for (let Bi=B[0],i=0,len=B.length; i<len; i++, Bi=B[i]) {
        if (Bi[1] > 1) {
            C.push(Bi[0])
            
            if (Bi[1] >= 4) {
                if (Bi[0] * Bi[0] >= X)
                    count++
            }
        }
    }
    
    //boss
    for (let i=0, clen=C.length; i<clen-1; i++) {
        var good = X / C[i]
        var min=i+1, max=C.length-1, mid, result=-1

        while (min <= max) {
            mid = Math.floor((min+max)/2)
            if (C[mid] >= good) {
                max = mid - 1
                result= mid
            }
            else {
                min = mid + 1
            }
        }

        if (result != -1) {
            count += clen - result

            if (count > MAX)
                return -1
        }
    }
    
    return count
}

// solution([1, 2, 5, 1, 1, 2, 3, 5, 1], 5)
solution([2, 2, 2, 2, 5, 5], 1)