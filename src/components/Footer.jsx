
const Footer = () =>{
  return (
    <footer>
        <section class="bg-black">
            <div class="bg-wave-pattern bg-repeat-x h-6 relative -top-4"></div>

            <div class="container mx-auto text-center py-10 w-2/3">
                <div class="pb-5">
                    <a href="#" class="xl:text-2xl my-4 inline-block py-2 px-16 bg-red-500 text-white font-black border-transparent border-8 rounded-3xl hover:border-gray-200 hover:bg-white hover:text-black transition duration-200 group">
                        Customer Support 
                        <span class="w-4 h-4 inline-block border-yellow-300 border-solid border-t-[5px] border-r-[5px] transition-all transform rotate-45 group-hover:border-red-500 xl:group-hover:ml-4"></span>
                    </a>
                </div>

                <div class="text-white">
                    <p class="py-2">*Additional games, systems and/or accessories may be required for multiplayer mode</p> 

<p class="py-2">** Nintendo Switch Online membership (sold separately) and Nintendo Account required for online features. Not available in all countries. Internet access required for online features. A Nintendo Account is required to receive and redeem My Nintendo points. Terms apply. nintendo.com/switch-online. </p>

<p class="py-2">Game, systems, some accessories and amiibo sold separately. Visit amiibo.com for details on amiibo functionality. </p>

<p class="py-2">Nintendo Switch Lite plays all games that support handheld mode.</p>

<p class="py-2">©2013-2021 Nintendo. Super Mario and Nintendo Switch are trademarks of Nintendo.</p>
                </div>
            </div>
        </section>
    </footer>    
  );
}

export default Footer;