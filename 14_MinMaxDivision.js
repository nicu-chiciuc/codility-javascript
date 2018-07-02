function solution(K, M, A) {
    var N = A.length;
    var sum = A.reduce((a, b) => a + b);

    var min = Math.ceil(sum / K);
    var max = sum;

    function fits(num) {
        var tempSum = 0;
        var remainKs = K;

        for (let i = 0; i < N; i++) {
            tempSum += A[i];

            if (tempSum > num) {
                tempSum = A[i];
                remainKs--;

                if (remainKs <= 0) {
                    return false;
                }
            }
        }

        return true;
    }

    while (min + 1 < max) {
        const mid = Math.round((min + max) / 2);

        if (fits(mid)) {
            max = mid;
        } else {
            min = mid;
        }
    }

    return max;
}

solution(3, 5, [2, 1, 5, 1, 2, 2, 2]);
