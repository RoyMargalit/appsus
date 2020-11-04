
export default {
    props:['note'],
    template:`
    <section>
        <input placeholder = "enter text" v-model=""/>
        <h2>note TEXT!!!</h2>
        {{note}}
        
    </section>
    
    `,
}
