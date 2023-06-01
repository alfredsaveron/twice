import snoowrap from 'snoowrap';
import random from 'random';

// Reddit API credentials
const reddit = new snoowrap({
  userAgent: 'YOUR_USER_AGENT',
  clientId: 'YOUR_CLIENT_ID',
  clientSecret: 'YOUR_CLIENT_SECRET',
  username: 'YOUR_REDDIT_USERNAME',
  password: 'YOUR_REDDIT_PASSWORD'
});

// Members
const memberNames: string[] = [
  "Nayeon",
  "Jeongyeon",
  "Momo",
  "Sana",
  "Jihyo",
  "Mina",
  "Dahyun",
  "Chaeyoung",
  "Tzuyu"
];

// Lyrics
const musicLyrics: string[] = [
  "Fancy, you",
  "More and more and more",
  "Likey likey",
  "Cheer up baby, cheer up baby",
  "Feel special",
  "Knock knock knock knock",
  "TT, just like TT",
  "Signal signal signal",
  "Yes or yes?",
  "Heart shaker shaker",
  "What is love?"
  // Add more TWICE lyrics here
];

// Milliseconds
const cooldownDuration: number = 200000; // 200 seconds

let lastCommentTimestamp: number = 0;

function checkCommentForTWICE(comment: snoowrap.Comment): boolean {
  const commentText = comment.body.toLowerCase();
  return commentText.includes("twice") || memberNames.some(name => commentText.includes(name.toLowerCase()));
}

function getRandomLyric(): string {
  const randomIndex = random.int(0, musicLyrics.length - 1);
  return musicLyrics[randomIndex];
}

async function handleComments() {
  const subreddit = await reddit.getSubreddit('YOUR_SUBREDDIT_NAME');
  const comments = await subreddit.getNewComments();

  for (const comment of comments) {
    if (checkCommentForTWICE(comment)) {
      const currentTimestamp = Date.now();
      if (currentTimestamp - lastCommentTimestamp < cooldownDuration) {
        continue; // Skip this comment if still within cooldown
      }

      // Reply with a random TWICE lyric
      const replyMessage = getRandomLyric();
      await comment.reply(replyMessage);

      // Update last comment timestamp
      lastCommentTimestamp = currentTimestamp;
    }
  }
}

// Start the bot
function startBot() {
  setInterval(handleComments, 5000); // Check for new comments! (Every 5 seconds)
}

startBot();
