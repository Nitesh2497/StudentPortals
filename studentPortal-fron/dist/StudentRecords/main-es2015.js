(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/add-student/add-student.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/add-student/add-student.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\r\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\r\n<!--<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>-->\r\n<!------ Include the above in your HEAD tag ---------->\r\n<app-navbar></app-navbar>\r\n<form class=\"form-horizontal\" (ngSubmit)=\"addStudent(student)\">\r\n  <fieldset>\r\n    <!-- Text input-->\r\n    <div class=\"form-group\">\r\n      <label class=\"col-md-4 control-label\" for=\"id\">Student Id</label>\r\n      <div class=\"col-md-4\">\r\n        <input id=\"id\" name=\"id\" type=\"text\" placeholder=\"Student Id\" class=\"form-control input-md\"  [(ngModel)]=\"student.id\" required=\"required\">\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Text input-->\r\n    <div class=\"form-group\">\r\n      <label class=\"col-md-4 control-label\" for=\"ln\">Name</label>\r\n      <div class=\"col-md-4\">\r\n        <input id=\"ln\" name=\"ln\" type=\"text\" placeholder=\"Name\" class=\"form-control input-md\" [(ngModel)]=\"student.name\" required=\"required\">\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Text input-->\r\n    <div class=\"form-group\">\r\n      <label class=\"col-md-4 control-label\" for=\"branch\">Branch</label>\r\n      <div class=\"col-md-4\">\r\n        <input id=\"branch\" name=\"branch\" type=\"text\" placeholder=\"Branch\" class=\"form-control input-md\" [(ngModel)]=\"student.branch\" required=\"required\">\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Text input-->\r\n    <div class=\"form-group\">\r\n      <label class=\"col-md-4 control-label\" for=\"email\">Email</label>\r\n      <div class=\"col-md-4\">\r\n        <input id=\"email\" name=\"email\" type=\"text\" placeholder=\"email\" class=\"form-control input-md\" [(ngModel)]=\"student.email\" required=\"\">\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Text input-->\r\n    <div class=\"form-group\">\r\n      <label class=\"col-md-4 control-label\" for=\"add1\">Address</label>\r\n      <div class=\"col-md-4\">\r\n        <input id=\"add1\" name=\"add1\" type=\"text\" placeholder=\"\" class=\"form-control input-md\" [(ngModel)]=\"student.address\" required=\"required\">\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Text input-->\r\n    <div class=\"form-group\">\r\n      <label class=\"col-md-4 control-label\" for=\"cgpa\">CGPA</label>\r\n      <div class=\"col-md-4\">\r\n        <input id=\"cgpa\" name=\"cgpa\" type=\"text\" placeholder=\"CGPA\" class=\"form-control input-md\" [(ngModel)]=\"student.cgpa\" required=\"required\">\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Text input-->\r\n    <!--<div class=\"form-group\">-->\r\n      <!--<label class=\"col-md-4 control-label\" for=\"zip\">Zip Code</label>-->\r\n      <!--<div class=\"col-md-4\">-->\r\n        <!--<input id=\"zip\" name=\"zip\" type=\"text\" placeholder=\"Zip Code\" class=\"form-control input-md\" required=\"\">-->\r\n\r\n      <!--</div>-->\r\n    <!--</div>-->\r\n\r\n    <!--&lt;!&ndash; Text input&ndash;&gt;-->\r\n    <!--<div class=\"form-group\">-->\r\n      <!--<label class=\"col-md-4 control-label\" for=\"ctry\">Country</label>-->\r\n      <!--<div class=\"col-md-4\">-->\r\n        <!--<input id=\"ctry\" name=\"ctry\" type=\"text\" placeholder=\"Country\" class=\"form-control input-md\" required=\"\">-->\r\n\r\n      <!--</div>-->\r\n    <!--</div>-->\r\n\r\n    <!-- Text input-->\r\n    <div class=\"form-group\">\r\n      <label class=\"col-md-4 control-label\" for=\"phone\">Phone</label>\r\n      <div class=\"col-md-4\">\r\n        <input id=\"phone\" name=\"phone\" type=\"text\" placeholder=\"Phone\" class=\"form-control input-md\" [(ngModel)]=\"student.phone\" required=\"required\">\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label class=\"col-md-4 control-label\" for=\"land\">Landline</label>\r\n      <div class=\"col-md-4\">\r\n        <input id=\"land\" name=\"land\" type=\"text\" placeholder=\"Phone\" class=\"form-control input-md\" [(ngModel)]=\"student.landline\" required=\"required\">\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <!--&lt;!&ndash; Multiple Radios (inline) &ndash;&gt;-->\r\n    <!--<div class=\"form-group\">-->\r\n      <!--<label class=\"col-md-4 control-label\" for=\"Training\">Would you like to attend our Networking Reception on September 3, 2015?</label>-->\r\n      <!--<div class=\"col-md-4\">-->\r\n        <!--<label class=\"radio-inline\" for=\"Training-0\">-->\r\n          <!--<input type=\"radio\" name=\"Training\" id=\"Training-0\" value=\"yes\" checked=\"checked\">-->\r\n          <!--Yes-->\r\n        <!--</label>-->\r\n        <!--<label class=\"radio-inline\" for=\"Training-1\">-->\r\n          <!--<input type=\"radio\" name=\"Training\" id=\"Training-1\" value=\"no\">-->\r\n          <!--No-->\r\n        <!--</label>-->\r\n      <!--</div>-->\r\n    <!--</div>-->\r\n\r\n    <!--&lt;!&ndash; Multiple Radios (inline) &ndash;&gt;-->\r\n    <!--<div class=\"form-group\">-->\r\n      <!--<label class=\"col-md-4 control-label\" for=\"Networking_Reception\">Would you like to attend our Technical Product Update Session on September 4, 2015?</label>-->\r\n      <!--<div class=\"col-md-4\">-->\r\n        <!--<label class=\"radio-inline\" for=\"Networking_Reception-0\">-->\r\n          <!--<input type=\"radio\" name=\"Networking_Reception\" id=\"Networking_Reception-0\" value=\"meet_yes\" checked=\"checked\">-->\r\n          <!--Yes-->\r\n        <!--</label>-->\r\n        <!--<label class=\"radio-inline\" for=\"Networking_Reception-1\">-->\r\n          <!--<input type=\"radio\" name=\"Networking_Reception\" id=\"Networking_Reception-1\" value=\"meet_no\">-->\r\n          <!--No-->\r\n        <!--</label>-->\r\n      <!--</div>-->\r\n    <!--</div>-->\r\n\r\n    <!-- Select Basic -->\r\n    <!--<div class=\"form-group\">-->\r\n      <!--<label class=\"col-md-4 control-label\" for=\"selectbasic\">Select Basic</label>-->\r\n      <!--<div class=\"col-md-4\">-->\r\n        <!--<select id=\"selectbasic\" name=\"selectbasic\" class=\"form-control input-md\">-->\r\n          <!--<option>Option one</option>-->\r\n          <!--<option>Option two</option>-->\r\n        <!--</select>-->\r\n      <!--</div>-->\r\n    <!--</div>-->\r\n\r\n\r\n    <!--&lt;!&ndash; Multiple Radios (inline) &ndash;&gt;-->\r\n    <!--<div class=\"form-group\">-->\r\n      <!--<label class=\"col-md-4 control-label\" for=\"Dinner\">Would you like to attend our Networking Dinner on September 4, 2015?</label>-->\r\n      <!--<div class=\"col-md-4\">-->\r\n        <!--<label class=\"radio-inline\" for=\"Dinner-0\">-->\r\n          <!--<input type=\"radio\" name=\"Dinner\" id=\"Dinner-0\" value=\"dinner_yes\" checked=\"checked\">-->\r\n          <!--Yes-->\r\n        <!--</label>-->\r\n        <!--<label class=\"radio-inline\" for=\"Dinner-1\">-->\r\n          <!--<input type=\"radio\" name=\"Dinner\" id=\"Dinner-1\" value=\"dinner_no\">-->\r\n          <!--No-->\r\n        <!--</label>-->\r\n      <!--</div>-->\r\n    <!--</div>-->\r\n\r\n    <!-- Button -->\r\n    <div class=\"form-group\">\r\n      <label class=\"col-md-4 control-label\" for=\"submit\"></label>\r\n      <div class=\"col-md-4\">\r\n        <button id=\"submit\" name=\"submit\" class=\"btn btn-primary\">SUBMIT</button>\r\n      </div>\r\n    </div>\r\n\r\n  </fieldset>\r\n</form>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!--<app-show-student-detail></app-show-student-detail>-->\n<!--<app-details></app-details>-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/delete-student/delete-student.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delete-student/delete-student.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<p>delete-student works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/form-validation/form-validation.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/form-validation/form-validation.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n  <div class=\"form-group\">\n  <label for=\"firstName\">First Name</label>\n    <input id = \"firstName\" type=\"text\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"Comment\">Comment</label>\n    <textarea id = \"Comment\" type=\"text\" class=\"form-control\"></textarea>\n  </div>\n  <button class=\"btn btn-primary\" type=\"submit\">Submit</button>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/list-students/list-students.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/list-students/list-students.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <!--<h1>Student Details </h1>-->\r\n  <app-navbar></app-navbar>\r\n  <br>\r\n  <table>\r\n    <th>StudentId</th>\r\n    <th>Name</th>\r\n     <th>Branch</th>\r\n     <th>CGPA</th>\r\n     <th>Details</th>\r\n     <th>Update Details</th>\r\n     <!--<th>Add Student</th>-->\r\n      <th>Delete Student</th>\r\n    <!--<tr *ngFor=\"let students of student\">-->\r\n      <!--<td>{{ students.id }}</td>-->\r\n      <!--<td>{{ students.name }}</td>-->\r\n      <!--<td>{{ students.branch }}</td>-->\r\n      <!--<td>{{ students.cgpa }}</td>-->\r\n    <tr *ngFor=\"let student of students\">\r\n      <td>{{ student.id }}</td>\r\n      <td>{{ student.name }}</td>\r\n      <td>{{ student.branch }}</td>\r\n      <td>{{ student.cgpa }}</td>\r\n      <td><button class=\"button1\" (click)=\"sendId(student.id)\" routerLink=\"showStudentDetails\" routerLinkActive=\"active\">Details</button></td>\r\n      <td><button class=\"button1\" (click)=\"sendId(student.id)\" routerLink=\"updateStudentDetails\" routerLinkActive=\"active\">Update Details</button></td>\r\n      <!--<td><button class=\"button1\" routerLink=\"addStudent\" routerLinkActive=\"active\">Add Student</button></td>-->\r\n      <td><button class=\"button1\" (click)=\"deleteStudent(student.id)\" routerLinkActive=\"active\">Delete Student</button></td>\r\n    </tr>\r\n  </table>\r\n  <br/>\r\n  <br/>\r\n</div>\r\n\r\n<!--(click)=\"showDetails(students)\"-->\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\r\n  <!--<br><br><br><br><br><br><br><br><br>-->\r\n<form class=\"form-inline login_form\" (ngSubmit)=\"sendFeedback()\">\r\n    <input type=\"text\" class=\"form-control mb-2 mr-sm-2\" id=\"inlineFormInputName2\" name =\"username\" [(ngModel)]=\"login.username\" required=\"required\" placeholder=\"Username\">\r\n    <!--<div class=\"input-group mb-2 mr-sm-2\">-->\r\n    <input class=\"input-group mb-2 mr-sm-2 form-control\" type=\"password\" id=\"inlineFormInputGroupUsername2\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"login.password\" required=\"required\">\r\n    <!--</div>-->\r\n    <button type=\"submit\" class=\"btn btn-primary mb-2\">Login</button>\r\n  <div class=\"right\"><button type=\"submit\" class=\"btn btn-primary mb-2\" routerLink=\"register\">Register</button>\r\n  </div>\r\n</form>\r\n  <div *ngIf=\"!loggedIn\" minlength=\"15\"  class=\"alert alert-danger\" style=\"\">Invalid Username or Password</div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/logout/logout.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/logout/logout.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>logout works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navbar/navbar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm colored navbar-dark justify-content-between\">\n  <ul class=\"navbar-nav \">\n    <li class=\"nav-item \">\n      <a class=\"nav-link\" routerLink=\"/listStudents\" routerLinkActive=\"active\">List Students</a>\n    </li>\n    <li class=\"nav-item \">\n      <a class=\"nav-link\" routerLink=\"addStudent\" routerLinkActive=\"active\">Add Students</a>\n    </li>\n  </ul>\n  <ul class=\"d-flex flex-row-reverse navbar-nav\">\n    <li class=\"nav-item \">\n      <a class=\"nav-link \" (click)=\"logOut()\">Logout</a>\n    </li>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"parent\" class=\"card row justify-content-md-center\" style=\"width:fit-content;\">\n  <article id=\"child\" class=\"card-body\">\n    <h4 class=\"card-title\">Register</h4>\n    <form name=\"form\" (ngSubmit)=\"register()\">\n      <div class=\"form-group\">\n        <label>Name: </label>\n        <br>\n        <input type=\"text\" [(ngModel)]=\"registerUser.name\" class=\"form-control\" name=\"name\">\n        <a *ngIf=\"!validName\" style=\"color:red;font-size:13px\">Please enter valid Name</a>\n      </div>\n      <div class=\"form-group\">\n        <label>Username: </label>\n        <br>\n        <input type=\"text\" [(ngModel)]=\"registerUser.username\" class=\"form-control\" name=\"username\">\n        <a *ngIf=\"!validUserName\" style=\"color:red;font-size:13px\">Please enter valid Name</a>\n      </div>\n      <div class=\"form-group\">\n        <label>Email:</label>\n        <br>\n        <input type=\"email\" [(ngModel)]=\"registerUser.email\" class=\"form-control\" name=\"email\">\n        <a *ngIf=\"!validEmail\" style=\"color:red;font-size:13px\">Invalid Email</a>\n        <!--<a *ngIf=\"emailError\" style=\"color:red;font-size:13px\">Email invalid</a>-->\n      </div>\n\n      <div class=\"form-group\">\n        <label>Password: </label>\n        <!--<a *ngIf=\"!validPassword\" class=\"float-right alert-danger\">Invalid Password</a>-->\n        <br>\n        <input type=\"password\"  minlength=\"8\" [(ngModel)]=\"registerUser.password\" class=\"form-control\" name=\"password\">\n      </div>\n\n      <div class=\"form-group\">\n        <label>Confirm Password: </label>\n        <br>\n        <input type=\"password\" minlength=\"8\" [(ngModel)]=\"confirmPassword\"  class=\"form-control\" name=\"password\">\n        <a *ngIf=\"!validConfirmPass\" style=\"color:red;font-size:13px\">Password not matched</a>\n      </div>\n\n      <div class=\"form-group\">\n        <label>Phone No: </label>\n        <br>\n        <input  [(ngModel)]=\"registerUser.phone\" class=\"form-control\" maxlength=\"10\" minlength=\"10\"\n                name=\"password\" type=\"text\">1\n        <a *ngIf=\"!validContact\" style=\"color:red;font-size:13px\">Invalid Phone Number</a>\n      </div>\n      <button type=\"submit\" id=\"submit\" class=\"btn btn-success\">Submit</button>\n    </form>\n  </article>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/show-student-detail/show-student-detail.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/show-student-detail/show-student-detail.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<button class=\"button1\" (click)=\"showDetails()\">Click To View Student Details</button>-->\n<!--<br><br>-->\n<!--<app-list-students *ngIf=\"state === 'true'\"></app-list-students>-->\n<!--<app-navbar></app-navbar>-->\n<!--<div>-->\n  <!--<table>-->\n    <!--<th>StudentId</th>-->\n    <!--<th>Name</th>-->\n    <!--<th>Branch</th>-->\n    <!--<th>CGPA</th>-->\n    <!--<th>Address</th>-->\n    <!--<th>Phone</th>-->\n    <!--<th>City</th>-->\n    <!--<tr>-->\n      <!--<td>{{ students.id }}</td>-->\n      <!--<td>{{ students.name }}</td>-->\n      <!--<td>{{ students.branch }}</td>-->\n      <!--<td>{{ students.cgpa }}</td>-->\n      <!--<td>{{ students.address }}</td>-->\n      <!--<td>{{ students.phone }}</td>-->\n      <!--<td>{{ students.city }}</td>-->\n    <!--</tr>-->\n  <!--</table>-->\n<!--</div>-->\n\n<head>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n</head>\n\n<h2>Student Details</h2>\n\n<div class=\"card\">\n  <img src=\"assets/image/img_avatar.png\" alt=\"Avatar\" style=\"width:35%\">\n  <div class=\"container\">\n    <h4><b>Name: {{ students.name }}</b></h4>\n    <p>StudentId: {{students.id}}</p>\n    <p>Branch: {{students.branch}}</p>\n    <p>Address: {{students.address}}</p>\n    <p>CGPA: {{students.cgpa}}</p>\n    <p>Email: {{students.email}}</p>\n    <p>Phone: {{students.phone}}</p>\n    <p>Landline: {{students.landline}}</p>\n\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/student-home-page/student-home-page.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/student-home-page/student-home-page.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>{{student.name}}'s Details</h2>\n\n<div class=\"card\">\n  <img src=\"assets/image/img_avatar.png\" alt=\"Avatar\" style=\"width:35%\">\n  <div class=\"container\">\n    <h4><b>Name: {{ student.name }}</b></h4>\n    <!--<p>StudentId: {{students.id}}</p>-->\n    <!--<p>Branch: {{students.branch}}</p>-->\n    <!--<p>Address: {{students.address}}</p>-->\n    <!--<p>CGPA: {{students.cgpa}}</p>-->\n    <p>Email: {{student.email}}</p>\n    <p>Phone: {{student.phone}}</p>\n    <!--<p>Landline: {{students.landline}}</p>-->\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/update-student/update-student.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/update-student/update-student.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\n<!--<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>-->\n<!------ Include the above in your HEAD tag ---------->\n<app-navbar></app-navbar>\n<form class=\"form-horizontal\" (ngSubmit)=\"updateStudent(student)\">\n  <fieldset>\n    <!-- Text input-->\n    <div class=\"form-group\">\n      <label class=\"col-md-4 control-label\" for=\"id\">Student Id</label>\n      <div class=\"col-md-4\">\n        <input id=\"id\" name=\"id\" type=\"text\"  placeholder=\"Student Id\" class=\"form-control input-md\"  [(ngModel)]=\"student.id\" required=\"required\">\n\n      </div>\n    </div>\n\n    <!-- Text input-->\n    <div class=\"form-group\">\n      <label class=\"col-md-4 control-label\" for=\"ln\">name</label>\n      <div class=\"col-md-4\">\n        <input id=\"ln\" name=\"ln\" type=\"text\" placeholder=\"Name\" class=\"form-control input-md\" [(ngModel)]=\"student.name\" required=\"required\">\n\n      </div>\n    </div>\n\n    <!-- Text input-->\n    <div class=\"form-group\">\n      <label class=\"col-md-4 control-label\" for=\"branch\">Branch</label>\n      <div class=\"col-md-4\">\n        <input id=\"branch\" name=\"branch\" type=\"text\" placeholder=\"Branch\" class=\"form-control input-md\" [(ngModel)]=\"student.branch\" required=\"required\">\n\n      </div>\n    </div>\n\n    <!-- Text input-->\n    <div class=\"form-group\">\n      <label class=\"col-md-4 control-label\" for=\"email\">Email</label>\n      <div class=\"col-md-4\">\n        <input id=\"email\" name=\"email\" type=\"text\" placeholder=\"email\" class=\"form-control input-md\" [(ngModel)]=\"student.email\" required=\"\">\n\n      </div>\n    </div>\n\n    <!-- Text input-->\n    <div class=\"form-group\">\n      <label class=\"col-md-4 control-label\" for=\"add1\">Address</label>\n      <div class=\"col-md-4\">\n        <input id=\"add1\" name=\"add1\" type=\"text\" placeholder=\"\" class=\"form-control input-md\" [(ngModel)]=\"student.address\" required=\"required\">\n\n      </div>\n    </div>\n\n    <!-- Text input-->\n    <div class=\"form-group\">\n      <label class=\"col-md-4 control-label\" for=\"cgpa\">CGPA</label>\n      <div class=\"col-md-4\">\n        <input id=\"cgpa\" name=\"cgpa\" type=\"text\" placeholder=\"CGPA\" class=\"form-control input-md\" [(ngModel)]=\"student.cgpa\" required=\"required\">\n\n      </div>\n    </div>\n\n    <!-- Text input-->\n    <!--<div class=\"form-group\">-->\n      <!--<label class=\"col-md-4 control-label\" for=\"zip\">Zip Code</label>-->\n      <!--<div class=\"col-md-4\">-->\n        <!--<input id=\"zip\" name=\"zip\" type=\"text\" placeholder=\"Zip Code\" class=\"form-control input-md\" required=\"\">-->\n\n      <!--</div>-->\n    <!--</div>-->\n\n    <!--&lt;!&ndash; Text input&ndash;&gt;-->\n    <!--<div class=\"form-group\">-->\n    <!--<label class=\"col-md-4 control-label\" for=\"ctry\">Country</label>-->\n    <!--<div class=\"col-md-4\">-->\n    <!--<input id=\"ctry\" name=\"ctry\" type=\"text\" placeholder=\"Country\" class=\"form-control input-md\" required=\"\">-->\n\n    <!--</div>-->\n    <!--</div>-->\n\n    <!-- Text input-->\n    <div class=\"form-group\">\n      <label class=\"col-md-4 control-label\" for=\"phone\">Phone</label>\n      <div class=\"col-md-4\">\n        <input id=\"phone\" name=\"phone\" type=\"text\" placeholder=\"Phone\" class=\"form-control input-md\" [(ngModel)]=\"student.phone\" required=\"required\">\n\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label class=\"col-md-4 control-label\" for=\"land\">Landline</label>\n      <div class=\"col-md-4\">\n        <input id=\"land\" name=\"land\" type=\"text\" placeholder=\"Phone\" class=\"form-control input-md\" [(ngModel)]=\"student.landline\" required=\"required\">\n\n      </div>\n    </div>\n\n    <!--&lt;!&ndash; Multiple Radios (inline) &ndash;&gt;-->\n    <!--<div class=\"form-group\">-->\n    <!--<label class=\"col-md-4 control-label\" for=\"Training\">Would you like to attend our Networking Reception on September 3, 2015?</label>-->\n    <!--<div class=\"col-md-4\">-->\n    <!--<label class=\"radio-inline\" for=\"Training-0\">-->\n    <!--<input type=\"radio\" name=\"Training\" id=\"Training-0\" value=\"yes\" checked=\"checked\">-->\n    <!--Yes-->\n    <!--</label>-->\n    <!--<label class=\"radio-inline\" for=\"Training-1\">-->\n    <!--<input type=\"radio\" name=\"Training\" id=\"Training-1\" value=\"no\">-->\n    <!--No-->\n    <!--</label>-->\n    <!--</div>-->\n    <!--</div>-->\n\n    <!--&lt;!&ndash; Multiple Radios (inline) &ndash;&gt;-->\n    <!--<div class=\"form-group\">-->\n    <!--<label class=\"col-md-4 control-label\" for=\"Networking_Reception\">Would you like to attend our Technical Product Update Session on September 4, 2015?</label>-->\n    <!--<div class=\"col-md-4\">-->\n    <!--<label class=\"radio-inline\" for=\"Networking_Reception-0\">-->\n    <!--<input type=\"radio\" name=\"Networking_Reception\" id=\"Networking_Reception-0\" value=\"meet_yes\" checked=\"checked\">-->\n    <!--Yes-->\n    <!--</label>-->\n    <!--<label class=\"radio-inline\" for=\"Networking_Reception-1\">-->\n    <!--<input type=\"radio\" name=\"Networking_Reception\" id=\"Networking_Reception-1\" value=\"meet_no\">-->\n    <!--No-->\n    <!--</label>-->\n    <!--</div>-->\n    <!--</div>-->\n\n    <!-- Select Basic -->\n    <!--<div class=\"form-group\">-->\n      <!--<label class=\"col-md-4 control-label\" for=\"selectbasic\">Select Basic</label>-->\n      <!--<div class=\"col-md-4\">-->\n        <!--<select id=\"selectbasic\" name=\"selectbasic\" class=\"form-control input-md\">-->\n          <!--<option>Option one</option>-->\n          <!--<option>Option two</option>-->\n        <!--</select>-->\n      <!--</div>-->\n    <!--</div>-->\n\n\n    <!--&lt;!&ndash; Multiple Radios (inline) &ndash;&gt;-->\n    <!--<div class=\"form-group\">-->\n    <!--<label class=\"col-md-4 control-label\" for=\"Dinner\">Would you like to attend our Networking Dinner on September 4, 2015?</label>-->\n    <!--<div class=\"col-md-4\">-->\n    <!--<label class=\"radio-inline\" for=\"Dinner-0\">-->\n    <!--<input type=\"radio\" name=\"Dinner\" id=\"Dinner-0\" value=\"dinner_yes\" checked=\"checked\">-->\n    <!--Yes-->\n    <!--</label>-->\n    <!--<label class=\"radio-inline\" for=\"Dinner-1\">-->\n    <!--<input type=\"radio\" name=\"Dinner\" id=\"Dinner-1\" value=\"dinner_no\">-->\n    <!--No-->\n    <!--</label>-->\n    <!--</div>-->\n    <!--</div>-->\n\n    <!-- Button -->\n    <div class=\"form-group\">\n      <label class=\"col-md-4 control-label\" for=\"submit\"></label>\n      <div class=\"col-md-4\">\n        <button id=\"submit\" name=\"submit\" class=\"btn btn-primary\">Update Details</button>\n      </div>\n    </div>\n\n  </fieldset>\n</form>\n"

/***/ }),

