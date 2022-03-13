import { Link } from "react-router-dom";
import FancyBox from "../Components/FancyBox";

function ArticleC() {
  return (
    <div>
      <div className="col-2 mt-3 mb-4 d-flex flex-column">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li class="breadcrumb-item">
              <Link to="/articles">Articles</Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Couples Photo Session
            </li>
          </ol>
        </nav>
      </div>
      <div className="row ps-0 ps-md-5">
        <div className="col-5">
          <FancyBox />
        </div>
        <div className="col-6 ps-0 ps-md-5">
          <h3>Couples Photo Session</h3>
          <p>
            This is one of the most important parts of the photography packages
            I am offering. I usually go for a photo walk with the couple to take
            the best pictures under the best light conditions. cI always check
            the place of the wedding in advance so I find the perfect spots for
            the photo session with each couple.PERFECT LIGHT IS THE KEY I am a
            perfectionist when it comes to the light so I always take in mind
            where we will take the most beautiful sunset pictures. I also
            prepare backup plans in case of bad weather. I always try to make my
            pictures special. Since I love unique angles I don’t only often lie
            on the floor to get another perspective but I also bring my drone.
            Besides that I also ask my customers about their dream picture. With
            my camera equipment and my experimental attitude everything is
            possible. For instance, I used smoke effects during a photo shoot
            with one of my wedding couples to create a dramatic background. On
            another wedding we used sparklers.Now that you and your bae are
            engaged, it’s time to commemorate the momentous occasion with a
            romantic photoshoot. But where do you start? There are so many
            cheesy couples' photos and countless run-of-the-mill shots that it
            can be a challenge to snap a photo that is truly your own. But
            thankfully, you don't have to rely on those predictable poses and
            overdone locations. There are a handful of things you can do to make
            sure your photos turn out perfectly one-of-a-kind and feel right for
            you and your partner. Before you jump into your session, here's what
            you should know about engagement photoshoots. For starters: Location
            Whether you and your significant other are world travelers or would
            rather just Netflix and chill, location is everything for making
            your engagement photos unique. Your Favorite Spot: Have a go-to
            coffee shop where the barista knows both of your orders? Or a
            brewery where you meet for happy hour every week? Use these personal
            spots as inspiration for your engagement shoot to save the memories
            of these places for years to come.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ArticleC;
