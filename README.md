# Megaport-Technical-Coding-Activities-01-2022

## Running the application
Open /Megaport/index.html

## Activity 1
(1) Take the following data and format it into a table
    Added to table shown at Activity 1 portion of the html
    
(2) Add toggles to sort by id, type and batter (both ascending and descending)
    Table is sorted, to change the sort, click on the headers
    A black triangle will appear at the header that is currently being sorted as
    The black triangle will point up when it is ascending, down when it is desending sort
    
(3) Add a text input to filter the data
    In the Filter textbox, you can input to find from either column
    
(4) Add a form to collect new baked goods
    At the top of the there are input fields for each keys, input them and press the "Add New Order" button to input it into the table.
    Note: All inputs need to be filled to add to table.

(5) Make the elements look nice using CSS

## Activity 2
(1) Added a html element to be able to change the paths and pressing "Get Value" button, the output will change depending on the path.
    It will show undefined if an incorrect path is used.
    
(2) The sample object given will be used if the obj is undefined.

(3) Explanation to get to suburub, the path will be "address.office.suburb", and the path for asxListed is "industry.asxListed"
    Function is created in /Megaport/javascript/index.js 

## Activity 3
(1) Write a reusable fetch function that GETs the list of Megaport enabled locations from the following endpoint: https://api.megaport.com/v2/locations
    Added a button at Activity 3 portion, pressing it, will do a GET request to the URL in the input (Default to https://api.megaport.com/v2/locations).
    
(2) The function should be asynchronous and return either the result or an error.
    The Status and Status Type labels will show the effect of asynchronous.
    When the button isnt pressed, both will show "Button not pressed", when pressed and the request is not back, both will show "Fetching API"
    Upon receive the response, Status will show the code (E.g. 200), while the Status Type will check for the first digit to show what status type it is 
    (E.g. First digit "2" is "Successful responses", while First digit "4" is "Client error responses")
