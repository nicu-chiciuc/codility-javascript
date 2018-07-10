

function solution(A) {
    var len = A.length
    
    // can jump in 1 jump
    if (len < 3)
        return 1
    
    var F = len+2
    
    //Create fibbonacci numbers
    var f2=1, f1=1, f0
    var fibs = [1]
    for (var i=2; i<=F; i++) {

        f0 = f2 + f1
        
        f2 = f1
        f1 = f0
        
        if (f0 > F)
            break
        fibs.push(f0)
    }

    A.push(1)
    len++

    var jumps = new Array(len).fill(0)

    fibs.forEach(fib =>{
      if (A[fib-1]) {
          jumps[fib-1] = 1
      }
    })

    
    
    for (let i=1; i<len; i++) {
        for (let j=0, fibLen=fibs.length; j<fibLen; j++) {
            var dist = i - fibs[j]
            if (dist<0) break
            if (A[dist] && A[i] && jumps[dist]!=0 && (jumps[i] === 0 || jumps[i] > jumps[dist]+1)) {
                jumps[i] = jumps[dist]+1
            }
        }
    }

    var f = 3
}

var inp = [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0]
console.table(inp)
// solution(inp)?
solution([0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0] )