<script>
// Component Script (JavaScript)
// Main nav menu
export let lang;
let expanded = false;

const focusFirstDropdownLink = ({ target }) => {
		target.firstElementChild.focus()
	}

import {menuItems} from '../commonTranslations.js';
import {home} from '../commonTranslations.js';
</script>

<nav class="shadow-lg mb-8">
    <div class="max-w-6xl">
        <div class="flex justify-between">
        
        <div class="hidden md:flex items-center space-x-1">
            <a href="/{lang}" class="bg-un-light-gray py-4 px-5 font-semibold">{home[lang]}</a>
            {#each menuItems[lang] as {name, url}}
                <a href={'/' + lang + url} class="bg-un-menu-dark text-white py-4 px-5 font-semibold hover:text-black hover:bg-un-light-gray transition duration-300">{name}</a>
            {/each}
        </div>
        <div class="mr-10 flex md:hidden">
            <button class="inline-flex items-center justify-center p-2 rounded-md text-dark" aria-expanded={expanded} aria-haspopup="true" aria-label="Nav toggle" on:click={() => {expanded = !expanded; console.log(expanded);}}>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z">
                </path>
            </svg>
            </button>
        </div>
        </div>
    </div>
    <div id="mobile-menu" class:expanded on:transitionend={focusFirstDropdownLink}>
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col md:hidden">
            <a href="/{lang}" class="bg-un-light-gray py-4 px-5 font-semibold">{home[lang]}</a>
            {#each menuItems[lang] as {name, url}}
                <a href={'/' + lang + url} class="bg-un-menu-dark text-white py-4 px-5 font-semibold hover:text-black hover:bg-un-light-gray transition duration-300">{name}</a>
            {/each}
        </div>
    </div>
</nav>

<style>
    div#mobile-menu{
        visibility: hidden;
        display: none;
    }
    div#mobile-menu.expanded{
        visibility: visible;
        display: block;
    }
</style>