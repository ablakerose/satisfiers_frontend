import React from "react";
import { Container } from "semantic-ui-react";

const Home = () => (
  <div>
    <Container textAlign="center">
      <h4>Welcome to </h4>
      <h1>Needs and Satisfiers</h1>
    </Container>
    <br></br>
    <br></br>
    <Container textAlign="left">
      <p>
        <small>
          {" "}
          A woman in a village makes ponchos. A peace corp volunteer notices
          that with another machine, instead of making two ponchos in one week
          she could make 20 ponchos. So the volunteer brings her a machine and
          comes back a few months later to observe what he believes will be the
          the huge production of this woman.
        </small>
      </p>
      <i>
        <p>
          <small>
            "Oh, how do you like the machine?"<br></br> "Oh, very nice."{" "}
            <br></br>"And how many ponchos are you making?"
            <br></br>"Well, two ponchos a week." <br></br>"What do you mean? You
            could make much more."
            <br></br>
            "Well, but I don’t need to make more."<br></br> "But why do you make
            just two? What is the machine then for?"<br></br> "Well, I make two,
            but now I have much more time to be with my friends and with my
            kids."
          </small>
          <br></br>
          <br></br>
        </p>
      </i>
      <p>
        --Manfred Max-Neef tells a story about the misunderstanding of poverty.
      </p>
    </Container>
  </div>
);

export default Home;
