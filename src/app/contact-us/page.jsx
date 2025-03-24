import React from 'react';
import Banner from './_components/section/Banner/Banner';
import ContactInfo from './_components/section/ContactInfo/ContactInfo';
import ContactForm from './_components/section/ContactForm/ContactForm';

export const metadata = {
  title: 'Contact us',
};

export default function ContactUsPage() {
  return (
    <>
      <Banner />
      <ContactInfo />
      <ContactForm />
    </>
  );
}
