import homePage from '../pages/home-page.cmp.js'
import mailPage from '../pages/mail-app.cmp.js'
import notePage from '../pages/note-app.cmp.js'
import mailList from '../apps/mail/mail-cmp/mail-list.cmp.js'
// import mailPreview from '../apps/mail/mail-cmp/mail-preview.cmp.js'


const myRoutes = [
    {
        path:'/',
        component:homePage,
    },
    {
        path:'/mail',
        component:mailPage,
    },
    {
        path:'/mail/list',
        component:mailList,
    },
    // {
    //     path:'/mail/list/mailPreview',
    //     component:mailPreview,
    // },
    {
        path:'/note',
        component:notePage,
    },
    
]



export const myRouter = new VueRouter({ routes: myRoutes })
