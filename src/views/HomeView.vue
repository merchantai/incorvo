<script setup>
import {
  faWallet,
  faClockFour,
  faPeopleGroup,
  faCity,
  faFileSignature,
  faUser,
  faIndustry,
  faBuildingWheat,
  faTrademark,
  faCircleCheck,
  faFaceSmile,
  faUserTie,
} from '@fortawesome/free-solid-svg-icons'
</script>

<template>
  <div class="hero">
    <div class="hero-content">
      <h1>The Simplest way to Incorporate your company in India</h1>
      <h2>
        Begin your journey as a business owner with us — From business planning to registration, we
        provide the resources and support you need to turn your vision into a thriving enterprise.
      </h2>
    </div>
    <div class="hero-image-wrapper">
      <img class="hero-image" src="@/assets/images/decoration/hero.webp" alt="hero image" />
    </div>
  </div>
  <div class="benifits">
    <div class="benifits-card">
      <font-awesome-icon class="benifits-icon" :icon="faWallet" />
      <div class="benifits-content">
        <h3 class="benifits-title">Reasonable</h3>
        <p class="benifits-text">Low price with professional service delivery</p>
      </div>
    </div>
    <div class="benifits-card">
      <font-awesome-icon class="benifits-icon" :icon="faClockFour" />
      <div class="benifits-content">
        <h3 class="benifits-title">Support</h3>
        <p class="benifits-text">99% of services will be delivered on time</p>
      </div>
    </div>
    <div class="benifits-card">
      <font-awesome-icon class="benifits-icon" :icon="faPeopleGroup" />
      <div class="benifits-content">
        <h3 class="benifits-title">Ratings</h3>
        <p class="benifits-text">One of the best rated services from customers</p>
      </div>
    </div>
  </div>
  <div class="services">
    <h2 class="services-sub-title">Our Services</h2>
    <h3 class="services-main-title">We Provide Best Quality Services</h3>
    <div class="services-cards-container">
      <div class="services-card">
        <p class="services-name">Pvt Ltd Company Registration</p>
        <div class="services-link">
          <font-awesome-icon class="services-link-icon" :icon="faCity" />
          <router-link class="services-link-name" to="/startup/Pvt-Ltd-Company-Registration">Know More</router-link>
        </div>
      </div>
      <div class="services-card">
        <p class="services-name">GST Registration Online</p>
        <div class="services-link">
          <font-awesome-icon class="services-link-icon" :icon="faFileSignature" />
          <router-link class="services-link-name" to="/gst/GST-Registration-Online">Know More</router-link>
        </div>
      </div>
      <div class="services-card">
        <p class="services-name">LLP Registration Online</p>
        <div class="services-link">
          <font-awesome-icon class="services-link-icon" :icon="faFileSignature" />
          <router-link class="services-link-name" to="/startup/LLP-Registration-Online">Know More</router-link>
        </div>
      </div>
      <div class="services-card">
        <p class="services-name">One Person Company Registration</p>
        <div class="services-link">
          <font-awesome-icon class="services-link-icon" :icon="faUser" />
          <router-link class="services-link-name" to="/startup/OPC-Registration-Online">Know More</router-link>
        </div>
      </div>
      <div class="services-card">
        <p class="services-name">MSME Registration</p>
        <div class="services-link">
          <font-awesome-icon class="services-link-icon" :icon="faIndustry" />
          <router-link class="services-link-name" to="/registrations/MSME-Registration">Know More</router-link>
        </div>
      </div>
      <div class="services-card">
        <p class="services-name">IEC Registration</p>
        <div class="services-link">
          <font-awesome-icon class="services-link-icon" :icon="faIndustry" />
          <router-link class="services-link-name" to="/registrations/IEC-Registration">Know More</router-link>
        </div>
      </div>
      <div class="services-card">
        <p class="services-name">FSSAI Registration</p>
        <div class="services-link">
          <font-awesome-icon class="services-link-icon" :icon="faBuildingWheat" />
          <router-link class="services-link-name" to="/registrations/FSSAI-Registration">Know More</router-link>
        </div>
      </div>
      <div class="services-card">
        <p class="services-name">Income Tax Return Filing</p>
        <div class="services-link">
          <font-awesome-icon class="services-link-icon" :icon="faFileSignature" />
          <router-link class="services-link-name" to="/income-tax/Income-Tax-Return-Filing">Know More</router-link>
        </div>
      </div>
      <div class="services-card">
        <p class="services-name">Trademark Registration</p>
        <div class="services-link">
          <font-awesome-icon class="services-link-icon" :icon="faTrademark" />
          <router-link class="services-link-name" to="/intellectual-property/Trademark-Registration">Know More</router-link>
        </div>
      </div>
    </div>
  </div>
  <div class="price">
    <h2 class="price-sub-title">Our Plans & Pricing</h2>
    <h3 class="price-main-title">Choose Our Best Plan</h3>
    <div class="price-card-container">
      <div class="price-card">
        <div class="card-content">
          <h4 class="price-card-title">Pvt Ltd Company Registration</h4>
          <div class="price-card-list">
            <font-awesome-icon class="price-list-icon" :icon="faCircleCheck" />
            <p class="price-list-text">DSC - 2 Nos. (2yrs validity)</p>
          </div>
          <div class="price-card-list">
            <font-awesome-icon class="price-list-icon" :icon="faCircleCheck" />
            <p class="price-list-text">Director Identification Number - 2 Nos.</p>
          </div>
          <div class="price-card-list">
            <font-awesome-icon class="price-list-icon" :icon="faCircleCheck" />
            <p class="price-list-text">Sole Proprietorship Registration</p>
          </div>
          <div class="price-card-list">
            <font-awesome-icon class="price-list-icon" :icon="faCircleCheck" />
            <p class="price-list-text">Incorporation of Pvt Ltd Company</p>
          </div>
          <div class="price-card-list">
            <font-awesome-icon class="price-list-icon" :icon="faCircleCheck" />
            <p class="price-list-text">PAN & TAN for the Company</p>
          </div>
          <div class="price-card-list">
            <font-awesome-icon class="price-list-icon" :icon="faCircleCheck" />
            <p class="price-list-text">Current Account Opening - ICICI Bank</p>
          </div>
        </div>
        <div class="card-cta">
          <router-link class="card-apply-cta" :to="{name: 'Pvt-Ltd-Company-Registration'}">Apply Now</router-link>
          <p class="card-tc">* T&C Apply</p>
        </div>
      </div>
      <div class="price-card">
        <div class="card-content">
          <h4 class="price-card-title">LLP Registration Online</h4>
          <div class="price-card-list">
            <font-awesome-icon class="price-list-icon" :icon="faCircleCheck" />
            <p class="price-list-text">DSC - 2 Nos. (2yrs validity)</p>
          </div>
          <div class="price-card-list">
            <font-awesome-icon class="price-list-icon" :icon="faCircleCheck" />
            <p class="price-list-text">DPIN - 2 Nos.</p>
          </div>
          <div class="price-card-list">
            <font-awesome-icon class="price-list-icon" :icon="faCircleCheck" />
            <p class="price-list-text">Name Approval for LLP</p>
          </div>
          <div class="price-card-list">
            <font-awesome-icon class="price-list-icon" :icon="faCircleCheck" />
            <p class="price-list-text">Preparation of LLP Agreement</p>
          </div>
          <div class="price-card-list">
            <font-awesome-icon class="price-list-icon" :icon="faCircleCheck" />
            <p class="price-list-text">Incorporation of LLP</p>
          </div>
          <div class="price-card-list">
            <font-awesome-icon class="price-list-icon" :icon="faCircleCheck" />
            <p class="price-list-text">Form-3 Filing</p>
          </div>
          <div class="price-card-list">
            <font-awesome-icon class="price-list-icon" :icon="faCircleCheck" />
            <p class="price-list-text">PAN & TAN for the LLP</p>
          </div>
          <div class="price-card-list">
            <font-awesome-icon class="price-list-icon" :icon="faCircleCheck" />
            <p class="price-list-text">Current Account Opening - ICICI Bank</p>
          </div>
        </div>
        <div class="card-cta">
          <router-link class="card-apply-cta" :to="{name: 'LLP-Registration-Online'}">Apply Now</router-link>
          <p class="card-tc">* T&C Apply</p>
        </div>
      </div>
      <div class="price-card">
        <div class="card-content">
          <h4 class="price-card-title">Sole Proprietorship Registration</h4>
          <div class="price-card-list">
            <font-awesome-icon class="price-list-icon" :icon="faCircleCheck" />
            <p class="price-list-text">MSME Registration Certificate</p>
          </div>
          <div class="price-card-list">
            <font-awesome-icon class="price-list-icon" :icon="faCircleCheck" />
            <p class="price-list-text">GST Registration Certificate</p>
          </div>
          <div class="price-card-list">
            <font-awesome-icon class="price-list-icon" :icon="faCircleCheck" />
            <p class="price-list-text">Current Account Opening - ICICI Bank</p>
          </div>
        </div>
        <div class="card-cta">
          <router-link class="card-apply-cta" :to="{name: 'Sol-Proprietorship-Registration'}">Apply Now</router-link>
          <p class="card-tc">* T&C Apply</p>
        </div>
      </div>
    </div>
  </div>
  <div class="about-container">
    <div class="about-left">
      <img src="@/assets/images/decoration/about-us.svg" alt="Who are we" class="about-img" />
    </div>
    <div class="about-right">
      <h3 class="about-sub-title">Who We Are?</h3>
      <h2 class="about-title">About Incorve</h2>
      <p class="about-text">
        Kanakkupillai.com is an online platform of Govche India Private Limited, a virtual
        accountancy company managed by specialized panel of Business Analysts, Company Secretaries,
        Chartered Accountants, Corporate Lawyers and Financial Professionals Headquartered in
        Chennai, Tamil Nadu. With a group of dedicated and skilled professionals we are uniquely
        positioned in the established and emerging markets by rendering quality services right from
        the creation of plan for setting up the business to fulfill all the legal and regulatory
        requirements.
      </p>
      <div class="about-icon-container">
        <div class="about-icon">
          <font-awesome-icon :icon="faFaceSmile" class="about-icon-image" />
          <p class="about-icon-text">Guaranteed Satisfaction</p>
        </div>
        <div class="about-icon">
          <font-awesome-icon :icon="faUserTie" class="about-icon-image" />
          <p class="about-icon-text">Expert CA/CS Assistance</p>
        </div>
      </div>
      <router-link :to="{name: 'about-us'}" class="about-cta">Know More Details</router-link>
    </div>
  </div>
  <div class="choose">
    <h3 class="choose-sub-title">Why Choose Us</h3>
    <h2 class="choose-main-title">What makes Us Different</h2>
    <div class="choose-container">
      <div class="choose-left">
        <div class="feature-content">
          <img src="@/assets/images/icons/tax.webp" alt="" class="feature-img" />
          <h3 class="feature-title">300+ Services</h3>
          <p class="feature-text">Relax at home, we take care of Tax/Compliance</p>
        </div>
        <div class="feature-content">
          <img src="@/assets/images/icons/reasonable.webp" alt="" class="feature-img" />
          <h3 class="feature-title">Reasonable</h3>
          <p class="feature-text">competitive price with professional service delivery</p>
        </div>
        <div class="feature-content">
          <img src="@/assets/images/icons/chat.webp" alt="" class="feature-img" />
          <h3 class="feature-title">Customer Satisfaction</h3>
          <p class="feature-text">Prioritize client satisfaction and expectations at every step</p>
        </div>
      </div>
      <div class="choose-middle">
        <img src="@/assets/images/decoration/our-usp.svg" alt="" class="choose-image" />
      </div>
      <div class="choose-right">
        <div class="feature-content">
          <img src="@/assets/images/icons/google.webp" alt="" class="feature-img" />
          <h3 class="feature-title">Google Reviews</h3>
          <p class="feature-text">99% of Customers rated us 5* in Google.</p>
        </div>
        <div class="feature-content">
          <img src="@/assets/images/icons/time.webp" alt="" class="feature-img" />
          <h3 class="feature-title">Turn Around Time</h3>
          <p class="feature-text">99% of services will be delivered on within timeline</p>
        </div>
        <div class="feature-content">
          <img src="@/assets/images/icons/compliance.webp" alt="" class="feature-img" />
          <h3 class="feature-title">Compliance</h3>
          <p class="feature-text">We manage 99.9% of compliance within due date</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
}

