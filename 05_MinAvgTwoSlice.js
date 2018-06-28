function solution(A) {
    var smallest = 99999
    var smallestInd = -1;
    var len = A.length, firstTwo, temp
    
    for (let i=0; i<len-1; i++) {
        firstTwo = A[i]+A[i+1]
        
        temp = firstTwo / 2
        if (temp < smallest) {
            smallest = temp
            smallestInd = i
        }
        
        temp = (firstTwo + A[i+2])/3
        if (temp < smallest) {
            smallest = temp
            smallestInd = i
        }
    }
    
    // Check at the end
    firstTwo = A[len-2] + A[len-1]
    temp = firstTwo / 2
    if (temp < smallest) {
        smallest = temp
        smallestInd = len-2
    }
    
    temp = (firstTwo + A[len-3]) / 3
    if (temp < smallest) {
        smallest = temp
        smallestInd = len-3
    }
    
    return smallestInd
}

