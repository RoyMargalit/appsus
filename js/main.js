import {myRouter} from './routes.js'



const options = {
    el: '#app',
    router:myRouter,
    template: `
        <section>
            <h1>Apssus</h1>
            <main>
                <router-view></router-view>
            </main>
        </section>
    `,
    components:{
    }

}



const app = new Vue(options);