.hero-content {
  flex: 1 1 400px;
  max-width: 600px;
}

.hero-content h1 {
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
  font-weight: 700;
}

.hero-content h2 {
  font-size: 1rem;
  font-weight: 400;
  color: #444;
  text-align: justify;
}

.hero-image-wrapper {
  flex: 1 1 400px;
  max-width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-image {
  width: 100%;
  height: auto;
  max-height: 500px;
  object-fit: contain;
  display: block;
}

.benifits {
  width: 100%;
  padding: 1rem 2rem;
  background-color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  @media (max-width: 680px) {
    flex-direction: column;
  }
}

.benifits-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  @media (max-width: 680px) {
    width: 410px;
  }
}

.benifits-icon {
  color: var(--secondary-light-color);
  height: 50px;
}

.benifits-title {
  font-size: 1rem;
  font-weight: bold;
  color: var(--secondary-light-color);
}

.benifits-text {
  font-size: 1rem;
  color: var(--secondary-light-color);
}

.services {
  margin: 0 auto;
  margin-top: 2rem;
  padding: 1rem 2rem;
}
.services-sub-title {
  color: var(--primary-light-color);
  font-size: 1.5rem;
  font-weight: 400;
  text-align: center;
}
.services-main-title {
  color: var(--primary-color);
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
}
.services-cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  place-items: center;
  max-width: 1024px;
  margin: 0 auto;
  margin-top: 2rem;
  gap: 1rem;
}
.services-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  width: 300px;
  height: 130px;
  box-shadow: 2px 2px 2px var(--primary-light-color);
  border: var(--border-thin-primary-light);
  border-radius: var(--radius-large);
}
.services-card:hover {
  border-color: var(--secondary-color);
  box-shadow: 2px 2px 2px var(--secondary-light-color);
  background-color: color-mix(in srgb, var(--secondary-light-color) 10%, transparent);
}
.services-link {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
}
.services-link-icon {
  height: 30px;
  color: var(--secondary-color);
}
.services-link-name {
  text-decoration: none;
  width: 100px;
  color: var(--primary-light-color);
  text-align: center;
  font-size: 0.8rem;
  padding: 0.2rem;
}
.services-link-name:hover {
  text-align: center;
  font-size: 0.8rem;
  cursor: pointer;
  background-color: var(--primary-color);
  color: var(--secondary-light-color);
  padding: 0.2rem;
  border-radius: var(--radius-medium);
}
.services-name {
  font-size: 0.8rem;
  padding-left: 1rem;
}
.price {
  margin: 0;
  margin-top: 2rem;
  padding: 1rem 0;
}
.price-sub-title {
  color: var(--primary-light-color);
  font-size: 1.5rem;
  font-weight: 400;
  text-align: center;
}
.price-main-title {
  color: var(--primary-color);
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
}
.price-card-container {
  width: 100%;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  background-color: var(--primary-color);
  gap: 1rem;
  place-items: center;
  padding: 3rem 1rem;
}
.price-card {
  width: 350px;
  height: 100%;
  background-color: var(--light-color);
  border-radius: var(--radius-large);
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;
}
.price-card-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 1rem;
}
.price-card-list {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-top: 1rem;
}
.price-list-icon {
  height: 1.5rem;
  place-self: center;
  color: var(--secondary-color);
}
.card-cta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  margin-top: 1rem;
}
.card-apply-cta {
  text-decoration: none;
  width: 100px;
  color: var(--primary-light-color);
  text-align: center;
  font-size: 1rem;
  padding: 0.2rem;
}
.card-apply-cta:hover {
  text-align: center;
  cursor: pointer;
  background-color: var(--secondary-light-color);
  color: var(--primary-color);
  padding: 0.2rem;
  border-radius: var(--radius-medium);
}
.card-tc {
  font-size: 0.7rem;
}
.about-container {
  display: flex;
  gap: 1rem;
  padding: 2rem 1rem;
  margin-top: 2rem;
  align-items: center;
  justify-content: center;
  @media (max-width: 720px) {
    flex-wrap: wrap;
  }
}
.about-left {
  flex: 1 1 400px;
  max-width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.about-img {
  width: 100%;
  object-fit: contain;
  display: block;
}
.about-right {
  width: 50%;
  @media (max-width: 720px) {
    width: 100%;
  }
}
.about-sub-title {
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  width: fit-content;
  background-color: rgba(var(--primary-color-rgb), 0.1);
  color: var(--primary-color);
  border-radius: var(--radius-large);
}
.about-title {
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.8;
  color: var(--primary-color);
}
.about-text {
  text-align: justify;
  line-height: 1.7;
}
.about-icon-container {
  display: flex;
  gap: 1rem;
  align-items: center;
  margin: 1rem 0;
}
.about-icon {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: flex-start;
}
.about-icon-image {
  padding: 0.3rem;
  border: 3px solid var(--primary-color);
  border-radius: 50%;
  height: 20px;
  width: 20px;
  color: var(--secondary-color);
}
.about-icon-text {
  font: 0.6rem;
  font-weight: 600;
}
.about-cta {
  border: none;
  background-color: var(--primary-color);
  color: var(--light-color);
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  border-radius: var(--radius-large);
  margin-top: 1rem;
  cursor: pointer;
  text-decoration: none;
}
.about-cta:hover {
  background-color: var(--primary-light-color);
}
.choose {
  margin: 0;
  margin-top: 2rem;
  padding: 1rem 0;
}
.choose-sub-title {
  color: var(--primary-light-color);
  font-size: 1.5rem;
  font-weight: 400;
  text-align: center;
}
.choose-main-title {
  color: var(--primary-color);
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
}
.choose-container {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 1rem;
  margin-top: 2rem;
}
.choose-left,
.choose-right {
  max-width: 33%;
}
.choose-middle {
  @media (max-width: 720px) {
    display: none;
  }
}
.choose-image {
  width: 100%;
  object-fit: contain;
  display: block;
}
.feature-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
}
.feature-img {
  width: 50px;
}
.feature-title {
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
}
.feature-text {
  font-size: 1rem;
  text-align: center;
}
</style>
