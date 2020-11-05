import { utilService } from '../../../service/util-service.js'

export const noteService = {
    getNotes,
    getEmptyNote,
    saveNote,
}
const STORAGE_KEY = 'noteDB'
      
function getNotes() {
    gNotes = utilService.loadFromStorage(STORAGE_KEY)
    // console.log(notes,notes.length);
    if (!gNotes || !gNotes.length) {
        console.log('if statment');
        gNotes=_createNotes()
        // notes = gNotes
        console.log(gNotes);
        utilService.storeToStorage(STORAGE_KEY, gNotes)
    }
    return Promise.resolve(gNotes)

}
function saveNote(val) {
    console.log(val);
    gNotes.push(val)
    utilService.storeToStorage(STORAGE_KEY, gNotes)
    console.log(gNotes)
    return Promise.resolve(gNotes)

}

function _createNotes() {
    return [
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