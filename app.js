Vue.createApp({

})

.component('notification-message', {
    template: '#notification-message-template',
    props: {
        type: {type: String, requiared: true, default: 'info'}, //error, success, info, warning
        header: {type: String, default: 'The notification'},
    },
    data(){
        return{
            hidden: false
        }
    },
    methods:{
        closeNot(){
            this.hidden = true
        }
    }
})

.mount('#app')