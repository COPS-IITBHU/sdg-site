<template>
  <body class="bg-dark-400">
    <div class="gallery w-full">
      <div
        class="
          gallery-container
          sm:max-h-xs
          max-w-7/10
          h-400px
          relative
          flex
          m-auto
          items-center
        "
      >
        <div
          class="box gallery-item bg-gray-200"
          :class="gallery_item_number[0]"
        >
          <h1
            class="
              font-sans
              bg-gradient-to-r
              from-blue-500
              to-green-400
              text-transparent
              bg-clip-text
            "
          >
            <b>CSAW 2021</b>
          </h1>
          <br />
          <h3 class="font-serif">
            2 teams from IIT(BHU) made it to the finals of the
            <a
              href="https://ctf.csaw.io/scoreboard"
              target="_blank"
              class="text-blue-900 hover:text-green-800"
            >
              Cyber Security Awareness Week (CSAW).</a
            >
          </h3>
        </div>

        <div
          class="box gallery-item bg-gray-200"
          :class="gallery_item_number[1]"
        >
          <h1
            class="
              font-sans
              bg-gradient-to-r
              from-blue-500
              to-green-400
              text-transparent
              bg-clip-text
            "
          >
            <b>LFX Mentorship Program</b>
          </h1>
          <br />
          <h3 class="font-serif">
            Two students from the club got accepted as mentees in
            <a
              href="https://lfx.linuxfoundation.org/tools/mentorship/"
              target="_blank"
              class="text-blue-900 hover:text-green-800"
            >
              LFX Mentorship.</a
            >
          </h3>
        </div>

        <div
          class="box gallery-item bg-gray-200"
          :class="gallery_item_number[2]"
        >
          <h1
            class="
              font-sans
              bg-gradient-to-r
              from-blue-500
              to-green-400
              text-transparent
              bg-clip-text
            "
          >
            <b>ACM ICPC 2020-2021</b>
          </h1>
          <br />
          <h3 class="font-serif">
            Team rng(weed) (Jatin Garg, Anshu Garg, Yash Goyal) topped
            Kanpur-Mathura Regionals and have chance to Represent IIT BHU in
            World Finals.
            <br />
            23 Teams from the College qualified for ICPC Amritapuri Regionals.
          </h3>
        </div>

        <div
          class="box gallery-item bg-gray-200"
          :class="gallery_item_number[3]"
        >
          <h1
            class="
              font-sans
              bg-gradient-to-r
              from-blue-500
              to-green-400
              text-transparent
              bg-clip-text
            "
          >
            <b> Google Summer of Code 2021</b>
          </h1>
          <br />
          <h3 class="font-serif">
            23 students from the club got accepted in one of the most
            prestigious open-source software development programs - Google
            Summer of Code.
            <br />
            IIT (BHU) is the institute with second highest GSoC selections in
            the world in 2021.
          </h3>
        </div>

        <div
          class="box gallery-item bg-gray-200"
          :class="gallery_item_number[4]"
        >
          <h1
            class="
              font-sans
              bg-gradient-to-r
              from-blue-500
              to-green-400
              text-transparent
              bg-clip-text
            "
          >
            <b>Open Source Fellowships</b>
          </h1>
          <br />
          <h3 class="font-serif">
            One student from the club got accepted in
            <a
              href="https://www.microsoft.com/en-us/research/academic-program/rl-open-source-fest/"
              target="_blank"
              class="text-blue-900 hover:text-green-800"
            >
              Microsoft Reinforcement Learning Open Source Fest.</a
            >
            Two students got accepted as mentees in
            <a
              href="https://lfx.linuxfoundation.org/tools/mentorship/"
              target="_blank"
              class="text-blue-900 hover:text-green-800"
            >
              LFX Mentorship.</a
            >
          </h3>
        </div>

        <div
          class="box gallery-item bg-gray-200"
          :class="gallery_item_number[5]"
        >
          <h1
            class="
              font-sans
              bg-gradient-to-r
              from-blue-500
              to-green-400
              text-transparent
              bg-clip-text
            "
          >
            <b>9th Inter IIT Tech Meet</b>
          </h1>
          <br />
          <h3 class="font-serif">
            2 teams, of 5 and 7 members respectively, participated and won gold
            and silver medals in their respective events of Network Security
            Hackathon and Automatic Headline And Sentiment Generator against the
            participating 23 IITs.
          </h3>
        </div>

        <div
          class="box gallery-item bg-gray-200"
          :class="gallery_item_number[6]"
        >
          <h1
            class="
              font-sans
              bg-gradient-to-r
              from-blue-500
              to-green-400
              text-transparent
              bg-clip-text
            "
          >
            <b> Google Summer of Code 2020</b>
          </h1>
          <br />
          <h3 class="font-serif">
            Ten students from the club successfully completed a project in one
            of the most prestigious open-source software development programs -
            Google Summer of Code.
            <br />
            IIT (BHU) is one of top 10 institutes in the world with most number
            of GSoC selections in 2020.
          </h3>
        </div>

        <div
          class="box gallery-item bg-gray-200"
          :class="gallery_item_number[7]"
        >
          <h1
            class="
              font-sans
              bg-gradient-to-r
              from-blue-500
              to-green-400
              text-transparent
              bg-clip-text
            "
          >
            <b> ICPC 2019-2020</b>
          </h1>
          <br />
          <h3 class="font-serif">
            One team from the club qualified for ICPC World Finals.
          </h3>
        </div>

        <div
          class="box gallery-item bg-gray-200"
          :class="gallery_item_number[8]"
        >
          <h1
            class="
              font-sans
              bg-gradient-to-r
              from-blue-500
              to-green-400
              text-transparent
              bg-clip-text
            "
          >
            <b> Google Summer of Code 2019</b>
          </h1>
          <br />
          <h3 class="font-serif">
            Nine students from the club got selected for one of the most
            prestigious open-source software development programs - Google
            Summer of Code.
          </h3>
        </div>

        <div
          class="box gallery-item bg-gray-200"
          :class="gallery_item_number[9]"
        >
          <h1
            class="
              font-sans
              bg-gradient-to-r
              from-blue-500
              to-green-400
              text-transparent
              bg-clip-text
            "
          >
            <b> 7th Inter IIT Tech Meet 2018, IIT Bombay</b>
          </h1>
          <br />
          <h3 class="font-serif">
            2 teams, of 4 members each, participated and both won bronze medals
            on their respective events of Coding Hackathon and Star Cluster
            Identifier against the participating 23 IITs.
          </h3>
        </div>

        <div
          class="box gallery-item bg-gray-200"
          :class="gallery_item_number[10]"
        >
          <h1
            class="
              font-sans
              bg-gradient-to-r
              from-blue-500
              to-green-400
              text-transparent
              bg-clip-text
            "
          >
            <b>Third at ICPC Regionals</b>
          </h1>
          <br />
          <h3 class="font-serif">
            TooLazyToPropogate, a team of Pranjal Jain, Himanshu Singh and
            Debrup Roy Choudhary secured third position at ICPC Kanpur Regionals
            2017.
          </h3>
        </div>

        <div
          class="box gallery-item bg-gray-200"
          :class="gallery_item_number[11]"
        >
          <h1
            class="
              font-sans
              bg-gradient-to-r
              from-blue-500
              to-green-400
              text-transparent
              bg-clip-text
            "
          >
            <b>Bronze at Inter-IIT</b>
          </h1>
          <br />
          <h3 class="font-serif">
            A team of two members, Suyash Shukla and Abhinav Patel, won Bronze
            Medal in an Inter IIT Event.
          </h3>
        </div>

        <div
          class="box gallery-item bg-gray-200"
          :class="gallery_item_number[12]"
        >
          <h1
            class="
              font-sans
              bg-gradient-to-r
              from-blue-500
              to-green-400
              text-transparent
              bg-clip-text
            "
          >
            <b>Won GS Quantify 2017</b>
          </h1>
          <br />
          <h3 class="font-serif">
            A team of three senior members, Bharat Khanna, Ishank Arora and
            Ayush Kedia, won the GS Quantify contest held by Goldman Sachs.
            Also, 6 teams from the institute were selected as Significant
            Contributors.
          </h3>
        </div>

        <div
          class="box gallery-item bg-gray-200"
          :class="gallery_item_number[13]"
        >
          <h1
            class="
              font-sans
              bg-gradient-to-r
              from-blue-500
              to-green-400
              text-transparent
              bg-clip-text
            "
          >
            <b>Problem of the Week</b>
          </h1>
          <br />
          <h3 class="font-serif">
            COPS made an amazing study material to start and excel competitve
            programming. This includes resources to study on each topic and some
            good problems to practice.
            <a
              href="https://www.copsiitbhu.co.in/resources/cp/potw/"
              target="_blank"
              class="text-blue-900 hover:text-green-800"
            >
              POTW.</a
            >
          </h3>
        </div>
      </div>
      <button
        class="
          gallery-controls-previous
          border-solid border-white
          hover:border-blue-300
        "
        @click="goPrevious"
      ></button>
      <button
        class="
          gallery-controls-next
          border-solid border-white
          hover:border-blue-300
        "
        @click="goNext"
      ></button>
    </div>
  </body>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api';
