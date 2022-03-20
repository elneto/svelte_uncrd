<script>
export let lang;
export let data;
</script>

<ul class="prose prose-blue">
    {#each data as event}
        <li><a href="/{event.lang}/events/{event.slug}">{event.title}</a></li>
    {/each}
</ul>

