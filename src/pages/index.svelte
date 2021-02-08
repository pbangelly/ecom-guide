<script>
  import { metatags } from "@roxi/routify";
  import Footer from "../components/Footer.svelte";
  import ResourceLinks from "../components/ResourceLinks.svelte";
  import Logo from "../../assets/logo.png"
  import Author from "../../assets/author.png"

  metatags.title = "Cloud Native Entrepreneur";
  metatags.description = "Description coming soon...";
</script>

<div class="bg-white">
  <div class="relative overflow-hidden">
    <header class="relative">
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
                >Product</a
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

      <!--
        Mobile menu, show/hide based on menu open state.

        Entering: "duration-150 ease-out"
          From: "opacity-0 scale-95"
          To: "opacity-100 scale-100"
        Leaving: "duration-100 ease-in"
          From: "opacity-100 scale-100"
          To: "opacity-0 scale-95"
      -->
      <div
        class="absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden"
      >
        <div
          class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
        >
          <div class="px-5 pt-4 flex items-center justify-between">
            <div>
              <img
                class="h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-teal-500-cyan-600.svg"
                alt=""
              />
            </div>
            <div class="-mr-2">
              <button
                type="button"
                class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-600"
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
          <div
            class="pt-5 pb-6"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="main-menu"
          >
            <div class="px-2 space-y-1" role="none">
              <a
                href="#"
                class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                role="menuitem">Product</a
              >

              <a
                href="#"
                class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                role="menuitem">Features</a
              >

              <a
                href="#"
                class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                role="menuitem">Marketplace</a
              >

              <a
                href="#"
                class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                role="menuitem">Company</a
              >
            </div>
            <div id="header-trail" role="none" class="mt-6 px-5">
              <a
                href="#"
                class="block w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-yellow-400 to-yellow-800 
                text-white font-medium 
                hover:from-yellow-600 hover:to-yellow-700 
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 focus:ring-offset-yellow-100"
                >Start free trial</a
              >
            </div>
            <div role="none" class="mt-6 px-5">
              <p class="text-center text-base font-medium text-gray-500">
                Existing customer? <a
                  href="#"
                  class="text-gray-900 hover:underline">Login</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
    <main>
      <div
        class="pt-10 bg-black sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden"
      >
        <div class="mx-auto max-w-7xl lg:px-8">
          <div class="lg:grid lg:grid-cols-2 lg:gap-8">
            <div
              class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center"
            >
              <div class="lg:py-24">
                <a
                  href="#"
                  class="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                >
                  <span
                    class="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-yellow-400 to-yellow-800 rounded-full"
                    >We're hiring</span
                  >
                  <span class="ml-4 text-sm">Visit our careers page</span>
                  <!-- Heroicon name: solid/chevron-right -->
                  <svg
                    class="ml-2 w-5 h-5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
                <h1
                  class="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl"
                >
                  <span class="block">A better way to</span>
                  <span
                    class="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-800 block"
                    >ship web apps</span
                  >
                </h1>
                <p
                  class="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
                >
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui Lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat.
                </p>
                <div class="mt-10 sm:mt-12">
                  <form action="#" class="sm:max-w-xl sm:mx-auto lg:mx-0">
                    <div class="sm:flex">
                      <div class="min-w-0 flex-1">
                        <label for="email" class="sr-only">Email address</label>
                        <input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          class="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                        />
                      </div>
                      <div class="mt-3 sm:mt-0 sm:ml-3">
                        <button
                          id="bottom-form"
                          type="submit"
                          class="block w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-yellow-400 to-yellow-800 text-white font-medium hover:from-yellow-600 hover:to-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 focus:ring-offset-yellow-100"
                          >Start free trial</button
                        >
                      </div>
                    </div>
                    <p class="mt-3 text-sm text-gray-300 sm:mt-4">
                      Start your free 14-day trial, no credit card necessary. By
                      providing your email, you agree to our <a
                        href="#"
                        class="font-medium text-white">terms or service</a
                      >.
                    </p>
                  </form>
                </div>
              </div>
            </div>
            <div class="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
              <div
                class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0"
              >
                <!-- Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ -->
                <img
                  class="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="https://tailwindui.com/img/component-images/cloud-illustration-teal-cyan.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Feature section with screenshot -->
      <div class="relative bg-gray-50 pt-16 sm:pt-24 lg:pt-32">
        <div
          class="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl"
        >
          <div>
            <h2
              class="text-base font-semibold tracking-wider text-cyan-600 uppercase"
            >
              Serverless
            </h2>
            <p
              class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl"
            >
              No server? No problem.
            </p>
            <p class="mt-5 max-w-prose mx-auto text-xl text-gray-500">
              Phasellus lorem quam molestie id quisque diam aenean nulla in.
              Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
              condimentum id viverra nulla.
            </p>
          </div>
          <div class="mt-12 -mb-10 sm:-mb-24 lg:-mb-80">
            <img
              class="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
              src="https://tailwindui.com/img/component-images/green-project-app-screenshot.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      <!-- Feature section with grid -->
      <div class="relative bg-white py-16 sm:py-24 lg:py-32">
        <div
          class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl"
        >
          <h2
            class="text-base font-semibold tracking-wider text-cyan-600 uppercase"
          >
            Deploy faster
          </h2>
          <p
            class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl"
          >
            Everything you need to deploy your app
          </p>
          <p class="mt-5 max-w-prose mx-auto text-xl text-gray-500">
            Phasellus lorem quam molestie id quisque diam aenean nulla in.
            Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
            condimentum id viverra nulla.
          </p>
          <div class="mt-12">
            <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div class="pt-6">
                <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div class="-mt-6">
                    <div>
                      <span
                        class="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg"
                      >
                        <!-- Heroicon name: outline/cloud-upload -->
                        <svg
                          class="h-6 w-6 text-white"
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
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          />
                        </svg>
                      </span>
                    </div>
                    <h3
                      class="mt-8 text-lg font-medium text-gray-900 tracking-tight"
                    >
                      Push to Deploy
                    </h3>
                    <p class="mt-5 text-base text-gray-500">
                      Ac tincidunt sapien vehicula erat auctor pellentesque
                      rhoncus. Et magna sit morbi lobortis.
                    </p>
                  </div>
                </div>
              </div>

              <div class="pt-6">
                <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div class="-mt-6">
                    <div>
                      <span
                        class="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg"
                      >
                        <!-- Heroicon name: outline/lock-closed -->
                        <svg
                          class="h-6 w-6 text-white"
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
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                          />
                        </svg>
                      </span>
                    </div>
                    <h3
                      class="mt-8 text-lg font-medium text-gray-900 tracking-tight"
                    >
                      SSL Certificates
                    </h3>
                    <p class="mt-5 text-base text-gray-500">
                      Ac tincidunt sapien vehicula erat auctor pellentesque
                      rhoncus. Et magna sit morbi lobortis.
                    </p>
                  </div>
                </div>
              </div>

              <div class="pt-6">
                <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div class="-mt-6">
                    <div>
                      <span
                        class="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg"
                      >
                        <!-- Heroicon name: outline/refresh -->
                        <svg
                          class="h-6 w-6 text-white"
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
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                          />
                        </svg>
                      </span>
                    </div>
                    <h3
                      class="mt-8 text-lg font-medium text-gray-900 tracking-tight"
                    >
                      Simple Queues
                    </h3>
                    <p class="mt-5 text-base text-gray-500">
                      Ac tincidunt sapien vehicula erat auctor pellentesque
                      rhoncus. Et magna sit morbi lobortis.
                    </p>
                  </div>
                </div>
              </div>

              <div class="pt-6">
                <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div class="-mt-6">
                    <div>
                      <span
                        class="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg"
                      >
                        <!-- Heroicon name: outline/shield-check -->
                        <svg
                          class="h-6 w-6 text-white"
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
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      </span>
                    </div>
                    <h3
                      class="mt-8 text-lg font-medium text-gray-900 tracking-tight"
                    >
                      Advanced Security
                    </h3>
                    <p class="mt-5 text-base text-gray-500">
                      Ac tincidunt sapien vehicula erat auctor pellentesque
                      rhoncus. Et magna sit morbi lobortis.
                    </p>
                  </div>
                </div>
              </div>

              <div class="pt-6">
                <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div class="-mt-6">
                    <div>
                      <span
                        class="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg"
                      >
                        <!-- Heroicon name: outline/cog -->
                        <svg
                          class="h-6 w-6 text-white"
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
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </span>
                    </div>
                    <h3
                      class="mt-8 text-lg font-medium text-gray-900 tracking-tight"
                    >
                      Powerful API
                    </h3>
                    <p class="mt-5 text-base text-gray-500">
                      Ac tincidunt sapien vehicula erat auctor pellentesque
                      rhoncus. Et magna sit morbi lobortis.
                    </p>
                  </div>
                </div>
              </div>

              <div class="pt-6">
                <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div class="-mt-6">
                    <div>
                      <span
                        class="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg"
                      >
                        <!-- Heroicon name: outline/server -->
                        <svg
                          class="h-6 w-6 text-white"
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
                            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                          />
                        </svg>
                      </span>
                    </div>
                    <h3
                      class="mt-8 text-lg font-medium text-gray-900 tracking-tight"
                    >
                      Database Backups
                    </h3>
                    <p class="mt-5 text-base text-gray-500">
                      Ac tincidunt sapien vehicula erat auctor pellentesque
                      rhoncus. Et magna sit morbi lobortis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Testimonial section -->
      <div
        class="pb-16 bg-gradient-to-r from-yellow-400 to-yellow-800 lg:pb-0 lg:z-10 lg:relative"
      >
        <div
          class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8"
        >
          <div class="relative lg:-my-8">
            <div
              aria-hidden="true"
              class="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
            />
            <div
              class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full"
            >
              <div
                class="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full"
              >
                <img
                  class="object-cover lg:h-full lg:w-full"
                  src={Author}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
            <div
              class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none"
            >
              <blockquote>
                <div>
                  <svg
                    class="h-12 w-12 text-white opacity-25"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path
                      d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"
                    />
                  </svg>
                  <p class="mt-6 text-2xl font-medium text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    urna nulla vitae laoreet augue. Amet feugiat est integer
                    dolor auctor adipiscing nunc urna, sit.
                  </p>
                </div>
                <footer class="mt-6">
                  <p class="text-base font-medium text-white">Judith Black</p>
                  <p class="text-base font-medium text-cyan-100">
                    CEO at PureInsights
                  </p>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      <!-- Blog section -->
      <ResourceLinks />

      <!-- CTA Section -->
      <div class="relative bg-gray-900">
        <div
          class="relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2"
        >
          <img
            class="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixqx=QWrkbJ5Lr0&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&sat=-100"
            alt=""
          />
          <div
            aria-hidden="true"
            class="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600"
            style="mix-blend-mode: multiply;"
          />
        </div>
        <div
          class="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32"
        >
          <div class="md:ml-auto md:w-1/2 md:pl-10">
            <h2
              class="text-base font-semibold uppercase tracking-wider text-gray-300"
            >
              Award winning support
            </h2>
            <p
              class="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl"
            >
              We’re here to help
            </p>
            <p class="mt-3 text-lg text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              egestas tempus tellus etiam sed. Quam a scelerisque amet
              ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
              quisque ut interdum tincidunt duis.
            </p>
            <div class="mt-8">
              <div class="inline-flex rounded-md shadow">
                <a
                  href="#"
                  class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
                >
                  Visit the help center
                  <!-- Heroicon name: solid/external-link -->
                  <svg
                    class="-mr-1 ml-3 h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
                    />
                    <path
                      d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</div>
