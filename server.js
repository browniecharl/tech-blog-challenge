const express = require('express');
const path = require('path');
const exphbs = require('express-handelbars');
const controller = require('./controllers');
const sequelize = require('./config/connection');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);