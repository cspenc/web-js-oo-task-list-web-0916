function readFromStore(){
	$('#lists').empty()
	store().lists.forEach((list) => {
		$('#lists').append(`<div class='list'><h2><button class='destroy-list' data-id='${list.id}'>x</button> ${list.title}</h2><ul id='list-${list.id}'></ul></div>`)
	})

	store().tasks.forEach((task) => {
		$(`#list-${task.list_id}`).append(`<li><button class='destroy-task' data-id='${task.id}'>x</button>${task.description}, ${task.priority}`)
	})

	$('#select_list').empty()
	store().lists.forEach((list) => {
		$('#select_list').append(`<option value='${list.id}'>${list.title}</option>`)
	})
}