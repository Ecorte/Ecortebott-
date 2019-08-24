const Discord = require("discord.js");
const client = new Discord.Client({ disableEveryone: true });

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
  if (msg.content === "ping") msg.reply("Pong!");
  if (msg.content === "everyone") msg.channel.send("@everyone , Salut");
  if (msg.content === "noteveryone")
    msg.channel.send("@everyone (noteveryone) , Salut");
});

client.login("NjEzMDQwODM1Njg0MDczNTA2.XWGkdA.es76brx0Ky0lk9e8bVbFgGRhr0c");
