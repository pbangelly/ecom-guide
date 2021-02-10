<script>
import Nav from "./Nav.svelte";
import Logo from "../../assets/logo-big.png"

// actions
// let ButtonStat = { open: false };

function handleClickClose(MouseEvent) {
  // let ButtonStat = MouseEvent;
  // ButtonStat.open = !ButtonStat.open;

  // the default state 
  // console.log(MouseEvent)

	}
</script>

<header class="relative">
    <Nav />

    <!-- Nav Only on mobile - dropdown menu -->

    <!--
      Mobile menu, show/hide based on menu open state.

      Entering: "duration-150 ease-out"
        From: "opacity-0 scale-95"
        To: "opacity-100 scale-100"
      Leaving: "duration-100 ease-in"
        From: "opacity-100 scale-100"
        To: "opacity-0 scale-95"
    -->

    <div id="nav-menu" class="absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden">
      <div
        class="rounded-lg shadow-md bg-black ring-1 ring-black ring-opacity-5 overflow-hidden"
      >
        <div class="px-5 pt-4 flex items-center justify-between">
          <div>
            <img
              class="h-8 w-auto"
              src={Logo}
              alt=""
            />
          </div>

         <!-- 
          close menu button
          set state to hidden, until clicked
          button to view menu on click open - toggle hide & open menu
        --> 
          <div id="close-button" class="-mr-2">
            <button
              type="button"
              on:click={handleClickClose}
              class="bg-white rounded-md p-2 inline-flex items-center justify-center text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-600"
            >
              <span class="sr-only">Close menu</span>
              <!-- Heroicon name: outline/x -->
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile menu options -->
        <div
          id="mob-menu-options"
          class="pt-5 pb-6"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="main-menu"
        >
          <div class="px-2 space-y-1" role="none">
            <a
              href="#"
              class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-red-50"
              role="menuitem">Product</a
            >

            <a
              href="#"
              class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-red-50"
              role="menuitem">Features</a
            >

            <a
              href="#"
              class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-red-50"
              role="menuitem">Marketplace</a
            >

            <a
              href="#"
              class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-red-50"
              role="menuitem">Candy</a
            >
          </div>

          <!-- free trail button-->
          <div id="header-trail" role="none" class="mt-6 px-5">
            <a
              href="#"
              class="block w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-yellow-400 to-yellow-800 
              text-white font-medium 
              hover:from-yellow-600 hover:to-yellow-700 
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 focus:ring-offset-yellow-100"
              >Start free trial</a
            >
          </div
          >
          <!-- login -->
          <div id="login-moblink" role="none" class="mt-6 px-5">
            <p class="text-center text-base font-medium text-red-500">
              Existing customer? <a
                href="#"
                class="text-white hover:underline">Login</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </header>