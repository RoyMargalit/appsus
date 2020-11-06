

export default {
    template: `
        <section class="mail-filter">
        <!-- <h2>Filter mails</h2> -->
            <form @submit.prevent="emitFilter" >
                <input type="text" v-model="filterBy.filterByTxt"  placeholder="Search"/>
                <button @click="filterBy.isUnRead = false, filterBy.isRead = true"  >Read</button>
                <button @click="filterBy.isRead = false, filterBy.isUnRead = true"  >UnRead</button>
                <button @click="filterBy.isRead = true, filterBy.isUnRead = true"  >All</button>
            </form>
        </section>
    `,
    data() {
        return {
            filterBy: {filterByTxt: '', isRead: true,  isUnRead: true} 
        }
    },
    methods: {
        emitFilter() {
            this.$emit('doFilter', JSON.parse(JSON.stringify(this.filterBy)));
            // this.$emit('doFilter', this.filterBy);
        }

    }
}