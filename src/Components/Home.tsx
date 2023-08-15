import React from "react";
import "../nav_footer/Nav_bar.css";
import Navbar from "../nav_footer/Nav_bar";
import { Container, Typography } from "@mui/material";
import logoImage from "../Components/ft_home_BG.png";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div
          className="home_body"
          style={{
            backgroundImage: `url(${logoImage})`,
          }}
        ></div>

        <div className="Intro_div"
          style={{
           // Add a transparent background
          }}
        >
          <Container className = "Intro_container"
            maxWidth="md"
          >
            <Typography variant="h2" gutterBottom style={{fontFamily: "Caveat",}}>
              <u>Uncover Your Legacy:</u> <br></br>
              <u>A Journey Through Generations</u>
            </Typography>
            <Typography variant="body2" className="intro_para">
              Welcome to a place that invites you to travel through time, to discover where
              your ancestors began and to find the stories that have shaped your
              family's history. <br></br>
              Introducing <b><u>"Uncover Your Legacy,"</u></b> an
              innovative family tree app that connects different generations and
              brings together the past and the present. <br></br>Picture a world where
              history feels alive, where you can hear the echoes of your
              ancestors in the digital branches of your family tree. With every
              tap, you journey through the pages of time, uncovering layers of
              heritage that have been waiting to be found.
              <b>
                <u>"Uncover Your Legacy,"</u>
              </b>
              is more than just an app; it's a journey of getting to know
              yourself, a way to explore where you come from. You can trace your
              ancestors' path as if you were walking beside them, understanding
              their challenges, celebrating their achievements, and learning
              from their experiences.<br></br> Imagine getting to know your
              great-grandparents understanding what their lives were like, their
              dreams, and the things they believed in. This isn't just about
              names and dates; it's about diving into the stories that have made
              your family's story unique.<br></br> As you move through the generations,
              you might notice similarities that carry on over time shared
              talents, common hopes, and bits of personalities that continue to
              live on. <b><u>"Uncover Your Legacy,"</u></b> helps you feel connected across
              the years, making history feel closer and more personal.<br></br> The app
              is about more than just revisiting the past; it's also about
              preserving it for the future. You can add precious photos, record
              special memories, and share stories that turn the family tree into
              something living and breathing.<br></br> Your contributions become the
              threads that weave together the story of your legacy. This journey
              is better when shared. Invite your family to join you everyone can
              contribute memories, stories, and pieces of the puzzle.<br></br> Every
              memory shared, every story told, adds to the connections that span
              different times. <b><u>"Uncover Your Legacy,"</u></b> offers not only a
              window into your family's history but also a mirror into your own
              identity. It reflects who you are, where you've come from, and the
              wonderful journey that has led to this moment.<br></br> So, take a step
              into the world of <b><u>"Uncover Your Legacy,"</u></b>. Let the stories of
              your ancestors guide you, the connections shape you, and the
              legacy inspire you. The past is calling, the present is welcoming,
              and the future is waiting for your unique chapter in the
              ever-evolving story of time.
            </Typography>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Home;
