const tweetSourceSelector =
  '[href="https://help.twitter.com/using-twitter/how-to-tweet#source-labels"]';

const update = () => {
  // tweetSourceがsocialdogかチェック
  const tweetSourceEl =
    document.querySelector<HTMLElement>(tweetSourceSelector);
  if (!tweetSourceEl) return;
  const tweetSource = tweetSourceEl.innerText;
  if (tweetSource !== "SocialDog for Twitter") return;

  // tweetSourceを持つarticleを探す
  const articles = document.querySelectorAll("article");
  const tweetSourceArticle = Array.from(articles).find((article) => {
    return article.querySelector(tweetSourceSelector);
  });
  if (!tweetSourceArticle) return;

  // 警告用にstyle変更
  tweetSourceArticle.style.border = "red 6px dashed";
  tweetSourceEl.style.border = "red 2px solid";
};

new PerformanceObserver(() => {
  update();
}).observe({
  type: "longtask",
  buffered: true,
});

// document.addEventListener("scroll", () => {
//   update();
// });
