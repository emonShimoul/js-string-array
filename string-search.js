const products = [
    'Dell hardcore i29 200GB Laptop',
    'iPhone 12 mini Phone',
    'yellow laptop with black camera',
    '1X59 Lenovo commercial yoga laptop',
    'LG supernova laptop',
    'HTC low price phone',
    'purple color phone with laptop'
];
const searching = 'laptop';

// indexOf
const output = [];
for(const product of products){
    if(product.toLowerCase().indexOf(searching.toLowerCase()) != -1){
        output.push(product);
    }
}

console.log(output);