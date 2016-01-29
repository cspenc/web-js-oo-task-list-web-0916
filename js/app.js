
$(function() { // on document ready
	$('#add_list').on('submit', function(){
		event.preventDefault()
		createList()
	})

	$('#lists').on('click', '.destroy-list', function(){
		event.preventDefault()
		deleteList($(this).data('id'))
	})

	$('#add_task').on('submit', function(){
		event.preventDefault()
		createTask()
	})

	$('#lists').on('click', '.destroy-task', function(){
		event.preventDefault()
		deleteTask($(this).data('id'))
	})

});
  // listController = new ListsController();
  // listController.init();
  // tasksController = new TasksController();
  // tasksController.init();