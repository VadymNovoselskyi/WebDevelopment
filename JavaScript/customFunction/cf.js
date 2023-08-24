function calculateBill(billAmount, taxRate = 0.3, tipRate = 0.1) {
    const total = billAmount + billAmount * (taxRate + tipRate);
    return `Your total is $${total}`;
}
