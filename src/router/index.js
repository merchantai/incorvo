import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import PagesView from '@/views/PagesView.vue'
import AboutUs from '@/views/AboutUs.vue'
import PrivacyPolicy from '@/views/PrivacyPolicy.vue'
import DisclaimerPolicy from '@/views/DisclaimerPolicy.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/startup/Pvt-Ltd-Company-Registration',
      name: 'Pvt-Ltd-Company-Registration',
      component: PagesView,
    },
    {
      path: '/startup/LLP-Registration-Online',
      name: 'LLP-Registration-Online',
      component: PagesView,
    },
    {
      path: '/startup/OPC-Registration-Online',
      name: 'OPC-Registration-Online',
      component: PagesView,
    },
    {
      path: '/startup/Partnership-Firm-Registration',
      name: 'Partnership-Firm-Registration',
      component: PagesView,
    },
    {
      path: '/startup/Sol-Proprietorship-Registration',
      name: 'Sol-Proprietorship-Registration',
      component: PagesView,
    },
    {
      path: '/startup/Indian-Subsidiary-Company',
      name: 'Indian-Subsidiary-Company',
      component: PagesView,
    },
    {
      path: '/startup/Startup-India-Registration',
      name: 'Startup-India-Registration',
      component: PagesView,
    },
    {
      path: '/registrations/ISO-Registration-Online',
      name: 'ISO-Registration-Online',
      component: PagesView,
    },
    {
      path: '/registrations/MSME-Registration',
      name: 'MSME-Registration',
      component: PagesView,
    },
    {
      path: '/registrations/IEC-Registration',
      name: 'IEC-Registration',
      component: PagesView,
    },
    {
      path: '/registrations/FSSAI-Registration',
      name: 'FSSAI-Registration',
      component: PagesView,
    },
    {
      path: '/registrations/Shop-Establishment-License',
      name: 'Shop-Establishment-License',
      component: PagesView,
    },
    {
      path: '/registrations/Professional-Tax-Registration',
      name: 'Professional-Tax-Registration',
      component: PagesView,
    },
    {
      path: '/registrations/Digital-Signature-Certificate',
      name: 'Digital-Signature-Certificate',
      component: PagesView,
    },
    {
      path: '/gst/GST-Registration-Online',
      name: 'GST-Registration-Online',
      component: PagesView,
    },
    {
      path: '/gst/GST-LUT-Filing',
      name: 'GST-LUT-Filing',
      component: PagesView,
    },
    {
      path: '/gst/GST-Registration-Cancellation',
      name: 'GST-Registration-Cancellation',
      component: PagesView,
    },
    {
      path: '/gst/GST-Advisory-Services',
      name: 'GST-Advisory-Services',
      component: PagesView,
    },
    {
      path: '/gst/GST-Revocation-Online',
      name: 'GST-Revocation-Online',
      component: PagesView,
    },
    {
      path: '/gst/GST-Return-Filing',
      name: 'GST-Return-Filing',
      component: PagesView,
    },
    {
      path: '/gst/GST-Annual-Return-Filing',
      name: 'GST-Annual-Return-Filing',
      component: PagesView,
    },
    {
      path: '/gst/GST-Notice-Reply',
      name: 'GST-Notice-Reply',
      component: PagesView,
    },
    {
      path: '/income-tax/Income-Tax-Return-Filing',
      name: 'Income-Tax-Return-Filing',
      component: PagesView,
    },
    {
      path: '/income-tax/TDS-Return-Filing',
      name: 'TDS-Return-Filing',
      component: PagesView,
    },
    {
      path: '/income-tax/PF-Return-Filing',
      name: 'PF-Return-Filing',
      component: PagesView,
    },
    {
      path: '/income-tax/ESI-Return-Filing',
      name: 'ESI-Return-Filing',
      component: PagesView,
    },
    {
      path: '/income-tax/PT-Return-Filing',
      name: 'PT-Return-Filing',
      component: PagesView,
    },
    {
      path: '/income-tax/Income-Tax-Notice-Reply',
      name: 'Income-Tax-Notice-Reply',
      component: PagesView,
    },
    {
      path: '/income-tax/ITR-2-Form-Filing',
      name: 'ITR-2-Form-Filing',
      component: PagesView,
    },
    {
      path: '/income-tax/ITR-3-Form-Filing',
      name: 'ITR-3-Form-Filing',
      component: PagesView,
    },
    {
      path: '/income-tax/ITR-4-Form-Filing',
      name: 'ITR-4-Form-Filing',
      component: PagesView,
    },
    {
      path: '/income-tax/ITR-5-Form-Filing',
      name: 'ITR-5-Form-Filing',
      component: PagesView,
    },
    {
      path: '/income-tax/ITR-6-Form-Filing',
      name: 'ITR-6-Form-Filing',
      component: PagesView,
    },
    {
      path: '/income-tax/ITR-7-Form-Filing',
      name: 'ITR-7-Form-Filing',
      component: PagesView,
    },
    {
      path: '/tax-compliance/Annual-Compliance-for-Pvt-Ltd',
      name: 'Annual-Compliance-for-Pvt-Ltd',
      component: PagesView,
    },
    {
      path: '/tax-compliance/Annual-Filing-for-LLP',
      name: 'Annual-Filing-for-LLP',
      component: PagesView,
    },
    {
      path: '/tax-compliance/Nidhi-Company-Compliance',
      name: 'Nidhi-Company-Compliance',
      component: PagesView,
    },
    {
      path: '/tax-compliance/Section-8-Company-Compliance',
      name: 'Section-8-Company-Compliance',
      component: PagesView,
    },
    {
      path: '/tax-compliance/Annual-Compliance-for-One-Person-Company',
      name: 'Annual-Compliance-for-One-Person-Company',
      component: PagesView,
    },
    {
      path: '/tax-compliance/DIR-3-KYC-Filing-Online',
      name: 'DIR-3-KYC-Filing-Online',
      component: PagesView,
    },
    {
      path: '/tax-compliance/Share-Transfer',
      name: 'Share-Transfer',
      component: PagesView,
    },
    {
      path: '/tax-compliance/ADT-1-Filing',
      name: 'ADT-1-Filing',
      component: PagesView,
    },
    {
      path: '/tax-compliance/DPT-3-Filing-Online',
      name: 'DPT-3-Filing-Online',
      component: PagesView,
    },
    {
      path: '/tax-compliance/Add-a-New-Partner-in-LLP',
      name: 'Add-a-New-Partner-in-LLP',
      component: PagesView,
    },
    {
      path: '/tax-compliance/Removal-of-Partner-from-LLP',
      name: 'Removal-of-Partner-from-LLP',
      component: PagesView,
    },
    {
      path: '/tax-compliance/Event-Based-Compliances-for-Companies',
      name: 'Event-Based-Compliances-for-Companies',
      component: PagesView,
    },
    {
      path: '/tax-compliance/Change-in-Object-Clause',
      name: 'Change-in-Object-Clause',
      component: PagesView,
    },
    {
      path: '/tax-compliance/Appointment-and-Resignation-of-Director',
      name: 'Appointment-and-Resignation-of-Director',
      component: PagesView,
    },
    {
      path: '/tax-compliance/Change-in-Name-Clause',
      name: 'Change-in-Name-Clause',
      component: PagesView,
    },
    {
      path: '/tax-compliance/Removal-of-Director',
      name: 'Removal-of-Director',
      component: PagesView,
    },
    {
      path: '/tax-compliance/Change-in-Share-Capital',
      name: 'Change-in-Share-Capital',
      component: PagesView,
    },
    {
      path: '/tax-compliance/Change-in-Registered-Office-Address',
      name: 'Change-in-Registered-Office-Address',
      component: PagesView,
    },
    {
      path: '/tax-compliance/Company-Name-Change',
      name: 'Company-Name-Change',
      component: PagesView,
    },
    {
      path: '/Tax-compliance/Secretarial-Audit',
      name: 'Secretarial-Audit',
      component: PagesView,
    },
    {
      path: '/Tax-compliance/Due-Diligence',
      name: 'Due-Diligence',
      component: PagesView,
    },
    {
      path: '/Tax-compliance/Business-Plan',
      name: 'Business-Plan',
      component: PagesView,
    },
    {
      path: '/Tax-compliance/Virtual-CFO-Services',
      name: 'Virtual-CFO-Services',
      component: PagesView,
    },
    {
      path: '/Tax-compliance/Accounting',
      name: 'Accounting',
      component: PagesView,
    },
    {
      path: '/Tax-compliance/Accounts-Payable-Service',
      name: 'Accounts-Payable-Service',
      component: PagesView,
    },
    {
      path: '/Tax-compliance/Accounts-Receivable-Services',
      name: 'Accounts-Receivable-Services',
      component: PagesView,
    },
    {
      path: '/Tax-compliance/Tax-Audit',
      name: 'Tax-Audit',
      component: PagesView,
    },
    {
      path: '/Tax-compliance/Payroll-Services',
      name: 'Payroll-Services',
      component: PagesView,
    },
    {
      path: '/intellectual-property/Trademark-Registration',
      name: 'Trademark-Registration',
      component: PagesView,
    },
    {
      path: '/intellectual-property/Trademark-Renewal',
      name: 'Trademark-Renewal',
      component: PagesView,
    },
    {
      path: '/intellectual-property/Trademark-Objection',
      name: 'Trademark-Objection',
      component: PagesView,
    },
    {
      path: '/intellectual-property/Trademark-Rectification',
      name: 'Trademark-Rectification',
      component: PagesView,
    },
    {
      path: '/intellectual-property/Trademark-Assignment',
      name: 'Trademark-Assignment',
      component: PagesView,
    },
    {
      path: '/intellectual-property/Patent-Registration',
      name: 'Patent-Registration',
      component: PagesView,
    },
    {
      path: '/intellectual-property/Copyright-Registration',
      name: 'Copyright-Registration',
      component: PagesView,
    },
    {
      path: '/intellectual-property/Design-Registration',
      name: 'Design-Registration',
      component: PagesView,
    },
    {
      path: '/intellectual-property/International-Trademark-Registration',
      name: 'International-Trademark-Registration',
      component: PagesView,
    },
    {
      path: '/intellectual-property/Intellectual-Property-Dispute',
      name: 'Intellectual-Property-Dispute',
      component: PagesView,
    },
    {
      path: '/tntellectual-property/NGO-Registration-Online',
      name: 'NGO-Registration-Online',
      component: PagesView,
    },
    {
      path: '/tntellectual-property/Trust-Registration',
      name: 'Trust-Registration',
      component: PagesView,
    },
    {
      path: '/tntellectual-property/Society-Registration',
      name: 'Society-Registration',
      component: PagesView,
    },
    {
      path: '/tntellectual-property/Section-8-Company-Registration',
      name: 'Section-8-Company-Registration',
      component: PagesView,
    },
    {
      path: '/tntellectual-property/FCRA-Registration',
      name: 'FCRA-Registration',
      component: PagesView,
    },
    {
      path: '/tntellectual-property/80G-and-12A-Registration',
      name: '80G-and-12A-Registration',
      component: PagesView,
    },
    {
      path: '/tntellectual-property/12AA-Registration',
      name: '12AA-Registration',
      component: PagesView,
    },
    {
      path: '/regulatory/NBFC-Registration',
      name: 'NBFC-Registration',
      component: PagesView,
    },
    {
      path: '/regulatory/Takeover-of-NBFC',
      name: 'Takeover-of-NBFC',
      component: PagesView,
    },
    {
      path: '/regulatory/NBFC-Annual-Compliance',
      name: 'NBFC-Annual-Compliance',
      component: PagesView,
    },
    {
      path: '/regulatory/NBFC-Account-Aggregator-License',
      name: 'NBFC-Account-Aggregator-License',
      component: PagesView,
    },
    {
      path: '/regulatory/Funding-in-NBFC',
      name: 'Funding-in-NBFC',
      component: PagesView,
    },
    {
      path: '/regulatory/FFMC-License',
      name: 'FFMC-License',
      component: PagesView,
    },
    {
      path: '/regulatory/Micro-Finance-Company-Registration',
      name: 'Micro-Finance-Company-Registration',
      component: PagesView,
    },
    {
      path: '/regulatory/Housing-Finance-Company-Registration',
      name: 'Housing-Finance-Company-Registration',
      component: PagesView,
    },
    {
      path: '/regulatory/Prepaid-Wallet-License',
      name: 'Prepaid-Wallet-License',
      component: PagesView,
    },
    {
      path: '/regulatory/LMPC-Certificate',
      name: 'LMPC-Certificate',
      component: PagesView,
    },
    {
      path: '/regulatory/Peer-to-Peer-Lending-License',
      name: 'Peer-to-Peer-Lending-License',
      component: PagesView,
    },
    {
      path: '/regulatory/Payment-Bank-License',
      name: 'Payment-Bank-License',
      component: PagesView,
    },
    {
      path: '/regulatory/Payment-Gateway-License',
      name: 'Payment-Gateway-License',
      component: PagesView,
    },
    {
      path: '/regulatory/Mobile-Wallet-License',
      name: 'Mobile-Wallet-License',
      component: PagesView,
    },
    {
      path: '/regulatory/Insurance-Company-License',
      name: 'Insurance-Company-License',
      component: PagesView,
    },
    {
      path: '/regulatory/Insurance-Web-Aggregator-License',
      name: 'Insurance-Web-Aggregator-License',
      component: PagesView,
    },
    {
      path: '/regulatory/Insurance-Broker-License',
      name: 'Insurance-Broker-License',
      component: PagesView,
    },
    {
      path: '/regulatory/Insurance-Surveyors-and-Loss-Assessors-Registration',
      name: 'Insurance-Surveyors-and-Loss-Assessors-Registration',
      component: PagesView,
    },
    {
      path: '/regulatory/Insurance-Marketing-Firm-Registration',
      name: 'Insurance-Marketing-Firm-Registration',
      component: PagesView,
    },
    {
      path: '/regulatory/Insurance-Self-Network-Platform-ISNP',
      name: 'Insurance-Self-Network-Platform-ISNP',
      component: PagesView,
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: AboutUs,
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: PrivacyPolicy,
    },
    {
      path: '/disclaimer-policy',
      name: 'disclaimer-policy',
      component: DisclaimerPolicy,
    }
  ],
  scrollBehavior() {
    return { top: 0 };
  }
})

export default router
