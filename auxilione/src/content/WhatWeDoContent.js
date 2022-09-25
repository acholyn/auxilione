import Card from "../Card";
import OurProcess from "./OurProcess";

export default function WhatWeDoContent() {
  return (
    <section>
      <hr className="card-separator"></hr>
      <Card
        title="Managing Energy Together"
        additionalContentClasses={`columnar`}
        content={
          <>
            <Card
              title={<span className="blue">Save Time</span>}
              hasBackground={true}
              content="We take care of your energy needs as your 'Energy Manager' meaning you can concentrate on your key business operations."
            />

            <Card
              title={<span className="blue">Friendly Support</span>}
              hasBackground={true}
              content="We take care of your energy needs as your 'Energy Manager' meaning you can concentrate on your key business operations."
            />

            <Card
              title={<span className="blue">Reporting</span>}
              hasBackground={true}
              content="We take care of your energy needs as your 'Energy Manager' meaning you can concentrate on your key business operations."
            />
          </>
        }
      />
      <OurProcess />
    </section>
  );
}
