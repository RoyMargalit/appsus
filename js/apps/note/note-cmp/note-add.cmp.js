
import { utilService } from '../../../service/util-service.js'
import { noteService } from '../note-service/note-service.js'

export default {
    props: ['types'],
    template: `
    <section class="note-add">
        <h2>note add!!!</h2>
        <span>Your note:</span>
           <p style="white-space: pre-line;">{{ inputUser }}</p>
           <br>
           <input :type="typeNote" @keyup.enter="addNote" v-model="inputUser" placeholder="what are you thinking about"/>
         <button v-on:click="typeNote('text')"> Text </button>
         <button @click="typeNote('url')"> Image</button>
         <button @click="typeNote('list')"> To Do</button>
    </section>
    
    `,
    data() {
        return {
            newNote: noteService.getEmptyNote(),
            inputUser: '',
            typeOfNote: '',
            userText: [],
        }
    },
    computed: {      
    },
    methods: {
        typeNote(typeClick) {
            this.newNote.type = typeClick
            this.typeOfNote = typeClick
            console.log(typeClick, this.newNote.type, this.newNote);

        },
        addNote() {
            // this.newNote = noteService.getEmptyNote();
			// this.userData = '';
            
            
            
            this.newNote.info.text=this.inputUser
            console.log(this.newNote);
            utilService.storeToStorage('noteDB',this.newNote)
        
        },
        // mounted()
        
    },


}
