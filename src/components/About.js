import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { hero6Slider } from "../sliderProps";

const About = () => {
  return (
    <section id="about">
      {/* About Shortcode */}
      <div className="fn_cs_about">
        <div className="left_part">
          <div className="img">
            <div className="img_in" data-bg-img="/img/about/1.jpg">
              <img src="/img/1x1.jpg" alt="" />
            </div>
          </div>
          <div className="bg_overlay">
            <div className="bg_color" />
            <div className="bg_image" data-bg-img="/img/about/bg.jpg" />
          </div>
        </div>
        <div className="right_part">
          <div className="right_in">
            <h3 className="fn__maintitle" data-text="The Rise of Legends">
              The Rise of Legends
            </h3>
            <div className="fn_cs_divider">
              <div className="divider">
                <span />
                <span />
              </div>
            </div>
            <div className="desc">
              <p>
                As the first hero of the Meta Legends, collection has over 9,999
                unique skins drawn from the different missions and challenges he
                faced throughout his life.
              </p>
              <p>
                The artwork has been hand-drawned by Robert Green in the
                traditional anime style and composited by Layla Efiyo.
              </p>
              <p>
                Curabitur pharetra velit eget dignissim varius. In vulputate
                elit at tortor pellentesque, non pulvinar neque consequat.
                Aenean tristique odio in libero tincidunt maximus. Nulla
                pharetra viverra dolor ut blandit. Cras finibus vel tortor eget
                lacinia. Pellentesque interdum elit non lacinia faucibus. Morbi
                nec felis auctor, tincidunt lacus sit amet, iaculis ipsum.
                Phasellus tempus sit amet justo et feugiat. Duis blandit semper
                lorem, egestas euismod ligula pharetra ac. Sed porta lorem eget
                neque bibendum, eget euismod justo mollis.
              </p>
              <p>
                Donec tristique porttitor sem, eget fermentum elit varius nec.
                Donec ut orci ipsum. Morbi efficitur felis eget dapibus
                fermentum. Phasellus sed tellus volutpat, hendrerit leo non,
                sollicitudin neque. Etiam ac lacus quam. Vivamus suscipit nisl
                tellus, at congue odio commodo at. Cras ante enim, sodales at
                pretium et, tempus at libero.
              </p>
            </div>
            <a
              href="https://discord.com/"
              className="metaportal_fn_button"
              target="_blank"
              rel="noreferrer"
            >
              <span>Find us On Discord</span>
            </a>
          </div>
        </div>
      </div>
      {/* !About Shortcode */}
      <div className="container">
        {/* Mint Shortcode */}
        <div className="fn_cs_mint">
          <div className="left_part">
            <h3 className="fn__maintitle" data-text="How to Mint">
              How to Mint
            </h3>
            <div className="fn_cs_divider">
              <div className="divider">
                <span />
                <span />
              </div>
            </div>
            <div className="desc">
              <p>
                As the first hero of the Meta Legends, collection has over 9,999
                unique skins drawn from the different missions and challenges he
                faced throughout his life.
              </p>
              <p>
                The artwork has been hand-drawned by Robert Green in the
                traditional anime style and composited by Layla Efiyo.
              </p>
              <p>
                Curabitur pharetra velit eget dignissim varius. In vulputate
                elit at tortor pellentesque, non pulvinar neque consequat.
                Aenean tristique odio in libero tincidunt maximus. Nulla
                pharetra viverra dolor ut blandit. Cras finibus vel tortor eget
                lacinia. Pellentesque interdum elit non lacinia faucibus. Morbi
                nec felis auctor, tincidunt lacus sit amet, iaculis ipsum.
                Phasellus tempus sit amet justo et feugiat. Duis blandit semper
                lorem, egestas euismod ligula pharetra ac. Sed porta lorem eget
                neque bibendum, eget euismod justo mollis.
              </p>
              <p>
                Donec tristique porttitor sem, eget fermentum elit varius nec.
                Donec ut orci ipsum. Morbi efficitur felis eget dapibus
                fermentum. Phasellus sed tellus volutpat, hendrerit leo non,
                sollicitudin neque. Etiam ac lacus quam. Vivamus suscipit nisl
                tellus, at congue odio commodo at. Cras ante enim, sodales at
                pretium et, tempus at libero.
              </p>
            </div>
            <Link href="/nft-single">
              <a className="metaportal_fn_button">
                <span>How to Mint</span>
              </a>
            </Link>
          </div>
          <div className="right_part">
            {/* Steps Shortcode */}
            <div className="fn_cs_steps">
              <ul>
                <li>
                  <div className="item">
                    <div className="item_in">
                      <h3 className="fn__gradient_title">01</h3>
                      <p>Connect your Wallet</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <div className="item_in">
                      <h3 className="fn__gradient_title">02</h3>
                      <p>Select Your Quantity</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <div className="item_in">
                      <h3 className="fn__gradient_title">03</h3>
                      <p>Confirm The Transaction</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <div className="item_in">
                      <h3 className="fn__gradient_title">04</h3>
                      <p>Receive Your NFT’s</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            {/* !Steps Shortcode */}
            {/* Video Shortcode */}
            <div className="fn_cs_video">
              <img src="/img/video/1.jpg" alt="" />
              <a
                className="popup-youtube"
                href="https://www.youtube.com/embed/7e90gBu4pas"
              >
                <img src="/svg/play.svg" alt="" className="fn__svg" />
              </a>
            </div>
            {/* /Video Shortcode */}
          </div>
        </div>
        {/* !Mint Shortcode */}
      </div>
    </section>
  );
};
export default About;

