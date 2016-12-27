module.exports = {
  ReadyToStart = 'Ready to start!',
  Bye = 'Okay, bye!',
  NoNSFW = 'This channel does not allow NSFW commands, enable them first with `setnsfw`',
  OnlyOwner = 'This command is only for the bot owner.',
  MasterOnly = '**This is a master user only command**, ask the bot owner to add you as a master user if you really think you should be able to use this command.',
  AskForSetLevel = 'Ask the server owner to modify your level with `setlevel`.',
  GuildOnly = 'This command cannot be used in DM, invite the bot to a server and try this command again.',
  NoPermissionDM = 'You have no permission to run this command in DM, you probably tried to use restricted commands that are either for master users only or only for server owners.',
  GatewayConnectionResumed = 'Connection to the Discord gateway has been resumed.',
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
  ReplyCheckErrorLog (e) {
    return `Reply check error, ${e}`
  },
  PermissionError (e) {
    return `Permission error: ${e}`
  },
  NoPermission (commands, cmd, r, reason) {
    return `You have no permission to run this command!\nYou need level ${commands[cmd].level}, you have level ${r}\n${reason}`
  },
  PrefixError (e) {
    return `Prefix error: ${e}`
  },
  WelcomeUser (s) {
    return `Welcome ${s.member.username} to ${s.guild.name}!`
  },
  WelcomeUserDM (s) {
    return `Welcome to ${s.guild.name}! Please enjoy your stay!`
  }
}