/***/ "./src/app/add-student/add-student.component.css":
/*!*******************************************************!*\
  !*** ./src/app/add-student/add-student.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1zdHVkZW50L2FkZC1zdHVkZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/add-student/add-student.component.ts":
/*!******************************************************!*\
  !*** ./src/app/add-student/add-student.component.ts ***!
  \******************************************************/
/*! exports provided: AddStudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddStudentComponent", function() { return AddStudentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _student_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../student-service.service */ "./src/app/student-service.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let AddStudentComponent = class AddStudentComponent {
    constructor(studentService, http, router) {
        this.studentService = studentService;
        this.http = http;
        this.router = router;
        this.student = new _app_module__WEBPACK_IMPORTED_MODULE_2__["Studentdetails"]();
    }
    ngOnInit() {
    }
    addStudent(student) {
        // this.studentService.addStudent(student).subscribe(res => {
        const url = 'http://localhost:8080/listStudents/addStudent';
        this.http.post(url, student).subscribe(res => {
            if (res === true) {
                console.log('Student Details Added');
                this.router.navigate(['listStudents']);
            }
            else {
                alert('Student cannot update details');
            }
        });
    }
};
AddStudentComponent.ctorParameters = () => [
    { type: _student_service_service__WEBPACK_IMPORTED_MODULE_3__["StudentServiceService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
AddStudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-student',
        template: __webpack_require__(/*! raw-loader!./add-student.component.html */ "./node_modules/raw-loader/index.js!./src/app/add-student/add-student.component.html"),
        styles: [__webpack_require__(/*! ./add-student.component.css */ "./src/app/add-student/add-student.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_student_service_service__WEBPACK_IMPORTED_MODULE_3__["StudentServiceService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], AddStudentComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { enableTracing: true })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'StudentRecords';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, Login, Studentdetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Studentdetails", function() { return Studentdetails; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _list_students_list_students_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-students/list-students.component */ "./src/app/list-students/list-students.component.ts");
/* harmony import */ var _show_student_detail_show_student_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./show-student-detail/show-student-detail.component */ "./src/app/show-student-detail/show-student-detail.component.ts");
/* harmony import */ var _update_student_update_student_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./update-student/update-student.component */ "./src/app/update-student/update-student.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _add_student_add_student_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./add-student/add-student.component */ "./src/app/add-student/add-student.component.ts");
/* harmony import */ var _delete_student_delete_student_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./delete-student/delete-student.component */ "./src/app/delete-student/delete-student.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _form_validation_form_validation_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./form-validation/form-validation.component */ "./src/app/form-validation/form-validation.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _student_home_page_student_home_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./student-home-page/student-home-page.component */ "./src/app/student-home-page/student-home-page.component.ts");




















const appRoutes = [
    {
        path: 'listStudents/updateStudentDetails',
        component: _update_student_update_student_component__WEBPACK_IMPORTED_MODULE_7__["UpdateStudentComponent"]
    },
    {
        path: 'listStudents/showStudentDetails',
        component: _show_student_detail_show_student_detail_component__WEBPACK_IMPORTED_MODULE_6__["ShowStudentDetailComponent"]
    }, {
        path: 'listStudents',
        component: _list_students_list_students_component__WEBPACK_IMPORTED_MODULE_5__["ListStudentsComponent"]
    }, {
        path: 'listStudents/addStudent',
        component: _add_student_add_student_component__WEBPACK_IMPORTED_MODULE_13__["AddStudentComponent"]
    }, {
        path: 'listStudents/deleteStudent',
        component: _delete_student_delete_student_component__WEBPACK_IMPORTED_MODULE_14__["DeleteStudentComponent"]
    }, {
        path: 'listStudents/logout',
        component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_17__["LogoutComponent"]
    }, {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_18__["RegisterComponent"]
    },
    {
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"]
    }, {
        path: 'studentHomePage',
        component: _student_home_page_student_home_page_component__WEBPACK_IMPORTED_MODULE_19__["StudentHomePageComponent"]
    }
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _list_students_list_students_component__WEBPACK_IMPORTED_MODULE_5__["ListStudentsComponent"],
            _show_student_detail_show_student_detail_component__WEBPACK_IMPORTED_MODULE_6__["ShowStudentDetailComponent"],
            _update_student_update_student_component__WEBPACK_IMPORTED_MODULE_7__["UpdateStudentComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
            _add_student_add_student_component__WEBPACK_IMPORTED_MODULE_13__["AddStudentComponent"],
            _delete_student_delete_student_component__WEBPACK_IMPORTED_MODULE_14__["DeleteStudentComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__["NavbarComponent"],
            _form_validation_form_validation_component__WEBPACK_IMPORTED_MODULE_16__["FormValidationComponent"],
            _logout_logout_component__WEBPACK_IMPORTED_MODULE_17__["LogoutComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_18__["RegisterComponent"],
            _student_home_page_student_home_page_component__WEBPACK_IMPORTED_MODULE_19__["StudentHomePageComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(appRoutes, { enableTracing: true }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);

class Login {
}
class Studentdetails {
}


/***/ }),

/***/ "./src/app/delete-student/delete-student.component.css":
/*!*************************************************************!*\
  !*** ./src/app/delete-student/delete-student.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbGV0ZS1zdHVkZW50L2RlbGV0ZS1zdHVkZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/delete-student/delete-student.component.ts":
/*!************************************************************!*\
  !*** ./src/app/delete-student/delete-student.component.ts ***!
  \************************************************************/
/*! exports provided: DeleteStudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteStudentComponent", function() { return DeleteStudentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DeleteStudentComponent = class DeleteStudentComponent {
    constructor() { }
    ngOnInit() {
    }
};
DeleteStudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-delete-student',
        template: __webpack_require__(/*! raw-loader!./delete-student.component.html */ "./node_modules/raw-loader/index.js!./src/app/delete-student/delete-student.component.html"),
        styles: [__webpack_require__(/*! ./delete-student.component.css */ "./src/app/delete-student/delete-student.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DeleteStudentComponent);



/***/ }),

/***/ "./src/app/form-validation/form-validation.component.css":
/*!***************************************************************!*\
  !*** ./src/app/form-validation/form-validation.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0tdmFsaWRhdGlvbi9mb3JtLXZhbGlkYXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/form-validation/form-validation.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/form-validation/form-validation.component.ts ***!
  \**************************************************************/
/*! exports provided: FormValidationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormValidationComponent", function() { return FormValidationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FormValidationComponent = class FormValidationComponent {
    constructor() { }
    ngOnInit() {
    }
};
FormValidationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-validation',
        template: __webpack_require__(/*! raw-loader!./form-validation.component.html */ "./node_modules/raw-loader/index.js!./src/app/form-validation/form-validation.component.html"),
        styles: [__webpack_require__(/*! ./form-validation.component.css */ "./src/app/form-validation/form-validation.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FormValidationComponent);



/***/ }),

/***/ "./src/app/list-students/list-students.component.css":
/*!***********************************************************!*\
  !*** ./src/app/list-students/list-students.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n}\r\n\r\nh1{\r\n  alignment: center;\r\n  background-color: #5143af;\r\n  size: 20px;\r\n  color: white;\r\n  text-decoration: none;\r\n  text-align: center;\r\n}\r\n\r\nth, td {\r\n  text-align: left;\r\n  padding: 8px;\r\n}\r\n\r\n/*tr:nth-child(even){background-color: #f2f2f2}*/\r\n\r\nth {\r\n  background-color: darkslategray;\r\n  color: white;\r\n}\r\n\r\nbutton {\r\n  background-color: darkslategray; /* Green */\r\n  border: none;\r\n  color: white;\r\n  padding: 6px 12px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 12px;\r\n  margin: 4px 2px; /* Safari */\r\n  transition-duration: 0.4s;\r\n  cursor: pointer;\r\n}\r\n\r\n.button1 {\r\n  background-color: white;\r\n  color: black;\r\n  border: 2px solid darkslategray;\r\n}\r\n\r\n.button1:hover {\r\n  background-color: darkslategray;\r\n  color: white;\r\n}\r\n\r\n/*#5143af*/\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC1zdHVkZW50cy9saXN0LXN0dWRlbnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1YsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBLGdEQUFnRDs7QUFFaEQ7RUFDRSwrQkFBK0I7RUFDL0IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsK0JBQStCLEVBQUUsVUFBVTtFQUMzQyxZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZUFBZSxFQUNvQixXQUFXO0VBQzlDLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsWUFBWTtBQUNkOztBQUNBLFVBQVUiLCJmaWxlIjoic3JjL2FwcC9saXN0LXN0dWRlbnRzL2xpc3Qtc3R1ZGVudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5oMXtcclxuICBhbGlnbm1lbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTE0M2FmO1xyXG4gIHNpemU6IDIwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnRoLCB0ZCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwYWRkaW5nOiA4cHg7XHJcbn1cclxuXHJcbi8qdHI6bnRoLWNoaWxkKGV2ZW4pe2JhY2tncm91bmQtY29sb3I6ICNmMmYyZjJ9Ki9cclxuXHJcbnRoIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2xhdGVncmF5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2xhdGVncmF5OyAvKiBHcmVlbiAqL1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIG1hcmdpbjogNHB4IDJweDtcclxuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7IC8qIFNhZmFyaSAqL1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYnV0dG9uMSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGRhcmtzbGF0ZWdyYXk7XHJcbn1cclxuXHJcbi5idXR0b24xOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2xhdGVncmF5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4vKiM1MTQzYWYqL1xyXG4iXX0= */"

/***/ }),

