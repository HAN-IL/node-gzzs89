const nodemailer = require('nodemailer');

var email = {
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: 'beda2718d74323',
    pass: '124de7dc0be30b'
  }
};

const send = async (option) => {
  nodemailer.createTransport(email).sendMail(option, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log(info);
      return info.response;
    }
  });
};

let data = {
  from: 'stigmah@gmail.com',
  to: 'stigmah@gmail.com',
  subject: '개발자의 품격',
  text: "개발자의 품격 - nodemailer를 이용한 이메일 보내기 구현"
};

send(data);
