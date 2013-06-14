$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());


  // Bind functions which add, remove, and complete todos to the appropriate elements
  function bindEvents() {   

    $(".add").on("click", function() {
      addTodo();
    });

    $(".todo_list").on("click", ".delete", function(){
      removeTodo(this);
    });

    $(".todo_list").on("click", ".complete", function(){
      completeTodo(this);
    });
  }

  //Create functions to add, remove and complete todos
  function addTodo() {
    var todoName = $(".todo").val();
    $(".todo_list").append(buildTodo(todoName));
  }

  function removeTodo(todo) {
    $(todo).closest("div").remove();
  }

  function completeTodo(todo) {
    $(todo).closest("div").find('h2').css("text-decoration", "line-through");
  }


  function buildTodo(todoName) {
    // Creates an jQueryDOMElement from the todoTemplate.
    var $todo = $(todoTemplate);
    // Modifies it's text to use the passed in todoName.
    $todo.find('h2').text(todoName);
    // Returns the jQueryDOMElement to be used elsewhere.
    return $todo;
  }


  bindEvents();
});