/***/ "./src/app/list-students/list-students.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/list-students/list-students.component.ts ***!
  \**********************************************************/
/*! exports provided: ListStudentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListStudentsComponent", function() { return ListStudentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _student_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../student-service.service */ "./src/app/student-service.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");

var ListStudentsComponent_1;




let ListStudentsComponent = ListStudentsComponent_1 = class ListStudentsComponent {
    constructor(studService, http, router) {
        this.studService = studService;
        this.http = http;
        this.router = router;
    }
    ngOnInit() {
        this.fetchStudents();
    }
    fetchStudents() {
        this.studService.getStudentList().subscribe((stud) => {
            this.students = stud;
        });
    }
    sendId(id) {
        ListStudentsComponent_1.studentId = id;
    }
    deleteStudent(id) {
        this.studService.deleteStudent(id).subscribe(stud => {
            if (stud === true) {
                console.log('Student Deleted');
                this.ngOnInit();
            }
        });
    }
};
ListStudentsComponent.ctorParameters = () => [
    { type: _student_service_service__WEBPACK_IMPORTED_MODULE_2__["StudentServiceService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ListStudentsComponent = ListStudentsComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-students',
        template: __webpack_require__(/*! raw-loader!./list-students.component.html */ "./node_modules/raw-loader/index.js!./src/app/list-students/list-students.component.html"),
        styles: [__webpack_require__(/*! ./list-students.component.css */ "./src/app/list-students/list-students.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_student_service_service__WEBPACK_IMPORTED_MODULE_2__["StudentServiceService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], ListStudentsComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login_form{\r\n  margin: 0;\r\n  position: absolute;\r\n  top: 60%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, 95%);\r\n          transform: translate(-50%, 95%);\r\n}\r\n\r\n.body{\r\n\r\n  background-image: url(\"student-management-11.png\");\r\n  background-repeat: no-repeat;\r\n  background-position: 50% 25%;\r\n  background-color: darkslategray;\r\n  height: -webkit-fill-available;\r\n}\r\n\r\n.body_div{\r\n  background-color: #b71540;\r\n}\r\n\r\n.right{\r\n  margin-left: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFFVCx1Q0FBK0I7VUFBL0IsK0JBQStCO0FBQ2pDOztBQUVBOztFQUVFLGtEQUFrRDtFQUNsRCw0QkFBNEI7RUFDNUIsNEJBQTRCO0VBQzVCLCtCQUErQjtFQUMvQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luX2Zvcm17XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDYwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDk1JSk7XHJcbn1cclxuXHJcbi5ib2R5e1xyXG5cclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJzdHVkZW50LW1hbmFnZW1lbnQtMTEucG5nXCIpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDI1JTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2xhdGVncmF5O1xyXG4gIGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxufVxyXG5cclxuLmJvZHlfZGl2e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiNzE1NDA7XHJcbn1cclxuXHJcbi5yaWdodHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");

var LoginComponent_1;



let LoginComponent = LoginComponent_1 = class LoginComponent {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.login = {
            username: '',
            password: '',
            name: '',
            email: '',
            phone: '',
            professor: null
        };
        this.loggedIn = true;
    }
    ngOnInit() {
    }
    sendFeedback() {
        const url = 'http://localhost:8080/login';
        this.http.post(url, this.login).subscribe(res => {
            if (res != null && res.professor) {
                console.log('Logged In as professor');
                this.loggedIn = true;
                this.router.navigate(['listStudents']);
            }
            else if (res != null && !res.professor) {
                console.log('Logged In as a Student');
                this.loggedIn = true;
                LoginComponent_1.login1 = res;
                this.router.navigate(['studentHomePage']);
            }
            else {
                this.loggedIn = false;
                console.log('Not Logged in');
            }
        }, err => {
            alert('Error');
        });
    }
    toggleVisible() {
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginComponent.login1 = {
    username: '',
    password: '',
    name: '',
    email: '',
    phone: '',
    professor: null
};
LoginComponent = LoginComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/logout/logout.component.css":
/*!*********************************************!*\
  !*** ./src/app/logout/logout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LogoutComponent = class LogoutComponent {
    constructor() { }
    ngOnInit() {
    }
};
LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-logout',
        template: __webpack_require__(/*! raw-loader!./logout.component.html */ "./node_modules/raw-loader/index.js!./src/app/logout/logout.component.html"),
        styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/logout/logout.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LogoutComponent);



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.colored{*/\r\n  /*position: relative;*/\r\n  /*display: -ms-flexbox;*/\r\n  /*display: flex;*/\r\n  /*-ms-flex-wrap: wrap;*/\r\n  /*flex-wrap: wrap;*/\r\n  /*-ms-flex-align: center;*/\r\n  /*align-items: center;*/\r\n  /*-ms-flex-pack: justify;*/\r\n  /*justify-content: space-between;*/\r\n  /*padding: 0.5rem 1rem;*/\r\n  /*}*/\r\n  /*.colored-expand-sm{-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-pack:start;justify-content:flex-start}*/\r\n  .navul{\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding-left: 0;\r\n  margin-bottom: 0;\r\n  list-style: none;\r\n}\r\n  .colored{background-color:darkslategray!important}\r\n  a.bg-success:focus,a.bg-success:hover,button.bg-success:focus,button.bg-success:hover{background-color: #1c407e !important}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVk7RUFDVixzQkFBc0I7RUFDdEIsd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQix1QkFBdUI7RUFDdkIsMEJBQTBCO0VBQzFCLGtDQUFrQztFQUNsQyx3QkFBd0I7RUFDMUIsSUFBSTtFQUNKLG1IQUFtSDtFQUNuSDtFQUVFLGFBQWE7RUFFYixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7RUFFQSxTQUFTLHdDQUF3QztFQUFDLHNGQUFzRixvQ0FBb0MiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi5jb2xvcmVkeyovXHJcbiAgLypwb3NpdGlvbjogcmVsYXRpdmU7Ki9cclxuICAvKmRpc3BsYXk6IC1tcy1mbGV4Ym94OyovXHJcbiAgLypkaXNwbGF5OiBmbGV4OyovXHJcbiAgLyotbXMtZmxleC13cmFwOiB3cmFwOyovXHJcbiAgLypmbGV4LXdyYXA6IHdyYXA7Ki9cclxuICAvKi1tcy1mbGV4LWFsaWduOiBjZW50ZXI7Ki9cclxuICAvKmFsaWduLWl0ZW1zOiBjZW50ZXI7Ki9cclxuICAvKi1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7Ki9cclxuICAvKmp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsqL1xyXG4gIC8qcGFkZGluZzogMC41cmVtIDFyZW07Ki9cclxuLyp9Ki9cclxuLyouY29sb3JlZC1leHBhbmQtc217LW1zLWZsZXgtZmxvdzpyb3cgbm93cmFwO2ZsZXgtZmxvdzpyb3cgbm93cmFwOy1tcy1mbGV4LXBhY2s6c3RhcnQ7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnR9Ki9cclxuLm5hdnVse1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4uY29sb3JlZHtiYWNrZ3JvdW5kLWNvbG9yOmRhcmtzbGF0ZWdyYXkhaW1wb3J0YW50fWEuYmctc3VjY2Vzczpmb2N1cyxhLmJnLXN1Y2Nlc3M6aG92ZXIsYnV0dG9uLmJnLXN1Y2Nlc3M6Zm9jdXMsYnV0dG9uLmJnLXN1Y2Nlc3M6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjogIzFjNDA3ZSAhaW1wb3J0YW50fVxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let NavbarComponent = class NavbarComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    logOut() {
        this.router.navigate(['']);
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], NavbarComponent);



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#parent{\r\n  margin: 0 auto;\r\n  margin-top: 100px;\r\n}\r\n#child{\r\n  width: 350px;\r\n}\r\nbutton {\r\n  background-color: darkslategray; /* Green */\r\n  border: none;\r\n  color: white;\r\n  padding: 6px 12px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 12px;\r\n  margin: 4px 2px; /* Safari */\r\n  transition-duration: 0.4s;\r\n  cursor: pointer;\r\n}\r\n.button1 {\r\n  background-color: white;\r\n  color: black;\r\n  border: 2px solid darkslategray;\r\n}\r\n.button1:hover {\r\n  background-color: darkslategray;\r\n  color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsK0JBQStCLEVBQUUsVUFBVTtFQUMzQyxZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZUFBZSxFQUNvQixXQUFXO0VBQzlDLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCO0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLCtCQUErQjtBQUNqQztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcGFyZW50e1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xyXG59XHJcbiNjaGlsZHtcclxuICB3aWR0aDogMzUwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NsYXRlZ3JheTsgLyogR3JlZW4gKi9cclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBtYXJnaW46IDRweCAycHg7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzOyAvKiBTYWZhcmkgKi9cclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJ1dHRvbjEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBib3JkZXI6IDJweCBzb2xpZCBkYXJrc2xhdGVncmF5O1xyXG59XHJcblxyXG4uYnV0dG9uMTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NsYXRlZ3JheTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let RegisterComponent = class RegisterComponent {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.validName = true;
        this.validEmail = true;
        this.validContact = true;
        this.validUserName = true;
        this.validPassword = true;
        this.validConfirmPass = true;
        this.verification = false;
        this.availableUser = true;
        this.registerUser = {
            name: '',
            username: '',
            password: '',
            phone: '',
            email: '',
            professor: null
        };
    }
    ngOnInit() {
    }
    logOut() {
        if (null != sessionStorage.getItem('userData')) {
            return false;
        }
        else {
            return true;
        }
    }
    register() {
        this.validName = this.validateName();
        this.validEmail = this.validateEmail();
        this.validContact = this.validateContact();
        this.validUserName = this.validateUsername();
        // this.validPassword = this.validatePassword();
        this.validConfirmPass = this.validateConfirmPassword();
        // this.availableUser = this.userNameAvailability();
        if (!this.validName || !this.validEmail || !this.validContact || !this.validUserName ||
            !this.validPassword || !this.validConfirmPass || !this.availableUser) {
            this.verification = false;
            return;
        }
        else {
            const url = 'http://localhost:8080/register';
            this.http.post(url, this.registerUser).subscribe(res => {
                if (res) {
                    this.verification = true;
                    this.router.navigate(['']);
                }
                else {
                    // this.availableUser = false;
                    // document.documentElement.scrollTop = 0;
                    return;
                }
            });
        }
    }
    // userNameAvailability(): boolean {
    //   const url = 'http://localhost:8080/usernameAvailability';
    //   this.http.post<boolean>(url, this.registerUser).subscribe(
    //     res => {
    //       if (!res) {
    //         // document.documentElement.scrollTop = 0;
    //         return false;
    //       } else {
    //         return true;
    //       }
    //     }
    //   );
    //   return true;
    // }
    validateName() {
        if (!this.registerUser.name.match('^[a-zA-Z]+(\\s[a-zA-Z]+)*$')) {
            return false;
        }
        else {
            // this.validName = true;
            return true;
        }
    }
    validateEmail() {
        if (!this.registerUser.email.match('^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$')) {
            return false;
        }
        else {
            // this.validEmail = true;
            return true;
        }
    }
    validateContact() {
        if (!this.registerUser.phone.match('^[6-9]\\d{9}$')) {
            return false;
        }
        else {
            // this.validContact = true;
            return true;
        }
    }
    validateUsername() {
        return true;
    }
    validatePassword() {
        if (!this.registerUser.password.match('^((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,20})$')) {
            return false;
        }
        else {
            // this.validPassword = true;
            return true;
        }
    }
    validateConfirmPassword() {
        if (!(this.registerUser.password === this.confirmPassword)) {
            return false;
        }
        else {
            // this.validConfirmPass = true;
            return true;
        }
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html"),
        styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], RegisterComponent);



/***/ }),

