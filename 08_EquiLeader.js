function solution(A) {
    // find leader and it's occurences
    let leader = -1
    let maybeLeaderOccur = 0
    const len = A.length
    
    for (let i=0; i<len; i++) {
        if (maybeLeaderOccur === 0) {
            leader = A[i]
            maybeLeaderOccur = 1
        }
        else {
            if (leader === A[i]) {
                maybeLeaderOccur++
            }
            else {
                maybeLeaderOccur--
            }
        }
    }
    
    let occurences = []
    for (let i=0; i<len; i++) {
        let prev = (i == 0) ? 0 : occurences[i-1]
        
        if (A[i] === leader) {
            occurences[i] = prev + 1
        }
        else {
            occurences[i] = prev + 0
        }
    }
    
    // the leader that was choosen may not be the actual leader
    // but it doesn't really matter
    let maxOccurences = occurences[len-1]
    let nrEquiLeaders = 0
    for (let i=0; i<len-1; i++) {
        if (
            occurences[i] > (i+1)/2 &&
            (maxOccurences - occurences[i]) > (len-i-1)/2)
            nrEquiLeaders++
    }
    
    return nrEquiLeaders
}

solution([4, 3, 4, 4, 4, 2])