import passport from 'passport';
const LocalStrategy = require('passport-local').Strategy;

import User from '../models/User';

/* Attaches user.id to req.session.passport.user */
passport.serializeUser((user, done) => {
  done(null, user.id);
});

/* Attaches user to req.user */
passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

/**
 * Sign in using Email and Password.
 */
passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
  console.log('passport authenticating..');
  User.findOne({ email: email.toLowerCase() }, (err, user) => {
    if (err) { return done(err); }
    if (!user) {
      return done(null, false, { msg: `Email ${email} not found.` });
    }
    console.log("Found user!");
    user.comparePassword(password, (err, isMatch) => {
      if (err) { return done(err); }
      if (isMatch) {
        console.log("password match!");
        return done(null, user);
      }
      return done(null, false, { msg: 'Invalid email or password.' });
    });
  });
}));
