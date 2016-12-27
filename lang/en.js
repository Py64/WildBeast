module.exports = {
  ReadyToStart = 'Ready to start!',
  Bye = 'Okay, bye!',
  NoNSFW = 'This channel does not allow NSFW commands, enable them first with `setnsfw`',
  OnlyOwner = 'This command is only for the bot owner.',
  VersionCheckFailed (err) {
    return `Version check failed, ${err}`
  },
  VersionCheck (res) {
    return `Version check: ${res}`
  },
  LoggedInAs (bot) {
    return `Logged in as ${bot.User.username}#${bot.User.discriminator} (ID: ${bot.User.id}) and serving ${bot.Users.length} users in ${bot.Guilds.length} servers.`
  },
  Executing (c) {
    return `Executing <${c.message.resolveContent()}> from ${c.message.author.username}`
  },
  CommandErrorLog (commands, cmd, e) {
    return `Command error, thrown by ${commands[cmd].name}: ${e}`
  },
  CommandError (e) {
    codetag = '```'
    return `An error occured while trying to process this command, you should let the bot author know. \n${codetag}${e}${codetag}`
  },
  WaitBeforeUse (y) {
    return `Wait ${Math.round(y)} more seconds before using that again.`
  },
}