const {Telegraf} = require('telegraf')
require('dotenv').config();

const bot = new Telegraf(`${process.env.TELEGRAM_API_TOKEN}`)

bot.launch()

bot.use((ctx) => {
    ctx.reply('hi')
})