import React from "react";
import NewsPage from "../../components/NewsPage/NewsPage";
import PageBanner from "../../components/PageBanner/PageBanner";

const page = () => {
  return (
    <div>
      <PageBanner
        title="News Room"
        breadcrumbs={[{ label: "News & Blogs", href: "/news" }]}
      />
      <NewsPage />
    </div>
  );
};

export default page;
