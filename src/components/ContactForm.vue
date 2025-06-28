<template>
    <div class="contact-form-container">
      <h3 class="contact-title">Expert Consultation</h3>
      <div>
        <input v-model="name" type="text" class="input" placeholder="Name"/>
      </div>
      <div>
        <input v-model="email" type="Email" class="input" placeholder="Email"/>
      </div>
      <div>
        <input v-model="message" type="text" class="input" placeholder="Message"/>
      </div>
      <div>
        <div class="contact-number">
          <input v-model="countryCode" type="text" class="input code" placeholder="+91"/>
          <input v-model="phoneNumber" type="tel" class="input phone" placeholder="1234567890"/>
        </div>
      </div>
      <button @click="submitForm" class="submit">Get Started</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
import { useRoute } from 'vue-router';

  const route = useRoute();
  const name = ref('');
  const email = ref('');
  const message = ref('');
  const countryCode = ref('+91');
  const phoneNumber = ref('');
  
  const submitForm = () => {
    const payload = {
      name: name.value,
      email: email.value,
      phone: `${countryCode.value} ${phoneNumber.value}`,
      message: message.value,
      topic: route.name,
    };
    console.log('Form Submitted:', payload);
  };
  </script>
  
<style scoped>
    .contact-form-container {
        background-color: var(--light-color);
        padding: 1rem;
        border-radius: 1rem;
    }
    .contact-title {
        text-align: center;
        font-weight: 700;
        font-size: 1.5rem;
        line-height: 1.2;
    }
    .input {
        padding: 1rem;
        font-size: 1rem;
        color: var(--primary-color);
        border: 1px solid var(--light-grey);
        width: 100%;
        margin-top: 0.5rem;
    }
    .input::placeholder {
        color: var(--light-grey);
    }
    .contact-number {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .code {
        width: 20%;
    }
    .phone {
        width: calc(80% - 0.5rem);
    }
    .submit {
        border: none;
        width: 100%;
        background-color: var(--primary-color);
        color: var(--light-color);
        cursor: pointer;
        padding: 1rem;
        margin-top: 0.5rem;
        font-size: 1rem;
        border-radius: 0.5rem;
    }
</style>