export const About2 = () => (
  <section id="about2">
    <div className="container small">
    <section id="full_slider">
        <div className="fn_cs_full_slider">
          <Swiper {...hero6Slider} className="swiper-container">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
              <div className="fn_cs_shortabout">
        <div className="about_left">
          <h3 className="fn__maintitle_about" data-text="From The Desk">
            From The Desk
          </h3>
          <div className="fn_cs_divider">
            <div className="divider">
              <span />
              <span />
            </div>
          </div>
          <div className="desc">
            <p>
            EQUILIBRIO is one such event where we celebrate the innovative spirit of our students, who have worked hard to bring their ideas to life and showcase them to the world. Over the years, this fest has grown in size and scope. It has become a platform for the exchange of ideas, for networking and collaboration, and for learning from experts in various fields.
                  With a wide range of events and activities planned, there is something for everyone. Whether anyone is interested in robotics, artificial intelligence, machine learning, or any other cutting-edge technology or any cultural event, they are sure to find something that will pique their interest.
                  I wish all the participants the very best of luck, and I hope that this tech fest will be a memorable experience for everyone involved.
            </p>
          </div>
          <a
            href="https://discord.com/"
            className="metaportal_fn_button"
            target="_blank"
            rel="noreferrer"
          >
            <span>View Events</span>
          </a>
        </div>
        <div className="about_right">
          <div className="abs_img" data-bg-img="/img/about/from_the_desk.webp" />
        </div>
      </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
              <div className="fn_cs_shortabout">
        <div className="about_left">
          <h3 className="fn__maintitle_about" data-text="From The Desk">
            From The Desk
          </h3>
          <div className="fn_cs_divider">
            <div className="divider">
              <span />
              <span />
            </div>
          </div>
          <div className="desc">
            <p>
            It is my pleasure to announce the upcoming college fest, and we are excited to invite you to participate in the event. As the faculty coordinator for this year's fest, I want to encourage all of you to showcase your talents, creativity, and passion for different activities.

                The fest is a great platform to showcase your skills, compete with other students, and have fun with your peers. It is a perfect opportunity to explore new interests and build lasting relationships with other students.

                We are planning to organize a variety of events, including cultural, sports, and technical competitions. We will also have guest lectures, workshops, and interactive sessions to provide you with an enriching experience.

                We invite you to be a part of this year's fest and contribute to making it a grand success. We also request you to spread the word and encourage your fellow students to participate and make the most of this fantastic opportunity.
                Looking forward to seeing you all at the fest!
            </p>
          </div>
          <a
            href="https://discord.com/"
            className="metaportal_fn_button"
            target="_blank"
            rel="noreferrer"
          >
            <span>View Events</span>
          </a>
        </div>
        <div className="about_right">
          <div className="abs_img" data-bg-img="/img/about/registrar.webp" />
        </div>
      </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
              <div className="fn_cs_shortabout">
        <div className="about_left">
          <h3 className="fn__maintitle_about" data-text="From The Desk">
            From The Desk
          </h3>
          <div className="fn_cs_divider">
            <div className="divider">
              <span />
              <span />
            </div>
          </div>
          <div className="desc">
            <p>
            Engineering is all about using science and technology to solve problems and create new solutions that can make life easier, safer, and more efficient. Innovation is what drives the engineering field forward and enables engineers to come up with creative and efficient solutions to complex problems.

                The knowledge provided in the institutes is worth only when it can be turned into reality.  By embracing innovation, engineers can make a significant impact on society and help shape the future.

                EQUILIBRIO is a platform where our students get a chance to showcase their creativity along with amusements. This fest will feature a variety of events, including tech exhibitions, interactive workshops, keynote speeches, and much more.
                We also aim to provide attendees with an opportunity to experience and learn about new technology that they may not have been exposed to otherwise.
                The best part of EQUILIBRIO 2023 is that it has something or the other for everyone irrespective of their fields.
                We extend best of our wishes to all the participants. We heartily welcome all to EQUILIBRIO 2023.
            </p>
          </div>
          <a
            href="https://discord.com/"
            className="metaportal_fn_button"
            target="_blank"
            rel="noreferrer"
          >
            <span>View Events</span>
          </a>
        </div>
        <div className="about_right">
          <div className="abs_img" data-bg-img="/img/about/dean.webp" />
        </div>
      </div>
              </SwiperSlide>
              
            </div>
          </Swiper>
          <div className="slider_nav">
            <a href="#" className="prev">
              <span className="circle" />
              <span className="icon">
                <img src="/svg/down.svg" alt="" className="fn__svg" />
              </span>
              <span className="circle" />
            </a>
            <a href="#" className="next">
              <span className="circle" />
              <span className="icon">
                <img src="/svg/down.svg" alt="" className="fn__svg" />
              </span>
              <span className="circle" />
            </a>
          </div>
        </div>
      </section>
      {/* <div className="fn_cs_shortabout">
        <div className="about_left">
          <h3 className="fn__maintitle" data-text="From The Desk">
            From The Desk
          </h3>
          <div className="fn_cs_divider">
            <div className="divider">
              <span />
              <span />
            </div>
          </div>
          <div className="desc">
            <p>
            EQUILIBRIO is one such event where we celebrate the innovative spirit of our students, who have worked hard to bring their ideas to life and showcase them to the world. Over the years, this fest has grown in size and scope. It has become a platform for the exchange of ideas, for networking and collaboration, and for learning from experts in various fields.
                  With a wide range of events and activities planned, there is something for everyone. Whether anyone is interested in robotics, artificial intelligence, machine learning, or any other cutting-edge technology or any cultural event, they are sure to find something that will pique their interest.
                  I wish all the participants the very best of luck, and I hope that this tech fest will be a memorable experience for everyone involved.
            </p>
          </div>
          <a
            href="https://discord.com/"
            className="metaportal_fn_button"
            target="_blank"
            rel="noreferrer"
          >
            <span>View Events</span>
          </a>
        </div>
        <div className="about_right">
          <div className="abs_img" data-bg-img="/img/about/from_the_desk.webp" />
        </div>
      </div> */}
      {/* <div className="fn_cs_collection_info">
        <h3 className="fn__gradient_title">50,000+</h3>
        <h3
          className="fn__maintitle upper"
          data-text="Total FootFall in Recent Years"
        >
          Total FootFall in Recent Years
        </h3>
        <p>
          There are many variations of passages of lorem ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which {`don't`} look even slightly
          believable.
        </p>
      </div> */}
    </div>
    <div className="fn_cs_video bg">
      <div className="abs_img" data-bg-img="/img/video/home_videooverlay_image.webp" />
      
      <a
        className="popup-youtube"
        href="https://www.youtube.com/watch?v=b9E5_GhMLuw&t=4s&ab_channel=Equilibrio-SOLASTA%2CGGVBilaspur"
      >
        <img src="/svg/play.svg" alt="" className="fn__svg" />
      </a>
    </div>
    {/* <div className="container">
      {/* Steps Shortcode */}
      {/* <div className="fn_cs_steps gap" data-cols={4} data-gap={60}>
        <ul>
          <li>
            <div className="item">
              <div className="item_in">
                <h3 className="fn__gradient_title">01</h3>
                <p>Connect your Wallet</p>
              </div>
            </div>
          </li>
          <li>
            <div className="item">
              <div className="item_in">
                <h3 className="fn__gradient_title">02</h3>
                <p>Select Your Quantity</p>
              </div>
            </div>
          </li>
          <li>
            <div className="item">
              <div className="item_in">
                <h3 className="fn__gradient_title">03</h3>
                <p>Confirm The Transaction</p>
              </div>
            </div>
          </li>
          <li>
            <div className="item">
              <div className="item_in">
                <h3 className="fn__gradient_title">04</h3>
                <p>Receive Your {`NFT’s`}</p>
              </div>
            </div>
          </li>
        </ul>
      </div> */}
      {/* !Steps Shortcode */}
      {/* <div className="fn_cs_join">
        <div className="join_in">
          <h3 className="fn__maintitle upper" data-text="Join Our Community">
            Join Our Community
          </h3>
          <p>
            There are many variations of passages of lorem ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which {`don't`} look even slightly
            believable.
          </p>
          <div className="buttons">
            <a
              href="https://opensea.io/"
              className="metaportal_fn_button"
              target="_blank"
              rel="noreferrer"
            >
              <span>Buy On Opensea</span>
            </a>
            <a
              href="#"
              className="metaportal_fn_button"
              target="_blank"
              rel="noreferrer"
            >
              <span>WhiteList Now</span>
            </a>
          </div>
        </div>
      </div>
    </div>  */}
  </section>
);
