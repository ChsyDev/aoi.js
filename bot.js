const Aoijs = require("aoi.js")

const bot = new Aoijs.Bot({
  sharding: false, //true or false 
  shardAmount: 2, //Shard amount 
  mobile: false, //true or false - Discord Mobile Status
  //dbhToken: "API KEY", Remove // if using, get an API Key from their Server
  token: "TOKEN", //Discord Bot Token
  prefix: ["PREFIX"], //Change PREFIX to your Prefix
  autoUpdate: false // set to true if version should be updated automatically after a package update
})

bot.status({
    text: "TEXT 1",
    type: "PLAYING",
    time: 12
  })
  
  bot.status({
    text: "TEXT 2",
    type: "WATCHING",
    time: 12
  })
bot.onMessage() // Allows Commands to Executed

bot.command({
name: "ping", 
code: `🏓 Pong! \`$ping\`` 
})
bot.command({
    name: "embed",
    code: `
    $title[This Is A Slick Embed!]
    $description[This Is A Description]
    $addfield[This Is A None Inline Field;Yes;inline no]
    $addfield[This Is A Inline Field;Yes;inline yes]
    $color[RANDOM]
    $addTimestamp
    $footer[This Is A Slick Footer]
    `
})
