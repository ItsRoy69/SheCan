const news = [
    {
        source: {
            id: "the-verge",
            name: "The Verge"
        },
        author: "Alice Newcome-Beill",
        title: "9 great games for your Steam Deck from 2022 - The Verge",
        description: "The Steam Deck is a surprisingly powerful piece of hardware, and there are an absolute wealth of games to choose from. Here are a handful of recommendations from the resident Steam Deck owners at The Verge.",
        url: "https://www.theverge.com/23484820/steam-deck-best-games-2022-roundup",
        urlToImage: "https://cdn.vox-cdn.com/thumbor/DAZXL6b7PRNk58qDaEyCOM-8taQ=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24294341/226437_M_Huigen_year_best_gear_steam_deck_games.jpg",
        publishedAt: "2022-12-31T14:30:00Z",
        content: "Whether youre an early adopter or you were the lucky recipient of a Steam Deck over the holidays, theres an absolute dragons hoard worth of games to choose from. But between the relatively limited st… [+6885 chars]"
    },
    {
        source: {
            id: null,
            name: "Wccftech"
        },
        author: "Jason R. Wilson",
        title: "AMD Radeon Graphics Cards Offer Better Performance In Windows 11 Vs Linux 6.2 - Wccftech",
        description: "Windows 11 & Linux are pitted against each other in several benchmark tests to see which comes out as the best OS for AMD Radeon Graphics.",
        url: "https://wccftech.com/amd-radeon-graphics-cards-offer-better-performance-in-windows-11-vs-linux-6-2/",
        urlToImage: "https://cdn.wccftech.com/wp-content/uploads/2022/12/Win11Pro-V-Ubuntu.png",
        publishedAt: "2022-12-31T06:20:00Z",
        content: "This year has seen multiple updates to the Linux operating system from AMD, Intel, and NVIDIA when it comes to covering graphics cards in the open-source kernel or improvements in processing power, a… [+4263 chars]"
    },
    {
        source: {
            id: null,
            name: "EventHubs"
        },
        author: "Dakota 'DarkHorse' Hills",
        title: "Street Fighter 6's developers had to push back against Capcom management to get all of the features and content they wanted - EventHubs",
        description: "The tale of video game development is typically one of compromise. Whether that be due to technical limitations, a lack of time, budget or a mixture of the three.Sometimes, however, special games come out of an environment where those ...",
        url: "https://www.eventhubs.com/news/2022/dec/30/sf6-developers-capcom-pushback/",
        urlToImage: "https://media.eventhubs.com/images/2022/12/28-sf6-developers-capcom-pushbackT.webp",
        publishedAt: "2022-12-31T04:00:54Z",
        content: "The tale of video game development is typically one of compromise. Whether that be due to technical limitations, a lack of time, budget or a mixture of the three.\r\nSometimes, however, special games c… [+4166 chars]"
    },
    {
        source: {
            id: "google-news",
            name: "Google News"
        },
        author: null,
        title: "6 Classic Ford Mustangs Worth Buying And 4 You Couldn't Pay Us Enough To Own - TopSpeed",
        description: null,
        url: "https://news.google.com/__i/rss/rd/articles/CBMiSWh0dHBzOi8vd3d3LnRvcHNwZWVkLmNvbS9jbGFzc2ljLWZvcmQtbXVzdGFuZ3Mtd29ydGgtYnV5aW5nLWFuZC1hdm9pZGluZy_SAQA?oc=5",
        urlToImage: null,
        publishedAt: "2022-12-31T01:20:00Z",
        content: null
    },
    {
        source: {
            id: null,
            name: "Windows Central"
        },
        author: "Jez Corden",
        title: "Report: Xbox exclusive Redfall is targeting an early May 2023 launch date - Windows Central",
        description: "According to reports and our own sources, Xbox exclusive Redfall is gunning for the first week of May 2023.",
        url: "https://www.windowscentral.com/gaming/report-xbox-exclusive-redfall-is-targeting-an-early-may-2023-launch-date",
        urlToImage: "https://cdn.mos.cms.futurecdn.net/VoJCqwUkAGSA8vnBLPJ3CM-1200-80.jpg",
        publishedAt: "2022-12-31T00:48:49Z",
        content: "<ul><li>Rumors are swirling that upcoming Xbox exclusive Redfall is launching in May, 2023. </li><li>Our sources corroborate those reports, suggesting the first week of May next year. </li><li>If thi… [+2076 chars]"
    },
    {
        source: {
            id: null,
            name: "Push Square"
        },
        author: "Sammy Barker",
        title: "Look Out! Silent Hill: The Short Message Rated for Release on PS5 - Push Square",
        description: "Title re-emerges in Taiwan this time",
        url: "https://www.pushsquare.com/news/2022/12/look-out-silent-hill-the-short-message-rated-for-release-on-ps5",
        urlToImage: "https://images.pushsquare.com/0c8b6286e6915/1280x720.jpg",
        publishedAt: "2022-12-31T00:15:00Z",
        content: "Earlier this year, Konami hosted a livestream to reaffirm its commitment to the Silent Hill franchise, where it announced several new projects, including an avalanche of upcoming games: Silent Hill 2… [+925 chars]"
    },
    {
        source: {
            id: "fox-news",
            name: "Fox News"
        },
        author: "Kurt Knutsson, CyberGuy Report",
        title: "How Google Maps lets loved ones know you're safe at all times - Fox News",
        description: "Kurt \"CyberGuy\" Knutsson explains how you can utilize Google Maps to let your loved ones know you are safe in a situation or can call for help if you are in danger.",
        url: "https://www.foxnews.com/tech/how-google-maps-lets-loved-ones-know-youre-safe-all-times",
        urlToImage: "https://static.foxnews.com/foxnews.com/content/uploads/2022/12/1-GOOGLE-MAPS.jpg",
        publishedAt: "2022-12-31T00:12:52Z",
        content: "Sharing your whereabouts with your loved ones so they know you're safe or can call for help if you're in danger can be very comforting to them and you, and it's now easier than ever with the use of G… [+3505 chars]"
    },
    {
        source: {
            id: "google-news",
            name: "Google News"
        },
        author: null,
        title: "Resident Evil-Like Horror Game Free for Limited Time - ComicBook.com",
        description: null,
        url: "https://news.google.com/__i/rss/rd/articles/CBMiUmh0dHBzOi8vY29taWNib29rLmNvbS9nYW1pbmcvbmV3cy9yZXNpZGVudC1ldmlsLWZyZWUtaG9ycm9yLWdhbWUtZGF5bWFyZS0xOTk4LWdvZy_SAVZodHRwczovL2NvbWljYm9vay5jb20vZ2FtaW5nL2FtcC9uZXdzL3Jlc2lkZW50LWV2aWwtZnJlZS1ob3Jyb3ItZ2FtZS1kYXltYXJlLTE5OTgtZ29nLw?oc=5",
        urlToImage: null,
        publishedAt: "2022-12-30T23:37:00Z",
        content: null
    },
    {
        source: {
            id: "google-news",
            name: "Google News"
        },
        author: null,
        title: "PlayStation Plus Embarrasses Xbox Live Gold With New Free Games - ComicBook.com",
        description: null,
        url: "https://news.google.com/__i/rss/rd/articles/CBMiXWh0dHBzOi8vY29taWNib29rLmNvbS9nYW1pbmcvbmV3cy9wbGF5c3RhdGlvbi1wcy1wbHVzLXhib3gtbGl2ZS1nb2xkLWZyZWUtZ2FtZXMtamFudWFyeS0yMDIzL9IBYWh0dHBzOi8vY29taWNib29rLmNvbS9nYW1pbmcvYW1wL25ld3MvcGxheXN0YXRpb24tcHMtcGx1cy14Ym94LWxpdmUtZ29sZC1mcmVlLWdhbWVzLWphbnVhcnktMjAyMy8?oc=5",
        urlToImage: null,
        publishedAt: "2022-12-30T22:14:00Z",
        content: null
    },
    {
        source: {
            id: null,
            name: "Videocardz.com"
        },
        author: null,
        title: "NVIDIA GeForce RTX 3070 Ti prototype with 16GB memory surfaces - VideoCardz.com",
        description: "NVIDIA plans for RTX 3070 Ti with 16GB VRAM confirmed by leaked prototype A rare graphics card has been discovered lately.  Some rumors do turn out to be true. Just as we were expecting news on RTX 3090 Ti in late 2021, NVIDIA was also preparing RTX 3080 12GB…",
        url: "https://videocardz.com/newz/nvidia-geforce-rtx-3070-ti-prototype-with-16gb-memory-surfaces",
        urlToImage: "https://cdn.videocardz.com/1/2022/12/RTX-3070TI-16GB-HERO.jpg",
        publishedAt: "2022-12-30T22:11:00Z",
        content: "A rare graphics card has been discovered lately. \r\nSome rumors do turn out to be true. Just as we were expecting news on RTX 3090 Ti in late 2021, NVIDIA was also preparing RTX 3080 12GB and RTX 3070… [+1490 chars]"
    },
    {
        source: {
            id: "techcrunch",
            name: "TechCrunch"
        },
        author: "Kyle Wiggers",
        title: "QuickVid uses AI to generate short-form videos, complete with voiceovers - TechCrunch",
        description: "QuickVid, a platform that ties together various AI systems to generate short-form videos, brings opportunities as well as risks.",
        url: "https://techcrunch.com/2022/12/30/quickvid-uses-ai-to-generate-short-form-videos-complete-with-voiceovers/",
        urlToImage: "https://techcrunch.com/wp-content/uploads/2021/11/GettyImages-487456860.jpg?resize=1200,800",
        publishedAt: "2022-12-30T21:39:42Z",
        content: "Generative AI is coming for videos. A new website, QuickVid, combines several generative AI systems into a single tool for automatically creating short-form YouTube, Instagram, TikTok and Snapchat vi… [+9021 chars]"
    },
    {
        source: {
            id: null,
            name: "Nintendo Life"
        },
        author: "Alana Hagues",
        title: "Reminder: Nintendo's Switch eShop Indie World Holiday Sale Ends Soon (North America) - Nintendo Life",
        description: "Update: On until 1st January",
        url: "https://www.nintendolife.com/news/2022/12/reminder-nintendos-switch-eshop-indie-world-holiday-sale-ends-soon-north-america",
        urlToImage: "https://images.nintendolife.com/511fba94795cb/1280x720.jpg",
        publishedAt: "2022-12-30T21:00:00Z",
        content: "Image: Nintendo\r\nUpdate [Fri 30th Dec, 2022 21:00 GMT]: Don't forget about the Indie World sale, folks! This is the final few days to snap up some stellar indie titles to kick off your 2023 in style.… [+1411 chars]"
    },
    {
        source: {
            id: null,
            name: "Gamingonlinux.com"
        },
        author: "Liam Dawe",
        title: "Valve revealed the most played games on Steam Deck for 2022 - GamingOnLinux",
        description: "Valve put up a big list of all the top games on Steam for 2022, and they've given a breakdown across different categories like the Steam Deck. So here's what they listed as the most played, plus a note about the best reviewed games released playable on Steam …",
        url: "https://www.gamingonlinux.com/2022/12/most-played-games-on-steam-deck-2022/.",
        urlToImage: "https://www.gamingonlinux.com/uploads/articles/tagline_images/9940902id22113gol.jpg",
        publishedAt: "2022-12-30T20:38:56Z",
        content: "While you're here, please consider supporting GamingOnLinux on:Reward Tiers: Patreon. Plain Donations: PayPal.\r\nThis ensures all of our main content remains totally free for everyone with no article … [+293 chars]"
    },
    {
        source: {
            id: null,
            name: "Siliconera"
        },
        author: "Graham Russell",
        title: "Siliconera's Overall Game of the Year 2022 - Siliconera",
        description: "",
        url: "https://www.siliconera.com/siliconeras-overall-game-of-the-year-2022/",
        urlToImage: "https://www.siliconera.com/wp-content/uploads/2022/12/goty2022-o.jpg",
        publishedAt: "2022-12-30T20:00:18Z",
        content: "We’ve spent all week doling out our honors for best of each platform, but it’s all been building to this: Siliconera’s Game of the Year 2022. Will it be what you expect? Some of our picks may surpris… [+1570 chars]"
    },
    {
        source: {
            id: null,
            name: "YouTube"
        },
        author: null,
        title: "Looking Forward: 3 New Games We're Excited For in 2023 - IGN Daily Fix - IGN",
        description: "In today’s Daily Fix, we’ll reveal IGN’s top three most-anticipated games of 2023. The first half of the year is completely PACKED with big games arriving ev...",
        url: "https://www.youtube.com/watch?v=YKExQW75djM",
        urlToImage: "https://i.ytimg.com/vi/YKExQW75djM/maxresdefault.jpg",
        publishedAt: "2022-12-30T20:00:14Z",
        content: null
    },
    {
        source: {
            id: null,
            name: "Nintendo Life"
        },
        author: "Kate Gray",
        title: "Best Of 2022: Zelda: Tears Of The Kingdom Trailer Breakdown - Theories And Speculation - Nintendo Life",
        description: "A thorough Sheikdown",
        url: "https://www.nintendolife.com/features/best-of-2022-zelda-tears-of-the-kingdom-trailer-breakdown-theories-and-speculation",
        urlToImage: "https://images.nintendolife.com/032975006ac40/1280x720.jpg",
        publishedAt: "2022-12-30T20:00:00Z",
        content: "Over the holidays we're republishing some choice features from the last 12 months. A mix of talking points, interviews, opinion pieces and more from NL staff and contributors, you'll find our usual b… [+8178 chars]"
    },
    {
        source: {
            id: null,
            name: "My Nintendo News"
        },
        author: "Sickr",
        title: "Rumour: Verified Reddit leaker teases a Metroid Prime announcement - My Nintendo News",
        description: "One of the moderators for Reddit's Gaming Leaks and Rumours sub occasionally receives direct messages from one of the sub's users who creatively leaks video gaming news, just before it is officially…",
        url: "https://mynintendonews.com/2022/12/30/rumour-verified-reddit-game-leaker-seemingly-teases-metroid-prime-announcement/",
        urlToImage: "https://i0.wp.com/mynintendonews.com/wp-content/uploads/2021/11/metroid_dread.jpg?fit=1920%2C1080&ssl=1",
        publishedAt: "2022-12-30T19:22:55Z",
        content: "there is also a rumor that on the next Direct Nintendo will announce their next gen that is slated to come out holiday 2023. will have an OLED at 1080p 144Hz, they are ditching APUs or CPUs with inte… [+377 chars]"
    },
    {
        source: {
            id: null,
            name: "Destructoid"
        },
        author: null,
        title: "Where to find Stored Power TM 041 in Pokémon Scarlet & Violet - Destructoid",
        description: "It works wonders against the Cinderace raid Stored Power is an incredible move: particularly against highly predictable AI, where you...",
        url: "https://www.destructoid.com/where-to-find-stored-power-tm-041-in-pokemon-scarlet-violet/",
        urlToImage: "https://www.destructoid.com/wp-content/uploads/2022/12/Where-to-find-Stored-Power-TM-041-in-Pokemon-Scarlet-Violet-1.jpg",
        publishedAt: "2022-12-30T19:21:17Z",
        content: "It works wonders against the Cinderace raid\r\nStored Power is an incredible move: particularly against highly predictable AI, where you can set it up for success. Here’s where to find the Stored Power… [+875 chars]"
    },
    {
        source: {
            id: "fox-news",
            name: "Fox News"
        },
        author: "Julia Musto",
        title: "Apple Messages app: 5 features to remember - Fox News",
        description: "The Apple Messages app can do so much more now than just send messages, allowing users to edit already-sent messages, as well as retrieve deleted conversations.",
        url: "https://www.foxnews.com/tech/apple-messages-app-features-to-remember",
        urlToImage: "https://static.foxnews.com/foxnews.com/content/uploads/2022/12/App-1.jpg",
        publishedAt: "2022-12-30T18:44:59Z",
        content: "Apple's Messages app now lets users do a lot more than just text and share media. \r\nWith the latest iOS updates, even more functions are available, expanding customers' capabilities. \r\nWhen you next … [+3469 chars]"
    },
    {
        source: {
            id: null,
            name: "YouTube"
        },
        author: null,
        title: "Essential apps for your Android phone for 2023! - 9to5Google",
        description: "Some of our favourite apps.Timestamps--00:00 - Intro00:31 - STOKiE1:14 - Clipt2:08 - Whisk3:07 - Snipd3:55 - CalenTile4:42 - Shortcut Maker5:17 - Shop6:12 - ...",
        url: "https://www.youtube.com/watch?v=U4t_ixW9Cc4",
        urlToImage: "https://i.ytimg.com/vi/U4t_ixW9Cc4/maxresdefault.jpg",
        publishedAt: "2022-12-30T18:34:41Z",
        content: null
    },
    {
        source: {
            id: null,
            name: "Nintendo Life"
        },
        author: "Liam Doolan",
        title: "Cult Of The Lamb To Receive Free \"Major Content Update\" In 2023 - Nintendo Life",
        description: "\"It will add features many of you have requested\"",
        url: "https://www.nintendolife.com/news/2022/12/cult-of-the-lamb-to-receive-free-major-content-update-in-2023",
        urlToImage: "https://images.nintendolife.com/04b545af9fd61/1280x720.jpg",
        publishedAt: "2022-12-30T18:24:10Z",
        content: "Image: Devolver Digital\r\nOne of the surprise indie hits of 2022 was Cult of the Lamb - a fresh take on the roguelite genre mixed with a \"creepy but cute\" aesthetic. If you haven't tried out this game… [+1299 chars]"
    },
    {
        source: {
            id: null,
            name: "Omgubuntu.co.uk"
        },
        author: "Joey Sneddon",
        title: "The 5 Best Linux Distros of 2022 - OMG! Ubuntu!",
        description: "I look back at the best Linux distro releases of 2022. Ubuntu is (obviously) included, but so are non-Ubuntu based Linux distros like Fedora and Manjaro.",
        url: "https://www.omgubuntu.co.uk/2022/12/best-linux-distros-2022",
        urlToImage: "https://149366088.v2.pressablecdn.com/wp-content/uploads/2022/12/best-linux-distros-2022.jpg",
        publishedAt: "2022-12-30T18:06:55Z",
        content: "In this post I look back at the best Linux distros of 2022 and spoiler: they’re not all Ubuntu-based!\r\nI know: I make the same joke every year I do this. But hey: I write about Ubuntu. I use Ubuntu. … [+7447 chars]"
    },
    {
        source: {
            id: null,
            name: "9to5google.com"
        },
        author: "Abner Li",
        title: "Android tablets and Chromebooks are on another crash course – will it be different this time? - 9to5Google",
        description: "While it's up to the market to prove whether Android Tablets are the \"future of computing,\" the other big obstacle are Chromebooks...",
        url: "https://9to5google.com/2022/12/30/android-tablets-chromebooks/",
        urlToImage: "https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2021/03/lenovo-p11-pro-android-tablet-5.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
        publishedAt: "2022-12-30T18:05:00Z",
        content: "While it’s up to the market to prove (or disprove) Google’s belief that Android Tablets are the “future of computing,” the other big obstacle comes from within the company. Chromebooks can very much … [+4963 chars]"
    },
    {
        source: {
            id: null,
            name: "Push Square"
        },
        author: "Robert Ramsey",
        title: "Poll Have You Completed Elden Ring? - Push Square",
        description: "Never give up",
        url: "https://www.pushsquare.com/features/poll-have-you-completed-elden-ring",
        urlToImage: "https://images.pushsquare.com/5964028d0fc37/1280x720.jpg",
        publishedAt: "2022-12-30T18:00:00Z",
        content: "Yes, I've completed it (spent 200 hours enjoying it thoroughly on just the one playthrough) and yes it was my first souls game too.\r\nThis is my game of the year (even though I kind of think that Stra… [+1591 chars]"
    },
    {
        source: {
            id: null,
            name: "Jalopnik"
        },
        author: "Adam Ismail",
        title: "Rally De Europe Is One of the Best Old-School Racers You've Never Heard Of - Jalopnik",
        description: "This is one the West really shouldn't have missed out on.",
        url: "https://jalopnik.com/rally-de-europe-is-one-of-the-best-old-school-racers-yo-1849920542",
        urlToImage: "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/8e5664964ba4212d78fed900953f2d9d.jpg",
        publishedAt: "2022-12-30T18:00:00Z",
        content: "On April 27, 2000, a virtually unknown Japanese developer by the name of Prism Arts released a humble little racing game called Rally De Europe for the PlayStation. It would be the companys third and… [+2479 chars]"
    },
    {
        source: {
            id: null,
            name: "FOX 9"
        },
        author: "FOX 9",
        title: "People sledding with Apple Watches is a problem. Here's why. - FOX 9 Minneapolis-St. Paul",
        description: "People who are sledding, skiing or snowboarding with an Apple Watch should check their settings.",
        url: "https://www.fox9.com/news/people-sledding-with-apple-watches-is-a-problem-heres-why",
        urlToImage: "https://images.foxtv.com/static.fox9.com/www.fox9.com/content/uploads/2022/12/1280/720/GettyImages-1243025265.jpg?ve=1&tl=1",
        publishedAt: "2022-12-30T17:52:19Z",
        content: "ST. CLOUD, Minn. (FOX 9) - People who are sledding, skiing or snowboarding with an Apple Watch should check their settings. \r\nThat's a request from the Stearns County Sheriff's Office on Friday after… [+1317 chars]"
    },
    {
        source: {
            id: null,
            name: "CarScoops"
        },
        author: "Stephen Rivers",
        title: "The Dead 52-Mile 2023 Corvette Z06 Gets A Grim Update - CarScoops",
        description: "What started out as a subpar experience has only gotten worse says the owner",
        url: "https://www.carscoops.com/2022/12/the-dead-52-mile-2023-corvette-z06-gets-a-grim-update/",
        urlToImage: "https://www.carscoops.com/wp-content/uploads/2022/12/tTgzrCuoL_k-HD.jpg",
        publishedAt: "2022-12-30T17:47:44Z",
        content: "What started out as a subpar experience has only gotten worse says the owner \r\nDemand for the 2023 Chevrolet Corvette Z06 is astronomical. That makes sense considering its unique powertrain, aerodyna… [+2983 chars]"
    },
    {
        source: {
            id: null,
            name: "SamMobile"
        },
        author: "SamMobile, Asif Iqbal Shaik",
        title: "Galaxy S23 Ultra could have best low-light photography in 2023 - SamMobile - Samsung news",
        description: "As the launch of the Galaxy S23 series is getting closer, we are getting more details about the phones in ...",
        url: "https://www.sammobile.com/news/galaxy-s23-ultra-camera-low-light-photography-best/",
        urlToImage: "https://www.sammobile.com/wp-content/uploads/2022/09/GALAXY-S23-ULTRA-5K2-scaled-720x405.jpg",
        publishedAt: "2022-12-30T17:08:00Z",
        content: "As the launch of the Galaxy S23 series is getting closer, we are getting more details about the phones in the lineup. Today, we have one more leak, and it comes from tipster Ice Universe (@UniverseIc… [+1340 chars]"
    },
    {
        source: {
            id: null,
            name: "Push Square"
        },
        author: "Sammy Barker",
        title: "#3 - Horizon Forbidden West - Push Square",
        description: "Pure shores",
        url: "https://www.pushsquare.com/features/game-of-the-year-3-horizon-forbidden-west",
        urlToImage: "https://images.pushsquare.com/3e4c048660689/1280x720.jpg",
        publishedAt: "2022-12-30T16:00:00Z",
        content: "Image: Push Square\r\nHow do you improve upon one of the better sci-fi stories in recent video game memory? You go off-the-rails, of course! Dutch developer Guerrilla Games clearly hit Amsterdams fines… [+2065 chars]"
    },
    {
        source: {
            id: null,
            name: "Siliconera"
        },
        author: "Jenni Lada",
        title: "Rune Factory 3 Special Bachelorettes Profiles Shared - Siliconera",
        description: "",
        url: "https://www.siliconera.com/rune-factory-3-special-bachelorettes-profiles-shared-romance/",
        urlToImage: "https://www.siliconera.com/wp-content/uploads/2022/12/rune-factory-3-special-bachelorettes-profiles-shared-1.jpeg",
        publishedAt: "2022-12-30T15:30:42Z",
        content: "There are 11 bachelorettes to romance in Rune Factory 3 Special, and XSEED shared provides with pictures of most of them. The companys gradually been releasing summaries of each heroine on its offici… [+1061 chars]"
    },
    {
        source: {
            id: null,
            name: "Digital Trends"
        },
        author: "Simon Cohen",
        title: "JLab’s new earbuds are smaller than a dime, and it says $99 hearing aids are on the way - Digital Trends",
        description: "JLab will be introducing several new products at CES 2023, including its smallest set of wireless earbuds, and OTC hearing aids that it plans to sell for $99.",
        url: "https://www.digitaltrends.com/home-theater/jlab-jbuds-mini-epic-lab-edition-earbuds-ces-2023/",
        urlToImage: "https://www.digitaltrends.com/wp-content/uploads/2022/12/jlab-jbuds-mini-1.jpeg?resize=1200%2C630&p=1",
        publishedAt: "2022-12-30T15:27:18Z",
        content: "Skip to main content\r\nAhead of next week’s CES 2023 show in Las Vegas, JLab is giving us a sneak peek at what it will be showing to attendees. The company, which has a reputation for very affordable … [+2688 chars]"
    },
    {
        source: {
            id: null,
            name: "MacRumors"
        },
        author: "Sami Fathi",
        title: "Apple Adds iOS 16.2's Home App Upgrade to Internal List of Major Issues - MacRumors",
        description: "Apple has marked iOS 16.2's Home architecture update as a major issue by adding it to an internal list of issues typically only reserved for...",
        url: "https://www.macrumors.com/2022/12/30/apple-adds-home-app-to-issues-list/",
        urlToImage: "https://images.macrumors.com/t/gHCxrOrRLA3QspwtXV0NSdartfs=/2500x/article-new/2021/11/homekit-showdown-2-thumb.jpg",
        publishedAt: "2022-12-30T15:16:31Z",
        content: "Apple has marked iOS 16.2's Home architecture update as a major issue by adding it to an internal list of issues typically only reserved for widespread and noteworthy problems, indicating the update … [+1414 chars]"
    },
    {
        source: {
            id: null,
            name: "YouTube"
        },
        author: null,
        title: "Being A Gamer In 2022 - GameSpot",
        description: null,
        url: "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D9SDADm-I97A",
        urlToImage: null,
        publishedAt: "2022-12-30T15:00:08Z",
        content: null
    },
    {
        source: {
            id: null,
            name: "Siliconera"
        },
        author: "Jenni Lada",
        title: "Masahiro Sakurai Looks at Last of Us Part 1 in His Final 2022 Video - Siliconera",
        description: "",
        url: "https://www.siliconera.com/masahiro-sakurai-plays-last-of-us-part-1-in-his-final-2022-video/",
        urlToImage: "https://www.siliconera.com/wp-content/uploads/2022/12/screen-shot-2022-12-30-at-81114-am.png",
        publishedAt: "2022-12-30T14:30:09Z",
        content: "On a regular basis, Masahiro Sakurai releases videos about game development to enlighten viewers, and the last one to appear in 2022 features him playing The Last of Us Part 1. Sakurai described it a… [+1472 chars]"
    },
    {
        source: {
            id: null,
            name: "SamMobile"
        },
        author: "SamMobile, Asif Iqbal Shaik",
        title: "Leaked Galaxy A54 renders make it look all flagship-like - SamMobile - Samsung news",
        description: "Multiple upcoming Samsung devices have leaked today. A few hours ago, the Galaxy A34 images were revealed, and then the ...",
        url: "https://www.sammobile.com/news/leaked-galaxy-a54-images-colors/",
        urlToImage: "https://www.sammobile.com/wp-content/uploads/2022/12/Samsung-Galaxy-A54-Colors-720x405.jpg",
        publishedAt: "2022-12-30T14:24:00Z",
        content: "Multiple upcoming Samsung devices have leaked today. A few hours ago, the Galaxy A34 images were revealed, and then the Galaxy Book 3 series leaked in the first set of press renders. Now, the officia… [+1651 chars]"
    },
    {
        source: {
            id: null,
            name: "Gameinformer.com"
        },
        author: "Wesley LeBlanc",
        title: "Metal Gear Solid Producer Says 2023 Will Be 'A Year Of Many Announcements' - Game Informer",
        description: "Is it time for the Metal Gear Solid franchise to come back?",
        url: "https://www.gameinformer.com/2022/12/30/metal-gear-solid-producer-says-2023-will-be-a-year-of-many-announcements",
        urlToImage: "https://www.gameinformer.com/sites/default/files/styles/thumbnail/public/2022/12/30/cdcef260/mgs.jpg",
        publishedAt: "2022-12-30T13:57:00Z",
        content: "Metal Gear Solid creator and Death Stranding director Hideo Kojima and Metal Gear Solid publisher Konami parted ways with each other back in 2015 and since then, there hasn't been a mainline entry in… [+1476 chars]"
    },
    {
        source: {
            id: null,
            name: "PhoneArena"
        },
        author: "Preslav Kateliev",
        title: "Prepare for a new Galaxy S24 look: Samsung poaches Chief of Design from Mercedes-Benz! - PhoneArena",
        description: "Samsung has nabbed itself a new Head of Mobile Experience with 20 years of experience in designing for Mercedes-Benz. This should be interesting!",
        url: "https://www.phonearena.com/news/samsung-designer-mercedes-galaxy_id144534",
        urlToImage: "https://m-cdn.phonearena.com/images/article/144534-wide-two_1200/Prepare-for-a-new-Galaxy-S24-look-Samsung-poaches-Chief-of-Design-from-Mercedes-Benz.jpg",
        publishedAt: "2022-12-30T13:44:06Z",
        content: null
    },
    {
        source: {
            id: "google-news",
            name: "Google News"
        },
        author: null,
        title: "Horizon Forbidden West's Alpha Leaks 10 Months After Launch - TheGamer",
        description: null,
        url: "https://news.google.com/__i/rss/rd/articles/CBMiO2h0dHBzOi8vd3d3LnRoZWdhbWVyLmNvbS9ob3Jpem9uLWZvcmJpZGRlbi13ZXN0LWFscGhhLWxlYWsv0gEA?oc=5",
        urlToImage: null,
        publishedAt: "2022-12-30T13:41:00Z",
        content: null
    },
    {
        source: {
            id: null,
            name: "SamMobile"
        },
        author: "SamMobile, Asif Iqbal Shaik",
        title: "US versions of Galaxy Z Flip, Z Flip 5G get December 2022 security update - SamMobile - Samsung news",
        description: "Yesterday, Samsung rolled out the December 2022 security patch to the carrier-locked variant of the Galaxy Z Flip in the ...",
        url: "https://www.sammobile.com/news/us-carrier-unlocked-galaxy-z-flip-december-2022-security-update/",
        urlToImage: "https://www.sammobile.com/wp-content/uploads/2020/02/samsung-galaxy-z-flip-hands-on-10-720x480.jpg",
        publishedAt: "2022-12-30T13:40:00Z",
        content: "Yesterday, Samsung rolled out the December 2022 security patch to the carrier-locked variant of the Galaxy Z Flip in the US. Today, the company is rolling out the same security update to the carrier-… [+1265 chars]"
    },
    {
        source: {
            id: null,
            name: "My Nintendo News"
        },
        author: "Sickr",
        title: "Rumour: Images of Zelda: Tears of the Kingdom Switch (OLED model) leak - My Nintendo News",
        description: "The long-awaited The Legend. Zelda: Tears of the Kingdom is set to release this May and a user of the Chinese forum Tieba (which had leaked previous Nintendo Switch special edition consoles in the…",
        url: "https://mynintendonews.com/2022/12/30/rumour-images-of-zelda-tears-of-the-kingdom-switch-oled-model-leak/",
        urlToImage: "https://i0.wp.com/mynintendonews.com/wp-content/uploads/2022/09/zelda_tears_of_the_kingdom.jpeg?fit=1920%2C1080&ssl=1",
        publishedAt: "2022-12-30T13:00:17Z",
        content: "If this is real, I hope the dock is sold separately. If not, I might consider getting an OLED Switch for this. I can just give my old Switch to my kid because his is probably breaking down. The fan, … [+54 chars]"
    },
    {
        source: {
            id: "wired",
            name: "Wired"
        },
        author: "Lily Hay Newman",
        title: "The Password Isn’t Dead Yet. You Need a Hardware Key - WIRED",
        description: "Any multifactor authentication adds protection, but a physical token is the best bet when it really counts.",
        url: "https://www.wired.com/story/hardware-security-key-passwords-passkeys/",
        urlToImage: "https://media.wired.com/photos/639b782520642730f95ffa01/191:100/w_1280,c_limit/YearEndReview_YubiKey.jpg",
        publishedAt: "2022-12-30T13:00:00Z",
        content: "In August,  the internet infrastructure company Cloudflare was one of hundreds of targets in a massive criminal phishing spree that succeeded in breaching numerous tech companies. While some Cloudfla… [+4419 chars]"
    },
    {
        source: {
            id: null,
            name: "9to5Mac"
        },
        author: "Ben Lovejoy",
        title: "iPhone 15 price cut considered by Apple, for both base and Plus models - 9to5Mac",
        description: "A leaker with a decent track record says that Apple is considering an iPhone 15 price cut, when compared to iPhone 14 pricing. The reduced prices would, they say, apply to the base model iPhone 15 and the larger iPhone 15 Plus. While the idea of Apple cutting…",
        url: "https://9to5mac.com/2022/12/30/iphone-15-price-cut/",
        urlToImage: "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/12/iPhone-15-price-cut.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
        publishedAt: "2022-12-30T12:47:00Z",
        content: "A leaker with a decent track record says that Apple is considering an iPhone 15 price cut, when compared to iPhone 14 pricing. The reduced prices would, they say, apply to the base model iPhone 15 an… [+3874 chars]"
    },
    {
        source: {
            id: null,
            name: "Wccftech"
        },
        author: "Hassan Mujtaba",
        title: "AMD Responds To Radeon RX 7900 XTX Thermal Issues, Asks Users To Contact Support - Wccftech",
        description: "AMD has finally provided a response on the thermal throttling and overheating issues reported for the Radeon RX 7900 XTX graphics card.",
        url: "https://wccftech.com/amd-responds-to-radeon-rx-7900-xtx-thermal-issues-asks-users-to-contact-support/",
        urlToImage: "https://cdn.wccftech.com/wp-content/uploads/2022/12/AMD-Radeon-RX-7900-XTX-Graphics-Card-gigapixel-very_compressed-scale-4_00x-scaled.jpg",
        publishedAt: "2022-12-30T12:33:00Z",
        content: "AMD has finally provided a response on the thermal throttling and overheating issues reported for the Radeon RX 7900 XTX graphics card.\r\nEarlier this week, we reported that a few users were facing is… [+1806 chars]"
    },
    {
        source: {
            id: null,
            name: "How-To Geek"
        },
        author: "Jason Fitzpatrick",
        title: "Here’s How to Use Your Smart Home to Fool Burglars - How-To Geek",
        description: "Smart home gear isn’t just for showing off to friends and automating your life. It’s also really handy for making your home look occupied when you’re away. Here’s how to use your smart home gear to fool burglars.",
        url: "https://www.howtogeek.com/854729/heres-how-to-use-your-smart-home-to-fool-burglars/",
        urlToImage: "https://www.howtogeek.com/wp-content/uploads/2022/12/SmartHomePresenceMimic1.jpg?height=200p&trim=2,2,2,2",
        publishedAt: "2022-12-30T12:00:44Z",
        content: "Justin_Krug/Shutterstock.com\r\nSmart home gear isn’t just for showing off to friends and automating your life. It’s also really handy for making your home look occupied when you’re away. Here’s how to… [+6337 chars]"
    },
    {
        source: {
            id: null,
            name: "Notebookcheck.net"
        },
        author: "Anil Ganti",
        title: "Nvidia GeForce RTX 4060 laptop graphics card's 3DMark Time Spy benchmark score leaks online - Notebookcheck.net",
        description: "A new leak shows the 3DMark Time Spy score of the Nvidia GeForce RTX 4060 mobile. It scores 10,050 points in the benchmark, making it about 20% faster than its predecessor, the GeForce RTX 3060.",
        url: "https://www.notebookcheck.net/Nvidia-GeForce-RTX-4060-laptop-graphics-card-s-3DMark-Time-Spy-benchmark-score-leaks-online.677472.0.html",
        urlToImage: "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Screenshot_8.png",
        publishedAt: "2022-12-30T12:00:03Z",
        content: "Yet another benchmark showcasing an Ada Lovelace laptop graphics card has shown up online. So far, the high-end GeForce RTX 4090 and RTX 4080 have been spotted on Geekbench. While Geekbench is decent… [+1499 chars]"
    },
    {
        source: {
            id: "wired",
            name: "Wired"
        },
        author: "Omar L. Gallaga",
        title: "How to Build a Huge PC Game Library for Free - WIRED",
        description: "No matter how tight your budget is, you can still permanently secure plenty of games for years to come—as long as you’re patient and not too picky.",
        url: "https://www.wired.com/story/how-to-build-library-free-pc-games/",
        urlToImage: "https://media.wired.com/photos/63a456979b14ca84bad145a8/191:100/w_1280,c_limit/PC-Game-library-NBA-2K21-sc8kq3.jpg",
        publishedAt: "2022-12-30T12:00:00Z",
        content: "The Covid-19 pandemics lockdown and lingering effects, plus the sudden drop in price of powerful PC graphics cards this year, led to an unexpected renaissance in computer gaming. \r\nThe argument again… [+2837 chars]"
    },
    {
        source: {
            id: null,
            name: "SheFinds"
        },
        author: "lisa cupido",
        title: "2 iPhone Mistakes Tech Experts Say You Should Avoid At All Costs Because They Put Your Data At Risk - SheFinds",
        description: "Find out which iphone mistakes you should avoid because they put your data at risk on SHEFinds.com.",
        url: "https://www.shefinds.com/collections/2-iphone-mistakes-avoid-data/",
        urlToImage: "https://www.shefinds.com/files/2022/12/Apps-on-iphone.jpg",
        publishedAt: "2022-12-30T11:30:04Z",
        content: "There are a number of iPhone mistakes you could be making that are seriously dwindling your phone battery and doing a number on your storage capabilities. But, the truth is, these errors will leave y… [+1935 chars]"
    },
    {
        source: {
            id: null,
            name: "Thetechoutlook.com"
        },
        author: "Sidharth Joseph",
        title: "[Exclusive] Promotional Image of the Upcoming Samsung Galaxy Book 3 Ultra Leaked - The Tech Outlook",
        description: "The promo image of Samsung's first-ever \"Ultra\" laptop has been leaked. The images of the other laptops in the series - the Galaxy Book 3 Pro and the Galaxy Book 3 Pro 360 are also now available thanks to an inside source.Take a look at it.Samsung Ga",
        url: "https://www.thetechoutlook.com/offers/laptop-offers/exclusive-promotional-image-of-the-upcoming-samsung-galaxy-book-3-ultra-leaked/",
        urlToImage: "https://www.thetechoutlook.com/wp-content/uploads/2022/12/Samsung-Galaxy-Book-3-Ultra-3.jpg",
        publishedAt: "2022-12-30T11:08:15Z",
        content: "The promo image of Samsung’s first-ever “Ultra” laptop has been leaked. The images of the other laptops in the series – the Galaxy Book 3 Pro and the Galaxy Book 3 Pro 360 are also now available than… [+2661 chars]"
    },
    {
        source: {
            id: null,
            name: "Gizchina.com"
        },
        author: "Marco Lancaster",
        title: "New PS5 model will be announced early in 2023 - Gizchina.com",
        description: "According to a trusted insider, a new PS5 model will be launched in the first half of 2023. The actual sales will begin in the second half.",
        url: "https://www.gizchina.com/2022/12/30/new-ps5-model-will-be-announced-early-in-2023/",
        urlToImage: "https://www.gizchina.com/wp-content/uploads/images/2022/12/imagem_2022-12-30_070226896.png",
        publishedAt: "2022-12-30T10:04:06Z",
        content: "The PS5 is an undeniable success, but for sure, its first steps in the market could have been better. The console was introduced in mid-2020 and launched in November of the same year. However, it too… [+3602 chars]"
    },
    {
        source: {
            id: null,
            name: "Internet"
        },
        author: "https://www.facebook.com/thehackernews",
        title: "Researcher Uncovers Potential Wiretapping Bugs in Google Home Smart Speakers - The Hacker News",
        description: "A security researcher has received a $107,500 bounty for discovering vulnerabilities in Google Home smart speakers.",
        url: "https://thehackernews.com/2022/12/researcher-uncovers-potential.html",
        urlToImage: "https://thehackernews.com/new-images/img/b/R29vZ2xl/AVvXsEhZMVFACPB9r45XFCQ95H6qYl3JPtxP7GK4MM_OqTlA4VdpcQOFWeQDm-aM7q6lwWSahvjbluAgrs05hDDFXYbAcEx7LH8wHyud_NWRl6tPLKwsSuhbv3yXYHSRPkAehCrztjRDfEA5WCCvqa-MXypIEbdCQfMpV9V1n85PBLuEVnIieJlr9K8zfulh/s728-rj-e3650/speaker.png",
        publishedAt: "2022-12-30T09:25:00Z",
        content: "A security researcher was awarded a bug bounty of $107,500 for identifying security issues in Google Home smart speakers that could be exploited to install backdoors and turn them into wiretapping de… [+2947 chars]"
    },
    {
        source: {
            id: null,
            name: "MacRumors"
        },
        author: "Hartley Charlton",
        title: "Apple Didn't Release Any New Macs This Quarter for First Time Since 2000 - MacRumors",
        description: "The fourth quarter of 2022 this week becomes the first with no new Mac models in 22 years as previously anticipated devices like the next-generation...",
        url: "https://www.macrumors.com/2022/12/30/no-new-macs-for-first-time-since-2000/",
        urlToImage: "https://images.macrumors.com/t/DzXlkW_FinXxDJ7EtuGeT0yBrlA=/1600x/article-new/2022/12/apple-silicon-mac-lineup-wwdc-2022-feature-purple.jpg",
        publishedAt: "2022-12-30T09:00:00Z",
        content: "The fourth quarter of 2022 this week becomes the first with no new Mac models in 22 years as previously anticipated devices like the next-generation MacBook Pro and Mac Pro models have apparently bee… [+2726 chars]"
    },
    {
        source: {
            id: "engadget",
            name: "Engadget"
        },
        author: "https://www.engadget.com/about/editors/kris-holt",
        title: "NVIDIA RTX 4070 Ti leaks reveal specs and potential price - Engadget",
        description: "After NVIDIA leaked the specs of the GeForce RTX 4070 Ti on its website, reports suggested that the GPU will cost $799..",
        url: "https://www.engadget.com/nvidia-rtx-4070-ti-leak-specs-price-ces-2023-210303412.html",
        urlToImage: "https://s.yimg.com/os/creatr-uploaded-images/2022-12/89e95980-8886-11ed-92ff-f684f269cfc8",
        publishedAt: "2022-12-30T08:35:02Z",
        content: "NVIDIA is expected to reveal its GeForce RTX 4070 Ti graphics card at CES next week, but it preemptively leaked the specs. Thanks to new rumors, we have a sense of the GPU's likely price too.\r\nThe RT… [+1260 chars]"
    },
    {
        source: {
            id: null,
            name: "Notebookcheck.net"
        },
        author: "Ricci Rox",
        title: "OnePlus 11 spec sheet leaks online ahead of launch - Notebookcheck.net",
        description: "The OnePlus 11 be OnePlus's first smartphone of the year, and will make its debut in China next week. Ahead of that event, however, it appears its spec sheet has now surfaced in the wild, revealing its most important details.",
        url: "https://www.notebookcheck.net/OnePlus-11-spec-sheet-leaks-online-ahead-of-launch.677466.0.html",
        urlToImage: "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/oneplus_11_and_buds_pro_2.jpg",
        publishedAt: "2022-12-30T08:24:44Z",
        content: "OnePlus is set to launch its next premium phones shortly. The OnePlus 11 will make its debut in China on January 4, prior to a February 7 global launch event. Ahead of those dates, though, it appears… [+987 chars]"
    },
    {
        source: {
            id: null,
            name: "TweakTown"
        },
        author: "Derek Strickland",
        title: "FTC argues semantics, creates new console market that doesn't include Nintendo - TweakTown",
        description: "The Federal Trade Commission has created a new 'high-performance console' market definition that does not include the $62 billion Nintendo Switch platform.",
        url: "https://www.tweaktown.com/news/89909/ftc-argues-semantics-creates-new-console-market-that-doesnt-include-nintendo/index.html",
        urlToImage: "https://static.tweaktown.com/news/8/9/89909_77_ftc-argues-semantics-creates-new-console-market-that-doesnt-include-nintendo_full.png",
        publishedAt: "2022-12-30T07:37:15Z",
        content: "The Federal Trade Commission has created a new console market that conveniently removes Nintendo from the big picture.\r\nNintendo is and always has been a major player in the console gaming space. The… [+6401 chars]"
    },
    {
        source: {
            id: null,
            name: "Express"
        },
        author: "David Snelling",
        title: "Urgent broadband alert! If your Wi-Fi router is on this list you must update it now - Express",
        description: "Broadband users are being urged to check their Wi-Fi routers without delay after a popular brand of internet boosters revealed it has found a flaw in its devices.",
        url: "https://www.express.co.uk/life-style/science-technology/1715154/Broadband-warning-Netgear-router-issue-update-security-fix",
        urlToImage: "https://cdn.images.express.co.uk/img/dynamic/59/1200x712/4481010.jpg?r=1672388398448",
        publishedAt: "2022-12-30T07:21:00Z",
        content: null
    },
    {
        source: {
            id: null,
            name: "Gematsu"
        },
        author: "Sal Romano",
        title: "Sam & Max: The Devil’s Playhouse Remastered announced - Gematsu",
        description: "Skunkape Games has announced Sam & Max: The Devil's Playhouse Remastered. It will launch in 2023. Platforms were not announced. Sam & Max: The Devil's Playhouse first launched episodically from April…",
        url: "https://www.gematsu.com/2022/12/sam-max-the-devils-playhouse-remastered-announced",
        urlToImage: "https://www.gematsu.com/wp-content/uploads/2022/12/Sam-Max-Devils-Playhouse-Remaster_12-30-22.jpg",
        publishedAt: "2022-12-30T07:18:15Z",
        content: null
    },
    {
        source: {
            id: null,
            name: "MacRumors"
        },
        author: "Joe Rossignol",
        title: "Apple Releases Limited-Edition AirPods Pro in Celebration of Chinese New Year - MacRumors",
        description: "In celebration of the upcoming Chinese New Year on January 22, Apple has released limited-edition second-generation AirPods Pro with a Year of the...",
        url: "https://www.macrumors.com/2022/12/29/year-of-the-rabbit-airpods-pro/",
        urlToImage: "https://images.macrumors.com/t/m-EP6lec9PM_hBi4q_qZ-8CGh_U=/1600x/article-new/2022/12/Apple-Chinese-New-Year-2023.jpeg",
        publishedAt: "2022-12-30T02:57:55Z",
        content: "In celebration of the upcoming Chinese New Year on January 22, Apple has released limited-edition second-generation AirPods Pro with a Year of the Rabbit engraving through its online store and retail… [+1459 chars]"
    },
    {
        source: {
            id: null,
            name: "9to5Mac"
        },
        author: "Filipe Espósito",
        title: "Seeing low-quality previews in iCloud Photos? Here’s how to get the full-resolution media - 9to5Mac",
        description: "With iCloud Photos, iPhone, iPad, and Mac users can store all their photos and videos in iCloud so that they are always kept synchronized between all devices, while also being backed up automatically. However, Apple also lets users remove the original files f…",
        url: "https://9to5mac.com/2022/12/29/low-quality-previews-icloud-photos-full-resolution/",
        urlToImage: "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/04/photos-ios.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
        publishedAt: "2022-12-30T02:24:00Z",
        content: "With iCloud Photos, iPhone, iPad, and Mac users can store all their photos and videos in iCloud so that they are always kept synchronized between all devices, while also being backed up automatically… [+4201 chars]"
    },
    {
        source: {
            id: null,
            name: "YouTube"
        },
        author: null,
        title: "S.T.A.L.K.E.R 2 Heart of Chornobyl Official Trailer - GameSpot",
        description: "A new trailer of S.T.A.L.K.E.R. 2: Heart of Chornobyl is here. Featuring a huge, borderless open-world and a non-linear story, S.T.A.L.K.E.R. 2 releases on X...",
        url: "https://www.youtube.com/watch?v=0ZqMt74hO6U",
        urlToImage: "https://i.ytimg.com/vi/0ZqMt74hO6U/maxresdefault.jpg",
        publishedAt: "2022-12-30T00:16:48Z",
        content: null
    },
    {
        source: {
            id: null,
            name: "PhoneArena"
        },
        author: "Anam Hamid",
        title: "Microsoft's magnificent tablet-laptop Surface Pro 9 is on sale for a new Amazon low - PhoneArena",
        description: "The recently released Microsoft Surface Pro 9 falls to a new Amazon low.",
        url: "https://www.phonearena.com/news/microsoft-surface-pro-9-deal-discount-best-2-in-1-laptop-tablet_id144526",
        urlToImage: "https://m-cdn.phonearena.com/images/article/144526-wide-two_1200/Microsofts-magnificent-tablet-laptop-Surface-Pro-9-is-on-sale-for-a-new-Amazon-low.jpg",
        publishedAt: "2022-12-29T22:48:39Z",
        content: null
    }
]


export default news;