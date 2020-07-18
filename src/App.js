import React, { Component } from "react";
import { Card, CardWrapper } from "react-swipeable-cards";
import "./App.css";
import Pic1 from "./img/NONAME.jpg";
import Pic2 from "./img/LAVANGOGH.jpg";
import Pic3 from "./img/JEANDEAUX.jpg";
import Pic4 from "./img/NESSHEADS.png";
import Pic5 from "./img/OMARAPOLLO.jpg";
import Pic6 from "./img/SENMORIMOTO.jpg";
import Pic7 from "./img/TULANI.jpg";

import ReactAudioPlayer from "react-audio-player";
import Clip1 from "./music/Noname_clip.mp3";
import Clip2 from "./music/Gogh_clip.mp3";
import Clip3 from "./music/Deaux_clip.mp3";
import Clip4 from "./music/NessHeads_clip.mp3";
import Clip5 from "./music/Apollo_clip.mp3";
import Clip6 from "./music/Morimoto_clip.mp3";
import Clip7 from "./music/tulani_clip.mp3";

import { SocialIcon } from "react-social-icons";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Slider from "@material-ui/lab/Slider";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import background_video from "./DJ_Audio.mp4";
import WebFont from "webfontloader";
import {
  Button,
  Col,
  Row,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CardModal,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import SwitchExample from "./SwitchExample";
import { FaCog, FaMoneyBillWave } from "react-icons/fa";
import Loader from "./Loader";
import AChart from "./AreaChart";
import {
  IoIosMusicalNote,
  IoMdHeadset,
  IoIosMusicalNotes
} from "react-icons/io";
import { IoIosStats } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// https://github.com/ravelinx22/react-swipeable-cards

import { FacebookIcon, LinkedinIcon, TwitterIcon } from "react-share";

WebFont.load({
  google: {
    families: ["Titillium Web:300,400,700", "sans-serif", "Roboto Slab"]
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moreContentAvail: true,
      loggedIn: false,
      value: 50,
      toggledSettings: false,
      toggledStats: false,
      modal: false,
      username: "Crescendo User"
    };
    this.login = this.login.bind(this);
    this.toggleSettings = this.toggleSettings.bind(this);
    this.toggleProfile = this.toggleProfile.bind(this);
    this.toggleStats = this.toggleStats.bind(this);
  }

  notify = () => toast.success("Secret stream added to your collection");

  login() {
    this.setState({ loggedIn: true });
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChange = username => event => {
    this.setState({ [username]: event.target.value });
  };

  toggleSettings() {
    if (this.state.toggledSettings == true) {
      this.setState({ toggledSettings: false });
    } else {
      this.setState({ toggledSettings: true });
    }
  }

  toggleStats() {
    if (this.state.toggledStats == true) {
      this.setState({ toggledStats: false });
    } else {
      this.setState({ toggledStats: true });
    }
  }

  toggleProfile() {
    console.log("toggleProfile called");
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  renderProfile() {
    console.log("gotoProfile called");
    if (this.state.modal == true) {
      console.log("Modal should open!");
      return (
        <div>
          <Modal isOpen={this.state.modal}>
            <ModalHeader toggle={this.toggleProfile}></ModalHeader>
            <ModalBody>
              <CardImg top style={{ width: "100%" }} src={Pic7} />
              <CardBody>
                <CardTitle
                  style={{
                    textAlign: "left",
                    fontWeight: "bold",
                    fontSize: "20px"
                  }}
                >
                  Chai Tulani
                </CardTitle>
                <CardSubtitle style={{ fontSize: "20px" }}>
                  <IoIosMusicalNote />
                  Artist
                </CardSubtitle>
                <CardText>
                  <p style={{ marginTop: "5%" }}>
                    Chai Tulani was born in Nakuru, Kenya and raised in Chicago,
                    IL. Though Tulani moved to the states at only four years
                    old, his culture remains one of the main ingredients of his
                    music. Known for his raspy but soulful voice, Tulani creates
                    a wide variety of music merging genres like reggae, soul,
                    Afro beat and hip-hop.
                  </p>
                  <a style={{ fontWeight: "bold" }}>Genre: </a>
                  <a>Afrobeat, hip-hop, pop</a>
                  <br />
                  <a style={{ fontWeight: "bold" }}>Next Show Near You: </a>
                  <a>TBD </a>
                </CardText>
                <Button
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=chaitulanimanagment@gmail.com&su=Crescendo+User+Inquiry&body=Thank+you+for+choosing+Crescendo!"
                  style={{ width: "100%" }}
                >
                  Contact Tulani
                </Button>
              </CardBody>
            </ModalBody>
          </Modal>
        </div>
      );
    }
  }

  renderStats() {
    if (this.state.toggledStats == true && this.state.loggedIn == true) {
      return (
        <div
          style={{
            marginTop: "2%",
            fontFamily: "Roboto Slab, serif",
            backgroundColor: "#F6F5AE"
          }}
        >
          <h3 style={{ marginLeft: "5px" }}>Welcome, {this.state.username}!</h3>
          <Row style={{ marginLeft: "5px" }}>
            <Col>
              <IoMdHeadset style={{ fontSize: "400%" }} />
              <h5> Total Monthly Listens</h5>
              <h4 style={{ fontWeight: "bold", marginTop: "20%" }}>
                {" "}
                120 Plays <a style={{ color: "green" }}>(+50%)</a>{" "}
              </h4>
            </Col>

            <Col>
              <IoIosMusicalNotes style={{ fontSize: "400%" }} />
              <h5> Total Secret Streams</h5>
              <h4 style={{ fontWeight: "bold", marginTop: "20%" }}>
                {" "}
                200 Streams <a style={{ color: "green" }}>(+75%)</a>
              </h4>
            </Col>

            <Col>
              <FaMoneyBillWave style={{ fontSize: "400%" }} />
              <h5>Total Monthly Revenue</h5>
              <h4 style={{ fontWeight: "bold", marginTop: "20%" }}>
                {" "}
                $250.45 <a style={{ color: "red" }}>(-20.4%) </a>
              </h4>
            </Col>
          </Row>

          <div style={{ marginLeft: "5%", marginTop: "5%" }}>
            <AChart />
          </div>
        </div>
      );
    }
  }

  renderSettings() {
    if (this.state.toggledSettings == true && this.state.loggedIn == true) {
      const value = this.state.value;
      return (
        <div style={{ marginTop: "2%", fontFamily: "Roboto Slab, serif" }}>
          <SwitchExample name="Rap" />
          <SwitchExample name="Hip Hop/R&B" />
          <SwitchExample name="Jazz" />
          <SwitchExample name="Classical" />
          <SwitchExample name="EDM/House" />
          <SwitchExample name="Rock" />
          <SwitchExample name="Pop" />
          <SwitchExample name="Country" />

          <div style={{ backgroundColor: "#F6F5AE", padding: "2%" }}>
            <Typography
              style={{
                width: "75%",
                fontSize: "18px",
                fontFamily: "Roboto Slab, serif",
                marginTop: "1%"
              }}
              id="label"
            >
              Adjust Your Radius:{" "}
              <a style={{ fontWeight: "bold" }}>{value} miles from me</a>{" "}
            </Typography>
            <Slider
              style={{ width: "65%", marginTop: "2%", marginBottom: "5%" }}
              value={this.state.value}
              aria-labelledby="label"
              onChange={this.handleChange}
            />
          </div>
        </div>
      );
    }
  }

  renderCards() {
    if (this.state.loggedIn == true && this.state.username != "artist") {
      return (
        <div className="main">
          <ToastContainer />
          <CardWrapper style={{ fontFamily: "Roboto Slab, serif" }}>
            <Card style={{ backgroundColor: "#C0D6DF" }}>
              <h5
                style={{
                  textAlign: "center",
                  color: "#000000",
                  marginTop: "5%"
                }}
              >
                NONAME
              </h5>
              <img
                onClick={this.toggleProfile}
                style={{ height: "50%", marginLeft: "2%", marginTop: "2%" }}
                src={Pic1}
              />
              <Button
                style={{
                  backgroundColor: "#D8315B",
                  border: "none",
                  marginLeft: "10%",
                  width: "80%",
                  marginTop: "5%",
                  marginBottom: "1%"
                }}
              >
                {" "}
                Support This Artist
              </Button>
              <ReactAudioPlayer
                style={{ marginLeft: "13%", marginTop: "1%" }}
                src={Clip1}
                controls
              />
              <SocialIcon
                style={{ marginLeft: "20%" }}
                url="http://twitter.com/"
              />
              <SocialIcon
                style={{ marginLeft: "2%" }}
                url="http://instagram.com/"
              />
              <SocialIcon
                style={{ marginLeft: "2%" }}
                url="http://soundcloud.com/"
              />
              <SocialIcon
                style={{ marginLeft: "2%" }}
                url="http://spotify.com/"
              />
            </Card>

            <Card
              onSwipe={this.renderNoMoreCards}
              style={{ backgroundColor: "#C0D6DF" }}
            >
              <h5
                style={{
                  textAlign: "center",
                  color: "#000000",
                  marginTop: "5%"
                }}
              >
                TULANI
              </h5>
              <img
                onClick={this.toggleProfile}
                style={{ height: "50%", marginLeft: "2%", marginTop: "2%" }}
                src={Pic7}
              />
              <Button
                onClick={this.notify}
                color="danger"
                style={{
                  backgroundColor: "#D8315B",
                  border: "none",
                  marginLeft: "10%",
                  width: "80%",
                  marginTop: "5%",
                  marginBottom: "5%"
                }}
              >
                {" "}
                Support This Artist
              </Button>
              <ReactAudioPlayer
                style={{ marginLeft: "13%", marginTop: "1%" }}
                src={Clip7}
                controls
              />
              <SocialIcon
                style={{ marginLeft: "20%" }}
                url="http://twitter.com/"
              />
              <SocialIcon
                style={{ marginLeft: "2%" }}
                url="http://instagram.com/"
              />
              <SocialIcon
                style={{ marginLeft: "2%" }}
                url="http://soundcloud.com/"
              />
              <SocialIcon
                style={{ marginLeft: "2%" }}
                url="http://spotify.com/"
              />
            </Card>

            <Card style={{ backgroundColor: "#C0D6DF" }}>
              <h5
                style={{
                  textAlign: "center",
                  color: "#000000",
                  marginTop: "5%"
                }}
              >
                L.A. VanGogh
              </h5>
              <img
                style={{ height: "50%", marginLeft: "2%", marginTop: "2%" }}
                src={Pic2}
              />
              <Button
                onClick={this.notify}
                color="danger"
                style={{
                  backgroundColor: "#D8315B",
                  border: "none",
                  marginLeft: "10%",
                  width: "80%",
                  marginTop: "5%",
                  marginBottom: "1%"
                }}
              >
                {" "}
                Support This Artist
              </Button>
              <ReactAudioPlayer
                style={{ marginLeft: "13%" }}
                src={Clip2}
                controls
              />
              <SocialIcon
                style={{ marginLeft: "20%" }}
                url="http://twitter.com/"
              />
              <SocialIcon
                style={{ marginLeft: "2%" }}
                url="http://instagram.com/"
              />
              <SocialIcon
                style={{ marginLeft: "2%" }}
                url="http://soundcloud.com/"
              />
              <SocialIcon
                style={{ marginLeft: "2%" }}
                url="http://spotify.com/"
              />
            </Card>

            <Card style={{ backgroundColor: "#C0D6DF" }}>
              <h5
                style={{
                  textAlign: "center",
                  color: "#000000",
                  marginTop: "5%"
                }}
              >
                Jean Deaux
              </h5>
              <img
                style={{ height: "50%", marginLeft: "10%", marginTop: "2%" }}
                src={Pic3}
              />
              <Button
                onClick={this.notify}
                color="danger"
                style={{
                  backgroundColor: "#D8315B",
                  border: "none",
                  marginLeft: "10%",
                  width: "80%",
                  marginTop: "5%",
                  marginBottom: "5%"
                }}
              >
                {" "}
                Support This Artist
              </Button>
              <ReactAudioPlayer
                style={{ marginLeft: "13%" }}
                src={Clip3}
                controls
              />
              <SocialIcon
                style={{ marginLeft: "20%" }}
                url="http://twitter.com/"
              />
              <SocialIcon
                style={{ marginLeft: "2%" }}
                url="http://instagram.com/"
              />
              <SocialIcon
                style={{ marginLeft: "2%" }}
                url="http://soundcloud.com/"
              />
              <SocialIcon
                style={{ marginLeft: "2%" }}
                url="http://spotify.com/"
              />
            </Card>

            <Card style={{ backgroundColor: "#C0D6DF" }}>
              <h5
                style={{
                  textAlign: "center",
                  color: "#000000",
                  marginTop: "5%"
                }}
              >
                NESS HEADS
              </h5>
              <img
                style={{ height: "50%", marginLeft: "2%", marginTop: "2%" }}
                src={Pic4}
              />
              <Button
                onClick={this.notify}
                color="danger"
                style={{
                  backgroundColor: "#D8315B",
                  border: "none",
                  marginLeft: "10%",
                  width: "80%",
                  marginTop: "5%",
                  marginBottom: "5%"
                }}
              >
                {" "}
                Support This Artist
              </Button>
              <SocialIcon
                style={{ marginLeft: "20%" }}
                url="http://twitter.com/"
              />
              <SocialIcon
                style={{ marginLeft: "2%" }}
                url="http://instagram.com/"
              />
              <SocialIcon
                style={{ marginLeft: "2%" }}
                url="http://soundcloud.com/"
              />
              <SocialIcon
                style={{ marginLeft: "2%" }}
                url="http://spotify.com/"
              />
              <ReactAudioPlayer
                style={{ marginLeft: "13%" }}
                src={Clip4}
                controls
              />
            </Card>

            <Card style={{ backgroundColor: "#C0D6DF" }}>
              <h5
                style={{
                  textAlign: "center",
                  color: "#000000",
                  marginTop: "5%"
                }}
              >
                OMAR APOLLO
              </h5>
              <img
                style={{ height: "50%", marginLeft: "2%", marginTop: "2%" }}
                src={Pic5}
              />
              <Button
                onClick={this.notify}
                color="danger"
                style={{
                  backgroundColor: "#D8315B",
                  border: "none",
                  marginLeft: "10%",
                  width: "80%",
                  marginTop: "5%",
                  marginBottom: "5%"
                }}
              >
                {" "}
                Support This Artist
              </Button>
              <SocialIcon
                style={{ marginLeft: "20%" }}
                url="http://twitter.com/"
              />
              <SocialIcon
                style={{ marginLeft: "2%" }}
                url="http://instagram.com/"
              />
              <SocialIcon
                style={{ marginLeft: "2%" }}
                url="http://soundcloud.com/"
              />
              <SocialIcon
                style={{ marginLeft: "2%" }}
                url="http://spotify.com/"
              />
              <ReactAudioPlayer
                style={{ marginLeft: "13%" }}
                src={Clip5}
                controls
              />
            </Card>

            <Card style={{ backgroundColor: "#C0D6DF" }}>
              <h5
                style={{
                  textAlign: "center",
                  color: "#000000",
                  marginTop: "5%"
                }}
              >
                SEN MORIMOTO
              </h5>
              <img
                style={{ height: "50%", marginLeft: "22%", marginTop: "2%" }}
                src={Pic6}
              />
              <Button
                onClick={this.notify}
                color="danger"
                style={{
                  backgroundColor: "#D8315B",
                  border: "none",
                  marginLeft: "10%",
                  width: "80%",
                  marginTop: "5%",
                  marginBottom: "5%"
                }}
              >
                {" "}
                Support This Artist
              </Button>
              <SocialIcon
                style={{ marginLeft: "20%" }}
                url="http://twitter.com/"
              />
              <SocialIcon
                style={{ marginLeft: "2%" }}
                url="http://instagram.com/"
              />
              <SocialIcon
                style={{ marginLeft: "2%" }}
                url="http://soundcloud.com/"
              />
              <SocialIcon
                style={{ marginLeft: "2%" }}
                url="http://spotify.com/"
              />
              <ReactAudioPlayer
                style={{ marginLeft: "13%" }}
                src={Clip6}
                controls
              />
            </Card>
          </CardWrapper>
        </div>
      );
    } else {
      return (
        <div style={{ backgroundColor: "#E8E8E8", paddingBottom: "10%" }}>
          <video
            className="videoTag"
            style={{ width: "100%", opacity: "0.9" }}
            autoPlay
            loop
            muted
          >
            <source src={background_video} type="video/mp4" />{" "}
          </video>
          <form
            noValidate
            autoComplete="off"
            style={{ textAlign: "center", fontFamily: "Roboto Slab, serif" }}
          >
            <TextField
              style={{ multilineColor: "#ffffff", width: "50%" }}
              id="standard-name"
              label="Name"
              onChange={this.handleChange("username")}
              margin="normal"
            />
            <br />
            <TextField
              style={{ multilineColor: "#ffffff", width: "50%" }}
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              margin="normal"
            />
          </form>
          <Button
            onClick={this.login}
            style={{
              width: "50%",
              marginLeft: "25%",
              marginTop: "1%",
              borderRadius: "5px",
              padding: "5px",
              fontFamily: "Roboto",
              backgroundColor: "#337ab7",
              color: "#ffffff"
            }}
          >
            Login
          </Button>
        </div>
      );
    }
  }

  render() {
    return (
      <div
        className="container"
        style={{ backgroundColor: "#166088", width: "100%" }}
      >
        <nav style={{ backgroundColor: "#D8315B" }} className="nav">
          <Col xs="5">
            <Button
              onClick={this.toggleSettings}
              style={{ left: "0", backgroundColor: "#577399" }}
            >
              <FaCog />
            </Button>
            <Button
              onClick={this.toggleStats}
              style={{ marginLeft: "5px", backgroundColor: "#577399" }}
            >
              <IoIosStats />
            </Button>
          </Col>
          <Col xs="7">
            <div className="title" style={{ fontWeight: "bold" }}>
              Crescendo
            </div>
          </Col>
        </nav>
        {this.renderProfile()}
        {this.renderSettings()}
        {this.renderStats()}
        {this.renderCards()}
      </div>
    );
  }
}

export default App;
