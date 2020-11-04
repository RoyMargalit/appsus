import noteList from '../apps/note/note-cmp/note-list.cmp.js'
import noteText from '../apps/note/note-cmp/note-text.cmp.js'
import noteImg from '../apps/note/note-cmp/note-img.cmp.js'
import noteToDo from '../apps/note/note-cmp/note-to-do.cmp.js'
import noteAdd from '../apps/note/note-cmp/note-add.cmp.js'
import { noteService } from '../apps/note/note-service/note-service.js'

export default {
    name: 'note-app',
    template: `
    <section v-if="notes" >
            <!-- <component  :is= "cmp" >{{notes}}</component> -->
            <note-add :types="types"></note-add>

         <!-- <input v-model="noteToEdit.title" placeholder = "what is on Your mind" /> -->
         <!-- {{noteToEdit.title}} -->
         
         <!-- <button @click="chooseTodo"> Save</button> -->
        <!-- <note-list :notes="notesToShow"></note-list> -->
    </section>
    `,
    data() {
        return {
            types:{
                text:{field: 'text',placeholder:'keep your ideas!'},
                image:{field: 'url',placeholder:'keep your images!'},
                toDo:{field: 'text',placeholder:'What to do next!'},
            },
            cmp:null,
            notes: null,
            filterBy: null,
            type:null,
            isText:false,
            noteToEdit:null,
        }
    },
    methods:{
        selectedCmp(){
            return 'input'
        },
        getType(){
            return this.type
        },
        
        setVal(ev){
            this.notes.info.txt= val
        },
        chooseText(){
            this.cmp='note-text'
            console.log(this.cmp)
        },
        chooseImage(){
            this.cmp='note-img'
            console.log(this.cmp)
        },
        chooseTodo(){
            this.cmp='note-to-do'
            console.log(this.cmp)
        },
    },
    computed: {
        notesToShow() {
            if (!this.filterBy) return this.notes;
        },
        noteType(idx){
            console.log(this.notes[idx].type);
            return this.note.type='text'
        },
        
       
    },
    created() {
        // console.log('created');
        noteService.getNotes()
            .then(notes => this.notes = notes)
        // .then(console.log('this notes', this.notes))
        this.noteToEdit=noteService.getEmptyNote()
            .then(note=>this.noteToEdit=note)
    },

    components: {
        noteList,
        noteText,
        noteImg,
        noteToDo,
        noteAdd
    }

}