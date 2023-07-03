function fakeBin(x){
    let bin = '';

    for (let i = 0; i < x.length; i++) {
        if (parseInt(x[i]) < 5) {
            bin += "0";
        } else {
            bin += "1";
        }
        
    }

    for (const char of x) {
        if(parseInt(char) < 5) {
            bin += "0";
        } else {
            bin += "1";
        }
    }
    console.log(bin);
}

fakeBin("4538")