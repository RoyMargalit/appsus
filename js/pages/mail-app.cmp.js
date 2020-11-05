import mailList from '../apps/mail/mail-cmp/mail-list.cmp.js'
import { mailService } from '../apps/mail/mail-service/mail-service.js'
import mailDetails from '../apps/mail/mail-pages/mail-details.cmp.js'
import mailStatus from '../apps/mail/mail-cmp/mail-status.js'




export default {
    template: `
    <section class="mail-app">
        <h2>mail</h2>
        <mail-status></mail-status>
        <mail-list @delete="deleteMail" @mailRead="marekdReadMail" :mails="mailsToShow"></mail-list>
    </section>
    `,
    data() {
        return {
            mails: null,
            filterBy: null,
        }
    },
    computed: {
        mailsToShow() {
            if (!this.filterBy) return this.mails;
        },
    },
    methods: {
        deleteMail(mailId){
            console.log('in app:',mailId);
            mailService.remove(mailId)
        },
        marekdReadMail(mail) {
            mailService.save(mail)
        }
    },
    created() {
        // console.log('created');
        mailService.getMails()
        .then(mails => this.mails = mails)
    },
    components: {
        mailList,
        mailDetails,
        mailStatus

    }
}