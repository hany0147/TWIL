const passport = require('passport');
const local = require('./localStrategy');
const kakao = require('./kakaoStrategy');
const User = require('../models/user');

module.exports = () => {
  // 로그인 시, req.session 객체에 어떤 데이터를 저장할 지 정하는 메서드
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  // 각 요청마다 실행됨
  passport.deserializeUser((id, done) => {
    User.findOne({where: { id }})
      .then((user) => done(null, user))
      .catch(err => done(err));
  });
};

// 즉 serializeUser는 사용자 정보 객체에서 ID만 추려 세션에 저장한는 것.
// deserializeUser는 세션에 저장한 아이디를 통해 사용자 정보 객체를 불러오는 곳.

local();
kakao();
  