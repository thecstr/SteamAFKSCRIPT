Thanks for installing my AFK/IDLE Bot enjoy :D

Made by CoasterHD Link To My Steam Is Here: http://steamcommunity.com/id/CoasterHD/. Feel free to add me about any issues

Setting up this bot is so easy pretty much 2 steps!
1. First your going to fill out the config file as per usual with all the nescessary information needed.
2. Setting up gameid in config file is quiet easy follow this easy example ["Custom game name here", appid for the game to be played]
 
 How to setup on vultr:
1. Head to vultr.com and purchase a $2.50 or higher package to run your bot on (doesn't matter location)
2. Select unbuntu 16.04 and start the vps 
3. Then install putty and windows scp
4. connect to your server via SSH and write the following in terminal (just copy and paste in order):
 
Install node.js
sudo apt-get update
sudo apt-get install nodejs
sudo apt-get install npm
Install Screens:
 sudo apt-get install screen
Making the bots directory: 
sudo mkdir /steambot
Acessing the bots directory through putty:
cd /steambot

Now open windows SCP and login find /steambot directory and drag the files from your computer into it

Now write screen -r bot (this keeps the bot running 24/7)
then access the directory again by doing cd /steambot
then do "node bot.js" and it should fire up and start working
simply press Ctrl + A and then Ctrl + D and leave it to run and when you want to shut it down
simply access through putty write "screen -r bot" the hit "ctrl c" to stop then do "node bot.js" to make it go back up
