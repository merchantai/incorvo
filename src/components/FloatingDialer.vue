<template>
    <div>
      <a :href="`tel:${phone}`" class="contact-toggle"><font-awesome-icon :icon="faPhone"/></a>
    </div>
  </template>
  
  <script setup>
  import { faPhone } from '@fortawesome/free-solid-svg-icons';


  const phone = import.meta.env.VITE_INC_PHONE
  </script>
  
  <style scoped>
  .contact-toggle {
    position: fixed;
    bottom: 140px;
    right: 20px;
    background-color: var(--primary-color);
    color: white;
    font-size: 1.5rem;
    padding: 0.5rem 0.9rem;
    text-align: center;
    border-radius: 50%;
    cursor: pointer;
    z-index: 999;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
  }
  
  </style>