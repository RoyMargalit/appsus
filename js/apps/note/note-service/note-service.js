import { utilService } from '../../../service/util-service.js'

export const noteService = {
    getNotes,
    getEmptyNote,
}
const STORAGE_KEY = 'noteDB'

function getNotes() {
    var notes = utilService.loadFromStorage(STORAGE_KEY)
    if (!notes || !notes.length) {
        _createNotes()
        notes = gNotes
        utilService.storeToStorage(STORAGE_KEY, notes)
    }
    return Promise.resolve(notes)

}
// function saveNote(val){
//     console.log(val);
//     utilService.storeToStorage(STORAGE_KEY,val)
// }

function _createNotes() {
    return gNotes
}


function getEmptyNote() {
    return {
        id: utilService.makeId(),
        type: 'text',
        isPinned: false,
        info: {}

    }
}

var gNotes = [
    {
        id: utilService.makeId(),
        type: "note-text",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        }
    },
    {
        id: utilService.makeId(),
        type: "note-text",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        },
        placeholder: ''
    },
    {
        id: utilService.makeId(),
        type: "note-img",
        info: {
            url: "http://some-img/me",
            title: "Me playing Mi"
        },
        style: {
            backgroundColor: "#00d"
        },
        placeholder: ''

    },
    {
        id: utilService.makeId(),
        type: "note-to-do",
        info: {
            label: "How was it:",
            todos: [
                { txt: "Do that", doneAt: null },
                { txt: "Do this", doneAt: 187111111 }
            ],

        },
        placeholder: ''

    }
]