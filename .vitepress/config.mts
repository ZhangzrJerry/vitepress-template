
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: "/",
    head: [['link', { rel: 'icon', href: '/icon/favicon.ico' }]],
    srcDir: "docs",

    title: "网站标题",
    description: "网站描述",
    themeConfig: {
        logo: '/hammer.png',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Syllabus', link: '/syllabus' },
            { text: 'Discussion', link: '/discussion' },
            { text: 'Resources', link: '/resources' }
        ],

        sidebar: {
            '/': [
                { text: 'Home', link: '/' },
                { text: 'Syllabus', link: '/syllabus' },
                { text: 'Discussion', link: '/discussion' },
                { text: 'Resources', link: '/resources' }
            ]
        },

        search: {
            'provider': 'local',
        },

        socialLinks: [
        ]
    }
})