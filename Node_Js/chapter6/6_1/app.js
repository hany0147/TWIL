const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');


// 1. 앱 생성
const app = express();

// 위에서부터 아래 순으로 실행된다는 걸 유념할 필요가 있음.

// 2. 포트 설정
app.set('port', process.env.PORT || 3000); // 서버에 변수를 심는다, 전역변수 느낌


// 3. 미들웨어
// 미들웨어 간에도 순서가 중요함 (성능 문제)

app.use(morgan('dev'));
app.use('/', express.static(__dirname, 'public'));
// app.use('요청경로', express.static('실제 경로'));
app.use(cookieParser('hany'));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: 'hany',
  cookie: {
    httpOnly: true,
  },
  name: 'connect.sid',
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // form을 submit 할 때 (form 파싱), true면 qs, false는 querystring

app.use((res, req, next) => {
  console.log('모든 요청에 실행하고 싶어요!');
  next();
}, (res, req, next) => {
  console.log('1 요청에 실행하고 싶어요!');
  next();
}, (res, req, next) => {
  console.log('2 요청에 실행하고 싶어요!');
  next();
}, (res, req, next) => {
  try {
    console.log('ㅎㅇ');
    next();
  } catch (err) {
    next(err);
  }
});


// 4. 라우터
app.get('/', (req, res) => {
  // req.cookies; // { mycookie: 'test }
  // req.signedCookies;
  // res.cookie('name', encodeURIComponent(name), {
  //   expires: new Date(),
  //   httpOnly: true,
  //   path: '/',
  // })

  // res.clearCookie('name', encodeURIComponent(name), {
  //   httpOnly: true,
  //   path: '/',
  // })
  req.session.id = 'hello';
  // req.body;
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.post('/', (req, res) => {
  res.send('hello express!');
});

app.get('/cathegory/:name', (req, res) => {
  res.send(`hi! ${req.params.name}`)
})

app.get('/about', (req, res) => {
  res.send('hi!')
})

app.get('/hi', (req, res) => {
  res.json({ hello: 'zerocho'});
  console.log('hello zerocho');
})

// app.get('*', (req, res) => {
//   res.send('everybody')
// })

// 4-2 404 커스텀 가능
// 실무에서는 status를 200으로 속여 해커들에게서 보안위협을 없애는 경우가 많다.
app.use((req, res, next) => {
  res.status(404).send('404');
})

// 5. 에러 미들웨어 (인자 4개를 반드시 다 써야함)
app.use((err, req, res, next) => {
  console.error(err);
  res.send('에러났는데, 왠지는 안알랴줌');
})

app.listen(app.get('port'), () => {
  console.log('익스프레스 서버 실행');
});