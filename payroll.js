class Payroll {
    calculateEmployeePay(baseSalary, hoursWorked) {
        const hourlyRate = baseSalary / 40;
        let grossPay;

        if (hoursWorked > 40) {
            grossPay = (hourlyRate * 40) + (hourlyRate * 1.5 * (hoursWorked - 40));
        } else {
            grossPay = baseSalary;
        }

        let tax;
        if (grossPay <= 500) {
            tax = grossPay * 0.1;
        } else if (grossPay <= 1000) {
            tax = 500 * 0.1 + (grossPay - 500) * 0.2;
        } else {
            tax = 500 * 0.1 + 500 * 0.2 + (grossPay - 1000) * 0.3;
        }

        const socialSecurity = grossPay * 0.062;
        const netPay = grossPay - tax - socialSecurity;
        return netPay;
    }
}


const payroll = new Payroll();
console.log(payroll.calculateEmployeePay(1000, 45)); 
