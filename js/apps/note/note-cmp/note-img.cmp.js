import noteActions from '../note-cmp/note-actions.cmp.js' 




export default {
    props:['note'],
    template:`
    <section class="note-img" :style="{'background-color': note.styles.backgroundColor }">
    <button class="delete-cmp" @click="emitRemove(note.id)">X</button>
            <img :src="note.info.url" alt="" />
            <note-actions :note="note" ></note-actions>

    </section>
    
    `,
    methods:{
        emitRemove(noteId) {
            // console.log('note id', noteId);
            this.$emit('remove', noteId)
        },
    },
    components:{
        noteActions

    }
}
