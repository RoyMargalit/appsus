import noteActions from '../note-cmp/note-actions.cmp.js'
export default {
    props:['note'],
    template:`

    <section class= "note-video" :style="{'background-color': note.styles.backgroundColor }">
        <button class="delete-cmp"  @click="emitRemove(note.id)">X</button>
        <!-- <h2>note Video!!!</h2>    -->
        <div class="video">
            <!-- <p>{{note.info.url}}</p>     -->
            <iframe width="500" height="315" :src="note.info.url" frameborder="0"> </iframe>
        </div>
        <note-actions :note="note" ></note-actions>
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
        noteActions
    }
}