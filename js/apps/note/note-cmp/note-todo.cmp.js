

export default {
    props: ['note'],
    template: `
    <section class="note-todo">
    <button class="delete-cmp" @click="emitRemove(note.id)" >X</button>
        <h2>To Do</h2>
            <ul>
				<li v-for="(item,idx) in note.info.todos">
                    <label>   
                        <input type="checkbox" @change="checkboxClick"/>    
                            {{item.txt}}
                    </label>
				</li>
			</ul>
    </section>
    
    `,
    methods: {
        emitRemove(noteId) {
            console.log('note id', noteId);
            // console.log('OK', carId);
            this.$emit('remove', noteId)
        },
        checkboxClick(){
            this.$emit(change)

        }
    }
}
