


export default {
    props:['mail'],
    template:`
    <section>
        <h2>mail-preview </h2>
        <p>subject {{mail.subject}} </p>
        <p>body</p>
        <p>isread</p>
        <p>sentAt</p>
    </section>
    `,
    data(){
        return{
            subject:null,
            body:null,
            isRead:null,
            sentAt:null
        }
    },
}