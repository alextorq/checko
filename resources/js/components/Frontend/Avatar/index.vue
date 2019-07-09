<template>
    <div class="user_avatar">
        <span v-if="avatarStatus" class="avatar-wrapper image"
            :style="{ backgroundImage: 'url(' + user.avatar + ')' }">
        </span>
        <span v-else class="avatar-wrapper">
            {{userInitials}}
        </span>
    </div>
</template>

<script>
    export default {
        name: "index",
        computed: {
            avatarStatus() {
                return !!this.user.avatar;
            },
            userInitials() {
                let userWord = this.user.name.split(' ');
                let userInitials = [];
                userInitials.push(userWord[0].split('')[0]);
                if (userWord.length > 1) {
                    userInitials.push(userWord[1].split('')[0]);
                }
                return userInitials.join('');
            }
        },
        props: {
            user: {
                type: Object,
                required: true
            }
        }
    }
</script>
