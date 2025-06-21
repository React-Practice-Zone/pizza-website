import "../styles/About.css";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";

export function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p>
          Welcome to our family-owned pizzeria, where passion for authentic
          Italian flavors meets modern culinary creativity. Since opening our
          doors in 2015, we've been committed to crafting the perfect pizza
          using time-honored techniques and the freshest ingredients available.
        </p>
        <p>
          Our dough is made fresh daily, using a generations-old recipe that
          calls for a 48-hour fermentation process – creating that perfect
          balance of crispy exterior and soft, airy interior. We source our
          tomatoes from small family farms, our cheese from local dairies, and
          many of our herbs come from our own garden.
        </p>
        <p>
          What truly sets us apart is our commitment to both tradition and
          innovation. While we honor classic recipes that have stood the test of
          time, our seasonal specials showcase creative combinations that push
          the boundaries of what pizza can be.
        </p>
        <p>
          But beyond the food, we're most proud of the warm, welcoming
          atmosphere we've created. Our pizzeria isn't just a place to eat –
          it's a community gathering spot where families create memories,
          friends catch up over slices, and everyone is treated like family.
        </p>
        <p>
          Whether you're a pizza purist or an adventurous eater, we invite you
          to pull up a chair, enjoy a slice, and become part of our story.
        </p>
      </div>
    </div>
  );
}
