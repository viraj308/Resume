import "./interests.css";

export default function Interests() {
  return (
    <div id="interests" className="interests">
      <div className="container">
        <h2 className="interests__heading">Interests</h2>
        <p className="interests__para">
          I enjoy most of my spare time looking after art and painting. I
          traveled a lot and like outdoors adventures as much as cooking and
          indoor times with my family. My latest hobby is woodworking, I spent a
          large amount of time looking at technics and designing furnitures.
        </p>
        <div className="volunter__section">
          <h4 className="volunter__heading">Volunteering</h4>
          <div className="volunteer__text">
            <h4>festival street runner</h4>
            <p className="blue-color">march 2019 - march 2022</p>
            <p>HK Walls, Hong Kong, Hong Kong S.A.R.</p>
            <p className="runner__text">
              Non-profit arts organisation that aims to promote street art and
              create opportunities for artists to showcase their talent through
              the medium of street art and street culture
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
