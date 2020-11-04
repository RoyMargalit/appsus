import homePage from '../js/pages/home-page.cmp.js'
import mailApp from '../js/pages/mail-app.cmp.js'
import noteApp from '../js/pages/note-app.cmp.js'


const myRoutes = [
    {
        path:'/',
        component:homePage,
    },
    {
        path:'/mail',
        component:mailApp,
    },
    {
        path:'/note',
        component:noteApp,
    },
    
]

export const myRouter = new VueRouter({ routes: myRoutes })
