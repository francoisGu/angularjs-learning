/*
 Author: Frank Gu
 Date: 19/09/2016
 Description: this is a simple front end app using to learn AngularJs 
*/

var app = angular.module('myapp', []);

// var myFunction = function($scope) {
// 	$scope.message = "welcome to AngularJS Controller"
// }
// app.controller('firstController', myFunction);

app.controller('demoController', function($scope){
	$scope.message = "Welcome to AngularJS Controller"	
	$scope.employees = [
		// This is a js object
		{firstName: "Ddd", lastName: "Aaa", gender: "F", salary: 50000},
		{firstName: "Ccc", lastName: "Bbb", gender: "M", salary: 55000},
		{firstName: "Vvv", lastName: "Nnn", gender: "M", salary: 50000},
		{firstName: "Eee", lastName: "Jjj", gender: "F", salary: 60000}
	];
})