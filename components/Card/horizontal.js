import CardImage from "./image";

const CardHorizontal = ({ featuredImage, linkProps, children }) => {
  return (
    <div className="row align-items-center">
      <div className="col-md-4">
        {featuredImage && (
          <CardImage img={featuredImage} linkProps={linkProps} />
        )}
      </div>
      <div className="col-md-8">
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
};

export default CardHorizontal;
