import Link from "next/link";
import { useEffect } from "react";

const Collection = () => {
  useEffect(() => {
    const collection = document.querySelector(".fn_cs_collection");
    var items = collection.querySelectorAll(".item");
    var itemsLength = items.length;
    setInterval(function () {
      var numberOne = Math.floor(Math.random() * itemsLength);
      var numberTwo = Math.floor(Math.random() * itemsLength);

      while (numberTwo === numberOne) {
        numberTwo = Math.floor(Math.random() * itemsLength);
      }
      var firstDiv = items[numberOne];
      var secondDiv = items[numberTwo];
      var firstImage = firstDiv.querySelector("input").value;
      var secondImage = secondDiv.querySelector("input").value;
      firstDiv.classList.add("ready");
      secondDiv.classList.add("ready");
      // console.log(firstDiv.querySelector("input").value == firstDiv);
      setTimeout(function () {
        // console.log(secondDiv.querySelector("input").value == firstDiv);
        // firstDiv.querySelector("input").value == secondImage;
        // firstDiv.querySelector(".abs_img").style.backgroundImage =
        //   "url(" + secondImage + ")";
        // // secondDiv.querySelector("input").val(firstImage);
        // secondDiv.querySelector("input").value == firstDiv;
        // console.log(secondDiv.querySelector("input").value);
        // secondDiv.querySelector(".abs_img").style.backgroundImage =
        //   "url(" + firstImage + ")";

        firstDiv.classList.remove("ready");
        secondDiv.classList.remove("ready");
      }, 500);
    }, 2000);
  }, []);

  return (
    <section id="collection">
      <div className="container">
        <h3
          className="fn__maintitle big"
          data-text="Photo Gallery"
          data-align="center"
        >
          Photo Gallery
        </h3>
        <div className="fn_cs_collection">
          <div className="collection_top">
            <div className="item">
              <div className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    data-bg-img="/img/collection/photo_gallary_1.webp"
                  />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="img/collection/photo_gallary_1.webp" />
            </div>
            <div className="item">
              <div className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    data-bg-img="/img/collection/photo_gallary_2.webp"
                  />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="img/collection/photo_gallary_2.webp" />
            </div>
            <div className="item">
              <div className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    data-bg-img="/img/collection/photo_gallary_3.webp"
                  />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="img/collection/photo_gallary_3.webp" />
            </div>
            <div className="item">
              <div className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    data-bg-img="/img/collection/photo_gallary_4.webp"
                  />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="img/collection/photo_gallary_4.webp" />
            </div>
          </div>
          <div className="collection_bottom">
            <div className="item">
              <div className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    data-bg-img="/img/collection/photo_gallary_5.webp"
                  />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="img/collection/photo_gallary_5.webp" />
            </div>
            <div className="item">
              <div className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    data-bg-img="/img/collection/photo_gallary_6.webp"
                  />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="img/collection/photo_gallary_6.webp" />
            </div>
            <div className="item">
              <div className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    data-bg-img="/img/collection/photo_gallary_7.webp"
                  />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="img/collection/photo_gallary_7.webp" />
            </div>
            <div className="item">
              <div className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    data-bg-img="/img/collection/photo_gallary_8.webp"
                  />
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="img/collection/photo_gallary_8.webp" />
            </div>
          </div>
        </div>
        <div className="fn_cs_desc">
          <p>
          With Solasta, you can expect a dynamic and engaging event that will leave you feeling inspired and empowered. From keynote speakers to interactive workshops and networking opportunities, Solasta has something for everyone. You'll have the chance to learn from experts in your field, connect with peers, and explore new ideas and opportunities.
          </p>
          <Link href="/events">
            <a className="metaportal_fn_button">
              <span>View Timeline of Events</span>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Collection;
