
import {eventBus} from '../../../service/event-bus-service.js'


export default {
    props:['mail'],
    template:`
    <section>
        <!-- <h2>mail-preview </h2> -->
        <p :class="mailRead"  @click="getMailDetails" >subject {{mail.subject}} </p>
        <button @click="isRead = !isRead">Read</button>
    </section>
    `,
    data(){
        return{
            subject:null,
            body:null,
            isRead:true,
            sentAt:null
        }
    }, 
    methods: {
        getMailDetails() {
            console.log(this.mail.id);
            // eventBus.$emit('getDetails', this.mail.id)
            eventBus.$emit('getDetails', this.mail)
            this.$router.push('/mail/'  + this.mail.id)
            // console.log(book);
            // this.$emit('back', book)
        }
    },
    computed: {
        mailRead() {
            return {read: this.isRead}
        }
    }
}