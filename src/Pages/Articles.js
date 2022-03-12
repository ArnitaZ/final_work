import { Link } from "react-router-dom";
import ArticlesList from "../Components/ArticlesList";

function Articles() {
  return (
    <div>
      <div className="col mt-3 mb-4">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Articles
            </li>
          </ol>
        </nav>
      </div>
      <div className="col">
        <div className="col d-flex mb-5 fill">
          <Link
            to="/articleC"
            className="col-md-4 d-flex align-items-center justify-content-center"
          >
            <img src="/images/europe.jpg" className="img-fluid " alt="..." />
          </Link>

          <ArticlesList
            title="COUPLES"
            description="Now that you and your bae are engaged, it’s time to commemorate the momentous occasion with a romantic photoshoot. But where do you start? There are so many cheesy couples' photos and countless run-of-the-mill shots that it can be a challenge to snap a photo that is truly your own. But thankfully, you don't have to rely on those predictable poses and overdone locations. There are a handful of things you can do to make sure your photos turn out perfectly one-of-a-kind and feel right for you and your partner. Before you jump into your session, here's what you should know about engagement photoshoots. For starters: Location Whether you and your significant other are world travelers or would rather just Netflix and chill, location is everything for making your engagement photos unique. Your Favorite Spot: Have a go-to coffee shop where the barista knows both of your orders? Or a brewery where you meet for happy hour every week? Use these personal spots as inspiration for your engagement shoot to save the memories of these places for years to come."
          />
        </div>
        <div className="col d-flex mb-5">
          <Link
            to="/articleF"
            className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
          >
            <img
              src="/images/asia.jpg"
              className="d-block"
              width="400"
              alt="..."
            />
          </Link>
          <ArticlesList
            title="FAMILY"
            description="A lot of people I talk to say that they’d love to get some great images of their families, but they’re worried about what it will be like. They say they don’t know how to pose, worry that the kids will misbehave and feel like the images they have in their head aren’t possible for their family. Your family photo shoot should be a fun experience in itself. It’s not only an investment of your money but also of your time and let’s face it – who’s got either time or money they can afford to waste? Whether you want the photographs for your own wall or as gifts for the rest of the family, whether your children are small, teens or even furry – the experience should be something remembered with fondness and smiles."
          />
        </div>
        <div className="col d-flex mb-5">
          <Link
            to="/articleW"
            className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
          >
            <img
              src="/images/africa.jpg"
              className="d-block"
              width="400"
              alt="..."
            />
          </Link>
          <ArticlesList
            title="WEDDING"
            description="All brides know that wedding photos are one of the most important parts of the wedding day, so coming up with a must-have wedding photo list should be high on your wedding planning priorities. These are the memories you'll cherish forever and even look back on the very next day (It goes by in a flash, they all say). That's why you want to make sure your photographer nails every photo-op, starting with the getting ready photos all the way through to your (sparkler) exit. Step one to checking off this to-do list is to hire a wedding photographer you're excited about—and put your trust in the professional. You are hiring just that—a professional—who should know what they're doing, after all. They'll have an idea of the must-have wedding shots, but even so, it's nice to have some general knowledge of wedding photography yourself. As your 101 guide, we put together a wedding photo list of the must-have moments to capture—from the pretty detailed shot of your wedding day jewels to the table settings and invitation suite."
          />
        </div>
      </div>
    </div>
  );
}
export default Articles;
