<script>
// import CustomerChat from '@beyonk/svelte-facebook-customer-chat'

// const chat = new CustomerChat({
//   target: document.querySelector('#my-chat'),
//   data: {
//     page_id: '108844254686925',
//     theme_color: '#ff0000'
//   }
// })
  import { metatags } from "@roxi/routify";
  import Banner from "../components/Banner.svelte";
  // import Nav from "../components/Nav.svelte";
  import Features from "../components/Features.svelte"
  // import ResourceLinks from "../components/ResourceLinks.svelte";
  import Support from "../components/Support.svelte"
  import SecondSec from "../components/SecondSec.svelte";
  // import Testimony from "../components/Testimony.svelte";
  import Footer from "../components/Footer.svelte";

  metatags.title = "Hack The Ratio";
  metatags.description = "Building the road you need to get ahead...";
</script>

<div id="my-chat" class="bg-white">
  <div class="relative overflow-hidden">
    <!-- <Nav /> -->
    <Banner />
    
    <main>

    <!-- Feature section with screenshot -->
    <SecondSec />

    <!-- Feature section with grid -->
    <Features />
    <!-- Testimonial section -->
    <!-- <Testimony/> -->

    <!-- Blog section -->
    <!-- <ResourceLinks /> -->

    <!-- CTA Section - contact support-->
    <Support />
    </main>
    
    <Footer />
  </div>
</div>
