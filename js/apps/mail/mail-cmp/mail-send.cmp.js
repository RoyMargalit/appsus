import mailSideNav from './mail-side-nav.cmp.js'
import {mailService} from '../mail-service/mail-service.js'
import {utilService} from '../../../service/util-service.js'

export default {
    // props:[],
    name: 'mailSend',
    template: `
    <section class="mail-send">
        <mail-side-nav></mail-side-nav>
        <div class="mail-msg">
            <h2>mail send</h2>
            <form>
                <input type="email" placeholder="To:"> 
                <br>  
                <input type="email" placeholder="Cc:"> 
                <br>  
                <input type="email" placeholder="Bcc:">
                <br>    
                <input type="text"  placeholder="Subject:" v-model="mail.subject">
                <br> 
                <textarea name="" id="" cols="100" rows="20" v-model="mail.body"></textarea> 
                <br> 
                <button @click="sendMail" >Send</button>   
                <button @click="deleteTxt">delete</button>   
            </form>
        </div>
       

    </section>
    `,
    data() {
        return {
             mail: 
            {
                id: utilService.makeId(),
                subject: null,
                body: null,
                isRead: false,
                sentAt: Date.now(),
            }
        }
    },
    methods: {
        sendMail(){
            mailService.sendNewMail(this.mail)
            console.log(this.mail);
            this.$router.push('/mail')
        },
        deleteTxt() {
            this.$router.push('/mail')
        }
    },
    computed: {
    
    },
    components: {
        mailSideNav,

    },
    created() {
        mailService.getMails()
        .then(mails => this.mails = mails)
    }
    
}
