<script>
  import Logo from '../../assets/images/icons/htrlogo.png';
  import Nav from '../components/Nav.svelte'
// import About from './about.svelte';
    // let userObject = null;
    // const userbase = window.userbase;
    // // const appId = '9e7c8687-652a-42c2-b400-883d708e94ea'
    // let authPromise = userbase.init({appId:'9e7c8687-652a-42c2-b400-883d708e94ea'})
    // .then(({user}) => userObject = user)

    let username, password; 

  // const signUp = () => authPromise = userbase.signUp({username, password});
  // const signIn = () => authPromise = userbase.signIn({username, password}).then(user => userObject = user);

  const signIn = () => console.log('you are signed in')
</script>
<Nav />
<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
-->
<div class="bg-black min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <img class="mx-auto m-5 h-20 md:h-40 max-w-auto" src={Logo} alt="Workflow">
        <h2 class="text-center text-3xl font-extrabold text-teal-500 mt-0">
          Sign in to your account
        </h2>
        <!-- <p class="mt-2 text-center text-sm text-gray-400">
          Or
          <a href="/signup" class="font-medium text-teal-600 hover:text-teal-500">
            start your 14-day free trial
          </a>
        </p> -->
      </div>
      
      <!-- {#await authPromise} loading....{:then _}
      {#if !userObject} -->
      <form class="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="username" class="sr-only">User Name</label>
            <input id="username" name="username" type="text" bind:value={username} autocomplete="username" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address">
          </div>

          <div>
            <label for="password" class="sr-only">Password</label>
            <input id="password" name="password" type="password" bind:value={password} autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password">
          </div>
        </div>
  
        <!-- <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
            <label for="remember-me" class="ml-2 block text-sm text-gray-900">
              Remember me
            </label>
          </div>
  
          <div class="text-sm">
            <a href="/forgotpw" class="font-medium text-indigo-600 hover:text-indigo-500">
              Forgot your password?
            </a>
          </div>
        </div>
   -->
        <div>
          <button on:click={signIn} type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <!-- Heroicon name: solid/lock-closed -->
              <svg class="h-5 w-5 text-teal-100 group-hover:text-teal-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
              </svg>
            </span>
            Sign in
          </button>
        </div>
      </form>
      <!-- {:else}
      <h1>Hi, {userObject.username}!</h1>
      {/if}
      {:catch error} Error! {error} {/await} -->
    </div>
  </div>
  