const { get } = require("snekfetch"); 
const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
message.react('👌');
try {
get('https://random-d.uk/api/v1/quack').then(res => {

return message.channel.send({files: [{attachment: res.body.url}]});
});
} catch(err) {
return message.channel.send(err.stack);
}
}

module.exports.help = {
name: "duck"
}