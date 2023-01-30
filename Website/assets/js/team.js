const team = [
  {
    name: "Piyush Garg",
    designation: "President",
    linkedin: "https://www.linkedin.com/in/piyush-garg-2002/",
    instagram: "https://www.instagram.com/piyushgarg689/",
    photo: "assets/img/team/piyush.png",
  },
  {
    name: "Rishabh Jain",
    designation: "Vice-President",
    linkedin: "https://www.linkedin.com/in/rishabhjain2010/",
    instagram: "https://www.instagram.com/rishabhjain2010/",
    photo: "assets/img/team/rishabh.png",
  },
  {
    name: "Prateek Kumar Singh",
    designation: "Technical Head",
    linkedin: "https://www.linkedin.com/in/patrick025/",
    instagram: "https://www.instagram.com/prateeksingh777/",
    photo: "assets/img/team/prateek.png",
  },
  {
    name: "Ishika Aggarwal",
    designation: "HR Manager",
    linkedin: "https://www.linkedin.com/in/ishika-aggarwal-890563201",
    instagram: "https://www.instagram.com/ishika_agg24/",
    photo: "assets/img/team/ishika.png",
  },
  {
    name: "Ronak Bothra",
    designation: "Content Head",
    linkedin: "https://www.linkedin.com/in/ronak-bothra-9a7281164/",
    instagram: "https://www.instagram.com/irohnyyy/",
    photo: "assets/img/team/ronak.png",
  },
  {
    name: "Bhumika Chauhan",
    designation: "Design Head",
    linkedin: "https://www.linkedin.com/in/bhumika-chauhan-605385204",
    instagram: "https://www.instagram.com/bhumika.__.chauhan/",
    photo: "assets/img/team/bhumika.png",
  },
  {
    name: "Prachi Singh",
    designation: "Sponsorship Head",
    linkedin: "https://www.linkedin.com/in/prachi-singh-3082a620a",
    instagram: "https://www.instagram.com/prachi_09._.7/",
    photo: "assets/img/team/prachi.png",
  },
  {
    name: "Rahul Kushwaha",
    designation: "Marketing Head",
    linkedin: "https://www.linkedin.com/in/rahul-kushwaha-5b3251223",
    instagram: "https://www.instagram.com/rahul_kushwaha_26/",
    photo: "assets/img/team/rahul.png",
  },
  {
    name: "Pallavi Singh",
    designation: "Public Relations Head",
    linkedin: "https://www.linkedin.com/in/pallavi-singh-b7865b191/",
    instagram: "https://www.instagram.com/pallavi_singh1005/",
    photo: "assets/img/team/pallavi.png",
  },
  {
    name: "Harsh Baghel",
    designation: "Anchoring & Event Management",
    linkedin: "https://www.linkedin.com/in/harsh-baghel-653657201/",
    instagram: "https://www.instagram.com/cycle.of.harsh/",
    photo: "assets/img/team/harsh.png",
  },
  {
    name: "Sejal Talwar",
    designation: "Event Management Team",
    linkedin: "https://www.linkedin.com/in/sejal-talwar-ba7099222/",
    instagram: "https://www.instagram.com/sejaltalwarr/",
    photo: "assets/img/team/sejal.png",
  },
  {
    name: "Anshika Vishnoi",
    designation: "Design Team",
    linkedin: "https://www.linkedin.com/in/anshika-vishnoi-4aa626226",
    instagram: "https://www.instagram.com/anshikavishnoi22/",
    photo: "assets/img/team/anshika.png",
  },
  {
    name: "Avani Singhal",
    designation: "Event Management Team",
    linkedin: "https://www.linkedin.com/in/avani-singhal-66981822b/",
    instagram: "https://www.instagram.com/avanibtw/",
    photo: "assets/img/team/avani.png",
  },
  {
    name: "Aakriti Yadav",
    designation: "Event Management Team",
    linkedin: "https://www.linkedin.com/in/aakriti-yadav-39354422a",
    instagram: "https://www.instagram.com/yadavaakriti23/",
    photo: "assets/img/team/aakriti.png",
  },
  {
    name: "Nikita Verma",
    designation: "Event Management Team",
    linkedin: "https://www.linkedin.com/in/nikita-verma-7b495722a",
    instagram: "https://www.instagram.com/chholebhatureee/",
    photo: "assets/img/team/nikita.png",
  },
];

window.addEventListener("load", function () {
  team.forEach((member) => {
    const html = `
        <div class="flex flex-row gap-x-5 md:gap-x-10 items-center w-full md:w-1/3">
            <div class="inline-block w-1/2 md:w-auto">
                <img
                    class="inline-block h-40 w-40 rounded-full ring-2 ring-white"
                    src="${member.photo}"
                    alt="${member.name}"
                />
            </div>
            <div class="inline-block w-1/2 md:w-auto leading-7 dark:text-white">
                ${member.name} <br>
                ${member.designation} <br>
                
                <a
            href="${member.linkedin}"
            type="button"
            class="rounded-full border-2 leading-normal uppercase border-gray-700 hover:bg-gray-200 text-gray-700 dark:border-white dark:text-white dark:hover:bg-gray-600 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="linkedin-in"
              class="w-4 h-full mx-auto"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
              ></path>
            </svg>
          </a>
                 
                
                <a
            href="${member.instagram}"
            type="button"
            class="rounded-full border-2 leading-normal uppercase border-gray-700 hover:bg-gray-200 text-gray-700 dark:border-white dark:text-white dark:hover:bg-gray-600 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="instagram"
              class="w-4 h-full mx-auto"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              ></path>
            </svg>
          </a>
             <br>
            </div>
        </div>
        `;
    document.getElementById("team").innerHTML += html;
  });
});
