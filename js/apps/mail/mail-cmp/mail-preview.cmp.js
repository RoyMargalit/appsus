
import {eventBus} from '../../../service/event-bus-service.js'


export default {
    props:['mail'],
    template:`
    <section class="mail-preview" :class="mailRead" >
        <!-- <h2>mail-preview </h2> -->
        <p   @click="getMailDetails" >{{mail.subject}} {{mail.sentAt}} </p>
        <button v-if="!mail.isRead"  @click="readMark">Read</button>
        <button v-if="mail.isRead"  @click="readMark">Unread</button>
        
    </section>
    `,
    data(){
        return{
            subject:null,
            body:null,
            isRead:false,
            sentAt:null
        }
    }, 
    methods: {
        getMailDetails() {
            this.$router.push('/mail/'  + this.mail.id)
        },
        readMark(){
            this.mail.isRead = !this.mail.isRead
            this.$emit('mailRead', this.mail)
            // console.log(this.mail);
        }
    },
    computed: {
        mailRead() {
            return {read: this.mail.isRead}
        }
    }
}