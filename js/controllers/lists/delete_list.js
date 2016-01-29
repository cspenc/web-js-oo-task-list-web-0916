function deleteList(list_id) {
	stores.push(Object.assign({},
		{
			lists: store().lists.filter((list) => { return list.id !== list_id }),
			tasks: store().tasks.filter((task) => { return task.list_id !== list_id})
		}
	))

	readFromStore()
}