/***/ "./src/app/show-student-detail/show-student-detail.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/show-student-detail/show-student-detail.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\r\n  background-color: darkslategray; /* Green */\r\n  border: none;\r\n  color: white;\r\n  padding: 6px 12px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 12px;\r\n  margin: 4px 2px; /* Safari */\r\n  transition-duration: 0.4s;\r\n  cursor: pointer;\r\n}\r\n\r\n.button1 {\r\n  background-color: white;\r\n  color: black;\r\n  border: 2px solid darkslategray;\r\n}\r\n\r\n.button1:hover {\r\n  background-color: darkslategray;\r\n  color: white;\r\n}\r\n\r\ntable {\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n}\r\n\r\nth, td {\r\n  text-align: left;\r\n  padding: 8px;\r\n}\r\n\r\n/*tr:nth-child(even){background-color: #f2f2f2}*/\r\n\r\nth {\r\n  background-color: darkslategray;\r\n  color: white;\r\n}\r\n\r\n.card {\r\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n  transition: 0.3s;\r\n  width: 35%;\r\n  border-radius: 5px;\r\n  background-color: lightgray;\r\n}\r\n\r\n.card:hover {\r\n  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\r\n}\r\n\r\nimg {\r\n  border-radius: 5px 5px 0 0;\r\n}\r\n\r\n.container {\r\n  padding: 2px 16px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvdy1zdHVkZW50LWRldGFpbC9zaG93LXN0dWRlbnQtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBK0IsRUFBRSxVQUFVO0VBQzNDLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixlQUFlLEVBQ29CLFdBQVc7RUFDOUMseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztBQUNiOztBQUdBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQSxnREFBZ0Q7O0FBRWhEO0VBQ0UsK0JBQStCO0VBQy9CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHVDQUF1QztFQUN2QyxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSx3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9zaG93LXN0dWRlbnQtZGV0YWlsL3Nob3ctc3R1ZGVudC1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NsYXRlZ3JheTsgLyogR3JlZW4gKi9cclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBtYXJnaW46IDRweCAycHg7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzOyAvKiBTYWZhcmkgKi9cclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJ1dHRvbjEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBib3JkZXI6IDJweCBzb2xpZCBkYXJrc2xhdGVncmF5O1xyXG59XHJcblxyXG4uYnV0dG9uMTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NsYXRlZ3JheTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxudGgsIHRkIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBhZGRpbmc6IDhweDtcclxufVxyXG5cclxuLyp0cjpudGgtY2hpbGQoZXZlbil7YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMn0qL1xyXG5cclxudGgge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtzbGF0ZWdyYXk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpO1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgd2lkdGg6IDM1JTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG59XHJcblxyXG4uY2FyZDpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwwLDAsMC4yKTtcclxufVxyXG5cclxuaW1nIHtcclxuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMnB4IDE2cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/show-student-detail/show-student-detail.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/show-student-detail/show-student-detail.component.ts ***!
  \**********************************************************************/
