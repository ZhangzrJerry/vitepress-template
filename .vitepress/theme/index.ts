import DefaultTheme from 'vitepress/theme'
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import './mathjax.css'

export default {
    extends: DefaultTheme,
    setup() {
        const route = useRoute()

        const renderMath = () => {
            if (typeof window !== 'undefined' && (window as any).MathJax) {
                nextTick(() => {
                    (window as any).MathJax.typesetPromise?.()
                })
            }
        }

        onMounted(() => {
            const script = document.createElement('script')
            script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js'
            script.async = true
            script.onload = () => {
                ; (window as any).MathJax = {
                    tex: {
                        inlineMath: [['$', '$'], ['\\(', '\\)']],
                        displayMath: [['$$', '$$'], ['\\[', '\\]']],
                        processEscapes: true,
                        processEnvironments: true
                    },
                    options: {
                        skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre']
                    }
                }
                renderMath()
            }
            document.head.appendChild(script)
        })

        watch(
            () => route.path,
            () => renderMath()
        )
    }
}
