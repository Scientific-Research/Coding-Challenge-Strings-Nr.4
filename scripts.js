///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

// document.body.append(document.createElement("textarea"));
// document.body.append(document.createElement("button"));

const text = document.querySelector("textarea").value;
const textarea = document.querySelector("textarea");
const button = document.querySelector("button");

// underscore_case => underscoreCase
button.addEventListener("click", () => {
  // console.log("Hallo");
  textarea.textContent = "Hallo"; // get the Hello from here and after click the button, will publish it in textarea!

  console.log(textarea.value); // get a vlaue from textarea and after click on the button,display it on the console.

  const lowercaseSplit = textarea.value.toLowerCase().split("_");
  console.log(lowercaseSplit); // (2) ['underscore', 'case'] => underscoreCase

  const uppercaseFirstChar = lowercaseSplit[1].replace(
    lowercaseSplit[1].slice(0, 1), // only first char would be selected!
    lowercaseSplit[1].slice(0, 1).toUpperCase() // only first char would be selected and first char would be replaced with big char!
  );
  console.log(uppercaseFirstChar);

  const finalWord = [lowercaseSplit[0], uppercaseFirstChar].join("");
  console.log(finalWord);
});
/* 
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure
*/
