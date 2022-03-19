<script>
// Component Script (JavaScript)
// Top bar with welcome and language switcher
export let lang;
import {welcome} from '../commonTranslations.js';
</script>

<div class="bg-un-light-gray py-2 border-b-4 border-b-un-blue px-4 md:px-24">
    <div class="text-[12.35px] flex justify-between">
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w4 inline mr-1 mb-0.5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            {welcome[lang]}
        </div>
        <div>
            <a href="/en">English</a> | <a href="/jp">日本語</a>
        </div>
    </div>
</div>