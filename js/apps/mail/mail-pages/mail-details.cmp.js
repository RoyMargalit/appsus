
import { eventBus } from '../../../service/event-bus-service.js'


export default {
    // props:[],
    name: 'mailDetails',
    template: `
    <section>
       <h1>mail details</h1>
       <h2>{{mail}}</h2>
    
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
    //    showDetails(){
    //        return this.mail !== null
    //    }
    },
    created() {
        eventBus.$on('getDetails', mail => {
            console.log(this.mail);
            this.mail = mail;
            console.log(this.mail);
                console.log(mail);
                
        })
    }
    
}

// emitBackToList(book) {
//     this.$router.push('/book')
//     console.log(book);
//     this.$emit('back', book)
// },