import noteActions from './note-actions.cmp.js'
import noteEdit from './note-edit.cmp.js'
export default {
    props: ['note'],

    template: `

    <section class= "note-text" 
    :style="{'background-color': note.styles.backgroundColor }">
        <button class="delete-cmp" @click="emitRemove(note.id)">X</button>
        <pre>{{note.info.txt}}</pre>    
        
        <note-actions :note="note" ></note-actions>
        <note-edit :note="note" v-if="note.isEdit"></note-edit>
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
        noteActions,
        noteEdit
    }
}
