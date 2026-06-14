/** @format */

const { Collection } = require("discord.js");
const MusicBot = require("./src/structures/MusicClient");
const initializeCleanup = require("./src/events/Client/PremiumChecks");
const Dokdo = require("dokdo");
const util = require("./src/utils/util");

const client = new MusicBot();

client.config = require("./src/config.js");
client.util = new util(client);
module.exports = client;

// Connect the bot
client.connect();

// Dokdo (command handler)
client.Jsk = new Dokdo.Client(client, {
  aliases: ["dokdo", "dok", "jsk"],
  prefix: "?",
  owners: ["1130416772168818748"],
});

// Shell environment
process.env.SHELL = process.platform === "win32" ? "powershell" : "bash";

// User collections, color, and emoji
client.userSettings = new Collection();
client.color = "8806CE";
client.emoji = {
  // Music emojis
  music: "<a:white_notes:1515549037208535132> ",
  playing: "<a:playing:1515549656497655950>",
  volumehigh: "<:volume:1515494527152947363>",
  play: "<:resume:1515492125071114433>",
  stop: "<:stop1:1515493047045984336>",
  skip: "<:forward:1515492780300828703>",
  resume: "<:resume:1515492125071114433>",
  join: "<:join:1515552185939660985>",
  leave: "<:leave:1515552417150799966>",
  autoplay: "<:autoplay:1515552650555555971>",
  mute: "<:white_mute:1515553053137440779>",
  volumemiddle: "<:volUp:1515494293148532778>",
  volumelow: "<:volDown:1515493890222723153>",
  shuffle: "<:shuffle:1515493619534925974>",
  rewind: "<:backward:1515491608919933080>",
  queue: "<:queue:1515554246756401232>",
  playlist: "<:_playlist:1515554501820420276>",
  pause: "<:Pause:1515492499722866922>",
  loop: "<:loop:1515493257402908782>",
  forward: "<:forward:1515492780300828703>",
  filter: "<:filters:1515555099404144700>",
  addsong: "<:autoplay:1515552650555555971>",
  replay: "<:loop:1515493257402908782>",

  // Utils emojis
  extra: "<:extra:1414560788147863623>",
  role: "<:roles:1414560860218851399>",
  delete: "<:del:1414557632529825873>",
  left: "<:left:1414556389405102142>",
  right: "<:right:1414557992266760245>",
  tick: "<:yes:1414559141468311562>",
  cross: "<:no:1414557928970780785>",
  dot: "<:dot:1414557898738237440>",
  warn: "<:warn:1414559129854545952>",
  search: "<:search:1414557997639929917>",
  jump: "<:join:1414568242730504255>",
  loading: "<a:loading:1414575770612797478>",
  config: "<:config:1414557557971882089>",
  information: "<:info:1414576372378243164>",
  home: "<:home:1414576814059159572>",
  ignore: "<:ignore:1414559943700516915>",
  profile: "<:profile:1414557967600062506>",
  premium: "<:premium:1414560854417870868>",
  dnd: "<:dnd:1414560782359859361>",
  offline: "<:offline:1414560830304817162>",
  online: "<:online:1414560836160323664>",
  idle: "<:idle:1414560806754058361>",
  voice: "<:voice:1414560889637568522>",
  fun: "<:fun:1414560793533349986>",
  moderation: "<:mod:1414560818548179125>",
  pfp: "<:pfp:1414560848159969350>",
  autoresponder: "<:autoresponder:1312668357199401003>",
  insta: "<:Insta:1414557016340299807>",
  snap: "<:Snap:1414584490818539673>",
  discord: "<:discord:1414585460080115793>",
  welc: "<:welc:1414559135558533131>",
  utility: "<:utility:1414560878426193930>",
  antinuke: "<:anti:1414560776475377784>",
  ticket: "<:ticket:1449343951646625793>",
  counting: "<:counting:1450075735384391680>",
  plus: "<:plus:1450082961545494538>",

  // PR emojis
  ozuma: "<a:xc_boy:1170712305445642260>",
  owner: "<a:Nh_redButterfly:1414576736619855994>",
  dev: "<:OxP:1414559991326834699>",
  admin: "<:Arrkiii:1414560034318450710>",
  staff: "<:Staffs:1414559975208128634>",
  partner: "<:Partners:1414559982602420316>",
  supporter: "<:supporter:1414559911492329160>",
  sponsor: "<:sponsor:1414559918802866237>",
  os: "<:ownerspecial:1414559930865680475>",
  vip: "<:Vips:1414559969067532349>",
  friend: "<:Homies:1414560009119072267>",
  bug: "<:Mods:1414560002701529171>",
  ownerspecial: "<:ownerspecial:1414559930865680475>",
  specialone: "<:special:1414559924947648575>",
  loveone: "<:love:1414559937274843266>",
  arrkiii: "<:arrkiii:1414560034318450710>",

  // Alphabet
  a: "<:A_simper:1211571868956622878>",
  b: "<:B_simper:1211571967015129118>",
  c: "<:C_simper:1211571972014874644>",
  d: "<:D_simper:1211571975726698497>",
  e: "<:E_simper:1211571981959561227>",
  f: "<:F_simper:1211571986820767784>",
  g: "<:G_simper:1211571992847978537>",
  h: "<:H_simper:1211571998443053106>",
  i: "<:I_simper:1211572004642361414>",
  j: "<:J_simper:1211572010308730951>",
  k: "<:K_simper:1211572015912194089>",
  l: "<:L_simper:1211572021385887775>",
  m: "<:M_simper:1211572027190677524>",
  n: "<:N_simper:1211572030533664828>",
  o: "<:O_simper:1211572035751510066>",
  p: "<:P_simper:1211572041820405802>",
  q: "<:Q_simper:1211572047155568650>",
  r: "<:R_simper:1211572054520889364>",
  s: "<:S_simper:1211572059793006613>",
  t: "<:T_simper:1211572065614700585>",
  u: "<:U_simper:1211572071130468353>",
  v: "<:V_simper:1211572076486459473>",
  w: "<:W_simper:1211572081737605182>",
  x: "<:X_simper:1211572085651148801>",
  y: "<:Y_simper:1211572090310889504>",
  z: "<:Z_simper:1211572095696502794>",
};

// Top.gg API
const { Api } = require("@top-gg/sdk");
client.topgg = new Api(client.config.topgg);

// Dokdo message listener
client.on("messageCreate", (message) => {
  client.Jsk.run(message);
});

// Error handling
process.on("unhandledRejection", (reason, p) => console.log(reason, p));
process.on("uncaughtException", (err, origin) => console.log(err, origin));
process.on("uncaughtExceptionMonitor", (err, origin) => console.log(err, origin));

/* -------------------- VOICE STATS / NOW PLAYING -------------------- */

async function updateVCName(player, guild) {
  try {
    const vc = guild.channels.cache.get(player.voiceChannelId);
    if (!vc || !player.current) return;

    let name = player.current.info.title;
    if (name.length > 30) name = name.slice(0, 27) + "...";
    await vc.setName(`🎵 ${name}`);
  } catch (err) {
    console.log("Error updating VC name:", err);
  }
}

client.shoukaku?.on("trackStart", (player, track) => {
  updateVCName(player, player.guild);

  // Update bot status
  client.user.setActivity(`${track.info.title} 🎶`, { type: "LISTENING" });
});

client.shoukaku?.on("queueEnd", (player) => {
  const vc = player.guild.channels.cache.get(player.voiceChannelId);
  if (!vc) return;

  vc.setName("🎵 Music VC"); // Reset VC name
  client.user.setActivity(""); // Clear bot status
});
