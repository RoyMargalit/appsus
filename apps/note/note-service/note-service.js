import { utilService } from './note-util-service.js'

export const noteService={
    getNotes,
}
const STORAGE_KEY= 'noteDB '

function getNotes() {
    var notes = utilService.loadFromStorage(STORAGE_KEY)
    if (!notes || !notes.length) {
        _createNotes()
        notes=gNotes
        utilService.storeToStorage(STORAGE_KEY,notes)
    }
    return Promise.resolve(notes)

}

function _createNotes(){
    return gNotes
}

var gNotes = [
    {
        type: "NoteText",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        }
    },
    {
        type: "NoteImg",
        info: {
            url: "http://some-img/me",
            title: "Me playing Mi"
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    {
        type: "NoteTodos",
        info: {
            label: "How was it:",
            todos: [
                { txt: "Do that", doneAt: null },
                { txt: "Do this", doneAt: 187111111 }
            ]
        }
    }
]