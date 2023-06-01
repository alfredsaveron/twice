<img width="20%" align="right" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Logo_of_TWICE.svg/800px-Logo_of_TWICE.svg.png?20210624124205">

> Reddit bot that gives TWICE lyrics when TWICE or members mentioned.

# JavaScript

Remember to install the **snoowrap** and other (?) random libraries (```npm install snoowrap```) before **running the script**.

This code checks if the comment or comments includes the word "TWICE" or any of the TWICE member names in the ```memberNames``` array. If it finds a match, it randomly selects a TWICE song lyric from the ```songLyrics``` array and replies to the comment. The bot then waits for the specified cooldown time before continuing to monitor new comments.

> **Warning** Remember to use the bot responsibly and respect the Reddit API usage guidelines and the rules of the subreddit you're targeting.
