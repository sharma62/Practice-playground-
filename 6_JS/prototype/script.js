/**

 * Checks if an array includes one of the elements from another array.

 * Supports arrays of arrays, objects, and primitive values.

 * @param {Array} list - The array to check against.

 * @returns {Boolean} True if the array includes one of the elements, false otherwise.

 */

Array.prototype.includesOneOf = function(list) {

  // Early return if either array is empty

  if (this.length === 0 || list.length === 0) return false;

  // Check for arrays of arrays

  if (Array.isArray(this[0]) && Array.isArray(list[0])) {

    return this.some((array1) =>

      list.some((array2) =>

        array1.length === array2.length &&

        array1.every((value, index) => value === array2[index])

      )

    );
  }

  // Check for arrays of objects

  if (this[0].constructor === Object && list[0].constructor === Object) {

    return this.some((object1) =>

      list.some((object2) =>

        Object.keys(object1).length === Object.keys(object2).length &&

        Object.entries(object1).every(([key, value]) => value === object2[key])

      )

    );

  }

  // Check for primitive values

  return this.some(( ) => list.includes(value));

};