/* eslint-disable max-len */

import React from "react";
import { Container, Divider } from "semantic-ui-react";

const About = () => (
  <div>
    <Container textAlign="left"></Container>
    <Container textAlign="center">
      <h1>About</h1>
    </Container>
    <Container textAlign="right"></Container>
    <Container textAlign="justified">
      <b></b>
      <Divider />
      <Container textAlign="left">
        <h4>
          <p>
            <small>
              {" "}
              A woman in a village makes ponchos. A peace corp volunteer notices
              that with another machine, instead of making two ponchos in one
              week she could make 20 ponchos. So the volunteer brings her a
              machine and comes back a few months later to observe what he
              believes will be the the huge production of this woman.
            </small>
          </p>
          <i>
            <p>
              <small>
                "Oh, how do you like the machine?"<br></br> "Oh, very nice."{" "}
                <br></br>"And how many ponchos are you making?"
                <br></br>"Well, two ponchos a week." <br></br>"What do you mean?
                You could make much more."
                <br></br>
                "Well, but I don’t need to make more."<br></br> "But why do you
                make just two? What is the machine then for?"<br></br> "Well, I
                make two, but now I have much more time to be with my friends
                and with my kids."
              </small>
              <br></br>
              <br></br>
            </p>
          </i>
          <p>
            --Manfred Max-Neef tells a story about the misunderstanding of
            poverty.
          </p>
        </h4>
        <br></br>
      </Container>
      <p>
        <p>
          This is an application that offers users a way to visualize our nine
          fundamental human needs and identify activities that serve their
          purpose for satisfying those needs as well as identifying those that
          only pseudo-satisfy them or can actually violate other needs.
        </p>
        <h4>What is Human Scale Development? </h4>
        <p>
          In 1985, Manfred Max-Neef spent a year implementing his Human Scale
          Development framework in Chile to confront an economic, social,
          cultural, and political crisis in Latin America. Plagued by high rates
          of poverty, unemployment, underemployment, escalating housing
          insecurity and high levels of foreign debt ever-straining possible
          solutions, he launched an interdisciplinary team of economists,
          sociologists, psychiatrists, philosophers, political scientists,
          anthropologists, journalists, engineers and lawyers to upend
          traditional economics and development models. Instead of prioritizing
          production and wealth creation as a means to an end, hoping the
          trickle-down effect will maybe meet people’s needs, the project
          implemented a bottom-up approach, to create forms of economic
          organization in which goods empower satisfiers to meet fully and
          consistently fundamental human needs.
        </p>
        <h4>What are Fundamental Human Needs?</h4>
        <p>
          Neef asserts that throughout history and across cultures human-beings
          have had the same finite, few, and classifiable fundamental humans.
          What changes, both over time and among cultures, is the way or the
          means by which the needs are satisfied.
        </p>
        <p>
          {" "}
          The needs are Subsistence, Protection, Affection, Understanding,
          Participation, Idleness, Creation, Identity, and Freedom.
        </p>
        <p>
          {" "}
          People satisfy these needs by being, having, doing and interacting in
          various ways.
        </p>{" "}
        <li>
          <b>
            <i>Violators or destroyers</i>
          </b>{" "}
          are elements of the paradoxical nature. When applied with the
          intention of satisfying a given need, not only do they annihilate the
          possibility of its satisfaction over time, they impair the adequate
          satisfaction of other needs. These are most common around the need for
          Protection. “This need may bring about aberrant human behavior to the
          extent that that its non-satisfaction is associated with fear.”
        </li>{" "}
        <li>
          <b>
            <i>Pseudo-satisfiers</i>
          </b>{" "}
          are elements which generate a false sense of satisfaction of a given
          need. Though not endowed with the aggressiveness of violators or
          destroyers they may on occasion annul, in the not too long term, the
          possibility of satisfying the need they were originally aimed at
          fulfilling. Their main attribute is that they are generally induced
          through propaganda, advertising or other means of persuasion.
        </li>
        <li>
          <b>
            <i>Synergic satisfiers </i>
          </b>
          are those which satisfy a given need and, simultaneously, stimulate
          and contribute to the fulfilment of other needs. They share the
          attribute of being anti-authoritarian in the sense that they
          constitute a reversal of predominant values such as competition and
          coerciveness. (Table 6.)
        </li>{" "}
        <h4>What does it really mean to be wealthy?</h4>{" "}
        <p>
          Applying this framework suggests that wealth is actually based on
          meeting needs rather than the story we have been told that it is how
          much money you have in the bank. Which can be an empowering framework
          for individuals and communities who have been told their whole lives
          that they are poor for not having money. Suddenly, there is a
          framework to that visibilizes existing satisfiers for affection,
          participation and creation within the community generating great
          wealth.{" "}
        </p>
        <h4>How well are your needs being met?</h4>
        <p>
          That is the question this application seeks to answer. Are you
          satisfying your needs? Are you employing pseudo-satisfiers that
          generate a false sense of satisfaction? <br></br> <br></br> <br></br>
        </p>
      </p>
    </Container>
  </div>
);

export default About;
