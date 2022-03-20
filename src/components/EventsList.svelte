<script>
export let lang;
export let data;

// data.map(d => console.log(d.slug));
// this filters per language and per undefined
const goodData = data.filter(d => (typeof d.slug !== "undefined" && d.lang.localeCompare(lang) == 0));
// goodData.map(d => console.log(d.slug));

// const badData = data.filter(d => !goodData.includes(d))
// badData.map(d => console.log(d));
</script>

<ul class="prose prose-blue">
    {#each goodData as event}
        <li><a href="/{event.lang}/events/{event.slug}">{event.title}</a></li>
    {/each}
</ul>

