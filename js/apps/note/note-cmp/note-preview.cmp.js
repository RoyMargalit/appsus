


export default {
    props:['note'],
    template:`
    <section>
        <!-- <h2>note Preview</h2> -->
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