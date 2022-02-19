const express = require('express');
const router = express.Router();

const passport = require('passport');

router.get('/', (req, res, next) => {
    res.render('index');
});

router.get('/signup', (req, res, next) => {
  res.render('signup');
});

router.post('/signup', passport.authenticate('local-signup', {
  successRedirect: '/patient_list',
  failureRedirect: '/signup',
  failureFlash: true
})); 

//Sign-in
router.get('/signin', (req, res, next) => {
    res.render('signin');
});

router.get('/signin', (req, res, next) => {
  res.render('signin');
});

router.post('/signin', passport.authenticate('local-signin', {
  successRedirect: '/patient_list',
  failureRedirect: '/signin',
  failureFlash: true
}));

router.get('/patient_list', isAuthenticated, (req, res, next) => {
  res.render('patient_list');
});

router.get('/logout', (req, res, next) => {
  req.logout();
  res.redirect('/');
})

function isAuthenticated(req, res, next) {
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect('/')
}

module.exports = router;