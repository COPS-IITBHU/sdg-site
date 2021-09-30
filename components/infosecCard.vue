<template>
  <div class="col-md-3 col-sm-6">
    <div class="our-team">
      <div class="pic">
        <img
          src="https://pbs.twimg.com/profile_images/1388911828403589123/miOWknjs_400x400.jpg"
          alt=""
        />
      </div>
      <div class="team-content">
        <h3 class="title">Name</h3>
        <span class="post">Title</span>
        <ul class="social">
          <li>
            <a href="#">
              <img
                src="https://img.icons8.com/ios-glyphs/30/ffffff/linkedin-2--v1.png"
                alt="linkedin"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                alt="svgImg"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzIiIGhlaWdodD0iMzIiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTU1LjYzOTY1LDIxLjVjLTEuMjU3NzQsMCAtMS44ODk2NSwwLjYyNjUyIC0xLjg4OTY1LDEuODg5NjV2MTI1LjE5OTcxYzAsMS4yNTc3NSAwLjYyNjUzLDEuODg5NjUgMS44ODk2NSwxLjg4OTY1aDEyLjM0NTcxYzEuMjU3NzQsMCAxLjkwMDE0LC0wLjYyNjUzIDEuOTAwMTQsLTEuODg5NjV2LTI1Ljk5MzE2bDkuNzIxMTksLTkuMjU5MjhsMjguMTU1NzYsMzUuODE5MzNjMC43NjMyNSwwLjg4Njg4IDEuNjQ1MjYsMS4zNDM3NSAyLjY2NjUxLDEuMzQzNzVoMTcuMDQ4ODNjMC44OTIyNSwwIDEuMzk4NTksLTAuMjU1NzMgMS41MjIyMiwtMC43NjYzNmwtMC4zNTY5MywtMS45MzE2NGwtMzcuMTQyMDksLTQ2LjE1OTkxbDM1LjYxOTg3LC0zNC40NjUwOWMwLjY2MTEyLC0wLjY4OCAwLjQzMDI1LC0yLjY3NyAtMS4zNTQyNSwtMi42NzdoLTE3LjYzNjcyYy0wLjg5MjI2LDAgLTEuNzg0NzUsMC40NjIgLTIuNjc3LDEuMzU0MjVsLTM1LjU3Nzg4LDM2LjEzNDI4di03OC41OTg4N2MwLC0xLjI2MzEzIC0wLjYyNjUzLC0xLjg4OTY1IC0xLjg4OTY1LC0xLjg4OTY1eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style>
.our-team {
  width: 250px;
  position: relative;
  float: left;
  margin: auto;
  padding: 20px;
  margin: 50px;
}
.our-team .pic {
  border-top: 5px solid #ff8e72;
  border-bottom: 5px solid #ff8e72;
  border-radius: 50% 50% 50% 0;
  overflow: hidden;
  transition: all 0.5s ease 0s;
}
.our-team:hover .pic {
  border-top-color: #8f2d56;
  border-bottom-color: #8f2d56;
  border-radius: 50% 0;
}
.our-team .pic img {
  width: 100%;
  height: auto;
  transition: all 0.5s ease 0s;
}
.our-team .team-content {
  padding: 20px 0;
}
.our-team .title {
  font-size: 22px;
  font-weight: 700;
  color: #8f2d56;
  text-transform: uppercase;
  margin: 0 0 5px 0;
}
.our-team .post {
  display: block;
  font-size: 17px;
  color: #878484;
  text-transform: capitalize;
  margin-bottom: 10px;
}
.our-team .social {
  list-style: none;
  padding: 0;
  margin: 0;
}
.our-team .social li {
  display: inline-block;
}
.our-team .social li a {
  display: block;
  width: 35px;
  height: 35px;
  line-height: 35px;
  border-radius: 50%;
  border: 1px solid #8f2d56;
  background: #89428b;
  font-size: 17px;
  color: #8f2d56;
  text-align: center;
  transition: all 0.5s ease 0s;
}
.our-team:hover .social li a {
  background: #8f2d56;
  color: #fff;
}
@media only screen and (max-width: 990px) {
  .our-team {
    margin-bottom: 30px;
  }
}
</style>
