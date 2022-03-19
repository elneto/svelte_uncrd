<script>
// Component Script (JavaScript)
// Logo and name, you can put search bar here too

export let lang;
import svgLogo from '../images/logo-en.svg';
import {nameSite} from '../constants.js';
</script>

<div class="py-10 flex flex-col md:flex-row">
    <img src={svgLogo} alt="UN logo" class="w-72 pr-5 md:border-black md:border-r">
    <div class="mt-2 pl-5 text-un-dark-gray font-bold font-titles text-xl md:text-3xl">
        {@html nameSite[lang]}
    </div>
</div>