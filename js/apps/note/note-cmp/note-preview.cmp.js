


export default {
    props:['note'],
    template:`
    <section class= "note-preview">
        <p>{{note}}</p>
    </section>
    `,

    data(){
        return{
            type:'',
            isPinned:false,
            info: {
                txt:'',
                url:'',
            }
        }
    },
    created(){
        console.log('preview');
    }
       
}