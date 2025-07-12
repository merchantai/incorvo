<template>
  <div class="country-dropdown">
    <div class="selected" @click="showDropdown = !showDropdown">
      <span class="flag">{{ selectedCountry.flag }}</span>
      <span class="code">{{ selectedCountry.dialCode }}</span>
    </div>
    <!-- <input
      type="text"
      v-model="searchQuery"
      placeholder="Type country name or code"
      @focus="showDropdown = true"
      @input="filterCountries"
      class="search-input"
    /> -->
    <ul v-if="showDropdown" class="dropdown-list">
      <li
        v-for="country in filteredCountries"
        :key="country.code"
        @click="selectCountry(country)"
      >
        <span class="flag">{{ country.flag }}</span>
        <span class="name">{{ country.name }}</span>
        <span class="code">{{ country.dialCode }}</span>
      </li>
      <li v-if="filteredCountries.length === 0" class="no-result">
        No matching country
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, defineEmits, onMounted } from 'vue';
import allCountries from '@/constants/countries.js'

const emit = defineEmits(['update:country'])

const selectedCountry = ref({ name: 'India', code: 'IN', dialCode: '+91', flag: '🇮🇳' });
const showDropdown = ref(false);
const searchQuery = ref('');
const filteredCountries = ref(allCountries);

onMounted(()=> emit('update:country', selectedCountry.value));

// function filterCountries() {
//   const q = searchQuery.value.toLowerCase().trim();
//   filteredCountries.value = allCountries.filter(
//     (c) =>
//       c.name.toLowerCase().includes(q) ||
//       c.dialCode.includes(q.replace('+', '')) ||
//       c.code.toLowerCase().includes(q)
//   );
// }

function selectCountry(country) {
  selectedCountry.value = country;
  emit('update:country', country);
  showDropdown.value = false;
  searchQuery.value = '';
  filteredCountries.value = allCountries;
}
</script>

<style scoped>
.country-dropdown {
  display: inline-block;
  position: relative;
  font-family: sans-serif;
}

/* Compact selected box */
.selected {
  border: 1px solid #ccc;
  padding: 0.85rem;
  font-size: 1rem;
  margin-top: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  background: #fff;
  width: fit-content;
  min-width: 90px;
  border-radius: 4px;
}

/* Input expands full dropdown width */
.search-input {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ccc;
  font-size: 14px;
  box-sizing: border-box;
}

/* Wider dropdown for full content */
.dropdown-list {
  position: absolute;
  width: max-content;
  min-width: 280px;
  max-height: 250px;
  overflow-y: auto;
  border: 1px solid #ccc;
  background: #fff;
  margin-top: 4px;
  z-index: 10;
  list-style: none;
  padding: 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Full row content */
.dropdown-list li {
  padding: 8px 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
}

.dropdown-list li:hover {
  background: #f0f0f0;
}

.flag {
  font-size: 18px;
}

.name {
  flex-grow: 1;
  overflow: hidden;
  text-overflow: ellipsis;
}

.code {
  font-weight: bold;
  color: #333;
}

.no-result {
  padding: 8px 12px;
  color: #888;
  text-align: center;
}
</style>