import { Avatar } from "antd";
import Meta from "antd/lib/card/Meta";
import Card from "../../../components/Card";
import flag1 from "../../../assets/images/flag1.png";
import flag2 from "../../../assets/images/flag2.png";
import img1 from "../../../assets/images/review_img1.png";
import img2 from "../../../assets/images/review_img2.png";
import img3 from "../../../assets/images/review_img3.png";
import { ReactComponent as ArrowLeftIcon } from "../../../assets/icons/ArrowWhiteLeft.svg";
import { ReactComponent as ArrowRightIcon } from "../../../assets/icons/ArrowWhiteRight.svg";
import './reviews.less';

function Reviews() {
  return (
    <div className="reviews-container">
      <div className="heading-container">
        <div className="title">Reviews</div>
        <div className="actions">
          <span>1</span>
          <span className="review-total-page">/12</span>
          <ArrowLeftIcon />
          <ArrowRightIcon />
        </div>
      </div>
      <div className="reviews-wrapper">
        <Card className="review-card">
          <div className="review-details">
            <div className="review-user-details">
              <img alt="" src={img1} />
              <div className="review-user-info">
                <div>Hellen Jummy</div>
                <div>
                  <img alt="" src={flag1} />
                  <span>Palo Alto, CA</span>
                </div>
              </div>
            </div>
            <div className="review-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing.
            </div>
          </div>
        </Card>
        <Card className="review-card">
          <div className="review-details">
            <div className="review-user-details">
              <img alt="" src={img2} />
              <div className="review-user-info">
                <div>Isaac Oluwatemilorun</div>
                <div>
                  <img alt="" src={flag2} />
                  <span>Palo Alto, CA</span>
                </div>
              </div>
            </div>
            <div className="review-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing.
            </div>
          </div>
        </Card>
        <Card className="review-card">
          <div className="review-details">
            <div className="review-user-details">
              <img alt="" src={img3} />
              <div className="review-user-info">
                <div>Hellen Jummy</div>
                <div>
                  <img alt="" src={flag1} />
                  <span>Palo Alto, CA</span>
                </div>
              </div>
            </div>
            <div className="review-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing.
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Reviews;
