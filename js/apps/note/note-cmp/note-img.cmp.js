



export default {
    props:['note'],
    template:`
    <section class="note-img">
    <button class="delete-cmp" @click="emitRemove(note.id)">X</button>
        <h2>note IMG</h2>
        	<img :src="note.info.url" alt="" />

    </section>
    
    `,
    methods:{
        emitRemove(noteId) {
            // console.log('note id', noteId);
            this.$emit('remove', noteId)
        },
    }
}
