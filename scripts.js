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
  // textarea.textContent = "Hallo"; // get the Hello from here and after click the button, will publish it in textarea!

  // console.log(textarea.value); // get a vlaue from textarea and after click on the button,display it on the console.

  // when there is no input in the textarea, it will return and doesn't go inside the code!
  if (textarea.value === "") return;

  // 1. first of all, to separate the strings in textarea using \n with split() method!
  let rowData = textarea.value.toLowerCase().split("\n");
  // console.log(BackSlashNSplit);

  let collectedWords = [];

  for (const [i, word] of rowData.entries()) {
    // 2. doing trimming and split() methods to create an array and put every word consisting of two sub words separated with a comma!
    rowData = word.trim().split("_");

    // WE CAN ALSO DO THE DESTRCUTURING INSTEAD OF USING THE INDEXES:
    // 2.a
    const [first, second] = word.trim().split("_");

    // console.log(BackSlashNSplit);

    // 3. We choose the second sub word!
    const a = rowData[1];
    // console.log(a);

    // 4. and making only the first letter of the second sub word capital!
    const b1 = a.replace(a[0], a[0].toUpperCase());
    // console.log(b);

    // 5. and now, joining the first sub word and the second sub word together using join('') completely with nothing in between. Now, They are not array anymore, rather, separated string!
    const c1 = [rowData[0], b1].join("");
    // console.log(c1);

    // 5.a USING DESTRUCTURING INSTEAD OF DEFINING VARIABLE USING INDEXES:
    const output = [
      first,
      second.replace(second[0], second[0].toUpperCase()),
    ].join("");

    // 6. we need to put all of them again in an array to use it for the next section, that's why we use push method here!
    collectedWords.push(output);
    // console.log(collectedWords);

    // for (const [i, el] of collectedWords.entries()) {
    // The number 25 is an arbitrary number to bring all the tick signs in one column! It means the whole distance is consist of the whole word plus the space in between till the green tick, that's why all of them are in an equal distance from green tick!
    // IF WE REMOVE THE Number(el.length), THE 25 SPACES WILL NOT INCLUDE THE WORD, RATHER IT WOULD BE ONLY FROM THE LAST LETTER TILL THE TICK SIGN!
    // const b = "✅".padStart(25, " ");
    const b = "✅"
      .padStart(25 - Number(output.length), " ")
      /* 
    /--------25 spaces-------/
    underscoreCase          ✅
    firstName               ✅
    someVariable            ✅
    calculateAge            ✅
    delayedDeparture        ✅
    */

      .padEnd(25 - Number(output.length) + i, "✅");
    // The i here will add 0 to 4 tick signs to the current tick sign, because it takes the indexes from 0 to 4 and it is ideal for our purpose here!

    const c = [output, b].join("");
    // At the end, we have to join the word(el) and also the the complete tick sign with nothing in the paranthesis for join() method! and also join() method convert the array to the string!
    console.log(c);

    // OR THE SUGGESTED CODE FROM JONAS FOR THIS PART:
    // console.log(`${output.padEnd(20, " ")}${"✅".repeat(i + 1)}`);
    /* 
   underscoreCase          ✅
   firstName               ✅✅
   someVariable            ✅✅✅
   calculateAge            ✅✅✅✅
   delayedDeparture        ✅✅✅✅✅
   */
    // }
  }
});
