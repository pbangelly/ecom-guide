<script id="blog">
  import ResourceLink from "./ResourceLink.svelte";

  let resources = [
    {
      type: "Article",
      title: "Boost your conversion rate",
      summary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
      author: "Roel Aufderehar",
      authorImage:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=QWrkbJ5Lr0&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      date: "Mar 16, 2020",
      timeToConsume: "6 min read",
      image:
        "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixqx=QWrkbJ5Lr0&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    },
    {
      type: "Video",
      title: "How to use search engine optimization to drive sales",
      summary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.",
      author: "Brenna Goyette",
      authorImage:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixqx=QWrkbJ5Lr0&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      date: "Mar 16, 2020",
      timeToConsume: "6 min read",
      image:
        "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixqx=QWrkbJ5Lr0&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    },
    {
      type: "Case Study",
      title: "Improve your customer experience",
      summary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
      author: "Daniela Metz",
      authorImage:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixqx=QWrkbJ5Lr0&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      date: "Jun 4, 2020",
      timeToConsume: "11 min read",
      image:
        "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixqx=QWrkbJ5Lr0&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    },
  ];
</script>

<div class="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
  <div class="relative">
    <div
      class="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl"
    >
      <h2
        class="text-base font-semibold tracking-wider text-teal-500 uppercase"
      >
        Learn
      </h2>
      <p
        class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl"
      >
        Helpful Resources
      </p>
      <p class="mt-5 mx-auto max-w-prose text-xl text-gray-500">
        Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan
        in quis quis nunc, ullamcorper malesuada. Eleifend condimentum id
        viverra nulla.
      </p>
    </div>
    <div
      class="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl"
    >
      {#each resources as resource, index (resource)}
          <ResourceLink 
            {...resource}
          />
      {/each}
    </div>
  </div>
  <button class="m-5 p-2 rounded-md bg-teal-600 text-white w-auto">View All</button>
</div>
