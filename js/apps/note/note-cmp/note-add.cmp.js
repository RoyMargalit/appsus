
import { noteService } from '../note-service/note-service.js'
import noteText from '../note-cmp/note-text.cmp.js'
import noteImg from '../note-cmp/note-img.cmp.js'
import noteTodo from '../note-cmp/note-todo.cmp.js'

export default {
    props: ['types'],
    template: `
    <section class="note-add">
        <h2>note add!!!</h2>
        <span>Your note:</span>
        <p style="white-space: pre-line;">{{ inputUser }}</p>
        <br>
        <input :type="typeNote" @keyup.enter="addNote" v-model="inputUser" :placeholder="placeHolder"/>
        <div class="flex">
				<template v-for="(type, idx) in types">
					<button :class="setSelectedType(type.btn)" @click="changeType(idx)">{{type.btn}}</button> 
				</template>
		</div>
        
        
        <!-- <component :is="component"/> -->
        <!-- <button v-on:click="typeNote('text')"> Text </button> -->
    </section>
    
    `,
    data() {
        return {
            newNote: noteService.getEmptyNote(),
            inputUser: '',
            typeOfNote: '',
            userText: [],
            component: 'note-text',
            placeHolder: 'share your ideas'
        }
    },
    computed: {
    },
    methods: {
        typeNote(typeClick) {
            this.newNote.type = typeClick
            this.typeOfNote = typeClick
            // console.log(typeClick, this.newNote.type, this.newNote);
        },
        addNote() {
            console.log(this.newNote.type, 'type of new-------');
            switch (this.newNote.type) {
                case "text":
                    this.newNote.info.txt = this.inputUser
                    break;
                case "image":
                    this.newNote.info.url = this.inputUser
                    break;
                case "todo":
                    this.newNote.info.title = this.inputUser
                    break;
            }
            this.$emit('add', this.newNote)
            this.newNote = noteService.getEmptyNote();
            this.inputUser = '';
            // this.newNote.info.txt = this.inputUser
            // console.log(this.newNote);
        },
        setSelectedType(type){
            // console.log(type);
            return (this.newNote.type === type)
        },
        changeType(type) {
            // console.log(type,'typeeeeeee');
            this.newNote.type = type;
            switch (this.newNote.type) {
                case "text":
                    this.placeHolder = 'share your ideas'
                    break;
                case "img":
                    this.placeHolder = 'enter image URL'
                    break;
                case "todo":
                    this.placeHolder = 'What to do?'
                    break;
            }
		},
    },
    components: {
        noteText,
        noteImg,
        noteTodo,
    }
}

















































// <button :info="inputUser" @click="component= 'note-text'"> Text </button>
//         <button :info="inputUser" @click="component= 'note-img'"> Image </button>
//         <button :info="inputUser" @click="component= 'note-todo'"> To Do</button>