function solution(N, P, Q) {
    var sieve = new Array(N+1).fill(0)
    for (let i=2; i*i<=N; i++)
        if (sieve[i] === 0) {

            for (let j=i*i,incr=i; j<=N; j+=i,incr++)
                sieve[j] += incr
        }

    console.table(sieve)
}

solution(10, [], [])