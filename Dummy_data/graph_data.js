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
    let sem_limit = class_mapping[semister];
    let sem_count = 1;
    for (; sem_count <= sem_limit; sem_count++) {
        data.push({ name: `Sem ${sem_count}`, value: getRandValue(min, max) });
    }
    while(sem_count <= 8){
        data.push({ name: `Sem ${sem_count++}`, value: null});
    }
    return data;
}

module.exports = computeRandomData

console.log("Data Bolte :", computeRandomData(6, 10 , "FY"));

`
Demo Output: 
Data Bolte : [
    { name: 'Sem 1', value: '9.82' },
    { name: 'Sem 2', value: '7.96' },
    { name: 'Sem 3', value: '7.50' },
    { name: 'Sem 4', value: '6.36' },
    { name: 'Sem 5', value: '9.32' },
    { name: 'Sem 6', value: '7.47' },
    { name: 'Sem 7', value: '6.12' },
    { name: 'Sem 8', value: '9.77' }
  ]

For Edge Case less than FY 
Data Bolte : [
    { name: 'Sem 1', value: '7.05' },
    { name: 'Sem 2', value: '6.19' },
    { name: 'Sem 3', value: null },
    { name: 'Sem 4', value: null },
    { name: 'Sem 5', value: null },
    { name: 'Sem 6', value: null },
    { name: 'Sem 7', value: null },
    { name: 'Sem 8', value: null }
]
`