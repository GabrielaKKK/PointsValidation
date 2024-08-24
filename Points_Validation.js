function pointsValidation([x1, y1, x2, y2]) {
    
    formulaForDistance(x1, y1, 0, 0);
    formulaForDistance(x2, y2, 0, 0);
    formulaForDistance(x1, y1, x2, y2);

    function formulaForDistance(x1, y1, x2, y2) {
        const result = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        
        if (result === Math.round(result)) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        } else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }
}
pointsValidation([3, 0, 0, 4]);
pointsValidation([2, 1, 1, 1]);