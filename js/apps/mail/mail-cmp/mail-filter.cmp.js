

export default {
    template: `
        <section class="book-filter">
        <h2>Filter mails</h2>
        <form @submit.prevent="emitFilter" >
        <input type="text" v-model="filterBy.byTitle"  placeholder="Search here"/>
        
        </form>
        </section>
    `,
    data() {
        return {
            filterBy : {byTitle: '', fromPrice: -Infinity, toPrice: Infinity }
        }
    },
    methods: {
        emitFilter() {
            this.$emit('doFilter', JSON.parse(JSON.stringify(this.filterBy)));
            // this.$emit('doFilter', this.filterBy);
        }

    }
}