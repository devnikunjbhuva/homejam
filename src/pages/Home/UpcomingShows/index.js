import Card from "../../../components/Card";
import img1 from "../../../assets/images/Img1.png";
import img2 from "../../../assets/images/Img2.png";
import img3 from "../../../assets/images/Img3.png";
import img4 from "../../../assets/images/Img4.png";
import { ReactComponent as TicketIcon } from "../../../assets/icons/Ticket.svg";
import { ReactComponent as ArrowIcon } from "../../../assets/icons/ArrowBlue.svg";
import './upcomingShows.less';

function UpcomingShows() {
  return (
    <div className="upcoming-shows-container">
      <div className="heading-container">
        <div className="title">Upcoming Shows</div>
        <div className="actions">
          <div className="view-action">View All</div>
        </div>
      </div>
      <div className="upcoming-shows-wrapper">
        <Card
          className="upcoming-show-card"
          cover={
            <img alt="" src={img1} />
          }
        >
          <div className="upcoming-show-details">
            <div className="upcoming-show-badge">Flok</div>
            <div className="upcoming-show-title">Benny Dayal</div>
            <div className="upcoming-show-actions">
              <div className="upcoming-show-more-info">More Info <ArrowIcon /></div>
              <TicketIcon className="upcoming-show-ticket" />
            </div>
          </div>
        </Card>
        <Card
          className="upcoming-show-card"
          cover={
            <img alt="" src={img2} />
          }
        >
          <div className="upcoming-show-details">
            <div className="upcoming-show-badge">Bollywood</div>
            <div className="upcoming-show-title">Vijay Yesudas</div>
            <div className="upcoming-show-actions">
              <div className="upcoming-show-more-info">More Info <ArrowIcon /></div>
              <TicketIcon className="upcoming-show-ticket" />
            </div>
          </div>
        </Card>
        <Card
          className="upcoming-show-card"
          cover={
            <img alt="" src={img3} />
          }
        >
          <div className="upcoming-show-details">
            <div className="upcoming-show-badge">Flok</div>
            <div className="upcoming-show-title">Andrea Jeremiah</div>
            <div className="upcoming-show-actions">
              <div className="upcoming-show-more-info">More Info <ArrowIcon /></div>
              <TicketIcon className="upcoming-show-ticket" />
            </div>
          </div>
        </Card>
        <Card
          className="upcoming-show-card"
          cover={
            <img alt="" src={img4} />
          }
        >
          <div className="upcoming-show-details">
            <div className="upcoming-show-badge">Flok</div>
            <div className="upcoming-show-title">Shilpa Rao</div>
            <div className="upcoming-show-actions">
              <div className="upcoming-show-more-info">More Info <ArrowIcon /></div>
              <TicketIcon className="upcoming-show-ticket" />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default UpcomingShows;
