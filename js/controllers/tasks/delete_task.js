function deleteTask(task_id){
	stores.push(Object.assign({},
		{
			lists: store().lists,
			tasks: store().tasks.filter((task) => { return task.id !== task_id})
		}
	))

	readFromStore()
}