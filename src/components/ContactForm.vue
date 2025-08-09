<template>
  <div class="contact-form-container">
    <h3 class="contact-title">{{ props.title }}</h3>
    <form 
      :action="scriptURL"
      method="POST"
      target="dummyFrame"
      @submit.prevent="submitForm">
      <div>
        <input v-model="name"  name="name" type="text" class="input" placeholder="Name (required)" />
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
        <select-country @update:country="onCountrySelected"/>
        <input v-model="phoneNumber"  type="tel" class="input phone" placeholder="1234567890 (required)" />
      </div>
      <iframe name="dummyFrame" style="display: none;"></iframe>
      <button :disabled="!name || !phoneNumber" type="submit" class="submit">Get in touch</button>
      <p class="success-messge" v-if="formMessage">Thank you for getting in touch with us. We will get back to you soon.</p>
    </form>
  </div>
</template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';
  import SelectCountry from './SelectCountry.vue';

  const route = useRoute();
  const name = ref('');
  const email = ref('');
  const message = ref('');
  const formMessage = ref(false);
  const phoneNumber = ref('');
  const scriptURL = import.meta.env.VITE_INC_GOOGLE_SHEET_KEY;
  const selectedCountry = ref({});

  const props = defineProps({ title: {
    default: 'Expert Consultation',
    type: String
  }})

  function onCountrySelected(country) {
    selectedCountry.value = country;
  }
  
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
      phone: `${selectedCountry.value.dialCode}${phoneNumber.value}`,
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

    formMessage.value = true;
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
    .submit:disabled {
      background-color: var(--light-grey);
      color: var(--dark-color);
    }
    .success-messge {
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--success-color);
      margin-top: 0.5rem;
    }
</style>