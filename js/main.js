/*
        Brendan Ready
        Assignment 06
*/

// The Employee Management System (Add Employee Popup)

/* 
In this assignment, the ‘Add Employee’ form will now pop up in a new browser window.
And this time, when the user clicks the ‘Add Employee’ button in the pop up, the pop up will close itself,
and the values that user enters, will be displayed within an <output> tag in the parent window.

General Considerations

  - When the user clicks the ‘Add Employee’ button on the index.html page, the add-employee.html
    page should open within a new popup window. It doesn’t matter what dimensions you specify
    here as they will be overwritten on the add-employee.html pop up.

  - Within the add-employee.html popup, the user should be able to add values into the form
    objects and then click the Add Employee button. At this point, the popup should close itself and
    the values of the form should be displayed within the <output> tag in the index.html page.

Other Considerations

  - Use window.open() to open the popup window.
  - Use window.resizeTo() to resize the popup window.
  - Use window.moveTo() to center the popup window within the web page.
  - Use window.close() to close the popup when the user clicks the ‘Cancel’ button or when the
    user submits the form.
  - Use window.opener to select the <output> tag from the main page in order to set the data with
    the values of the form elements entered into the ‘Add Employee’ form.
 */

// HANDLE THE LOAD EVENT OF THE WINDOW
//    * I added the defer Attribute within the <script> tag, 
//      so there's no need to wrap the code in window.addEventListener('load', () => {});

// HELPER FUNCTION TO RETRIEVE THE HTML ELEMENTS FROM THE DOM
const $ = id => document.getElementById(id);

// HANDLE THE CLICK EVENT FOR THE BTNADDEMPLOYEE BUTTON
$('btnAddEmployee').addEventListener('click', () =>

	// OPEN THE ADD-EMPLOYEE.HTML PAGE WITHIN A POPUP
	window.open('add-employee.html', 'addEmployeePopup', 'width=500, height=500')
);