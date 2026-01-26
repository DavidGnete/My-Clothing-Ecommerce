export const CurrencyFormat =(value: number) => {

    return new Intl.NumberFormat('en-CO',{
        style:'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2

    }).format(value);

};