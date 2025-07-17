<template>
    <div>
      <!-- Floating Icon/Button -->
       <div class="contact-toggle" @click="showForm = !showForm">
         <font-awesome-icon :icon="faComment"/>
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
import { faClose, faComment } from '@fortawesome/free-solid-svg-icons';
  
  const showForm = ref(false)
  </script>
  
  <style scoped>
  .contact-toggle {
    position: fixed;
    bottom: 80px;
    right: 20px;
    background-color: #25d366;
    color: white;
    font-size: 1.5rem;
    padding: 0.5rem 0.9rem;
    border-radius: 50%;
    text-align: center;
    cursor: pointer;
    height: 50px;
    width: 50px;
    aspect-ratio: 1;
    z-index: 999;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .popup-form {
    position: fixed;
    bottom: 80px;
    right: 20px;
    background: white;
    border-radius: 1rem;
    padding: 0.5rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
    z-index: 1000;
    width: 350px;
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
    color: var(--light-color);
    background-color: var(--primary-color);
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
  }
  </style>