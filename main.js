var app = angular.module('TodoApp', [])

app.controller("TodoCtrl", function($scope){
	$scope.title= "Welcome to your Todo App";

	$scope.todos = [
		{name: "Work On Angular", complete:"incomplete"},
		{name: "Read a Chapter of a Book", complete:"incomplete"},
		{name: "Sleep", complete:"complete"}
		];
	$scope.killTodo=function(todo){
		var todoIndex=$scope.todos.indexOf(todo);

		if(todoIndex>=0){
			$scope.todos.splice(todoIndex, 1)
		}
	}
})


app.controller("PastaCtrl", function($scope){
	$scope.pasta= "I love carbs";
	$scope.foods="";
})