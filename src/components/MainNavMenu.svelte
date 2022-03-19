<script>
// Component Script (JavaScript)
// Main nav menu

const menuItems = [
    // {name:'Home', url:'/'},
    {name:'About', url:'/about'},
    {name:'Themes', url:'#'},
    {name:'Events', url:'#'},
    {name:'Publications', url:'#'},
    {name:'News', url:'#'},
];
</script>

<nav class="shadow-lg">
    <div class="max-w-6xl">
        <div class="flex justify-between">
        
        <div class="hidden md:flex items-center space-x-1">
            <a href="/" class="bg-un-light-gray py-4 px-5 font-semibold">Home</a>
            {#each menuItems as {name, url}}
                <a href={url} class="bg-un-menu-dark text-white py-4 px-5 font-semibold hover:text-black hover:bg-un-light-gray transition duration-300">{name}</a>
            {/each}
        </div>
        <div class="mr-10 flex md:hidden">
            <button class="inline-flex items-center justify-center p-2 rounded-md text-dark">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z">
                </path>
            </svg>
            </button>
        </div>
        </div>
    </div>
    <div class="hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 md:hidden">
        <a href="" class="cursor-pointer text-white block px-3 py-2 hover:text-blue-500 rounded-md text-base font-medium transition duration-300">Home </a>
        <a href="" class="cursor-pointer text-white block px-3 py-2 hover:text-blue-500 rounded-md text-base font-medium transition duration-300">Projects</a>
        <a href="" class="cursor-pointer bg-purple-600 text-white block px-3 py-2 hover:bg-purple-800 rounded-md text-base font-medium transition duration-300">Donate</a>
        </div>
    </div>
</nav>