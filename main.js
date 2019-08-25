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
    msg.delete().then(console.log(`Message Delete`));
  }
  if (cmd === `${PREFIX}role`) {
    const channel = client.channels.find(r => r.name === "ecorte-logs");
    const role = msg.guild.roles.find(r => r.name === args[0]);
    if (!role) return msg.channel.send("This role does not exist");
    if (msg.member.roles.find(r => r.name === args[0])) {
      msg.member.roles.remove(role);
      msg.channel.send(`Role: ${role} removed from ${msg.author}.`);
      channel.send(`Role: ${role} removed from ${msg.author}.`);
    } else {
      msg.member.roles.add(role);
      msg.channel.send(`Role: ${role} added to ${msg.author}.`);
      channel.send(`Role: ${role} added to ${msg.author}.`);
    }
  }
});

client.login(TOKEN);
