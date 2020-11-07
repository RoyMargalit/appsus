

export default {
  props: [''],
  template: `
    <section class="mail-side-nav">
      <!-- <ul>
        <li></li>
      </ul> -->
        <router-link class="compose" to="/send" exact>+Compose</router-link>|
        <router-link to="/mail" exact>Inbox</router-link>|
        <!-- <router-link class="sentMail" to="/send" exact>Sent Mail</router-link>| -->
        <span>Starred</span> 
        <span>Sent Mail</span> 
       <span>Drafts</span>
    </section>
    `
}