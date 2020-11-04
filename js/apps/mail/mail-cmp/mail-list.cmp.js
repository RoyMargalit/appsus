import mailPreview from './mail-preview.cmp.js'
// import {mailService} from '../mail-service/mail-service.js'

export default {
    props:['mails'],
    template:`
    <section class="mail-list">
        <h2>mail-list</h2>
            <ul>
                <li v-for = "currMail in mails" :key="currMail.id">
                    <mail-preview :mail='currMail'></mail-preview>
                    <!-- {{currMail}} -->
                </li>
            </ul>
    </section>
    `,
     methods: {
        
    },
    components:{
        mailPreview
    }
} 