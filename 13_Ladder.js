function solution(A, B) {
	var n = A.length;
	var f = new Array(n + 1).fill(1);
	for (let i = 2; i <= n; i++) f[i] = (f[i - 1] + f[i - 2]) % 2 ** 30;

	var resp = [];
	for (let i = 0; i < n; i++) {
		resp.push(f[A[i]] % 2 ** B[i]);
	}

	return resp;
}
