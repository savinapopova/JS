function createFormatter(separator, symbol, symbolFirst, value) {
    let formatter = function (valueParam) {
        return value (separator, symbol, symbolFirst, valueParam)
    };
    return formatter;
}

function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2,2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}




