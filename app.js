//Leetcode 70. Climbing Stairs
let nw = new Array(n + 1).fill(0); // create an array to store nw number of ways results. Dynamic programming
nw[0] = 1;
nw[1] = 1;
for (let i = 2; i <= n; i++) {
  nw[i] = nw[i - 2] + nw[i - 1];
}
return nw[n];


