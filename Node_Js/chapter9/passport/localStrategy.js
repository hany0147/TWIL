const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const User = require('../models/user');

module.exports = () => {
  // 1. 전략 설정
  passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: false,
  }, async (email, password, done) => { // 2. 실제 전략 수행하는 곳  // done: passport.authenticate의 콜백함수
    try{
      const exUser = await User.findOne({ where: { email } });
      if (exUser) {
        const result = await bcrypt.compare(password, exUser.password);
        if (result) {
          done(null, exUser);
        } else {
          done(null, false, { message: '비밀번호가 일치하지 않습니다.' })
        }
      } else {
        done(null, false, { message: '가입되지 않은 회원입니다.' })
      }
    } catch (error) {
      console.error(error);
      done(error);
    }
  }));
};

/**
 * done
 * - passport.authenticate의 콜백함수
 * 첫번째 인수: 서버쪽 에러가 났을 때,
 * 두번째 인수: 성공했을 때, 사용자 정보 넣는 곳. 없다면, 로그인 실패
 * 세번째 인수: 사용자 정의 에러가 발생했을 때 사용
 * - (authError, user, info) => {}
 */