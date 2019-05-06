var exports = module.exports = {}
 
exports.signup = function(req, res) {
 
    res.render('signup');
 
}

exports.signin = function(req, res) {
 
    res.render('signin', {msg: req.flash('error')});
 
}

exports.dashboard = function(req, res) {
     
    // req.user is how you get a reference to the local user
    res.render('dashboard', {username: req.user.username});
    
}

exports.logout = function(req, res) {
 
    req.session.destroy(function(err) {
 
        res.redirect('/');
 
    });
 
}