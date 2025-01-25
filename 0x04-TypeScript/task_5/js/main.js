// Create a directory task_5 and copy these configuration files into the root of task_5: package.json, tsconfig.json, webpack.config.js
function sumMajorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        brand: "MajorCredits"
    };
}
function sumMinorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        brand: "MinorCredits"
    };
}
var majorCredits1 = {
    credits: 10,
    brand: "MajorCredits"
};
var majorCredits2 = {
    credits: 20,
    brand: "MajorCredits"
};
var minorCredits1 = {
    credits: 5,
    brand: "MinorCredits"
};
var minorCredits2 = {
    credits: 10,
    brand: "MinorCredits"
};
console.log(sumMajorCredits(majorCredits1, majorCredits2));
console.log(sumMinorCredits(minorCredits1, minorCredits2));
