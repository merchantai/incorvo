<template>
    <div>
      <!-- WhatsApp Floating Icon -->
      <div class="wa-icon" @click="togglePopup">
        <font-awesome-icon class="whatsapp-icon" :icon="faWhatsapp" />
      </div>
  
      <!-- Popup with transition -->
      <transition name="slide-fade">
        <div v-if="showPopup" class="wa-popup">
          <input v-model="message" type="text" placeholder="Type your message..." />
          <button @click="sendMessage">Send</button>
        </div>
      </transition>
    </div>
  </template>
  
  <script setup>
  import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { ref } from 'vue'
  
  const showPopup = ref(false)
  const message = ref('')
  const phoneNumber = '919999999999' // Replace with your phone number
  
  function togglePopup() {
    showPopup.value = !showPopup.value
  }
  
  function sendMessage() {
    const text = message.value.trim()
    if (!text) return
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`
    window.open(waUrl, '_blank')
    message.value = ''
    showPopup.value = false
  }
  </script>
  
  <style scoped>
  .wa-icon {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #25d366;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 30px;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    z-index: 1000;
  }
  .whatsapp-icon {
    color: var(--light-color);
  }
  
  .wa-popup {
    position: fixed;
    bottom: 90px;
    right: 20px;
    background: white;
    padding: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    display: flex;
    gap: 8px;
    flex-direction: column;
    width: 250px;
    z-index: 1000;
  }
  
  .wa-popup input {
    padding: 8px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 6px;
  }
  
  .wa-popup button {
    background-color: #25d366;
    color: white;
    border: none;
    padding: 8px;
    border-radius: 6px;
    cursor: pointer;
  }
  
  /* Transition */
  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition: all 0.3s ease;
  }
  
  .slide-fade-enter-from,
  .slide-fade-leave-to {
    opacity: 0;
    transform: translateY(20px);
  }
  </style>