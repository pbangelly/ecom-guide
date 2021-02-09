<script>
    import Logo from "../../assets/logo.png";
</script>

<div class="bg-black pt-6">
    <nav
      class="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
      aria-label="Global"
    >
      <div class="flex items-center flex-1">
        <div class="flex items-center justify-between w-full md:w-auto">
          <a href="#">
            <span class="sr-only">Workflow</span>
            <img
              id="top-menu-logo"
              class="h-8 w-auto sm:h-10"
              src={Logo}
              alt=""
            />
          </a>
          <div class="-mr-2 flex items-center md:hidden">
            <button
              type="button"
              id="main-menu"
              class="bg-black rounded-md p-2 inline-flex items-center justify-center text-gray-200 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white"
              aria-haspopup="true"
            >
              <span class="sr-only">Open main menu</span>
              <!-- Heroicon name: outline/menu -->
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="hidden space-x-8 md:flex md:ml-10">
          <a
            href="#"
            class="text-base font-medium text-white hover:text-gray-300"
            >Help here</a
          >

          <a
            href="#"
            class="text-base font-medium text-white hover:text-gray-300"
            >Features</a
          >

          <a
            href="#"
            class="text-base font-medium text-white hover:text-gray-300"
            >Marketplace</a
          >

          <a
            href="#"
            class="text-base font-medium text-white hover:text-gray-300"
            >Company</a
          >
        </div>
      </div>
      <div class="hidden md:flex md:items-center md:space-x-6">
        <a
          href="#"
          class="text-base font-medium text-white hover:text-gray-300"
        >
          Log in
        </a>
        <a
          id="nav-form-button"
          href="#"
          class="inline-flex items-center px-2 py-2 shadow border border-transparent-50 
          text-base text-white font-medium 
          rounded-md bg-gradient-to-r from-yellow-500 to-yellow-800 
          hover:bg-yellow-400
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 focus:ring-offset-yellow-100"
        >
          Start free trial
        </a>
      </div>
    </nav>
  </div>