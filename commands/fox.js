const { get } = require("snekfetch"); 
const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
message.react('👌');
try {
get('https://randomfox.ca/floof/').then(res => {

return message.channel.send({files: [{attachment: res.body.image}]});
});
} catch(err) {
return message.channel.send(err.stack);
}
}

module.exports.help = {
name: "fox"
}