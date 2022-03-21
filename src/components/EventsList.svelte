<script>
import { paginate, LightPaginationNav } from 'svelte-paginate'
export let lang;
export let data;
import {eventsT} from '../commonTranslations.js';

let items = data;
let currentPage = 1;
let pageSize = 10;
$: paginatedItems = paginate({ items, pageSize, currentPage });
</script>

<article class="prose min-w-[74%]">
<h1>{eventsT[lang]}</h1>

<div class="items">
    {#each paginatedItems as event}
        {event.date.substring(event.date.length-4)}
        <div class="item flex border-l-un-blue border-l-[3px] mb-3 px-2 prose md:min-w-full">
            <div class="flex flex-col gap-0 px-3">
                <span class="text-2xl font-semibold">{ event.date.substring(0,2) }</span>
                <span class="text-xl font-semibold">{ event.date.substring(3,6) }</span>
            </div>
            
            <div class="flex flex-row my-auto">
                <div class="flex flex-col">
                    <a href="/{event.lang}/events/{event.slug}" class="text-xl font-normal no-underline">{event.title.length > 80 ? event.title.substring(0,80)+"..." : event.title }</a>
                    {event.location}
                </div>
                
                <a href="/{event.lang}/events/{event.slug}">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14 stroke-un-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </a>
            </div>
        </div>
        <hr class="mt-0 mb-3 w-2/3">
    {/each}
</div>

<LightPaginationNav
  totalItems="{items.length}"
  pageSize="{pageSize}"
  currentPage="{currentPage}"
  limit="{1}"
  showStepOptions="{true}"
  on:setPage="{(e) => currentPage = e.detail.page}"
/>

</article>

