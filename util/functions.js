const mongoose = require("mongoose");
const { Guild } = require("../models/index");

module.exports = client => {
  client.createGuild = async guild => {
    const merged = Object.assign({ _id: mongoose.Types.ObjectId() }, guild);
    const createGuild = await new Guild(merged);
    createGuild.save().then(g => console.log(`New guild: ${g.guildName}`));
  };
};
