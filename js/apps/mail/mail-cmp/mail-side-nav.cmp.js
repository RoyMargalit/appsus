

export default {
  props: [''],
  template: `
    <section class="mail-side-nav">
        <p>mail side</p>
        <router-link to="/send" exact>New mail</router-link>|
        <router-link to="/mail" exact>Inbox</router-link>|
        <!-- <router-link to="/note">notes</router-link>| -->
    </section>
    `
}