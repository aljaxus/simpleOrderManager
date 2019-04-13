
/**
 * Capitalize the first letter of given string 
 * which has to be one or more characters long
 * 
 * "string".firstToUpperCase() => "String"
 */

String.prototype.firstToUpperCase = function () {
  typeof this
  if (typeof this !== 'string' || this.length < 1) throw new Error('element.firstToUpperCase() element must be a string with one or more characters')
  return (this[0] || this.charAt(0)).toUpperCase() + this.slice(1)
}