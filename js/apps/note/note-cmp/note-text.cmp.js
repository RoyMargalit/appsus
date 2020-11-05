
export default {
    props: ['note'],
    template: `

    <section class= "note-text">
        <button class="delete-cmp" @click="emitRemove(note.id)">X</button>
        <h2>note TEXT!!!</h2>   
        <p>{{note.info.txt}}</p>    
    </section>
    
    `,
    data() {
        return {
            // info: this.info,
        }
    },
    methods: {
        emitRemove(noteId) {
            console.log('note id', noteId);
            this.$emit('remove', noteId)
        },
    }
}
