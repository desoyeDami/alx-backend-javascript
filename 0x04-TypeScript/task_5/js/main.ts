// Create a directory task_5 and copy these configuration files into the root of task_5: package.json, tsconfig.json, webpack.config.js

// Create two interfaces MajorCredits and MinorCredits in task_5/js/main.ts:

// Each interface defines a number named credits
// Add a brand property to each interface in order to uniquely identify each of them
// Create two functions named sumMajorCredits and sumMinorCredits in task_5/js/main.ts:

// Each function takes two arguments subject1 and subject2
// sumMajorCredits returns MajorCredits value and sumMinorCredits returns MinorCredits value
// Each function sums the credits of the two subjects

interface MajorCredits {
    credits: number;
    brand: string;
}

interface MinorCredits {
    credits: number;
    brand: string;
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        brand: "MajorCredits"
    };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        brand: "MinorCredits"
    };
}

let majorCredits1: MajorCredits = {
    credits: 10,
    brand: "MajorCredits"
};

let majorCredits2: MajorCredits = {
    credits: 20,
    brand: "MajorCredits"
};

let minorCredits1: MinorCredits = {
    credits: 5,
    brand: "MinorCredits"
};

let minorCredits2: MinorCredits = {
    credits: 10,
    brand: "MinorCredits"
};

console.log(sumMajorCredits(majorCredits1, majorCredits2));
console.log(sumMinorCredits(minorCredits1, minorCredits2));

// Output: (compiled to .js with tsc and executed with node)
// { credits: 30, brand: 'MajorCredits' }
// { credits: 15, brand: 'MinorCredits' }
