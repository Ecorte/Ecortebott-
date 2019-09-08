const { Client, Collection } = require("discord.js");
const { TOKEN } = require("./config");
const client = new Client({ disableEveryone: true });
const fs = require("fs");

require("./util/functions")(client);
client.mongoose = require("./util/mongoose.js");
client.commands = new Collection();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error;
  files.forEach(file => {
    if (!file.endsWith(".js")) return undefined;
    const props = require(`./commands/${file}`);
    const cmdName = file.split(".")[0];
    console.log(`Command ${cmdName} loaded`);
    client.commands.set(cmdName, props);
  });
});

client.on("ready", () => require("./events/ready.js")(client));
client.on("message", msg => require("./events/message.js")(client, msg));
client.on("guildMemberAdd", member => require("./events/guildMemberAdd.js")(client, member));
client.on("guildCreate", guild => require("./events/guildCreate.js")(client, guild));

client.on("error", console.error);
client.on("warn", console.warn);
client.mongoose.init();
client.login(TOKEN);
