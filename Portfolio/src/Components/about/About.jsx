import "./about.css"
import Award  from "../../img/award.png"
const About = () => {
  return (
      <div className="about">
          <div className="about-left">
            <div className="about-card bg"></div>
            <div className="about-card">
              <img
                  src="https://images.pexels.com/photos/340152/pexels-photo-340152.jpeg?cs=srgb&dl=pexels-hitesh-choudhary-340152.jpg&fm=jpg"
                  alt="image"
                  className="about-image"
              />
            </div>
          </div>
        <div className="about-right">
          <h1 className="about-title">About Me</h1>
          <p className="about-sub">
            It is a long established fact that a reader will be able to read the content.
          </p>
          <p className="about-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab distinctio doloremque dolorum ducimus eius eligendi eveniet excepturi, exercitationem expedita ipsa minima nihil perferendis quam qui quos sed, sunt tenetur vel.
          </p>
          <div className="about-award">
            <img
                className="img-award"
                src={Award}
                alt="award"
            />
            <div className="award-txt">
              <h4 className="award-title">Award title</h4>
              <p className="award-desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dignissimos doloremque
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About