<template>
  <div class="contact-us">
    <div class="left">
      <h2 class="title">How can we help?</h2>
      <ul class="list">
        <li v-for="(service, index) in services" :key="index">{{ service }}</li>
      </ul>
      <div class="address">
        <p><strong>Email:</strong> info@incorvo.in</p>
        <p><strong>Mobile:</strong> +91 96677 70727</p>
        <p><strong>Office Address:</strong><br />
           Hyderabad, Ranga Reddy - 500052,<br />
           Telangana, India
        </p>
      </div>
    </div>
    <div class="right">
      <ContactForm title="Have questions? Write to us." />
    </div>
  </div>
</template>

<script setup>
import ContactForm from '@/components/ContactForm.vue';
const services = [
  "GST Registration Services",
  "ISO Certification Services",
  "Company Incorporation (Private Ltd, LLP)",
  "MSME/Udyam Registration",
  "Trademark Registration",
  "Income Tax Filing",
  "FSSAI (Food License)",
  "Import Export Code (IEC)",
  "Digital Signature (DSC)",
  "Startup India Registration"
]
</script>

<style scoped>
.contact-us {
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
  flex-wrap: wrap;
}
.left {
  padding: 16px;
}
.title {
  text-align: center;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.2;
}
.list {
  margin: 16px;
}
.list li {
  padding: 4px;
}
.address {
  margin: 16px;
  font-size: 1.2rem;
}
.address p {
  margin-top: 16px;
}
</style>