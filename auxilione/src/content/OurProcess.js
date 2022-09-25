import Card from "../Card";

export default function OurProcess() {
  return (
    <Card
      title="Our Process"
      hasTitleDecoration={true}
      content={
        <>
          <p className="fixed-column-split">
            AUXILIONE aim to become a trusted partner to your business.
            <br></br>We want you to think of us when you have a question or
            issue with any of your utilities, but especially your energy.
            <br></br>In recent times, energy markets have shown just how
            volatile they can be - sadly to new extremes. It's vitally important
            that you have a strategy in place to manage such events to limit the
            impact.
          </p>
          <div className="columnar blue">
            <Card
              title="Strategy Setting"
              content="To make sure we can deliver the perfect solution for your business, we listen to your concerns and worries and do a deep dive into the data to deliver a strategy that satisfies your requirements and delivers the optimum solution."
            />
            <Card
              title="Executing the Strategy"
              content="The strategy will be based upon our research and your appetite for risk, and the solution may involve a fixed price purchase, a flexible purchasing strategy or a combination of the two."
            />
            <Card
              title="Ongoing Support"
              content="Whatever the solution, we provide ongoing support with a dedicated Account Manager who will provide regular market reporting covering market activity, news and regulatory changes, as well as being available to advise on all aspects of your utility needs, for the duration of your contract."
            />
            <Card
              title="Validation"
              content="We are also able to provide a validation of your billing for all of your utilities, and to represent you in negotiations with your suppliers."
            />
          </div>
        </>
      }
    />
  );
}
