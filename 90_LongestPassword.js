function solution(S) {
    var max = -1

    var lengths = S.split` `.forEach(w => {
        var nrLetters = 0
        var nrDigits = 0
        var len = w.length

        for (let i=0; i<len; i++) {
            if (w[i].match(/[a-z]|[A-Z]/i)) {
                nrLetters++
                continue
            }
            else if(w[i].match(/[0-9]/i)) {
                nrDigits++
                continue
            }
            else {
                nrDigits=0
                nrLetters=0
                break
            }
        }

        len = (nrLetters % 2 === 0 && nrDigits % 2 === 1)?nrLetters+nrDigits:-1

        max = Math.max(max, len)
    })

    return max
}

solution("test 5 a0A pass007 ?xy1")