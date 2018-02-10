(function () {

  var input = document.getElementById('axela-input'),
      submit = document.getElementById('axela-submit'),
      message = document.getElementById('axela-message'),
      advancedDiv = document.getElementById('advanced'),
      errorText = "I don't understand you.",
      dunnoText = "I wasn't programmed to know that.",
      picture = null,
      greetings = ["hi", "sup", "hello", "hola", "wasup"];

  // Add event listeners to text input and submit button below
  input.addEventListener("keypress", checkKey);
  submit.addEventListener("click", processInput);

  // This function checks if the user has pressed "ENTER" on their keyboard.
  function checkKey(event) {
    var keyCode = event.which || event.keyCode;
    if(keyCode == "13") {
      processInput();
    }
  }

  /*
   * processInput()
   * This function does the following (in order):
   * -If the advancedDiv element contains a picture, that picture is
   *  removed from the advancedDiv.
   * -Create a variable "words" that is an array of all words the user typed.
      Do so exactly like this:
      var words = input.value.toLowerCase().trim().split(" ");
   * -Clear the text area.
   * -If the length of words is 1, then the user only entered one word. Check
   *  if that word is a greeting. If so, set the innerHTML of the message
   *  element to "Greetings!". Otherwise, set it to errorText.
   * -If the lenght of words is 2, then the user entered two words. What
      happens next is based on the first word they entered. Create a switch
      statement for the expression words[0], and has the following cases: "who"
      "what" "where" "tell" "show".
   * -Each case simply calls a function with the same name as the case, with
      words[1] passed in as an argument. For example, case "who" calls
      who(words[1]). Each case should break after calling the function.
   * -At the very end of the switch statement we handle what happens if the
      user has not entered a valid first word. Create a "default" case and
      make it set the message element's innerHTML to errorText.
   * -Finally, create one final "else" that takes care of the user entering
      anything other than 1 or 2 words. This will simply set the innerHTML of
      the message element to errorText.
   */

   function processInput(){
    image = document.getElementById('pic')
    if(advancedDiv.getElementsByTagName('img').length > 0){
      advancedDiv.removeChild(image)
    }
    var words = input.value.toLowerCase().trim().split(" ");
    document.getElementById('axela-input').value = ''
    if(words.length == 1){
      if(greetings.indexOf(words[0])>=0){
        message.innerHTML = "Greetings!"
        var working = "true"
      }else{
        message.innerHTML = "sorry, what?"
      }
    }else if(words.length == 2){
      switch(words[0]) {
        case "who":
          who(words[1]);
          break;
        case "what":
          what(words[1]);
          break;
        case "where":
          where(words[1]);
          break;
        case "tell":
          tell(words[1]);
          break;
        case "show":
          show(words[1]);
          break;
        default:
          message.innerHTML = "sorry, what?";
      }
    }else{
        message.innerHTML = "sorry, what?"
    }
  }


  /*
   * who(word)
   * This function sets the innerHTML of the message element to specific text,
     based on what the "word" is. In this case the word is the second word the
     user entered (e.g., "who you" results in "I am Axela, of course").
   * To do so, create a switch statement that handles the various valid
     second words the user could have entered (e.g., "you", "president", "me").
   * After setting the innerHTML of the message element to whatever text you
     want, don't forget to break.
   * Also don't forget to add a final default case, which handles the user
     entering an invalid second word. This sets the message's innerHTML to
     dunnoText, NOT errorText (since it's not an error per se, Axela just
     doesn't know what they're referring to.)
   */
    function who(word){
      switch(word) {
        case "you":
          message.innerHTML = "You are you.";
          break;
        case "me":
          message.innerHTML = "I am Axela.";
          break;
        case "president":
          message.innerHTML = "Donald Trump";
          break;
        case "idris":
          message.innerHTML = "A coach who teaches G1 coding.";
          break;
        case "andrea":
          message.innerHTML = "Tweet Tweet.";
          break;
        default:
          message.innerHTML = "sorry, what?";
      }
    }
  /*
   * what(word)
   * See above.
   */
   function what(word){
      switch(word) {
        case "food":
          message.innerHTML = "Yummy.";
          break;
        case "water":
          message.innerHTML = "Not wet.";
          break;
        case "pizza":
          message.innerHTML = "Something we have eaten too many times";
          break;
        case "google":
          message.innerHTML = "A search engine and tech company.";
          break;
        case "bitch":
          message.innerHTML = "A female dog.";
          break;
        default:
          message.innerHTML = "sorry, what?";
      }
    }

  /*
   * where(word)
   * See above.
   */
   function where(word){
      switch(word) {
        case "google":
          message.innerHTML = "Goodle's best office is in NY.";
          break;
        case "dinner":
          message.innerHTML = "On the table";
          break;
        case "gio":
          message.innerHTML = "Late.";
          break;
        case "fish":
          message.innerHTML = "The ocean";
          break;
        case "dog":
          message.innerHTML = "In the dog house.";
          break;
        default:
          message.innerHTML = "sorry, what?";
      }
    }
  /*
   * tell(word)
   * See above.
   */
   function tell(word){
      switch(word) {
        case "google":
          message.innerHTML = "Google's best office is in NY.";
          break;
        case "dinner":
          message.innerHTML = "On the table";
          break;
        case "gio":
          message.innerHTML = "Late.";
          break;
        case "fish":
          message.innerHTML = "The ocean";
          break;
        case "dog":
          message.innerHTML = "In the dog house.";
          break;
        default:
          message.innerHTML = "sorry, what?";
      }
    }
  /*
   * show(word)
   * See above.
   */
   function show(word){
      switch(word) {
        case "me":
          message.innerHTML = "Open photobooth.";
          break;
        case "you":
          message.innerHTML = "Sorry you can never ever see me.";
          break;
        case "tree":
          message.innerHTML = "Look out the window.";
          break;
        case "food":
          message.innerHTML = "Check the refrigerator.";
          break;
        case "floor":
          message.innerHTML = "Look down.";
          break;
        default:
          message.innerHTML = "sorry, what?";
      }
    }

})();
