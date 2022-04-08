const express = require('express');

const routes = require('./controllers');

const sequelize = require('./config/connection');

const exphbs = require('express-handlebars');

const helpers = require('./utils/helpers');

const hbs = exphbs.create({ helpers });

const path = require('path');

const app = express();

const PORT = process.env.PORT || 3001;

const session = require('express-session');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'idk',
    cookie: {
      expires: 20 * 50 * 100
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};
app.use(express.json());

app.use(session(sess));

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', hbs.engine);

app.set('view engine', 'handlebars');

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Listening!'));
});