/*! exports provided: ShowStudentDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowStudentDetailComponent", function() { return ShowStudentDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _student_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../student-service.service */ "./src/app/student-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _list_students_list_students_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../list-students/list-students.component */ "./src/app/list-students/list-students.component.ts");






let ShowStudentDetailComponent = class ShowStudentDetailComponent {
    constructor(http, StudentService, router) {
        this.http = http;
        this.StudentService = StudentService;
        this.router = router;
    }
    ngOnInit() {
        this.fetchStudent();
    }
    fetchStudent() {
        this.StudentService.getStudent(_list_students_list_students_component__WEBPACK_IMPORTED_MODULE_5__["ListStudentsComponent"].studentId).subscribe((res) => {
            this.students = res;
        });
    }
};
ShowStudentDetailComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _student_service_service__WEBPACK_IMPORTED_MODULE_3__["StudentServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ShowStudentDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-show-student-detail',
        template: __webpack_require__(/*! raw-loader!./show-student-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/show-student-detail/show-student-detail.component.html"),
        styles: [__webpack_require__(/*! ./show-student-detail.component.css */ "./src/app/show-student-detail/show-student-detail.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _student_service_service__WEBPACK_IMPORTED_MODULE_3__["StudentServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], ShowStudentDetailComponent);



