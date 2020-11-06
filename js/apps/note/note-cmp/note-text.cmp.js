import noteActions from './note-actions.cmp.js'
export default {
    props: ['note'],

    template: `

    <section class= "note-text" 
    :style="{'background-color': note.styles.backgroundColor }">
        <button class="delete-cmp" @click="emitRemove(note.id)">X</button>
        <pre>{{note.info.txt}}</pre>    
        
        <note-actions :note="note" ></note-actions>
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
    },
    components:{
        noteActions
    }
}
