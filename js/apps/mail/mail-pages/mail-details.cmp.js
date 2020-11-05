
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
            <h1>mail details</h1>
            <h2 >{{mail.subject}}</h2>
            <p >{{mail.body}}</p>
            <button @click="deleteMail(mail.id)" >Delete</button>
            <button @click="goBack()" >Back</button>
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
            // this.mail.isRead = true;
            // console.log(this.mail.isRead);
        //    mailService.save(this.mail)
            this.$router.push('/mail')
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
