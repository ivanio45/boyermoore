
let S = "WHICH_FINALLY_HALTS_AT_THAT_PIONT";

let T = 'AT_THAT';

let res = new Array();

let N = new Array(); 
for (let j = 0; j < T.length; j++){
	N[T.charAt(j)] = j + 1;
}
let rpr = new Array();
let m = T.length;
let T2 = '';

for (let i = 0; i < m; i++){
	T2 += '*';
}
T2 += T;

function compare(t1, t2){
	for (let i = 0; i < t1.length; i++){
		if (t1[i] == '*' || t2[i] == '*' || t1[i] == t2[i]){
			continue
        }
		else {
			return false
        }
	}
	return true
}

for (let l = 0; l < T.length+1; l++){
	rpr[l] = m;
	k = m;
	while (true){
		if ((k <= m - l )
		&& compare(T2.substring(k + m - 1, k + m + l - 2 + 1), T.substring(m - l, m - 1 + 1)) 
		&& ( k>1 && T[k-2]!=T[m-l-1] || k<=1 )){
			break
        }
		k -= 1;
	}
	rpr[l] = k;
}
let shift2 = new Array();

for (let l = 0; l < T.length+1; l++){
	shift2[l] = m - rpr[l] - l + 1;
}

for (let i = 0; i <= S.length - m ; i++){
	l = 0 
	while (l < m){
		if  (S[i + m - l - 1] != T[m - l - 1]){
			break
        }
		l += 1;
	} 

	if (l == m){
		res.push(i);
	}

	let ch = S[i + m - l - 1];
	if (N[ch]){
		shift1 = Math.max(m - N[ch] - l, 1)
    }
	else {
		shift1 = Math.max(m - l, 1)
    }

	shift = Math.max(shift1, shift2[l]);
	i += shift - 1;
}
console.log(res)