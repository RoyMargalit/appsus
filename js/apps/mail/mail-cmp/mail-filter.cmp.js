

export default {
    template: `
        <section class="mail-filter">
        <!-- <h2>Filter mails</h2> -->
        <form @submit.prevent="emitFilter" >
        <input type="text" v-model="filterBy"  placeholder="Search"/>
        
        </form>
        </section>
    `,
    data() {
        return {
            filterBy: ''
        }
    },
    methods: {
        emitFilter() {
            this.$emit('doFilter', JSON.parse(JSON.stringify(this.filterBy)));
            // this.$emit('doFilter', this.filterBy);
        }

    }
}