<img width="20%" align="right" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Logo_of_TWICE.svg/800px-Logo_of_TWICE.svg.png?20210624124205">

> Reddit bot that gives TWICE lyrics when TWICE or members mentioned. 🎶

> 트와이스나 멤버들이 언급되면 트와이스에게 가사를 주는 레딧봇.

# JavaScript

Remember to install the **snoowrap** and other (?) random libraries (```npm install snoowrap```) before **running the script**.

This code checks if the comment or comments includes the word "TWICE" or any of the TWICE member names in the ```memberNames``` array. If it finds a match, it randomly selects a TWICE song lyric from the ```songLyrics``` array and replies to the comment. The bot then waits for the specified cooldown time before continuing to monitor new comments.

> **Warning** Remember to use the bot responsibly and respect the Reddit API usage guidelines and the rules of the subreddit you're targeting.

# TypeScript

Make sure to replace the placeholders (```YOUR_USER_AGENT```, ```YOUR_CLIENT_ID```, ```YOUR_CLIENT_SECRET```, ```YOUR_REDDIT_USERNAME```, ```YOUR_REDDIT_PASSWORD```, ```SUBREDDIT_NAME```) with your actual **Reddit API** credentials and subreddit name. Also, feel free to add more lyrics to the array or arrays.

> **Warning** Remember to use the bot responsibly and respect the Reddit API usage guidelines and the rules of the subreddit you're targeting.
