const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const config = require('../public/config/details');

const projectData = require('../myWork.json');
const frontendWork = projectData["projects"]["frontend"];
const fullstackWork = projectData["projects"]["fullstack"];
const otherWork = projectData["projects"]["other"];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('portfolio/index', { title: "Justin Weber's Portfolio" });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('portfolio/about', { page: 'About' });
});

/* GET work page. */
router.get('/work', function(req, res, next) {
  res.render('portfolio/work', { page: 'Work', frontendWork: frontendWork, fullstackWork: fullstackWork, otherWork: otherWork });
});

/* GET blog page. */
router.get('/blog', function(req, res, next) {
  res.render('portfolio/blog', { page: 'Blog' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('portfolio/contact', { page: 'Contact' });
});

router.post('/send', function(req, res) {
  const sender = {
    name: req.body.name,
    email: req.body.email
  };
  const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${sender.name}</li>
      <li>Company: ${req.body.company}</li>
      <li>Email: ${sender.email}</li>
      <li>Phone: ${req.body.phone}</li>     
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p> 
  `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: config.username,
      pass: config.password
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: sender.email, // sender address
      bcc: {
        name: sender.name,
        address: sender.email
      },
      to: config.username, // list of receivers
      subject: 'New Request', // Subject line
      html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      console.log(mailOptions);
      res.render('portfolio/contact', {msg: 'Your email has been successfully sent!', sender: mailOptions.bcc.name});
  });
});

module.exports = router;
