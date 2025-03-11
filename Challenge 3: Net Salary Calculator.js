function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;

    // PAYE Calculation (Simplified using given tax rates)
    function calculatePAYE(gross) {
        if (gross <= 24000) return gross * 0.1; // 10%
        else if (gross <= 32333) return gross * 0.25; // 25%
        else return gross * 0.3; // 30%
    }

    // NHIF Deductions
    function calculateNHIF(gross) {
        if (gross <= 5999) return 150;
        else if (gross <= 7999) return 300;
        else if (gross <= 11999) return 400;
        else if (gross <= 14999) return 500;
        else if (gross <= 19999) return 600;
        else if (gross <= 24999) return 750;
        else if (gross <= 29999) return 850;
        else if (gross <= 34999) return 900;
        else if (gross <= 39999) return 950;
        else if (gross <= 44999) return 1000;
        else if (gross <= 49999) return 1100;
        else if (gross <= 59999) return 1200;
        else if (gross <= 69999) return 1300;
        else if (gross <= 79999) return 1400;
        else if (gross <= 89999) return 1500;
        else if (gross <= 99999) return 1600;
        else return 1700;
    }

    // NSSF Deductions (Tier I - 6% of first 6,000)
    function calculateNSSF(gross) {
        return Math.min(6000, gross) * 0.06;
    }

    let payee = calculatePAYE(grossSalary);
    let nhif = calculateNHIF(grossSalary);
    let nssf = calculateNSSF(grossSalary);
    
    let netSalary = grossSalary - (payee + nhif + nssf);

    return {
        grossSalary,
        payee,
        nhif,
        nssf,
        netSalary
    };
}

// Example Usage
let basicSalary = parseFloat(prompt("Enter basic salary:"));
let benefits = parseFloat(prompt("Enter benefits amount:"));

if (basicSalary >= 0 && benefits >= 0) {
    let result = calculateNetSalary(basicSalary, benefits);
    console.log(`Gross Salary: ${result.grossSalary}`);
    console.log(`PAYE: ${result.payee}`);
    console.log(`NHIF Deduction: ${result.nhif}`);
    console.log(`NSSF Deduction: ${result.nssf}`);
    console.log(`Net Salary: ${result.netSalary}`);
} else {
    console.log("Invalid input! Salary and benefits must be positive numbers.");
}
