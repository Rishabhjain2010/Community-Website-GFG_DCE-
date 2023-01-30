tailwind.config = {
  darkMode: "class",
};

const banners = [
  {
    info: "Event alert! TechPreksha hackathon is over now. Check info",
    url: "https://techpreksha.web.app",
  },
];

window.onload = function () {
  // Navbar toggle
  document
    .getElementById("mobile-menu-toggle")
    .addEventListener("click", function () {
      let svgs = document.querySelectorAll("#mobile-menu-toggle > svg");
      for (let i = 0; i < svgs.length; i++) {
        svgs[i].classList.toggle("hidden");
      }
      document.getElementById("mobile-menu").classList.toggle("hidden");
    });

  //footer year
  document.getElementById("year").innerHTML = new Date().getFullYear();

  // Dark mode check
  if (window.localStorage.getItem("gfgdce-theme")) {
    let val = window.localStorage.getItem("gfgdce-theme");
    if (val == "dark") {
      document.getElementById("toggleB").checked = true;
      document.documentElement.classList.add("dark");
    }
  } else {
    window.localStorage.setItem("gfgdce-theme", "light");
  }

  // Show all banners
  banners.forEach((banner) => {
    document.getElementById("banners").innerHTML += `
        <!-- Updates Banner -->
        <div class="bg-indigo-600 dark:bg-slate-700">
            <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
                <div class="flex items-center justify-between flex-wrap">
                <div class="w-0 flex-1 flex items-center">
                    <span class="flex p-2 rounded-lg bg-indigo-800 dark:bg-gray-100">
                    <!-- Heroicon name: outline/speakerphone -->
                    <svg class="h-6 w-6 text-white dark:text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                    </svg>
                    </span>
                    <p class="ml-3 font-medium text-white truncate">
                    <span class="md:hidden"> ${banner.info} </span>
                    <span class="hidden md:inline"> ${banner.info} </span>
                    </p>
                </div>
                <div class="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                    <a href="${banner.url}" class="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"> Learn more </a>
                </div>
                <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                    <button type="button"onclick="hidebanner()" class="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2">
                    <span class="sr-only">Dismiss</span>
                    <svg class="h-6 w-6 text-indigo-600 dark:text-slate-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    </button>
                </div>
                </div>
            </div>
        </div>
    `;
  });
};

document.getElementById("toggleB").addEventListener("change", function (e) {
  if (this.checked) {
    document.documentElement.classList.add("dark");
    window.localStorage.setItem("gfgdce-theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    window.localStorage.setItem("gfgdce-theme", "light");
  }
});
