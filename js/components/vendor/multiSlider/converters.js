'use strict';

export function valueToPosition(value, valuesArray, sliderLength) {
  var arrLength;
  var index = valuesArray.indexOf(value);

  if (index === -1) {
    console.log('Invalid value, array does not contain: ', value)
    return null;
  } else {
    arrLength = valuesArray.length - 1;
    return sliderLength * index / arrLength;
  }
}

export function positionToValue(position, valuesArray, sliderLength) {
  var arrLength;
  var index;

  if ( position < 0 || sliderLength < position ) {
    console.log('invalid position: ', position);
    return null;
  } else {
    arrLength = valuesArray.length - 1;
    index = arrLength * position / sliderLength;
    return valuesArray[Math.round(index)];
  }
}

export function createArray(start, end, step) {
  var i;
  var length;
  var direction = start - end > 0 ? -1 : 1;
  var result = [];
  if (!step) {
      console.log('invalid step: ', step);
      return result;
  } else {
      length = Math.abs((start - end)/step) + 1;
      for (i=0 ; i<length ; i++){
        result.push(start + i * Math.abs(step)*direction);
      }
      return result;
  }
}
