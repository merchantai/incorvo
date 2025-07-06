<template>
    <div>
      <!-- Floating Icon/Button -->
      <div class="contact-toggle" @click="showForm = !showForm">
        💬
      </div>
  
      <!-- Popup Form -->
      <Transition name="fade-slide">
        <div v-if="showForm" class="popup-form">
            <font-awesome-icon :icon="faClose" @click="showForm = false" class="close"/>
          <ContactForm @close="showForm = false" />
        </div>
      </Transition>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import ContactForm from './ContactForm.vue'
import { faClose } from '@fortawesome/free-solid-svg-icons';
  
  const showForm = ref(false)
  </script>
  
  <style scoped>
  .contact-toggle {
    position: fixed;
    bottom: 80px;
    right: 20px;
    background-color: var(--primary-color);
    color: white;
    font-size: 1.5rem;
    padding: 0.7rem 1rem;
    border-radius: 50%;
    cursor: pointer;
    z-index: 999;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
  }
  
  .popup-form {
    position: fixed;
    bottom: 80px;
    right: 20px;
    background: white;
    border-radius: 1rem;
    padding: 1rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
    z-index: 1000;
    width: 320px;
  }
  
  /* Animation */
  .fade-slide-enter-active, .fade-slide-leave-active {
    transition: all 0.3s ease;
  }
  .fade-slide-enter-from, .fade-slide-leave-to {
    opacity: 0;
    transform: translateY(10px);
  }
  .close {
    font-size: 1rem;
    margin-left: 90%;
  }
  </style>