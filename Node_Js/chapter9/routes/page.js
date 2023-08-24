const express = require('express');
const { isLoggedIn, isNotLoggedIn } = require('../middlewares')
const { renderProfile, renderJoin, renderMain } = require('../controllers/page');

const router = express.Router();

// 라우터용 미들웨어
router.use((req, res, next) => {
  res.locals.user = req.user;
  res.locals.followerCount = 0;
  res.locals.followingCount = 0;
  res.locals.followingIdList = [];
  next();
})

router.get('/profile', isLoggedIn, renderProfile);
router.get('/join', isNotLoggedIn, renderJoin);
router.get('/', renderMain);

module.exports = router;