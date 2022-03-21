<script>
export let lang;
export let data;

// this filters per language and per undefined
const goodData = data.filter(d => (typeof d.slug !== "undefined" && d.lang.localeCompare(lang) == 0));
// const badData = data.filter(d => !goodData.includes(d))
// badData.map(d => console.log(d));
</script>

<article class="prose min-w-[74%]">
<h1>Events</h1>

{#each goodData as event}
    <div class="flex border-l-un-blue border-l-[3px] mb-3 px-2 prose lg:min-w-full">
        <div class="flex flex-col gap-0 px-3">
            <span class="text-2xl font-semibold">{ event.date.substring(0,2) }</span>
            <span class="text-xl font-semibold">{ event.date.substring(3,6) }</span>
        </div>
        
        <div class="flex flex-row">
            <span>
                <a href="/{event.lang}/events/{event.slug}">{event.title.length > 80 ? event.title.substring(0,80)+"..." : event.title }</a>
            </span>
        </div>
    </div>
    <hr class="mt-0 mb-3 w-2/3">
{/each}

</article>

