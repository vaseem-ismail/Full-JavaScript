function generateMultiplicationTable(number) {
    let i = 1;
    while (i <= 10) {
        console.log(`${number} * ${i} = ${number * i}`);
        i++;
    }
}
generateMultiplicationTable(5);
