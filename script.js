var isDate = function (input) {
  //   write your code here
	if (input instanceof Date) {
    return true;
  }

  // Try parsing the input as a date
  const parsedDate = new Date(input);

  // Check if the parsed date is a valid date and not NaN
  return !isNaN(parsedDate.getTime());
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
