const {Telegraf} = require('telegraf')
require('dotenv').config();

const bot = new Telegraf(`${process.env.TELEGRAM_API_TOKEN}`)

bot.launch()



bot.use((ctx) => {
    
    ctx.replyWithPhoto( {source: `kittens/images (${getRandomInt(5)}).jfif`})
})

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}