<script>
  export let author;
  export let authorImage;
  export let authorImageAlt;
  export let date;
  export let image;
  export let imageAlt;
  export let timeToConsume;
  export let type;
  export let title;
  export let summary;
</script>

<div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
  <div class="flex-shrink-0">
    <img class="h-48 w-full object-cover" src={image} alt={imageAlt} />
  </div>
  <div class="flex-1 bg-white p-6 flex flex-col justify-between">
    <div class="flex-1">
      <p class="text-sm font-medium text-yellow">
        <a href="#" class="hover:underline"> {type} </a>
      </p>
      <a href="#" class="block mt-2">
        <p class="text-xl font-semibold text-gray-900">
          {title}
        </p>
        <p class="mt-3 text-base text-gray-500">
          {summary}
        </p>
      </a>
    </div>
    <div class="mt-6 flex items-center">
      <div class="flex-shrink-0">
        <a href="#">
          <span class="sr-only">{author}</span>
          <img
            class="h-10 w-10 rounded-full"
            src={authorImage}
            alt={authorImageAlt}
          />
        </a>
      </div>
      <div class="ml-3">
        <p class="text-sm font-medium text-gray-900">
          <a href="#" class="hover:underline"> {author} </a>
        </p>
        <div class="flex space-x-1 text-sm text-gray-500">
          <time datetime="2020-03-16"> {date} </time>
          <span aria-hidden="true"> &middot; </span>
          <span> {timeToConsume} </span>
        </div>
      </div>
    </div>
  </div>
</div>
