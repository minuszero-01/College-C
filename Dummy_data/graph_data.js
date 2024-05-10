const class_mapping = {
    "FY": 2,
    "SY": 4,
    "TY": 6,
    "LY": 8,
}

function getRandValue(min, max){
    return (Math.random() * (max - min) + min).toFixed(2);
}

function computeRandomData(min, max, semister){
    const data = [];
    let sem_limit = class_mapping[semister]
    for (let sem_count = 1; sem_count <= sem_limit; sem_count++) {
        data.push({ name: `Sem ${sem_count}`, value: getRandValue(min, max) });
    }
    return data;
}

module.exports = computeRandomData

console.log("Data Bolte :", computeRandomData(6, 10 , "LY"));

