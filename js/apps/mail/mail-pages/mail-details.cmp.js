
import { eventBus } from '../../../service/event-bus-service.js'
import {mailService} from '../mail-service/mail-service.js'

export default {
    // props:[],
    name: 'mailDetails',
    template: `
    <section v-if="mail"  class="mail-details">
       <h1>mail details</h1>
       <h2 >{{mail.subject}}</h2>
       <p >{{mail.body}}</p>
    
    </section>
    `,
    data() {
        return {
            mail: null,
        }
    },
    methods: {

    },
    computed: {
    
    },
    created() {
     const id = this.$route.params.mailId
     mailService.getById(id)
        .then(mail => this.mail = mail)
    }
    
}
