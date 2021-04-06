## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
    - This is your pseudocode
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
7) Think about how to validate each of your steps


HTML
-three containers for three pokemon
-radio buttons to select one pokemon
-button to capture pokemon and populate 3 new pokemon

JS
-initial states:
    -pokedex: []
    -rounds played: 0
    -list of pokemon encountered: []
    -times this pokemon was encountered: 0
    -times this pokemon was captured: 0

-actions:
    -page load
        -display 3 pokemon
        -add 3 pokemon to list of pokemon encountered AND increment # times encountered
    -select pokemon (radio button - choose one)
    -capture button:
        -add selected pokemon to pokedex
            -how to grab this pokemon? name?
        -increment rounds played
        -increment times this pokemon was captured
    -after 10 rounds:
        -display results page
            -single-session results
                -pokedex info
        -allow user to clear local storage and start again (button & add event listener)