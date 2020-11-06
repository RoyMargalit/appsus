
import { eventBus } from '../../../service/event-bus-service.js'
import {mailService} from '../mail-service/mail-service.js'
import mailSideNav from '../mail-cmp/mail-side-nav.cmp.js'

export default {
    // props:[],
    name: 'mailDetails',
    template: `
    <section v-if="mail"  class="mail-details">
        <mail-side-nav></mail-side-nav>
        <div class="details"> 
            <!-- <h1>mail details</h1> -->
            <button class="delet-btn-details" @click="deleteMail(mail.id)" >Delete</button>
            <button class="back-btn-details" @click="goBack()" >Back</button>
            <button class="back-read-details" v-if="!mail.isRead"  @click="MailReadOrUnread">Read</button>
            <button  class="back-read-details" v-if="mail.isRead"  @click="MailReadOrUnread">Unread</button>
            <h3 class="mail-subject-details">{{mail.subject}}</h3>
            <hr>
            <p class="mail-subject-body" >{{mail.body}}</p>
       </div>
    </section>
    `,
    data() {
        return {
            mail: null,
        }
    },
    methods: {
        deleteMail(mailId){
            console.log(mailId);
            mailService.remove(mailId)
            this.$router.push('/mail')
        },
        goBack(){
            this.$router.push('/mail')
        },
        MailReadOrUnread(){
            this.mail.isRead = !this.mail.isRead
            mailService.save(this.mail)
        }
    },
    computed: {
    
    },
    components: {
        
        mailSideNav,
       

    },
    created() {
     const id = this.$route.params.mailId
     mailService.getById(id)
        .then(mail => this.mail = mail)
    }
    
}
