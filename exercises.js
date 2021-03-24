let filterOutOdds = (...nums) => {
	return nums.filter((num) => num % 2 === 0);
};

let findMin = (...nums) => {
	return Math.min(...nums);
};

let mergeObjects = (a, b) => ({ ...a, ...b });

let doubleAndReturnArgs = (a, ...rest) => {
	return [...a, ...rest].map((num) => num * 2);
};

/** remove a random element in the items array
and return a new array without that item. */

let removeRandom = (items) => {
	let i = Math.floor(Math.random() * items.length);
	return [...items.slice(0, i), ...items.slice(i + 1)];
};

/** Return a new array with every item in array1 and array2. */

let extend = (array1, array2) => [...array1, ...array2];

/** Return a new object with all the keys and values
from obj and a new key/value pair */

let addKeyVal = (obj, key, val) => {
	let output = { ...obj };
	output[key] = val;
	return output;
};

/** Return a new object with a key removed. */

let removeKey = (obj, key) => {
	let output = { ...obj };
	delete output[key];
	return output;
};

/** Combine two objects and return a new object. */

let combine = (obj1, obj2) => ({ ...obj1, ...obj2 });

/** Return a new object with a modified key and value. */

function update(obj, key, val) {
	let output = { ...obj };
	output[key] = val;
	return output;
}
