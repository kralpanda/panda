const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const superagent = require("superagent");
const chalk = require('chalk');
const fs = require('fs');
const weather = require('weather-js')
const hastebin = require('hastebin-gen');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};
