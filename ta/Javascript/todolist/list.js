window.setTimeout(function() {

var Todos = [];

var input = prompt("Co chcialbys zrobic?");

while(input !== "quit") {
	if(input === "list") {
		ListTodo();
	}
	else if(input === "new") {
		addTodo()
	}
	else if(input === "delete") {
		deleteTodo()
	}
	input = prompt("Co chcialbys zrobic?");
}
console.log("ok");
}, 100);

function listTodo(){
	console.log("********")
	Todos.forEach(function(todo, i){
		console.log(i + ": " + todo);

	});
	console.log("********")
}

function addTodo() {
		var newTodos = prompt("Co chcialbys dodac do zrobienia?");
	Todos.push(newTodos)
	console.log("Added Todo")
}

function deleteTodo() {
		var index = prompt("Co chcialbys usunac?");
	Todos.splice(index, 1);
	console.log("Deleted Todo")
}