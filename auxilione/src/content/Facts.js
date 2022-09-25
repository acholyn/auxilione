import Card from "../Card";
import HaveYouEver from "./HaveYouEver";

export default function Facts() {
  return (
    <section>
      <hr className="card-separator"></hr>
      <Card
        title="Facts about energy broker commission"
        additionalContentClasses={`more-padding columnar`}
        content={
          <>
            <Card
              title={<span className="blue">Disclosure</span>}
              hasBackground={true}
              content={[
                `When appointed as your agent, the broker must avoid a conflict of interest.  Being paid a commission from a supplier is a conflict and must be declared to you, and of course the precise amount.  You must give your informed consent to such commission.

If this does not happen they have breached their duty of fiduciary care to you.

Also many brokers state they are 'paid by the supplier' however this is always proved to be mis-leading, with the customer paying pound-for-pound by means of an uplift unknowingly applied to their contract rates.

In many cases brokers insist on receiving their commission (as much as 80%) upfront.  This provides a further conflict when acting for you, their client.`,
              ]}
            />
            <Card
              title={<span className="blue">Hard Sales Calls</span>}
              hasBackground={true}
              content={[
                `Some brokers have call centres whereby they constantly call businesses in order to gain sales, with some clients reporting multiple calls on the same day from the same broker.

Never agree to contract terms over the phone, always ask for it to be in writing so that you can properly understand it.

Verbal contracts often cause issues as a copy of the call is rarely available to the customer immediately afterwards, or at any point after.

There is so much to understand in an energy contract it is not possible in a telephone call to properly absorb the key facts, let alone the detailed information, to give an informed decision and agreement.

These should be avoided at all costs.`,
              ]}
            />
            <Card
              title={<span className="blue">Letters of Authority</span>}
              hasBackground={true}
              content={[
                `Brokers will ask you to sign a Letter of Authority (LoA).  Be careful what this says and do not just sign it. 

You are giving away legal powers to a stranger - someone who is not part of your business or directly controlled by you.

Do you want them to be able to financially commit your business without your knowledge?  If not, be sure to remove any wording that says the broker can 'enter into agreements on our behalf'.

The LoA should allow a broker to undertake and perform his role, and nothing more.

If in doubt, always ask for clarification.`,
              ]}
            />
          </>
        }
      />
      <hr className="card-separator"></hr>
      <HaveYouEver />
    </section>
  );
}
