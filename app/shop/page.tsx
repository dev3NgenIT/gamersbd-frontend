import React from "react";
import AllProducts from "../../components/ShopPage/AllProducts";
import PageBanner from "../../components/PageBanner/PageBanner";

const page = () => {
  return (
    <div>
      <PageBanner
        title="All Products"
        breadcrumbs={[{ label: "All Games", href: "/games" }]}
      />
      <AllProducts />
    </div>
  );
};

export default page;
