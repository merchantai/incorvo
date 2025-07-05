<template>
  <nav class="navbar">
    <div class="logo">
      <RouterLink to="/">
        <img src="@/assets/images/decoration/logo.svg" alt="Logo" />
      </RouterLink>
    </div>

    <ul class="menu">
      <li
        v-for="item in menuItems"
        :key="item.label"
        class="menu-item"
        @mouseenter="hoveredItem = item.label"
        @mouseleave="hoveredItem = null"
      >
        {{ item.label }}
        <ul v-if="item.submenu && hoveredItem === item.label" class="submenu">
          <li v-for="sub in item.submenu" :key="sub" class="section">
            {{ sub.section }}
            <div class="submenu-items" v-for="item in sub.items" :key="item.url">
              <RouterLink class="item" :to="item.url">{{ item.label }}</RouterLink>
            </div>
          </li>
        </ul>
      </li>
    </ul>
    <!-- Mobile Menu Toggle Button -->
    <button class="menu-toggle" @click="menuOpen = !menuOpen">
      ☰
    </button>

    <!-- Slide-in Mobile Menu -->
    <div class="mobile-menu" :class="{ open: menuOpen }">
      <button class="close-btn" @click="menuOpen = false">✕</button>
      <ul>
        <li v-for="item in menuItems" :key="item.label">
          <div class="mobile-label">{{ item.label }}</div>
          <ul v-if="item.submenu">
            <li v-for="sub in item.submenu" :key="sub.section" class="section">
              <strong>{{ sub.section }}</strong>
              <div class="submenu-items" v-for="subItem in sub.items" :key="subItem.url">
                <RouterLink class="item" :to="subItem.url" @click="menuOpen = false">
                  {{ subItem.label }}
                </RouterLink>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <a href="tel:+919667770727" class="call-us">+91-9667770727</a>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import MENU from '@/constants/menu'

const hoveredItem = ref(null)

const menuItems = MENU
const menuOpen = ref(false)
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: sans-serif;
  position: relative;
  padding: 0 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  background-color: var(--light-color);
}

.menu {
  display: flex;
  list-style: none;
  gap: 20px;
  margin: 0;
  padding: 1rem;
  @media (max-width: 840px) {
    display: none;
  }
}

.menu-item {
  position: relative;
  color: var(--primary-color);
  @media (max-width: 840px) {
    color: var(--secondary-color);
  }
}

.menu-item:hover {
  color: var(--secondary-color);
}

.submenu {
  position: absolute;
  background-color: var(--light-color);
  top: 100%;
  left: -100%;
  list-style: none;
  padding: 0.5rem 0;
  margin: 0;
  max-height: 600px;
  overflow: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 10;
}

.section {
  font-weight: 700;
  padding: 8px;
  @media (max-width: 840px) {
    color: var(--secondary-color);
  }
}

.section:hover {
  color: var(--primary-color);
}

.item {
  text-decoration: none;
  cursor: pointer;
  color: var(--primary-color);
  text-wrap: nowrap;
  line-height: 1.1;
  font-size: 14px;
  padding: 6px 16px;
  width: 100%;
  display: block;
}

.item:hover {
  background-color: var(--secondary-light-color);
  border-radius: 4px;
}

.logo img {
  height: 70px;
  cursor: pointer;
}

/* Mobile Toggle Button */
.menu-toggle {
  display: none;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: var(--primary-color);
}

@media (max-width: 840px) {
  .menu-toggle {
    display: block;
  }
}

/* Slide-in Mobile Menu */
.mobile-menu {
  position: fixed;
  top: 0;
  right: -300px;
  width: 300px;
  height: 100vh;
  background-color: white;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.2);
  transition: right 0.3s ease-in-out;
  padding: 1rem;
  z-index: 1000;
  overflow-y: auto;
}

.mobile-menu.open {
  right: 0;
}

.mobile-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.mobile-label {
  font-weight: bold;
  margin-top: 1rem;
  color: var(--primary-color);
}

.close-btn {
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  float: right;
  margin-bottom: 1rem;
}

.call-us {
  text-decoration: none;
  color: var(--primary-color);
  background-color: var(--secondary-light-color);
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  text-wrap: nowrap;
  @media (max-width: 840px) {
    display: none;
  }
}

.call-us:hover {
  background-color: var(--primary-color);
  color: var(--light-color);
}
</style>
