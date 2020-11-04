import mailPreview from './mail-preview.cmp.js'
// import {mailService} from '../mail-service/mail-service.js'

export default {
    props:['mails'],
    template:`
    <section>
        <h2>mail-list</h2>
            <li v-for = "currMail in mails" :key="currMail.id">
                <mail-preview :mail='currMail'></mail-preview>
            {{currMail}}
            </li>
    </section>
    `,

    components:{
        mailPreview
    }
}