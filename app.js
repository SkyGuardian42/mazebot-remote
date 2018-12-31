const express       = require('express'),
      path          = require('path')
      cookieParser  = require('cookie-parser')
      logger        = require('morgan'),
      app           = express()

const routers = {
  index:  require('./routes/index'),
  motors: require('./routes/motors')
}

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', routers.index);
app.use('/motors', routers.motors);




module.exports = app;
