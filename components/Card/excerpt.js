import { stripHtml } from "../../util";
import { isString } from "util";

const CardExcerpt = ({ children }) => {
  if (!isString(children))
    throw new Error("Error: CardExcerpt expect a string as a child element.");

  return <p className="card-text text-muted small">{stripHtml(children)}</p>;
};

export default CardExcerpt;
