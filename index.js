// Your code here
function mapToNegativize(sourceArray) {
    return sourceArray.map(value => {
        return value * -1;
    })
}

function mapToNoChange(sourceArray) {
    return sourceArray.map(value => {
        return value;
    })
}

function mapToDouble(sourceArray) {
    return sourceArray.map(value => {
        return value * 2;
    })
}

function mapToSquare(sourceArray) {
    return sourceArray.map(value => {
        return value * value;
    })
}

function reduceToTotal(sourceArray, startingPoint=0) {
    const reducer = function(accumulator, currentValue) {
        return accumulator + currentValue
    }
    return sourceArray.reduce(reducer, startingPoint);
}


function reduceToAllTrue(sourceArray) {
    const reducer = function(accumulator, currentValue) {
        if (accumulator !== true && currentValue !== true) {
            return true;
        } else {
            return false;
        }
    }
    return sourceArray.reduce(reducer, true);
}


function reduceToAnyTrue(sourceArray) {
    const reducer = function(accumulator, currentValue) {
        if (accumulator === true || currentValue === true) {
            return true;
        } else if (!currentValue) {
            return false;
        }
    }
    return sourceArray.reduce(reducer, false);
}