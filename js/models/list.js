'use strict';

const List = (() => {
	var id = 0

	return class {
		constructor(title){
			this.title = title
			this.save()
		}

		save(){
			this.id = ++id
			stores.push(Object.assign({},
				{lists: [...store().lists, this], tasks: store().tasks}))
		}

		tasks(){
			return Task.all().filter((task) => {return this.id === task.list_id})
		}

		static all(){
			return store().lists
		}
	}

})()

