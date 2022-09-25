import Card from "../Card";

export default function AboutUsContent() {
  return (
    <Card
      title="Independent Energy Consultant"
      additionalContentClasses={`more-padding`}
      content={
        <>
          <section className="columnar">
            <p>
              Created in 2021, combining two independent consultancies,
              AUXILIONE is an independent energy consultancy that helps
              businesses minimise their energy costs and allow them to
              concentrate on their own operations. We also help and advise
              suppliers, brokers (TPIs) and other professional advisors in the
              energy sector.
            </p>

            <p>
              <b>
                Experts with senior partners each having over 25 years industry
                experience.
              </b>
              <br></br>
              We assist businesses, of all sizes, in their energy management and
              procurement. This includes fixed and flexible contract options.
            </p>

            <p>
              <b>Transparency</b>
              <br></br>
              We only operate on a direct-fee basis with our clients and do not
              have any commercial terms with any supplier. Our client Letter of
              Authority (LOA) also stipulates that we must not receive any
              payment or reward from suppliers. This means that we cannot, and
              will not, uplift the contract rates with hidden commissions.
            </p>

            <p>
              <b>An independent consultancy</b>
              <br></br>
              As an independent consultancy AUXILIONE is not tied to any
              supplier and will research the whole market to find you the best
              service at the right price.
            </p>
          </section>
          <h4 className="blue">AUXILIONE - together we are one</h4>
        </>
      }
    />
  );
}
