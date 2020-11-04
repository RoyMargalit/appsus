import mailList from '../apps/mail/mail-cmp/mail-list.cmp.js'
import { mailService } from '../apps/mail/mail-service/mail-service.js'

// import { bookService } from '../services/book-service.js'



export default {
    template: `
    <section>
        <h2>mail</h2>
        <mail-list :mails="mailsToShow"></mail-list>
        <!-- {{mails}} -->
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


    created() {
        console.log('created');
        mailService.getMails()
            .then(mails => this.mails = mails)
            .then(console.log('this mails', this.mails))
    },
    components: {
        mailList,

    }
}