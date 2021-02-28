let num = +prompt('Énter number');
let sum = 0;

for (let i = 1; i <= num; i++) {
    
    if (i === num) {
        break;
    };
    if (i % 5) {
        continue;
    };
    
    console.log(i); 
}