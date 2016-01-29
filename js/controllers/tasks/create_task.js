function createTask(){
	let list_id = $("[name='select_list']").val()
	let description = $("[name='task_description']").val()
	let priority = $("[name='task_priority']").val()
	let task = new Task(description, priority, list_id)

	$('#lists').empty()
	store().lists.forEach((list) => {
		$('#lists').append(`<div class='list'><h2><button class='destroy-list' data-id='${list.id}'>x</button> ${list.title}</h2><ul id='list-${list.id}'></ul></div>`)
	})

	$(`#list-${task.list_id}`).empty()
	store().tasks.forEach((task) => {
		$(`#list-${task.list_id}`).append(`<li><button class='destroy-task' data-id='${task.id}'>x</button>${task.description}, ${task.priority}`)
	})


}