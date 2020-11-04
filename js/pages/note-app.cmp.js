import noteList from '../apps/note/note-cmp/note-list.cmp.js'
import noteText from '../apps/note/note-cmp/note-text.cmp.js'
import noteImg from '../apps/note/note-cmp/note-img.cmp.js'
import noteToDo from '../apps/note/note-cmp/note-to-do.cmp.js'
import { noteService } from '../apps/note/note-service/note-service.js'

export default {
    template: `
    <section v-if="notes" >
        <component :is= "note.type" v-for="note in notes"  :key="notes.id"
        :info= "note.type" 
        ></component>


         <input placeholder = "what is on Your mind" />
         <button> Text </button>
         <button> Image</button>
         <button> Video</button>
        <note-list :notes="notesToShow"></note-list>
        {{notes}}
    </section>
    `,
    data() {
        return {
            notes: null,
            filterBy: null,
        }
    },
    methods:{
        selectedCmp(){
            return 'input'
        },
        
    },
    computed: {
        notesToShow() {
            if (!this.filterBy) return this.notes;
        },
    },
    created() {
        // console.log('created');
        noteService.getNotes()
            .then(notes => this.notes = notes)
        // .then(console.log('this notes', this.notes))
    },

    components: {
        noteList,
        noteText,
        noteImg,
        noteToDo
    }

}