import Card from "../Card";

export default function KeepUpToDate() {
  return (
    <Card
      title={
        <>
          <a className="blue" href="http://www.linkedin.com/company/auxilione">
            Keep Up To Date
          </a>
        </>
      }
      hasBackground={true}
      content={
        "We post daily to our LinkedIn page, where you can keep up to date with what's happening in the wholesale markets and the domestic Price Cap - just click the link above."
      }
    />
  );
}
