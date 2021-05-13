import mainCover from "../../../assets/images/main-cover.png";
import Progress from "../../../components/Progress";
import { ReactComponent as LikeIcon } from "../../../assets/icons/Like.svg";
import { ReactComponent as CalendarIcon } from "../../../assets/icons/Calendar.svg";
import './mainInfo.less';

function MainInfo() {
  return (
    <div className="main-info-container">
      <div className="main-info-gradient"></div>
      <img src={mainCover} className="main-info-img" alt="" />
      <div className="main-info-wrapper">
        <div className="main-info-title">Cari Cari</div>
        <div className="main-info-description">Live from their sofa to yours. Get closer to your favorite artists, and never miss out.</div>
      </div>
      <div className="main-info-stats-container">
        <div className="main-info-stats-wrapper">
          <Progress percent={75} format={(percent) => (
            <div className="main-info-stat">
              <LikeIcon />
              <span className="main-info-stat-value">{percent}</span>
              <span className="main-info-stat-title">Label</span>
            </div>
          )}/>
          <Progress percent={0} format={(percent) => (
            <div className="main-info-stat">
              <CalendarIcon />
              <span className="main-info-stat-value">{percent}</span>
              <span className="main-info-stat-title">Label</span>
            </div>
          )}/>
          <Progress percent={0} format={(percent) => (
            <div className="main-info-stat">
              <CalendarIcon />
              <span className="main-info-stat-value">{percent}</span>
              <span className="main-info-stat-title">Label</span>
            </div>
          )}/>
          <Progress percent={0} format={(percent) => (
            <div className="main-info-stat">
              <CalendarIcon />
              <span className="main-info-stat-value">{percent}</span>
              <span className="main-info-stat-title">Label</span>
            </div>
          )}/>
        </div>
      </div>
    </div>
  );
}

export default MainInfo;
