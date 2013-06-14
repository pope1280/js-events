$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());
  var index = 0
  
  // Bind functions which add, remove, and complete todos to the appropriate elements
  function bindEvents() {    

    $(".add").on("click", function() {
      addTodo();
    });
    
    $(".todo_list").on("click", ".delete", function(){
      removeTodo(this);
    });

  }

  //Create functions to add, remove and complete todos
  function addTodo() {
    index++;

    var todoName = $(".todo").val();
    var todo = buildTodo(todoName);
    $(".todo_list").append(todo);
  }

  function removeTodo(todo) {
    $(todo).parent().remove();
  }


  

  function buildTodo(todoName) {
    // Creates an jQueryDOMElement from the todoTemplate.
    var $todo = $(todoTemplate);
    // Modifies it's text to use the passed in todoName.
    $todo.find('h2').text(todoName);
    //BP: adds an id to the element (not sure if I need this) 
    // $todo.attr("id", "todo" + index);
    // Returns the jQueryDOMElement to be used elsewhere.
    return $todo;
  }
  

  bindEvents();
});
