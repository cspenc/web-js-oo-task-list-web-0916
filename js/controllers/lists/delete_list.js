function deleteList(list_id) {
	stores.push(Object.assign({},
		{
			lists: store().lists.filter((list) => { return list.id !== list_id }),
			tasks: store().tasks.filter((task) => { return task.list_id !== list_id})
		}
	))

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