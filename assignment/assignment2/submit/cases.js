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
};

const combination = (n, r) => {
    return factorial(n)/(factorial(n-r)*factorial(r));
};

const multiPermutation = (n,r) => {
    return n**r;
}

const multiCombination = (n, r) => {
    return combination(n+r-1,r);
};

module.exports = {
    permutation, combination, multiPermutation, multiCombination
};