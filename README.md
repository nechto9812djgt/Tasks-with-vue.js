# Tasks-with-vue.js
Task: Done tasks from vueschool.io's course reusable-vuejs-components-with-slots.<br>
# GitHub profiles
# index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.5.0/semantic.min.css">
    <title>Github profiles</title>
</head>
<body>
    <div id="app" class="ui container">
        <h1>Github Profiles</h1>
        <github-user-card v-for="username in usernames" :username="username"></github-user-card>
    </div>
    
    <script type="text/x-template" id="github-user-card-template">
        <div class="ui container">
            <div class="ui card">
                <div class="image">
                    <img :src="user.avatar_url">
                </div>
                <div class="content">
                    <a :href="`https://github.com/${user.login}`" class="header">{{user.name}}</a>
                    <div class="meta">
                        <span class="date">Joined in {{user.created_at}}</span>
                    </div>
                    <div class="description">
                        {{user.bio}}
                    </div>
                </div>
                <div class="extra content">
                    <a :href="`https://github.com/${user.login}?tab=followers`">
                        <i class="user icon"></i>
                        {{user.followers}} Friends
                    </a>
                </div>
              </div>
        </div>
    </script>

    <script src="https://unpkg.com/vue@3"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script src="app.js"></script>
</body>
</html>
```
# app.js
```
Vue.createApp({
    data(){
        return{
            usernames: []
        }
    },
    async created(){
        const res = await axios.get('https://api.github.com/users').then(res => res.data);
        for (let i = 0; i < res.length; i++) {
            this.usernames.push(res[i].login);
        }
    }
})

.component('github-user-card', {
    template:'#github-user-card-template',
    props:{
        username: {type: String, required: true}
    },
    data(){
        return{
            user: {}
        }
    },
    async created(){
        const res = await axios.get('https://api.github.com/users'+`/${this.username}`).then(res => res.data);
        this.user = res
    }
})

.mount('#app')
```
# Notifications

# index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.5.0/semantic.min.css">
    <title>Notidication</title>
</head>
<body>
    <div id="app">
        <notification-message type="info" header="Hm-m-m">
            <p>Something interesting here</p>
        </notification-message>
        <notification-message type="error" header="On no!">
            <p>Something is wrong</p>
        </notification-message>
        <notification-message type="succes" header="Oh yeah!">
            <p>Something good here</p>
        </notification-message>
    </div>

    <script type="text/x-template" id="notification-message-template">
        <div class="ui message" :class="type" v-if="!hidden">
            <i class="close icon" @click="closeNot()"></i>
            <div class="header">
                {{header}}
            </div>
            <p><slot></slot></p>
          </div>
    </script>
    <script src="https://unpkg.com/vue@3"></script>
    <script src="app.js"></script>
</body>
</html>
```

# app.js
```
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
```
