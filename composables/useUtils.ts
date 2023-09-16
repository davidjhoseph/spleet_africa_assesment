export const useUtils = (number: number) => {
    const currencyString = number?.toLocaleString('en-US', { style: 'currency', currency: 'NGN', minimumFractionDigits: 0 });
    return {currencyString}
}