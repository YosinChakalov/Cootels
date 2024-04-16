import { useState } from "react";
import Housepart_1 from "./assets/meritt-thomas-u-Hb93V6IWI-unsplash 1.png";
import Housepart_2 from "./assets/meritt-thomas-u-Hb93V6IWI-unsplash 2.png";
import Housepart_3 from "./assets/meritt-thomas-u-Hb93V6IWI-unsplash 3.png";
import house_1 from "./assets/image 13.png";
import glasses_img from "./assets/image 21.png";
import food_img from "./assets/image 18.png";
import mans_img from "./assets/image 11.png";
import woman_img from "./assets/image 10.png";
import house_2 from "./assets/image 9.png";
import woman_photo from "./assets/Ellipse 1.png";
import arrow_down from "./assets/Arrow - Down 2.png";
import arrow_up from "./assets/Arrow - Up.png";
import facebook_icon from "./assets/facebook.png";
import inst_icon from "./assets/Group (2).png";
import twitter_icon from "./assets/Group (1).png";
import "./App.css";

function App() {
  return (
    <>
      <div className="Head_main">
        <h1>Cootels</h1>
        <ul>
          <li>Rooms</li>
          <li>Reservations</li>
          <li>Contacts</li>
        </ul>
        <button className="head_button">Get Started</button>
      </div>
      <div className="section_one">
        <div className="section_one_left">
          <h1>Nature, Warmth, and Beauty in One Space</h1>
          <p>
            One place to release all the stress, bring back happines, and get
            back to nature. We provide the best room and nature for you. Come
            visit us anytime you want.
          </p>
          <button>Reservation</button>
        </div>
        <div className="section_one_right">
          <img src={Housepart_1} alt="" />
          <img src={Housepart_2} alt="" className="house_center" />
          <img src={Housepart_3} alt="" />
        </div>
      </div>
      <div className="section_two">
        <div className="section_two_left">
          <img src={house_1} alt="" />
        </div>
        <div className="section_two_right">
          <h1>Cozy and Down to Earth Cootage Hotel in Norway.</h1>
          <p>
            Our Cootage Hotel is an intimate hideway concieved for dicerning
            travelers. It faces directly the unique and spectacular panorama of
            the Hallerbos Jungle.
          </p>
          <p>
            Cootels extends along a private, quiet, and beautiful nature. Stay
            away from crowd and enjoy the cozy and beauty with us.
          </p>
          <button>Learn More</button>
        </div>
      </div>
      <div className="section_three_main">
        <div className="section_three_top">
          <div className="section_three_top_left">
            <h1>Cabin Activities</h1>
            <p>
              Don’t worry to get bored easily in our cabin. We have so many
              cabin activities for you to do it alone or with group. Maybe this
              is the best chance for you to make new friends or even a lover.
            </p>
          </div>
          <div className="section_third_top_right">
            <img src={glasses_img} alt="" />
          </div>
        </div>
        <div className="section_three_bottom">
          <div className="section_three_bottom_left">
            <img src={food_img} alt="" />
          </div>
          <div className="section_three_bottom_right">
            <h1>100% Organic Food</h1>
            <p>
              We served 100% organic, low process and delicious food. We allow
              our guest to have breakfast or dinner request.What ever made your
              taste buds happy.
            </p>
          </div>
        </div>
      </div>
      <div className="section_four">
        <h1>Many Rooms to Choose</h1>
        <p>
          There is a room for every needs. We have room for individuals until
          family size, we also have a cabin for more private experience
        </p>
        <button>Explore more</button>
      </div>
      <div className="section_five">
        <div className="section_five_left">
          <img src={mans_img} alt="" />
          <h2>Single Room</h2>
          <p>
            Best for a brave lone wolf who need comfort and quiet quality time,
            but you still have a chance to meet others.
          </p>
          <h4>Learn more &rarr;</h4>
        </div>
        <div className="section_five_middle">
          <img src={woman_img} alt="" />
          <h2>Double Room</h2>
          <p>
            Best for couple, seek happiness in intimacy without worry of being
            disturbed. Feel the whole world just for you two
          </p>
          <h4>Learn more &rarr;</h4>
        </div>
        <div className="section_five_right">
          <img src={house_2} alt="" />
          <h2>Cootage</h2>
          <p>
            Best for family or group. One cootage can fit up to 5 people. Made
            stronger bond with your family or friends
          </p>
          <h4>Learn more &rarr;</h4>
        </div>
      </div>
      <div className="section_six">
        <div className="section_six_left">
          <p>Start your journey!</p>
          <h1>How to Get My Room?</h1>
          <p>
            You can contact us by phone or email us. Easily tap the contact
            button below and it will take you to our contact point
          </p>
          <button className="contact">Contact us</button>
          <button className="transpar">Explore more room</button>
        </div>
        <div className="section_six_right">
          <div className="div_1">
            <h1>1. Choose a room and date</h1>
            <div className="circle">
              <img src={arrow_down} alt="" />
            </div>
          </div>
          <div className="div_2">
            <div className="div_2_top">
              <h1>2. Check for room availability</h1>
              <div className="circle_2">
                <img src={arrow_up} alt="" />
              </div>
            </div>
            <div className="div_2_bottom">
              <p>
                Contact us via phone or email, ask for availability of you
                choice of room. We might offer you something exciting.
              </p>
            </div>
          </div>
          <div className="div_3">
            <h1>3. Enjoy your room</h1>
            <div className="circle">
              <img src={arrow_down} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="section_seven">
        <h1>Hear From Our Happy Customers</h1>
        <img src={woman_photo} alt="" />
        <p>
          “Great service, great food, great people. The scenery is also
          beautiful, you can do so much activity even with your famility. Worth
          every penny! you should come and see for your self. 5 out of 5! the
          waffle is great!”
        </p>
        <h4>Kirana Dunham</h4>
      </div>
      <div className="section_eight">
        <div className="section_eight_body">
          <div className="section_eight_body_left">
            <h1>Cootels</h1>
            <p>Your Best Private Hideway From Crowd. Back to Nature.</p>
            <div className="section_eight_body_left_icons">
              <img src={twitter_icon} alt="" />
              <img src={inst_icon} alt="" />
              <img src={facebook_icon} alt="" />
            </div>
          </div>
          <div className="section_eight_body_right">
            <div className="section_eight_body_right_one">
              <h2>Rooms</h2>
              <p>Single Room</p>
              <p>Double Room</p>
              <p>Cabin</p>
              <p>Custom Room</p>
            </div>
            <div className="section_eight_body_right_two">
              <h2>Resetvation</h2>
              <p>See the Steps</p>
              <p>Best Time</p>
            </div>
            <div className="section_eight_body_right_three">
              <h2>Contact</h2>
              <p>Our Number</p>
              <p>Our Email</p>
              <p>Our Location</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
