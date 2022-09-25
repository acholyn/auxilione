import "./Card.css";
export default function Card(props) {
  let hasBackground = props.hasBackground;
  let title = props.title;
  let content = props.content;
  let hasTitleDecoration = props.hasTitleDecoration;
  let cardClasses = "card";
  let additionalContentClasses = props.additionalContentClasses;

  if (additionalContentClasses == null) additionalContentClasses = "";

  if (hasBackground) cardClasses = `${cardClasses} lb-background rounded`;

  return (
    <div className={cardClasses}>
      <div>
        <h1 className={`card-title`}>{title}</h1>
        {hasTitleDecoration && <hr className={"title-decoration"}></hr>}
        <div className={`card-content ${additionalContentClasses}`}>
          {content}
        </div>
      </div>
    </div>
  );
}
