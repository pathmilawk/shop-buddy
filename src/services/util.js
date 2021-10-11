const mvaPercentage = "0.12"; //TODO get the percentages from environment
const maxDiscountPercentage = "0.1";
const discountPercentage = "0.02";

/**
 * Calcultes mva using mva percentage
 * @param {*} total 
 * @returns mva
 */
export const calculateMVA = (total) => {
    return (total * mvaPercentage).toFixed(2);
}

/**
 * Calcultes discount using discount percentage and maximum discount
 * @param {*} total 
 * @returns calculated discount
 */
export const calculateDiscount = (total) => {
    const percentageFactor = Math.floor(total / 500);
    let finalDiscountPercentage = percentageFactor * discountPercentage;

    if (finalDiscountPercentage > maxDiscountPercentage)
        finalDiscountPercentage = maxDiscountPercentage;
    
    return (total * finalDiscountPercentage).toFixed(2);
}

/**
 * Calcultes total using discount sub total and mva
 * @param {*} subTotal 
 * @param {*} mva 
 * @param {*} discount 
 * @returns calculated total bill
 */
export const calculateTotalBill = (subTotal, mva, discount) => {
    return (subTotal + mva - discount).toFixed(2);
}