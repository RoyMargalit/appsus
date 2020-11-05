
export default {
    props: ['note'],
    template: `

    <section class= "note-text">
        <button class="delete-cmp" @click="emitRemove(note.id)">X</button>
        <pre>{{note.info.txt}}</pre>    
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
