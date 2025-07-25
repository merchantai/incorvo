<template>
    <template v-if="moduleData">
        <div class="page">
        <div class="page-content">
          <h1>{{ moduleData?.header.title }}</h1>
          <div v-for="item of moduleData?.header.list" :key="item">
              <div class="card-list">
                  <font-awesome-icon class="list-icon" :icon="faCircleCheck" />
                  <p class="list-text">{{ item }}</p>
              </div>
          </div>
        </div>
        <div class="contact-form">
            <ContactForm class="header-contact-form" />
        </div>
      </div>
      <div class="bottom-content">
        <div class="content">
            <template v-for="(item, index) of moduleData?.content" :key="`cont-${index}`">
                <h2 class="title">{{ item.title }}</h2>
                <template v-for="(desc, index) of item.descrption" :key="`desc-${index}`">
                    <h3 v-if="desc.subTitle" class="subtitle">{{ desc.subTitle }}</h3>
                    <template v-if="desc?.p?.length">
                        <p class="text" v-for="(p, index) of desc.p" :key="`p-${index}`" v-html="p"></p>
                    </template>
                    <template v-if="desc?.ul?.length">
                        <ul class="ulist">
                            <li class="ulist-item" v-for="(li, index) of desc.ul" :key="`ul-${index}`" v-html="li"></li>
                        </ul>
                    </template>
                    <template v-if="desc?.ol?.length">
                        <ol class="ulist">
                            <li class="ulist-item" v-for="(li, index) of desc.ol" :key="`ul-${index}`" v-html="li"></li>
                        </ol>
                    </template>
                    <template v-if="desc?.table">
                        <table class="table">
                            <thead class="thead">
                                <tr class="thead-row" v-for="(tr, index) of desc.table.thead.trow" :key="`thr-${index}`">
                                    <th class="thead-th" v-for="th of tr" :key="`thead-${th}`">{{ th }}</th>
                                </tr>
                            </thead>
                            <tbody class="tbody">
                                <tr class="tbody-row" v-for="(tr, index) of desc.table.tbody.trow" :key="`thr-${index}`">
                                    <td class="tbody-td" v-for="td of tr" :key="`thead-${td}`">{{ td }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </template>
                </template>
            </template>
        </div>
        <ContactForm class="content-contact-form" />
      </div>
      <div class="faqs">
        <h2 class="title">Frequently Asked Questions</h2>
        <template v-for="(faq, index) of moduleData.faqs" :key="`faq-${index}`">
            <details class="faq">
                <summary class="faq-q">{{ faq.q }}</summary>
                <p class="faq-a">{{ faq.a }}</p>
            </details>
        </template>
      </div>
    </template>
    <template v-else>
        <p>Unable to load data</p>
    </template>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import ContactForm from '@/components/ContactForm.vue';

const route = useRoute();
const moduleData = ref(null);

async function loadModule(routeName) {
  try {
    const mod = await import(`@/content/${routeName}.js`);
    moduleData.value = mod.default;
  } catch (err) {
    console.error('Failed to load module:', err);
    moduleData.value = null;
  }
}

onMounted(() => {
  loadModule(route.name);
});

watch(
  () => route.name,
  (newName, oldName) => {
    if (newName !== oldName) {
      loadModule(newName);
    }
  }
);
</script>

<style scoped>
.page {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
  background-color: var(--primary-color);
}

.page-content {
  flex: 1 1 400px;
  max-width: 600px;
}

.page-content h1 {
  font-size: 2rem;
  color: var(--light-color);
  margin-bottom: 1rem;
  font-weight: 700;
}

.card-list {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-top: 1rem;
}
.list-icon {
  height: 1.5rem;
  color: var(--secondary-color);
}
.list-text {
    color: var(--light-color);
    font-size: 14px;
}
.bottom-content {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    margin-left: 1rem;
    @media (max-width: 840px) {
        margin-left: 0.125rem;
        padding: 0.5rem;
    }
}
.content-contact-form {
    min-width: 350px;
    box-shadow: 2px 2px 2px var(--light-grey);
    border: 1px solid var(--light-grey);
    height: fit-content;
    position: sticky;
    top: 85px;
}
.header-contact-form, .content-contact-form {
    @media (max-width: 840px) {
        display: none;
    }
}
.title {
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
  font-weight: 700;
  margin-top: 1.5rem;
  @media (max-width: 840px) {
        font-size: 1rem;
        line-height: 1.5;
    }
}
.subtitle {
  font-size: 1.25rem;
  color: var(--primary-color);
  margin-bottom:0.25rem;
  font-weight: 600;
  margin-top: 0.5rem;
  @media (max-width: 840px) {
        font-size: 0.9rem;
        line-height: 1.5;
    }
}
.text {
    padding: 0.5rem;
    text-align: justify ;
    line-height: 1.75;
    @media (max-width: 840px) {
        font-size: 0.9rem;
        line-height: 1.5;
    }
}
.faqs {
    padding: 2rem;
}
.faq {
    border: 1px solid var(--light-grey);
    padding: 1rem;
    border-radius: 0.5rem;
    margin-top: 0.5rem;
}
.faq-q {
    color: var(--primary-color);
    font-weight: 600;
    cursor: pointer;
    @media (max-width: 840px) {
        font-size: 0.9rem;
        line-height: 1.5;
    }
}
.faq-q::marker {
    color: var(--primary-light-color);
}
.faq[open] .faq-q {
    color: var(--secondary-color);
}
.faq[open] .faq-q::marker {
    color: var(--primary-color);
}
.faq-a {
    padding-left: 1rem;
    line-height: 1.75;
    @media (max-width: 840px) {
        font-size: 0.9rem;
        line-height: 1.5;
    }
}
.ulist {
    margin-left: 2rem;
    padding: 0.5rem;
}
.ulist-item {
    margin-top: 0.5rem;
    line-height: 1.75;
    text-align: justify;
    @media (max-width: 840px) {
        font-size: 0.9rem;
        line-height: 1.5;
    }
}
.table {
    border-collapse: collapse;
}
.thead-th, .tbody-td {
    text-align: center;
    border: 1px solid var(--dark-color);
    word-break: break-all;
}
.thead-th {
    font-weight: 700;
    @media (max-width: 840px) {
        font-size: 0.8rem;
    }
}
.tbody-td {
    padding: 0.5rem;
    @media (max-width: 840px) {
        padding: 0.125rem;
        font-size: 0.8rem;
    }
}
</style>