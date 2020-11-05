import mailSideNav from './mail-side-nav.cmp.js'

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
                <input type="text" placeholder="Subject:">
                <br> 
                <input type="textarea">    
            </form>
        </div>
       

    </section>
    `,
    data() {
        return {
            mail: null,
        }
    },
    methods: {
        
        },
        goBack(){
          
    },
    computed: {
    
    },
    components: {
        mailSideNav,

    },
    created() {
    
    }
    
}
