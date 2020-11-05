export default {
    props:['note'],
    template:`

    <section class= "note-video">
        <button class="delete-cmp"  @click="emitRemove(note.id)">X</button>
        <!-- <h2>note Video!!!</h2>    -->
        <div class="video">
            <!-- <p>{{note.info.url}}</p>     -->
            <iframe width="500" height="315" :src="note.info.url" frameborder="0"> </iframe>
        </div>
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