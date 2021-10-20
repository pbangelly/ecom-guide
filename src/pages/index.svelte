<script>
  import { metatags } from "@roxi/routify";
  import Banner from "../components/Banner.svelte";
  // import Nav from "../components/Nav.svelte";
  import Features from "../components/Features.svelte"
  // import ResourceLinks from "../components/ResourceLinks.svelte";
  import Support from "../components/Support.svelte"
  // import SecondSec from "../components/SecondSec.svelte";
  // import Testimony from "../components/Testimony.svelte";
  import Footer from "../components/Footer.svelte";

  metatags.title = "Hack The Ratio";
  metatags.description = "Building the road you need to get ahead...";
</script>

<div class="bg-white">
  <div class="relative overflow-hidden">
    <!-- <Nav /> -->
    <Banner />
    
    <main>

    <!-- Feature section with screenshot -->
    <!-- <SecondSec /> -->

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
