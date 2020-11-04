
import {noteService} from '../note-service/note-service.js'

export default {
    props: ['types'],
    template: `
    <section class="note-add">
        <!-- <input placeholder = "enter text" v-model=""/> -->
        <h2>note add!!!</h2>
        {{note}}
        <input :type="typeNote" v-model="inputUser"
                @keyup.enter="addNote"  />
         <button v-on:click="typeNote('text')"> Text </button>
         <button @click="typeNote('url')"> Image</button>
         <button @click="typeNote('list')"> To Do</button>
    </section>
    
    `,
    data(){
        return {
            newNote: noteService.getEmptyNote(),
            inputUser:'',
            typeOfNote:''
        }
    },
    computed:{   

    },
    methods:{
        typeNote(typeClick){
            this.newNote.type=typeClick
            this.typeOfNote=typeClick

        }
    },
    

}
