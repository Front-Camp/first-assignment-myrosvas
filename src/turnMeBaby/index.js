/**
 * This function should just reverse string
 *
 * @param {string} str - string of any length
 * @return {string} - reversed string
 * @example
 * turnMeBaby('hello');     // 'olleh'
 * turnMeBaby('Some text'); // 'txet emoS'
 */
const turnMeBaby = str => {
  if (typeof str !== 'string'){
  throw new Error('Not a string');
  }
  else {
    let newArr = str.toArray();
    newArr.reverse();
    let result = newArr.toString();
    return result;
  }
 };

export default turnMeBaby;