export default defineComponent({
  data() {
    return {
      gallery_item_number: [
        'gallery-item-1',
        'gallery-item-2',
        'gallery-item-3',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        'gallery-item-4',
        'gallery-item-5',
      ],
    };
  },
  methods: {
    goNext() {
      this.gallery_item_number.unshift(this.gallery_item_number.pop());
    },
    goPrevious() {
      this.gallery_item_number.push(this.gallery_item_number.shift());
    },
  },
});
</script>

<style scoped>
.gallery-item {
  height: 150px;
  opacity: 0;
  position: absolute;
  transition: all 0.3s ease-in-out;
  width: 225px;
  z-index: 0;
}

.gallery-item-3,
.gallery-item-4 {
  left: 15%;
  opacity: 0.4;
  transform: translateX(-50%);
}

.gallery-item-2,
.gallery-item-5 {
  height: 200px;
  opacity: 1;
  width: 300px;
  z-index: 1;
}

.gallery-item-5 {
  left: 30%;
  transform: translateX(-50%);
}

.gallery-item-1 {
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.6),
    0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25),
    0 0 100px rgba(255, 255, 255, 0.1);
  height: 300px;
  opacity: 1;
  left: 50%;
  transform: translateX(-50%);
  width: 450px;
  z-index: 2;
}

