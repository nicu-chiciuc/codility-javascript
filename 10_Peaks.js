function solution(A) {
    var len = A.length
    // PUN = peaks until now
    var pun = new Array(len).fill(0)

    for (let i=1; i<len-1; i++) {
        pun[i] = pun[i-1]

        if (A[i-1] < A[i] && A[i] > A[i+1])
            pun[i] ++
    }
    pun[len-1] = pun[len-2]

    //////// O(N)

    // find dividers
    var dividers = []
    var complDividers =[]
    
    //// O(sqrt(N))
    for (var i=2; i*i<len; i++) {
        if (len % i == 0) {
            dividers.push(i)
            complDividers.push(len / i)
        }
    }
    
    // exact sqrt
    if (i * i == len)
        dividers.push(i)

    dividers.push(...complDividers.reverse())
    
    // number divisors <= 2*sqrt(N)
    var lDividers = dividers.length

    for (let i=0; i<lDividers; i++) {
        var divisor = dividers[i]
        var allHavePeaks = (pun[divisor-1] > 0)

        for (let j=divisor*2; j<=len && allHavePeaks; j+=divisor) {
            allHavePeaks = allHavePeaks && (pun[j-1] - pun[j-divisor-1] > 0)
        }

        if (allHavePeaks)
            return len / divisor
    }

}

solution([1, 2, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2])