/***/ }),

/***/ "./src/app/student-home-page/student-home-page.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/student-home-page/student-home-page.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\r\n  background-color: darkslategray; /* Green */\r\n  border: none;\r\n  color: white;\r\n  padding: 6px 12px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 12px;\r\n  margin: 4px 2px; /* Safari */\r\n  transition-duration: 0.4s;\r\n  cursor: pointer;\r\n}\r\n\r\n.button1 {\r\n  background-color: white;\r\n  color: black;\r\n  border: 2px solid darkslategray;\r\n}\r\n\r\n.button1:hover {\r\n  background-color: darkslategray;\r\n  color: white;\r\n}\r\n\r\ntable {\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n}\r\n\r\nth, td {\r\n  text-align: left;\r\n  padding: 8px;\r\n}\r\n\r\n/*tr:nth-child(even){background-color: #f2f2f2}*/\r\n\r\nth {\r\n  background-color: darkslategray;\r\n  color: white;\r\n}\r\n\r\n.card {\r\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n  transition: 0.3s;\r\n  width: 35%;\r\n  border-radius: 5px;\r\n  background-color: lightgray;\r\n}\r\n\r\n.card:hover {\r\n  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\r\n}\r\n\r\nimg {\r\n  border-radius: 5px 5px 0 0;\r\n}\r\n\r\n.container {\r\n  padding: 2px 16px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC1ob21lLXBhZ2Uvc3R1ZGVudC1ob21lLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUErQixFQUFFLFVBQVU7RUFDM0MsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGVBQWUsRUFDb0IsV0FBVztFQUM5Qyx5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7O0FBR0E7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBLGdEQUFnRDs7QUFFaEQ7RUFDRSwrQkFBK0I7RUFDL0IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUNBQXVDO0VBQ3ZDLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQtaG9tZS1wYWdlL3N0dWRlbnQtaG9tZS1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtzbGF0ZWdyYXk7IC8qIEdyZWVuICovXHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiA2cHggMTJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbWFyZ2luOiA0cHggMnB4O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40czsgLyogU2FmYXJpICovXHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5idXR0b24xIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyOiAycHggc29saWQgZGFya3NsYXRlZ3JheTtcclxufVxyXG5cclxuLmJ1dHRvbjE6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtzbGF0ZWdyYXk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbnRoLCB0ZCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwYWRkaW5nOiA4cHg7XHJcbn1cclxuXHJcbi8qdHI6bnRoLWNoaWxkKGV2ZW4pe2JhY2tncm91bmQtY29sb3I6ICNmMmYyZjJ9Ki9cclxuXHJcbnRoIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2xhdGVncmF5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKTtcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gIHdpZHRoOiAzNSU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxufVxyXG5cclxuLmNhcmQ6aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsMCwwLDAuMik7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDJweCAxNnB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/student-home-page/student-home-page.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/student-home-page/student-home-page.component.ts ***!
  \******************************************************************/