.gallery-item-1 h1 {
  font-size: 30px;
  transition: all 0.3s ease-in-out;
}
.gallery-item-1 h3 {
  font-size: 20px;
  transition: all 0.3s ease-in-out;
}
.gallery-item-2 h1 {
  font-size: 20px;
  transition: all 0.3s ease-in-out;
}
.gallery-item-2 h3 {
  font-size: 13.5px;
  transition: all 0.3s ease-in-out;
}
.gallery-item-3 h1 {
  font-size: 15px;
  transition: all 0.3s ease-in-out;
}
.gallery-item-3 h3 {
  font-size: 10px;
  transition: all 0.3s ease-in-out;
}
.gallery-item-4 h1 {
  font-size: 15px;
  transition: all 0.3s ease-in-out;
}
.gallery-item-4 h3 {
  font-size: 10px;
  transition: all 0.3s ease-in-out;
}
.gallery-item-5 h1 {
  font-size: 20px;
  transition: all 0.3s ease-in-out;
}
.gallery-item-5 h3 {
  font-size: 13.5px;
  transition: all 0.3s ease-in-out;
}

.gallery-item-2 {
  left: 70%;
  transform: translateX(-50%);
}

.gallery-item-3 {
  left: 85%;
  opacity: 0.4;
  transform: translateX(-50%);
}

.gallery-controls-previous:focus,
.gallery-controls-next:focus {
  outline: none;
}

.gallery-controls-previous {
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 10px;
  margin-right: 3vw;
  margin-left: 3vw;
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
  position: relative;
}

.gallery-controls-next {
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 10px;
  margin-right: 3vw;
  margin-left: 3vw;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}

@media only screen and (max-width: 600px) {
  .gallery-item {
    height: 75px;
    opacity: 0;
    position: absolute;
    transition: all 0.3s ease-in-out;
    width: 112px;
    z-index: 0;
  }

  .gallery-item-3,
  .gallery-item-4 {
    left: 15%;
    opacity: 0.4;
    transform: translateX(-50%);
  }

  .gallery-item-2,
  .gallery-item-5 {
    height: 100px;
    opacity: 1;
    width: 150px;
    z-index: 1;
  }

  .gallery-item-5 {
    left: 30%;
    transform: translateX(-50%);
  }

  .gallery-item-1 {
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.6),
      0 0 30px rgba(255, 255, 255, 0.45), 0 0 55px rgba(255, 255, 255, 0.25),
      0 0 50px rgba(255, 255, 255, 0.1);
    height: 150px;
    opacity: 1;
    left: 50%;
    transform: translateX(-50%);
    width: 225px;
    z-index: 2;
  }

  .gallery-item-1 h1 {
    font-size: 15px;
    transition: all 0.3s ease-in-out;
  }
  .gallery-item-1 h3 {
    font-size: 10px;
    transition: all 0.3s ease-in-out;
  }
  .gallery-item-2 h1 {
    font-size: 10px;
    transition: all 0.3s ease-in-out;
  }
  .gallery-item-2 h3 {
    font-size: 6.5px;
    transition: all 0.3s ease-in-out;
  }
  .gallery-item-3 h1 {
    font-size: 7.5px;
    transition: all 0.3s ease-in-out;
  }
  .gallery-item-3 h3 {
    font-size: 5px;
    transition: all 0.3s ease-in-out;
  }
  .gallery-item-4 h1 {
    font-size: 7.5px;
    transition: all 0.3s ease-in-out;
  }
  .gallery-item-4 h3 {
    font-size: 5px;
    transition: all 0.3s ease-in-out;
  }
  .gallery-item-5 h1 {
    font-size: 10px;
    transition: all 0.3s ease-in-out;
  }
  .gallery-item-5 h3 {
    font-size: 6.5px;
    transition: all 0.3s ease-in-out;
  }

  .gallery-item-2 {
    left: 70%;
    transform: translateX(-50%);
  }

  .gallery-item-3 {
    left: 85%;
    opacity: 0.4;
    transform: translateX(-50%);
  }
}
</style>
