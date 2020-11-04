import homePage from '../pages/home-page.cmp.js'
import mailPage from '../pages/mail-app.cmp.js'
import keepPage from '../pages/keep-app.cmp.js'
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
        path:'/keep',
        component:keepPage,
    },
    
]



export const myRouter = new VueRouter({ routes: myRoutes })
