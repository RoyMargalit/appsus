import notePreview from './note-preview.cmp.js'


export default {
    props:['notes'],
    template:`
    <section class="note-list">
        <h2>note list</h2>
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