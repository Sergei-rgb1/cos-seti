const app = Vue.createApp({
    data() {
        return {
            socials: [
                { name: "ВКонтакте", link: "https://vk.com/nedohakerov", class: "vk", icon: "fab fa-vk" },
                { name: "Telegram", link: "https://t.me/SeregaGLZ1", class: "telegram", icon: "fab fa-telegram" },
                { name: "Facebook", link: "https://www.facebook.com/profile.php?id=100093469004460", class: "facebook", icon: "fab fa-facebook" },
                { name: "Twitter", link: "https://x.com/SeregaGLZ", class: "twitter", icon: "fab fa-twitter" },
                { name: "Instagram", link: "https://www.instagram.com/voin3770/", class: "instagram", icon: "fab fa-instagram" },
                { name: "Discord", link: "https://discord.com/users/rishi8930", class: "discord", icon: "fab fa-discord" }
            ]
        };
    }
});

app.mount('#app');