'use strict';

const Task = (() => {
	var id = 0

	return class {
		constructor(description, priority, list_id){
			this.description = description
			this.priority = priority
			this.list_id = list_id
			this.save()
		}

		save(){
			this.id = ++id
			stores.push(Object.assign({},
				{lists: store().lists, tasks: [...store().tasks, this]}))
		}

		list(){
			return List.all().find((list) => {return this.list_id === list.id})
		}

		static all(){
			return store().tasks
		}
	}

})()