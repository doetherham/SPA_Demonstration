import { motion } from 'framer-motion';
import PreviewImage from '../assets/images/videoPreview.png'
import UserImage from '../assets/images/user.png'

function Videos() {
  return <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }} className='videos'>

    <a className="video" href="#">
      <img src={PreviewImage} className="videoPreview"></img>
      <div className="videoDescription">
        <img src={UserImage}></img>
        <div className="videoTitle">
          <h4>ReactJS in 10 minutes</h4>
          <p>vantuz</p>
          <p>10тыс. просмотров • 1 день назад</p>
        </div>
      </div>
    </a>

    <a className="video" href="#">
      <img src={PreviewImage} className="videoPreview"></img>
      <div className="videoDescription">
        <img src={UserImage}></img>
        <div className="videoTitle">
          <h4>ReactJS in 10 minutes</h4>
          <p>vantuz</p>
          <p>10тыс. просмотров • 1 день назад</p>
        </div>
      </div>
    </a>

    <a className="video" href="#">
      <img src={PreviewImage} className="videoPreview"></img>
      <div className="videoDescription">
        <img src={UserImage}></img>
        <div className="videoTitle">
          <h4>ReactJS in 10 minutes</h4>
          <p>vantuz</p>
          <p>10тыс. просмотров • 1 день назад</p>
        </div>
      </div>
    </a>

    <a className="video" href="#">
      <img src={PreviewImage} className="videoPreview"></img>
      <div className="videoDescription">
        <img src={UserImage}></img>
        <div className="videoTitle">
          <h4>ReactJS in 10 minutes</h4>
          <p>vantuz</p>
          <p>10тыс. просмотров • 1 день назад</p>
        </div>
      </div>
    </a>

    <a className="video" href="#">
      <img src={PreviewImage} className="videoPreview"></img>
      <div className="videoDescription">
        <img src={UserImage}></img>
        <div className="videoTitle">
          <h4>ReactJS in 10 minutes</h4>
          <p>vantuz</p>
          <p>10тыс. просмотров • 1 день назад</p>
        </div>
      </div>
    </a>

    <a className="video" href="#">
      <img src={PreviewImage} className="videoPreview"></img>
      <div className="videoDescription">
        <img src={UserImage}></img>
        <div className="videoTitle">
          <h4>ReactJS in 10 minutes</h4>
          <p>vantuz</p>
          <p>10тыс. просмотров • 1 день назад</p>
        </div>
      </div>
    </a>

    <a className="video" href="#">
      <img src={PreviewImage} className="videoPreview"></img>
      <div className="videoDescription">
        <img src={UserImage}></img>
        <div className="videoTitle">
          <h4>ReactJS in 10 minutes</h4>
          <p>vantuz</p>
          <p>10тыс. просмотров • 1 день назад</p>
        </div>
      </div>
    </a>

    <a className="video" href="#">
      <img src={PreviewImage} className="videoPreview"></img>
      <div className="videoDescription">
        <img src={UserImage}></img>
        <div className="videoTitle">
          <h4>ReactJS in 10 minutes</h4>
          <p>vantuz</p>
          <p>10тыс. просмотров • 1 день назад</p>
        </div>
      </div>
    </a>

    <a className="video" href="#">
      <img src={PreviewImage} className="videoPreview"></img>
      <div className="videoDescription">
        <img src={UserImage}></img>
        <div className="videoTitle">
          <h4>ReactJS in 10 minutes</h4>
          <p>vantuz</p>
          <p>10тыс. просмотров • 1 день назад</p>
        </div>
      </div>
    </a>

    <a className="video" href="#">
      <img src={PreviewImage} className="videoPreview"></img>
      <div className="videoDescription">
        <img src={UserImage}></img>
        <div className="videoTitle">
          <h4>ReactJS in 10 minutes</h4>
          <p>vantuz</p>
          <p>10тыс. просмотров • 1 день назад</p>
        </div>
      </div>
    </a>
  </motion.div>
}

export default Videos
