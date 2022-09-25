import Card from "../Card";

export default function HaveYouEver() {
  return (
    <Card
      title={<span className="blue">Have you ever used an energy broker?</span>}
      additionalContentClasses={`more-padding`}
      content={`If you've used a broker to negotiate your energy procurement contract in the past, then it's possible that you may have been subject to some of the above practices.  Moreover, if you have not paid them directly then you may have been mis-led.  When undertaking new clients, AUXILIONE carefully review your current and previous contracts (for the past six years) to establish whether hidden commissions may be present.  If we find this to be the case, we will advise you on your options to recover these amounts from the broker and supplier concerned.`}
    />
  );
}
