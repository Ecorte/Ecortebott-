// if (cmd === "say") {

exports.run = (client, message, args) => {
  message.channel.send(args.join(" "));
  message.delete().then(console.log("Message Delete"));
};

exports.help = {
  name: "say"
};