/*! exports provided: StudentHomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentHomePageComponent", function() { return StudentHomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");



let StudentHomePageComponent = class StudentHomePageComponent {
    constructor() {
        // login: Login = {
        //   username: '',
        //   password: '',
        //   name: '',
        //   email: '',
        //   phone: '',
        //   professor: null
        // };
        this.student = _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"].login1;
    }
    ngOnInit() {
    }
};
StudentHomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-student-home-page',
        template: __webpack_require__(/*! raw-loader!./student-home-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/student-home-page/student-home-page.component.html"),
        styles: [__webpack_require__(/*! ./student-home-page.component.css */ "./src/app/student-home-page/student-home-page.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], StudentHomePageComponent);



/***/ }),

/***/ "./src/app/student-service.service.ts":
/*!********************************************!*\
  !*** ./src/app/student-service.service.ts ***!
  \********************************************/
/*! exports provided: StudentServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentServiceService", function() { return StudentServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let StudentServiceService = class StudentServiceService {
    // students: Student[] = STUDENTS;
    constructor(http) {
        this.http = http;
    }
    getStudentList() {
        const url = 'http://localhost:8080/listStudents';
        return this.http.get(url);
    }
    getStudent(id) {
        const url = 'http://localhost:8080/listStudents/showStudentDetails/' + id;
        return this.http.get(url);
    }
    addStudent(student) {
        const url = 'http://localhost:8080/listStudents/addStudent';
        return this.http.post(url, student);
    }
    deleteStudent(id) {
        const url = 'http://localhost:8080/listStudents/deleteStudent/' + id;
        return this.http.get(url);
    }
};
StudentServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
StudentServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], StudentServiceService);



/***/ }),

