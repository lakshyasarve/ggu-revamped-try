import Link from "next/link";
// import Layout from "../src/layout/Layout";
// import PageBanner from "../src/layout/PageBanner";
import { Swiper, SwiperSlide } from "swiper/react";
import { hero7Slider } from "../sliderProps";

const StudentCordinators = () => {

    return (
        <section>
            <div className="container">
            {/* <h3
          className="fn__maintitle big"
          data-text="Student Co-ordinators"
          data-align="center"
            >
          Student Co-ordinators
        </h3> */}
        <div className="metaportal_fn_similar student">
            <h3 className="fn__maintitle" data-text="Student Co-ordinators">
            Student Co-ordinators
            </h3>
            <div className="fn_cs_divider">
              <div className="divider">
                <span />
                <span />
              </div>
            </div>

            {/* //Slider New Code */}

    <section id="full_slider">
        <div className="fn_cs_full_slider">
          <Swiper {...hero7Slider} className="swiper-container">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
              <div className="nft__item nft_spacing">
                    <div className="img_holder">
                      <img src="/img/studentCoordinator/student_image.webp" alt="" />
                      <Link href="/nft-single">
                        <a className="full_link" />
                      </Link>
                    </div>
                    <div className="title_holder">
                    <h3 className="fn__maintitle upper" data-text="Yash Gupta">
                      Yash Gupta
                    </h3>
                      <h3 className="fn_title">
                        <a href="#">Overall Co-Ordinator</a>
                      </h3>
                    </div>
                  </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
              <div className="nft__item nft_spacing">
                    <div className="img_holder">
                      <img src="/img/studentCoordinator/student_image.webp" alt="" />
                      <Link href="/nft-single">
                        <a className="full_link" />
                      </Link>
                    </div>
                    <div className="title_holder">
                    <h3 className="fn__maintitle upper" data-text="Sakshi">
                    Sakshi
                    </h3>
                      <h3 className="fn_title">
                        <a href="#">Overall Co-Ordinator</a>
                      </h3>
                    </div>
                  </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
              <div className="nft__item nft_spacing">
                    <div className="img_holder">
                      <img src="/img/studentCoordinator/student_image.webp" alt="" />
                      <Link href="/nft-single">
                        <a className="full_link" />
                      </Link>
                    </div>
                    <div className="title_holder">
                    <h3 className="fn__maintitle upper" data-text="Parag Shrivastav">
                    Parag Shrivastav
                    </h3>
                      <h3 className="fn_title">
                        <a href="#">Socio-Cultural Lead</a>
                      </h3>
                    </div>
                  </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
              <div className="nft__item nft_spacing">
                    <div className="img_holder">
                      <img src="/img/studentCoordinator/student_image.webp" alt="" />
                      <Link href="/nft-single">
                        <a className="full_link" />
                      </Link>
                    </div>
                    <div className="title_holder">
                    <h3 className="fn__maintitle upper" data-text="Angad Singh">
                    Angad Singh
                    </h3>
                      <h3 className="fn_title">
                        <a href="#">Technical Lead</a>
                      </h3>
                    </div>
                  </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
              <div className="nft__item nft_spacing">
                    <div className="img_holder">
                      <img src="/img/studentCoordinator/student_image.webp" alt="" />
                      <Link href="/nft-single">
                        <a className="full_link" />
                      </Link>
                    </div>
                    <div className="title_holder">
                    <h3 className="fn__maintitle upper" data-text="Aman Kumar Singh">
                    Aman Kumar Singh
                    </h3>
                      <h3 className="fn_title">
                        <a href="#">Technical Lead</a>
                      </h3>
                    </div>
                  </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
              <div className="nft__item nft_spacing">
                    <div className="img_holder">
                      <img src="/img/studentCoordinator/student_image.webp" alt="" />
                      <Link href="/nft-single">
                        <a className="full_link" />
                      </Link>
                    </div>
                    <div className="title_holder">
                    <h3 className="fn__maintitle upper" data-text="Janumala Akhilendra">
                    Janumala Akhilendra
                    </h3>
                      <h3 className="fn_title">
                        <a href="#">Website Developer</a>
                      </h3>
                    </div>
                  </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
              <div className="nft__item nft_spacing">
                    <div className="img_holder">
                      <img src="/img/studentCoordinator/student_image.webp" alt="" />
                      <Link href="/nft-single">
                        <a className="full_link" />
                      </Link>
                    </div>
                    <div className="title_holder">
                    <h3 className="fn__maintitle upper" data-text="Vedant Singh">
                    Vedant Singh
                    </h3>
                      <h3 className="fn_title">
                        <a href="#">CSE Tech Team Lead</a>
                      </h3>
                    </div>
                  </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
              <div className="nft__item nft_spacing">
                    <div className="img_holder">
                      <img src="/img/studentCoordinator/student_image.webp" alt="" />
                      <Link href="/nft-single">
                        <a className="full_link" />
                      </Link>
                    </div>
                    <div className="title_holder">
                    <h3 className="fn__maintitle upper" data-text="Rohan Sharma">
                    Rohan Sharma
                    </h3>
                      <h3 className="fn_title">
                        <a href="#">IT Tech Team Lead</a>
                      </h3>
                    </div>
                  </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
              <div className="nft__item nft_spacing">
                    <div className="img_holder">
                      <img src="/img/studentCoordinator/student_image.webp" alt="" />
                      <Link href="/nft-single">
                        <a className="full_link" />
                      </Link>
                    </div>
                    <div className="title_holder">
                    <h3 className="fn__maintitle upper" data-text="Shivam Srivas">
                    Shivam Srivas
                    </h3>
                      <h3 className="fn_title">
                        <a href="#">ECE Tech Team Lead</a>
                      </h3>
                    </div>
                  </div>
              </SwiperSlide>
              
            </div>
          </Swiper>
          {/* <div className="slider_nav">
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
          </div> */}
        </div>
      </section>
{/* 
            //Previous Code
            <div className="metaportal_fn_drops">
              <ul className="grid">
                <li>
                  <div className="nft__item nft_spacing">
                    <div className="img_holder">
                      <img src="/img/studentCoordinator/student_1.webp" alt="" />
                      <Link href="/nft-single">
                        <a className="full_link" />
                      </Link>
                    </div>
                    <div className="title_holder">
                    <h3 className="fn__maintitle upper" data-text="Yash Gupta">
                      Yash Gupta
                    </h3>
                      <h3 className="fn_title">
                        <a href="#">Overall Co-Ordinator</a>
                      </h3>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="nft__item nft_spacing">
                    <div className="img_holder">
                      <img src="/img/studentCoordinator/student_2.webp" alt="" />
                      <Link href="/nft-single">
                        <a className="full_link" />
                      </Link>
                    </div>
                    <div className="title_holder">
                    <h3 className="fn__maintitle upper" data-text="Yash Gupta">
                      Yash Gupta
                    </h3>
                      <h3 className="fn_title">
                        <a href="#">Overall Co-Ordinator</a>
                      </h3>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="nft__item nft_spacing">
                    <div className="img_holder">
                      <img src="/img/studentCoordinator/student_3.webp" alt="" />
                      <Link href="/nft-single">
                        <a className="full_link" />
                      </Link>
                    </div>
                    <div className="title_holder">
                    <h3 className="fn__maintitle upper" data-text="Yash Gupta">
                      Yash Gupta
                    </h3>
                      <h3 className="fn_title">
                        <a href="#">Overall Co-Ordinator</a>
                      </h3>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="nft__item nft_spacing">
                    <div className="img_holder">
                      <img src="/img/studentCoordinator/student_4.webp" alt="" />
                      <Link href="/nft-single">
                        <a className="full_link" />
                      </Link>
                    </div>
                    <div className="title_holder">
                    <h3 className="fn__maintitle upper" data-text="Yash Gupta">
                      Yash Gupta
                    </h3>
                      <h3 className="fn_title">
                        <a href="#">Overall Co-Ordinator</a>
                      </h3>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="nft__item nft_spacing">
                    <div className="img_holder">
                      <img src="/img/studentCoordinator/student_5.webp" alt="" />
                      <Link href="/nft-single">
                        <a className="full_link" />
                      </Link>
                    </div>
                    <div className="title_holder">
                    <h3 className="fn__maintitle upper" data-text="Yash Gupta">
                      Yash Gupta
                    </h3>
                      <h3 className="fn_title">
                        <a href="#">Overall Co-Ordinator</a>
                      </h3>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="nft__item nft_spacing">
                    <div className="img_holder">
                      <img src="/img/studentCoordinator/student_6.webp" alt="" />
                      <Link href="/nft-single">
                        <a className="full_link" />
                      </Link>
                    </div>
                    <div className="title_holder">
                    <h3 className="fn__maintitle upper" data-text="Yash Gupta">
                      Yash Gupta
                    </h3>
                      <h3 className="fn_title">
                        <a href="#">Overall Co-Ordinator</a>
                      </h3>
                    </div>
                  </div>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
        </section>
    );
};

export default StudentCordinators;
