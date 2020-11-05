import {mailService} from '../mail-service/mail-service.js'

export default {
    props:[''],
    template:`
    <section class="mail-status">

        <p>mail status</p>
        <p> {{mailsReadNum}} </p>
       
    </section>
    `,
    data(){
      return {
          mailsRead: null
      }
    }, 
    methods: {
        // mailsReadNum(){
        //     this.mailsRead = mailService.countMailRead()
        //     // return mailService.countMailRead()
        // }
    },
    computed: {
        mailsReadNum(){
            return mailService.countMailRead()
        }
    }
}