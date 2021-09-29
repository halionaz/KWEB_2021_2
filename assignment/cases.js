const factorial = (N) => {
    if(!N){
        return 1;
    }
    let ans = 1;
    for(let i = 1; i <= N; i++){
        ans *= i;
    }
    return ans;
};

const permutation = (n, r) => {
    return factorial(n)/factorial(n-r);
}

const combination = (n, r) => {
    return factorial(n)/(factorial(n-r)*factorial(r));
}

const dp = new Array();

const multiPermutation = (n, r) => {
    // base 처리
    if(dp[r]){
        return dp[r];
    }
    if(r == 0){
        return 1;
    }
    if(r == 1){
        return n;
    }

    if(r%2){
        dp[r] = multiPermutation(n,parseInt(r/2)+1) * multiPermutation(n,parseInt(r/2));
    } else {
        const tmp = multiPermutation(n,parseInt(r/2));
        dp[r] = tmp**2;
    }
    return dp[r];
}

const multiCombination = (n, r) => {
    return combination(n+r-1,r);
}

module.exports = {
    permutation, combination, multiPermutation, multiCombination
};