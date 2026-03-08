import React from "react";
import ContactPage from "../../components/ContactPage/ContactPage";
import PageBanner from "../../components/PageBanner/PageBanner";

const page = () => {
  return (
    <div>
      <PageBanner
        title="Get In Touch"
        breadcrumbs={[{ label: "Contact", href: "/contact" }]}
      />
      <ContactPage />
    </div>
  );
};

export default page;
