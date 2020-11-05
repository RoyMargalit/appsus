import { utilService } from '../../../service/util-service.js'

export const mailService = {
    getMails,
    getById,
    remove,
    save,
    countMailRead,
    sendNewMail,
    currTime,
    // addZero
}

const STORAGE_KEY = 'mailDB'


var gMails = []

function getMails() {
    gMails = utilService.loadFromStorage(STORAGE_KEY)
    if (!gMails || !gMails.length) {
        _createMails()
        utilService.storeToStorage(STORAGE_KEY, gMails)

    }
    return Promise.resolve(gMails)
}

function countMailRead() {
    var countRead = 0
    gMails.forEach(mail => {
        if (mail.isRead) countRead++
    })
    return countRead
}

function save(mail) {
    if (mail.id) {
        const mailIdx = gMails.findIndex(currMail => mail.id === currMail.id)
        gMails.splice(mailIdx, 1, mail)
        utilService.storeToStorage(STORAGE_KEY, gMails)
    }
}

function remove(mailId) {
    const idx = gMails.findIndex(mail => mail.id === mailId);
    gMails.splice(idx, 1);
    utilService.storeToStorage(STORAGE_KEY, gMails)
    // return Promise.resolve()
}

function _createMail(subject, body) {
    var mail =
    {
        id: utilService.makeId(),
        subject: subject,
        body,
        isRead: false,
        sentAt: Date.now()
    }
    return mail
}

function _createMails() {
    gMails = []
    gMails.push(_createMail('hey there', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium similique porro doloremque dignissimos tempore debitis adipisci voluptatum sequi nam. Temporibus, soluta quasi suscipit pariatur veniam harum similique magnam voluptas rem?'))
    gMails.push(_createMail('yo there', 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'))
    gMails.push(_createMail('howdy there', 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.'))
    console.log('craaaa', gMails);

}


function getById(id) {
    const mail = gMails.find(currMail => currMail.id === id)
    return Promise.resolve(mail)
}

function sendNewMail(mail) {
    gMails.unshift(mail)
    utilService.storeToStorage(STORAGE_KEY, gMails)
}

function currTime() {
    var d = new Date()
    var h = addZero(d.getHours());
    var m = addZero(d.getMinutes());
   
    // console.log(h + ":" + m + ':' + s);
    return h + ":" + m 
}

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}