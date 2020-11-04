import notePreview from './note-preview.cmp.js'


export default {
    props:['notes'],
    template:`
    <section>
        <h2>note LIST</h2>
        <ul>
            <li v-for="currNote in notes " :key="currNote.id">
                <note-preview :note="currNote"></note-preview>
            </li>
        </ul>
    </section>
    
    `,

    components:{
        notePreview,
    }
    
}