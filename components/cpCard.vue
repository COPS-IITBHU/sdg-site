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
        <h3 class="title">Williamson</h3>
        <span class="post">web developer</span>
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
              <img :src="code" alt="codeforces" class="w-6 m-auto mt-1" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import code from '../assets/4691584_codeforces_icon (1).png';
export default {
  data() {
    return {
      code,
    };
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
