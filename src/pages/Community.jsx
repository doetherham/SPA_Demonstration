import { motion } from 'framer-motion';

function Community() {
  return <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}>
    <h1 className="CommunityTitle">Обсуждения</h1>
    <div className="Community">
      <div className="threadParent">
        <a href="/" className="thread">
          <div className="thread-header">
            <img src='./user.png' width={'25px'}></img>
            <p>vantuz</p>•
            <p>1 day ago</p>
          </div>
          <div className="thread-body">
            <p><b>Why it doesn't work</b></p>
            <img src='./image.png'></img>
            <div className="feedback">
              <div><h3>♡ 10</h3></div>
              <div><h3>✉︎ 10</h3></div>
            </div>
          </div>
        </a>
      </div>
            <div className="threadParent">
        <a href="/" className="thread">
          <div className="thread-header">
            <img src='./user.png' width={'25px'}></img>
            <p>vantuz</p>•
            <p>1 day ago</p>
          </div>
          <div className="thread-body">
            <p><b>Why it doesn't work</b></p>
            <img src='./image.png'></img>
            <div className="feedback">
              <div><h3>♡ 10</h3></div>
              <div><h3>✉︎ 10</h3></div>
            </div>
          </div>
        </a>
      </div>
            <div className="threadParent">
        <a href="/" className="thread">
          <div className="thread-header">
            <img src='./user.png' width={'25px'}></img>
            <p>vantuz</p>•
            <p>1 day ago</p>
          </div>
          <div className="thread-body">
            <p><b>Why it doesn't work</b></p>
            <img src='./image.png'></img>
            <div className="feedback">
              <div><h3>♡ 10</h3></div>
              <div><h3>✉︎ 10</h3></div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </motion.div>
}

export default Community