import notePreview from './note-preview.cmp.js'


export default {
    props:['notes'],
    template:`
    <section class="note-list">
        <h2>note list</h2>
        <ul>
            <li v-for="currNote in notes " :key="currNote.id">
                <note-preview :note="currNote"></note-preview>
                <button @click="emitRemove(currNote.id)">x</button>
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
    },

    components:{
        notePreview,
    }
    
}