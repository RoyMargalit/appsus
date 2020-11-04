import noteList from '../apps/note/note-cmp/note-list.cmp.js'
import {noteService} from '../apps/note/note-service/note-service.js'

export default {
    template:`
    <section>
        <h2>Note app</h2>
            <note-list :notes="notesToShow"></note-list>
    </section>
    `,
    data(){
        return{
            notes:null,
            filterBy:null,
        }
    },
    computed: {
        notesToShow() {
            if (!this.filterBy) return this.notes;
        },
    },
    created() {
        console.log('created');
        noteService.getNotes()
            .then(notes => this.notes = notes)
            // .then(console.log('this notes', this.notes))
    },

    components:{
        noteList,
    }

}