/***/ "./src/app/update-student/update-student.component.css":
/*!*************************************************************!*\
  !*** ./src/app/update-student/update-student.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZS1zdHVkZW50L3VwZGF0ZS1zdHVkZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/update-student/update-student.component.ts":
/*!************************************************************!*\
  !*** ./src/app/update-student/update-student.component.ts ***!
  \************************************************************/
/*! exports provided: UpdateStudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStudentComponent", function() { return UpdateStudentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _student_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../student-service.service */ "./src/app/student-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _list_students_list_students_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../list-students/list-students.component */ "./src/app/list-students/list-students.component.ts");







let UpdateStudentComponent = class UpdateStudentComponent {
    constructor(http, studentService, router) {
        this.http = http;
        this.studentService = studentService;
        this.router = router;
        this.student = new _app_module__WEBPACK_IMPORTED_MODULE_2__["Studentdetails"]();
    }
    ngOnInit() {
        this.fetchStudents();
    }
    fetchStudents() {
        this.studentService.getStudent(_list_students_list_students_component__WEBPACK_IMPORTED_MODULE_6__["ListStudentsComponent"].studentId).subscribe(res => {
            this.student = res;
            console.log('Got Student Details back');
        });
    }
    updateStudent(student) {
        this.studentService.addStudent(student).subscribe(res => {
            if (res === true) {
                console.log('Student Details Updated');
                this.router.navigate(['listStudents']);
            }
            else {
                alert('Student cannot update details');
            }
        });
    }
};
UpdateStudentComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _student_service_service__WEBPACK_IMPORTED_MODULE_4__["StudentServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
UpdateStudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-student',
        template: __webpack_require__(/*! raw-loader!./update-student.component.html */ "./node_modules/raw-loader/index.js!./src/app/update-student/update-student.component.html"),
        styles: [__webpack_require__(/*! ./update-student.component.css */ "./src/app/update-student/update-student.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _student_service_service__WEBPACK_IMPORTED_MODULE_4__["StudentServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], UpdateStudentComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\AngularProjects\Managment1\studentPortal-fron\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map