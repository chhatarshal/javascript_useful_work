console.log('Lets solve best sum problems');

 

function bestSum(target, input) {
    var best = null;
    if (target < 0) {
        return null;
    }
    if (target == 0) {
        return [];
    }
    
    for (let num of input)  {
            //console.log(num)
            let rem = target - num;
            //console.log(rem)
            rem = bestSum(rem, input);
            if (rem !== null) {
                const combi = [...rem, num ]
                if (best === null || best.length > combi.length) {
                    if (combi !== null) {
                    best = combi;
                   
                    }
                }
            }

        }
    
    return best;
}

 
console.log(bestSum(7, [5, 4, 3, 7]))