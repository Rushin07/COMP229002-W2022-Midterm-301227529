// Author name: Rushin Barvadia
// Student Id: 301227529
// WebApp name: COMP229022-W2022-Midterm-302117529
exports.home = function (req, res, next) {
    res.render('index', { title: 'Home' });
};
