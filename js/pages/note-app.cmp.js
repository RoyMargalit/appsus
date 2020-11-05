import noteList from '../apps/note/note-cmp/note-list.cmp.js'
import noteText from '../apps/note/note-cmp/note-text.cmp.js'
import noteImg from '../apps/note/note-cmp/note-img.cmp.js'
import noteToDo from '../apps/note/note-cmp/note-todo.cmp.js'
import noteAdd from '../apps/note/note-cmp/note-add.cmp.js'
import noteVideo from '../apps/note/note-cmp/note-video.cmp.js'
import { noteService } from '../apps/note/note-service/note-service.js'

export default {
    name: 'note-app',
    template: `
    <section v-if="notes" >
        <note-add :types="types" @add="addNote"></note-add>
        <note-list  @remove="removeNote"  :notes="notesToShow" :types="types"></note-list>
    </section>
    `,
    data() {
        return {
            types: {
                text: { sector: 'text',btn:'Txt', placeholder: 'keep your ideas!' },
                img: { sector: 'img', btn:'Img', placeholder: 'keep your images!' },
                todo: { sector: 'todo',btn:'todo', placeholder: 'What to do next!' },
                video: { sector: 'video',btn:'video', placeholder: 'Upload a video!' }
            },
            cmp: null,
            notes: null,
            filterBy: null,
            type: null,
            isText: false,
            // noteToEdit: null,
        }
    },
    methods: {
        addNote(newNote) {
            noteService.saveNote(newNote,newNote.type)
        },

        removeNote(noteId) {
            noteService.remove(noteId)
        }
    },
    computed: {
        notesToShow() {
            if (!this.filterBy) return this.notes;
        },
        noteType(idx) {
            console.log(this.notes[idx].type);
            return this.note.type = 'text'
        },


    },
    created() {
        // console.log('created');
        noteService.getNotes()
            .then(notes => this.notes = notes)
        // .then(console.log('this notes', this.notes))
        // this.noteToEdit = noteService.getEmptyNote()
        //     .then(note => this.noteToEdit = note)
    },

    components: {
        noteList,
        noteText,
        noteImg,
        noteToDo,
        noteAdd,
        noteVideo
    }

}