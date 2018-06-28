var inp = [0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0] 
 [1, 0, 0, 0, 0]
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    var len = A.length
    
    // can jump in 1 jump
    if (len < 3)
        return 1
    
    var F = len+2
    var f2=1, f1=1, f0
    var inF = new Array(F).fill(0)
    
    for (var i=2; i<=F; i++) {

        f0 = f2 + f1
        
        f2 = f1
        f1 = f0
        
        if (f0 > F)
            break
        inF[f0] = 1
    }
    
    // position of leafs
    var leafs = [-1]
    for (let i=0; i<len; i++)
        if (A[i])
            leafs.push(i)
    
    // add the position of the ground at the end
    leafs.push(len)
    
    // -1 -> 0
    var jumpTo = new Array(F+1).fill(-1)
    jumpTo[0] = 0

    for (var i=1, leafLen=leafs.length; i<leafLen; i++) {
        for (let j=0; j<i; j++) {
            if (jumpTo[leafs[j]+1] >= 0)
                if (inF[ leafs[i] - leafs[j] ] === 1) {
                    jumpTo[leafs[i] + 1] = jumpTo[leafs[j] + 1] + 1

                    break
                }
        }
    }
    
    return jumpTo[len+1]

}

solution(inp)