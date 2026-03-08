import React from "react";
import TrackOrder from "../../components/TrackOrder/TrackOrder";
import PageBanner from "../../components/PageBanner/PageBanner";

const page = () => {
  return (
    <div>
      <PageBanner
        title="Where's Your Package?"
        breadcrumbs={[{ label: "Track Order", href: "/track-order" }]}
      />
      <TrackOrder />
    </div>
  );
};

export default page;
