import Card from "../Card";

export default function PartnersAndTeam() {
  return (
    <section>
      <Card
        title={`Through our trusted partners...`}
        content={[
          `We are also able to help with any efficiency and renewable energy projects on your journey to Net Zero. We can organise desk-top and site surveys and set you on the right path to reducing your carbon footprint, as well as helping to reduce your energy consumption.

We can also facilitate projects such as Combined Heat and Power (CHP) installations and solar panels which, for many businesses, have become a key focus on introducing efficiencies to their energy profile and becoming less reliant on the National Grid network during periods of volatility.`,
        ]}
      />
      <hr className="card-separator"></hr>

      <Card
        title={`Meet Our Senior Team`}
        content={
          <div className="senior-partner-wrapper">
            <div className="senior-partner-card">
              <Card
                title={
                  <>
                    <img src="logo.svg" alt="Tony Jordan" />
                    <h5>
                      Tony Jordan <br></br>
                      <small>Senior Partner</small>
                    </h5>
                  </>
                }
                content={
                  <div>
                    Before co-founding AUXILIONE, Tony worked for multiple
                    corporates in the energy industry, including EDF, Statoil
                    and RWE. Working with challenger brands to establish a
                    market presence, and also as an independent consultant, Tony
                    delivers on his passion for bringing openness, honesty and
                    transparency to the utilities sector. As well as looking
                    after major European energy intensive users, his expertise
                    was grounded within wholesale markets, having spent over ten
                    years as a prompt and curve trader and hedging European
                    retail books. More recently Tony has ensured large energy
                    users can now better understand their energy strategy and
                    supplier contracts as well as supporting small challenger
                    suppliers navigate their way through the 2021/22 'energy
                    crisis'.
                    <footer className="footer-links">
                      {" "}
                      <a href="mailto:tony@auxilione.com">&#9993;</a>{" "}
                      <a href="https://www.linkedin.com/in/tonyjordan1/">in</a>{" "}
                    </footer>{" "}
                  </div>
                }
              />
            </div>
            <div className="senior-partner-card">
              <Card
                title={
                  <>
                    <img src="logo.svg" alt="David Roberts" />
                    <h5>
                      David Roberts <br></br>
                      <small>Senior Partner</small>
                    </h5>
                  </>
                }
                content={
                  <div>
                    Before co-founding AUXILIONE, Tony worked for multiple
                    corporates in the energy industry, including EDF, Statoil
                    and RWE. Working with challenger brands to establish a
                    market presence, and also as an independent consultant, Tony
                    delivers on his passion for bringing openness, honesty and
                    transparency to the utilities sector. As well as looking
                    after major European energy intensive users, his expertise
                    was grounded within wholesale markets, having spent over ten
                    years as a prompt and curve trader and hedging European
                    retail books. More recently Tony has ensured large energy
                    users can now better understand their energy strategy and
                    supplier contracts as well as supporting small challenger
                    suppliers navigate their way through the 2021/22 'energy
                    crisis'.
                    <footer className="footer-links">
                      {" "}
                      <a href="mailto:david@auxilione.com">&#9993;</a>{" "}
                      <a href="https://www.linkedin.com/in/david-roberts-2bbbb118/">
                        in
                      </a>{" "}
                    </footer>{" "}
                  </div>
                }
              />
            </div>
          </div>
        }
      />
    </section>
  );
}
