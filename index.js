const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = '#';
const token = 'ODM4MTAzNTIyNjMyNDAwOTA2.YI2Ouw.Z1jx_0wyw1Ot4axdYNn5EP28mPc';

bot.on('ready', () => {
    console.log("BOT ist Online!");
})

bot.on('message', (message)=>{
if(!message.content.startsWith(prefix)) return; 
    
if(message.content.startsWith(prefix + "func")){
    //message.channel.send("hi");
    message.reply("THATS A TEST");
}

if(message.content.startsWith(prefix + "hello")){
    message.reply("hello bro");
}

if(message.content.startsWith(prefix + "vote")){
    message.channel.send("*If you want to support us and be a Supporter you can vote for us:*");   
    message.channel.send("**https://top.gg/servers/771423069100965888/vote**");
}

if(message.content.startsWith(prefix + "applyfn")){
    message.channel.send("**-** Fortnite Link: **https://forms.gle/TjEDo39T72292vV38**");
}

if(message.content.startsWith(prefix + "applycs")){
    message.channel.send("**-** CSGO Link: **https://forms.gle/fcsRbxNSinqkCajj9**");
}

if(message.content.startsWith(prefix + "applylol")){
    message.channel.send("**-** LOL Link: **https://forms.gle/fN5HHHJCNGfKoPuX6**");
}

if(message.content.startsWith(prefix + "giveaway")){
    message.channel.send("**We are close to the 100 Votes!** @everyone")
    message.channel.send("*Link: https://top.gg/servers/771423069100965888/vote*");
}

if(message.content.startsWith(prefix + "invite")){
    message.channel.send("https://discord.gg/x9Vr7xjjtB");
}

if(message.content.startsWith(prefix + "cmd")){
    message.channel.send("cmd");
}

if(message.content.startsWith(prefix + "help")){
    message.channel.send("LOOK DM´s")
    message.author.send("**COMMAND LIST**")
}

});

bot.login(process.env.token);



