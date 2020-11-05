

export default {
    props:['note'],
    template:`
    <section class="note-todo">
    <button class="delete-cmp" @click="emitRemove(note.id)" >X</button>
        <h2>To Do</h2>
            <ul>
				<li v-for="item in note.info.todos">
						<p>{{item.txt}}</p>
				</li>
			</ul>
    </section>
    
    `,
    methods:{
        emitRemove(noteId) {
            console.log('note id', noteId);
            // console.log('OK', carId);
            this.$emit('remove', noteId)
        },
    }
}
