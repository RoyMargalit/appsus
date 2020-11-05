
import {eventBus} from '../../../service/event-bus-service.js'


export default {
    props:['mail'],
    template:`
    <section>
        <!-- <h2>mail-preview </h2> -->
        <p :class="mailRead"  @click="getMailDetails" >subject {{mail.subject}} </p>
        <!-- <button v-if="!isRead" @click="readMark">Read</button>
        <button v-if="isRead" @click="readMark">Unread</button> -->
        <button v-if="!mail.isRead"  @click="readMark">Read</button>
        <button v-if="mail.isRead"  @click="readMark">Unread</button>
        <!-- <button v-if="!isRead" @click="isRead = !isRead">Read</button>
        <button v-if="isRead" @click="isRead = !isRead">Unread</button> -->
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
            // this.isRead = !this.isRead
            // this.mail.isRead = this.isRead
            this.mail.isRead = !this.mail.isRead
            this.$emit('mailRead', this.mail)
            console.log(this.mail);
        }
    },
    computed: {
        mailRead() {
            return {read: this.mail.isRead}
        }
    }
}