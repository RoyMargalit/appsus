import { utilService } from './mail-util-service.js'

export const mailService={
    getMails,

}

const STORAGE_KEY = 'mailDB'


var gMails = []

function getMails() {
    var mails = utilService.loadFromStorage(STORAGE_KEY)
    if (!mails || !mails.length) {
        _createMails()
        mails=gMails
        utilService.storeToStorage(STORAGE_KEY,mails)
    }
    return Promise.resolve(mails)
}

function _createMail(subject) {
    var mail =
    {
        id: utilService.makeId(),
        subject: subject,
        body: 'sdfdsfsfgfs dfgdsfgdsfgsdfgsdg sdfgsdfg',
        isRead: false,
        sentAt: Date.now(),
    }
    return mail
}

function _createMails(){
    gMails= []
    gMails.push(_createMail('hey there'))
    gMails.push(_createMail('yo there'))
    gMails.push(_createMail('howdy there'))


}