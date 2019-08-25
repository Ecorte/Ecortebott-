const Discord = require("discord.js");
const { TOKEN, PREFIX } = require("./config");
const client = new Discord.Client({ disableEveryone: true });

client.on("ready", () => console.log("Ready"));
client.on("error", console.error);
client.on("warn", console.warn);
client.on("debug", console.log);

client.on("message", msg => {
  if (msg.author.bot) return;
  const args = msg.content.split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if (cmd === `${PREFIX}ping`) msg.reply("Pong!");
  if (cmd === `${PREFIX}say`) {
    msg.channel.send(args.join(" "));
    msg.delete().then(msg => console.log(`Message Delete`));
  }
});

client.login(TOKEN);
