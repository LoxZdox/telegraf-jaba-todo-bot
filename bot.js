const {Telegraf} = require('telegraf')
require('dotenv').config();

const bot = new Telegraf(`${process.env.TELEGRAM_API_TOKEN}`)

bot.launch()

let user = {}

bot.start((ctx)  => {
    ctx.reply("Hello, good to see you. I`m another todo bot, but i also can send you some cats pictures. ^_^\n What is your name?");
    user[ctx.message.from.id] = {state: "get_username"}
})

bot.help((ctx) => {
    ctx.reply("You can use these commands: \n1. /start\n2. /cat\n3. /help\n4. /name\n5. ...");
})

bot.command('cat', (ctx) => {
    ctx.replyWithPhoto( {source: `kittens/images (${getRandomInt(7)}).jfif`})
    console.log(ctx);
});


bot.on('text', (ctx) => {
    console.log(user[ctx.message.from.id].state)
    if( user[ctx.message.from.id].state == "get_username"){
        user[ctx.message.from.id] = {name: ctx.message.text, state: "default"} 
    }
    console.log(user[ctx.message.from.id].state)
});
    
bot.command('name', (ctx) => {
    console.log(user[ctx.message.from.id].state)
    console.log("naming is good")
    ctx.reply(`Your name is: ${user[ctx.message.from.id].name}`)
});

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}