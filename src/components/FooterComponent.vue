<template>
    <footer class="footer" v-if="FOOTER">
        <div class="footer-links">
            <div class="footer-links-section" v-for="(links, index) of FOOTER" :key="`footer-${index}`">
                <p class="links-title">{{ links.label }}</p>
                <ul class="links-container">
                    <li v-for="link of links.items" :key="link.url">
                        <RouterLink :to="link.url" class="link">{{ link.label }}</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
        <div class="social-container">
            <a href="https://www.facebook.com/profile.php?id=61577770211178" target="_blank" class="social-link">
                <font-awesome-icon class="social-icon" :icon="faFacebook" />
            </a>
            <a href="https://www.instagram.com/incorvo_legal/" target="_blank" class="social-link">
                <font-awesome-icon class="social-icon" :icon="faInstagram" />
            </a>
            <a href="https://x.com/Incorvolegals" target="_blank" class="social-link">
                <font-awesome-icon class="social-icon" :icon="faXTwitter" />
            </a>
            <a href="https://www.youtube.com/channel/UCw9N8R9Z-1wl2WygOHdXBVA" target="_blank" class="social-link">
                <font-awesome-icon class="social-icon" :icon="faYoutube" />
            </a>
            <a href="https://www.linkedin.com/company/incorvo/" target="_blank" class="social-link">
                <font-awesome-icon class="social-icon" :icon="faLinkedin" />
            </a>
        </div>
        <p class="copyright">&copy; 2025 Incorvo Legal Services</p>
    </footer>
</template>

<script setup>
import FOOTER from '@/constants/footer.js'
import { faFacebook, faInstagram, faLinkedin, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

</script>

<style>
.footer {
    background-color: var(--primary-color);
    color: var(--light-color);
    padding: 1rem;
}
.footer-links {
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    gap: 1rem;
}
.footer-links-section {
    padding: 0.5rem;
}
.links-title {
    font-size: 1.2rem;
    font-weight: 500;
}
.links-container {
    list-style: none;
    margin-top: 1rem;
}
.link {
    text-decoration: none;
    color: var(--light-color);
    line-height: 1.75;
    font-size: 0.8rem;
}
.link:hover {
    color: var(--secondary-light-color);
}
.social-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
    padding: 1rem;
    width: 100%;
    border-top: 1px solid var(--light-grey);
    border-bottom: 1px solid var(--light-grey);
}
.social-link {
    width: 30px;
    height: 30px;
    display: block;
    cursor: pointer;
    text-decoration: none;
}
.social-icon {
    width: 100%;
    height: 100%;
    color: var(--light-color);
}
.social-icon:hover {
    color: var(--secondary-light-color);
}
.copyright {
    text-align: center;
}
</style>