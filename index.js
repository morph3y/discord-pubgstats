const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NjQ3OTkwNTAzNjk4MDcxNTcy.XdqQZw.4L9M06WXzHutUn-j-bcB0Kk26tQ');