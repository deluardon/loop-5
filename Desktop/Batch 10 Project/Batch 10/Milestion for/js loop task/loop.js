for (let i = 11; i >= 10; i++) {
    // console.log("number ", i);
    if (i === 50) {
        break;
    }
}

let num = 0;
while (num < 150) {
    num++;
    if (num % 5 !== 0) {
        continue;
    }
    console.log("number ", num);
}