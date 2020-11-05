import { utilService } from '../../../service/util-service.js'

export const noteService = {
    getNotes,
    getEmptyNote,
    saveNote,
    remove
}
const STORAGE_KEY = 'noteDB'

function getNotes() {
    gNotes = utilService.loadFromStorage(STORAGE_KEY)
    // console.log(notes,notes.length);
    if (!gNotes || !gNotes.length) {
        console.log('if statment');
        gNotes = _createNotes()
        // notes = gNotes
        console.log(gNotes);
        utilService.storeToStorage(STORAGE_KEY, gNotes)
    }
    return Promise.resolve(gNotes)

}
function saveNote(currNote) {
    console.log(currNote.type);
    console.log(currNote.info.txt);
    gNotes.push(currNote)
    utilService.storeToStorage(STORAGE_KEY, gNotes)     
    console.log(gNotes)
    return Promise.resolve(gNotes)

}

function remove(noteId) {
    const idx = gNotes.findIndex(note => note.id === noteId);
    gNotes.splice(idx, 1);
    utilService.storeToStorage(STORAGE_KEY, gNotes)

    return Promise.resolve()
}





function _createNotes() {
    return [
        {
            id: utilService.makeId(),
            type: "text",
            isPinned: true,
            info: {
                txt: "Fullstack Me Baby!"
            }
        },
        {
            id: utilService.makeId(),
            type: "video",
            isPinned: true,
            info: {
                url: "https://i.gifer.com/19Vg.gif"
            },
            placeholder: ''
        },
        {
            id: utilService.makeId(),
            type: "video",
            isPinned: true,
            info: {
                url: "https://www.youtube.com/embed/eI4an8aSsgw"
            },
            placeholder: ''
        },
        {
            id: utilService.makeId(),
            type: "img",//was: note-img
            info: {
                url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
                title: "Me playing Mi"
            },
            style: {
                backgroundColor: "#00d"
            },
            placeholder: ''

        },
        {
            id: utilService.makeId(),
            type: "todo",//was: note-to-do
            info: {
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
        info: {txt:'',url:'',todos:[{txt:''}]}

    }
}

var gNotes = [
    {
        id: utilService.makeId(),
        type: "text",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        }
    },
    {
        id: utilService.makeId(),
        type: "text",
        isPinned: true,
        info: {
            txt: "HOORAY AND WELCOME!"
        },
    },
    {
        id: utilService.makeId(),
        type: "img",
        info: {
            url: "http://some-img/me",
            title: "Me playing Mi"
        },
        style: {
            backgroundColor: "#00d"
        },

    },
    {
        id: utilService.makeId(),
        type: "todo",
        info: {
            label: "How was it:",
            todos: [
                { txt: "Do that", doneAt: null },
                { txt: "Do this", doneAt: 187111111 }
            ],
        },
    }
]




















// function saveNote(currNote) {
//     console.log(currNote.type);
//     console.log(currNote.info.txt);
//     gNotes.push(currNote)
//     utilService.storeToStorage(STORAGE_KEY, gNotes)
//     console.log(gNotes)
//     return Promise.resolve(gNotes)

// }