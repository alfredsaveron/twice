const snoowrap = require('snoowrap');
const random = require('random');

// Reddit API credentials
const reddit = new snoowrap({
  userAgent: 'YOUR_USER_AGENT',
  clientId: 'YOUR_CLIENT_ID',
  clientSecret: 'YOUR_CLIENT_SECRET',
  username: 'YOUR_REDDIT_USERNAME',
  password: 'YOUR_REDDIT_PASSWORD'
});

// TWICE member names
const memberNames = [
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

// TWICE song lyrics
const songLyrics = [
  "Cheer up, baby, cheer up!",
  "TT, just like TT",
  "Likey likey likey",
  "Fancy, you",
  "Feel special, everyday",
  "More and more and more",
  "I can't stop me, can't stop me",
  "Cry for me, cry for me",
  "Alcohol-Free, alcohol-free",
  "Scientist, I love it",
  "다 말해봐, but 시작은 이렇게 해",
  "Baby, 내 답은 뻔하잖아, yes or yes?",
  "Don't stop and just replay, replay (yeah, that's my only request)",
  "Baby, 날 안고 달콤하게, tell me now (달콤하게, just tell me now)",
  "Tell me what you want, tell me what you need",
  "Talk that talk, 딱 한 마디 (love, love, love), talk that talk, L-O-V-E",
];

const subredditName = 'YOUR_SUBREDDIT';

// Milliseconds
const cooldownTime = 200000;

// Generate random lyrics
function generateLyrics() {
  const randomIndex = random.int(0, songLyrics.length - 1);
  return songLyrics[randomIndex];
}

async function runBot() {
  const subreddit = await reddit.getSubreddit(subredditName);

  subreddit.stream.comments().on('comment', async (comment) => {
    const commentText = comment.body.toLowerCase();

    // Check if the comment mentions TWICE or TWICE member names
    const mentionedMember = memberNames.find(memberName => commentText.includes(memberName.toLowerCase()));
    if (commentText.includes('twice') || mentionedMember) {
      const replyText = generateLyrics();

      // Reply to the comment
      await comment.reply(replyText);
      console.log(`Replied to comment: ${comment.id}`);

      // Sleep for cooldown time
      await new Promise(resolve => setTimeout(resolve, cooldownTime));
    }
  });
}

// Run the bot
runBot();
