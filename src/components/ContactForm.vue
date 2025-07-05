<template>
  <div class="contact-form-container">
    <h3 class="contact-title">Expert Consultation</h3>
    <form 
      :action="scriptURL"
      method="POST"
      target="dummyFrame"
      @submit.prevent="submitForm">
      <div>
        <input v-model="name"  name="name" type="text" class="input" placeholder="Name" />
      </div>
      <div>
        <input v-model="email"  name="email" type="email" class="input" placeholder="Email" />
      </div>
      <div>
        <input v-model="message"  name="message" type="text" class="input" placeholder="Message" />
      </div>
      <div>
        <input name="topic" type="hidden" />
      </div>
      <div>
        <input name="phone" type="hidden" />
      </div>
      <div class="contact-number">
        <input v-model="countryCode" type="text" class="input code" placeholder="+91" />
        <input v-model="phoneNumber"  type="tel" class="input phone" placeholder="1234567890" />
      </div>
      <iframe name="dummyFrame" style="display: none;"></iframe>
      <button type="submit" class="submit">Send</button>
    </form>
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
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyX06BzqS7SqC6HnHhc0fm6G5EuK3t-lT6SwdRU57HVftvU_sCxB1iXfoaQvC1oZNZ_/exec'
  
  const resetForm = () => {
    name.value = '';
    email.value = '';
    message.value = '';
    phoneNumber.value = '';
  };

  const submitForm = async () => {
    const form = document.createElement("form");
    form.method = "POST";
    form.action = scriptURL;
    form.target = "dummyFrame";

    const data = {
      name: name.value,
      email: email.value,
      phone: `${countryCode.value}${phoneNumber.value}`,
      message: message.value,
      topic: route.name,
    };

    for (const key in data) {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = data[key];
      form.appendChild(input);
    }

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);

    alert("Submitted successfully!");
    resetForm();
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