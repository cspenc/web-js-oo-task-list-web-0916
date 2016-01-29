function createTask(){
	let list_id = $("[name='select_list']").val()
	let description = $("[name='task_description']").val()
	let priority = $("[name='task_priority']").val()
	new Task(description, priority, list_id)

	readFromStore()
}