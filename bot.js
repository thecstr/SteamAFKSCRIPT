const SteamUser = require('steam-user');
const config = require('./config.json');
const client = new SteamUser();
 
 
const logOnOptions = {
    accountName: config.username,
    password: config.password,

};

client.logOn(logOnOptions);

client.on('loggedOn', () => {
    console.log('succesfully logged on.');
    client.setPersona(SteamUser.Steam.EPersonaState.Online);
    client.gamesPlayed(config.idlegameid);
});

client.on("friendMessage", function (steamID, message) {
    client.chatMessage(steamID, config.afkmessage);

});