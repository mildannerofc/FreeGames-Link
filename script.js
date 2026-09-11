// Platform URLs mapping
const platformURLs = {
    'default': 'https://freegames.playworks.tv/default',
    'comcast': 'https://freegames.playworks.tv/comcast',
    'lg': 'https://freegames.playworks.tv/lg',
    'webos': 'https://freegames.playworks.tv/webos',
    'samsung': 'https://freegames.playworks.tv/samsung',
    'vizio': 'https://freegames.playworks.tv/vizio',
    'vizio_via': 'https://freegames.playworks.tv/vizio_via',
    'dishtv': 'https://freegames.playworks.tv/dishtv',
    'philips': 'https://freegames.playworks.tv/philips',
    'zeasn': 'https://freegames.playworks.tv/zeasn',
    'vewd': 'https://freegames.playworks.tv/vewd',
    'vidaa': 'https://freegames.playworks.tv/vidaa',
    'youview': 'https://freegames.playworks.tv/youview',
    'bt': 'https://freegames.playworks.tv/bt',
    'retail': 'https://freegames.playworks.tv/retail',
    'talktalk': 'https://freegames.playworks.tv/talktalk',
    'sony_youview': 'https://freegames.playworks.tv/sony_youview',
    'lgi': 'https://freegames.playworks.tv/lgi',
    'lightning': 'https://freegames.playworks.tv/lightning',
    'orange': 'https://freegames.playworks.tv/orange',
    'verizon': 'https://freegames.playworks.tv/verizon',
    'virgin': 'https://freegames.playworks.tv/virgin',
    'sky': 'https://freegames.playworks.tv/sky',
    'sky_uk': 'https://freegames.playworks.tv/sky_uk',
    'sky_uk_glass': 'https://freegames.playworks.tv/sky_uk_glass',
    'sky_de': 'https://freegames.playworks.tv/sky_de',
    'sky_it': 'https://freegames.playworks.tv/sky_it',
    'deutch_telecom': 'https://freegames.playworks.tv/deutch_telecom',
    'comcast_reg': 'https://freegames.playworks.tv/comcast_reg',
    'comcast_kids': 'https://freegames.playworks.tv/comcast_kids',
    'tellytv': 'https://freegames.playworks.tv/tellytv',
    'cogeco': 'https://freegames.playworks.tv/cogeco',
    'shaw': 'https://freegames.playworks.tv/shaw',
    'rogers': 'https://freegames.playworks.tv/rogers',
    'videotron': 'https://freegames.playworks.tv/videotron',
    'cox': 'https://freegames.playworks.tv/cox',
    'firetv': 'https://freegames.playworks.tv/firetv',
    'sling_androidtv': 'https://freegames.playworks.tv/sling_androidtv',
    'sling_firetv': 'https://freegames.playworks.tv/sling_firetv',
    'sling_samsung': 'https://freegames.playworks.tv/sling_samsung',
    'sling_lg': 'https://freegames.playworks.tv/sling_lg',
    'sling_vizio': 'https://freegames.playworks.tv/sling_vizio',
    'sling_comcast': 'https://freegames.playworks.tv/sling_comcast',
    'sling_airtvplayer': 'https://freegames.playworks.tv/sling_airtvplayer',
    'sling_kepler': 'https://freegames.playworks.tv/sling_kepler',
    'android_hilton': 'https://freegames.playworks.tv/android_hilton',
    'gameloop_lg': 'https://freegames.playworks.tv/gameloop_lg',
    'gameloop_adth': 'https://freegames.playworks.tv/gameloop_adth',
    'gameloop_sony': 'https://freegames.playworks.tv/gameloop_sony',
    'gameloop_hisense': 'https://freegames.playworks.tv/gameloop_hisense',
    'gameloop_samsung': 'https://freegames.playworks.tv/gameloop_samsung',
    'gameloop_samsung_ctv': 'https://freegames.playworks.tv/gameloop_samsung_ctv',
    'gameloop_zinwell': 'https://freegames.playworks.tv/gameloop_zinwell',
    'mobitech': 'https://freegames.playworks.tv/mobitech',
    'mobitech_lenovo': 'https://freegames.playworks.tv/mobitech_lenovo',
    'mobitech_tcl': 'https://freegames.playworks.tv/mobitech_tcl',
    'mobitech_xiaomi': 'https://freegames.playworks.tv/mobitech_xiaomi',
    'mobitech_coolita': 'https://freegames.playworks.tv/mobitech_coolita',
    'sony': 'https://freegames.playworks.tv/sony',
    'webos_motor': 'https://freegames.playworks.tv/webos_motor',
    'netgem': 'https://freegames.playworks.tv/netgem',
    'hilton': 'https://freegames.playworks.tv/hilton',
    'titan': 'https://freegames.playworks.tv/titan',
    'cordova': 'https://freegames.playworks.tv/cordova',
    'html': 'https://freegames.playworks.tv/html',
    'fetch': 'https://freegames.playworks.tv/fetch',
    'review': 'https://freegames.playworks.tv/review',
    'metrological': 'https://freegames.playworks.tv/metrological'
};

// Map platform keys to display names for search
const platformNames = {
    'default': 'Default',
    'comcast': 'Comcast',
    'lg': 'LG',
    'webos': 'WebOS',
    'samsung': 'Samsung',
    'vizio': 'Vizio',
    'vizio_via': 'Vizio Via',
    'dishtv': 'DishTV',
    'philips': 'Philips',
    'zeasn': 'Zeasn',
    'vewd': 'Vewd',
    'vidaa': 'Vidaa',
    'youview': 'YouView',
    'bt': 'BT',
    'retail': 'Retail',
    'talktalk': 'TalkTalk',
    'sony_youview': 'Sony YouView',
    'lgi': 'LGi',
    'lightning': 'Lightning',
    'orange': 'Orange',
    'verizon': 'Verizon',
    'virgin': 'Virgin',
    'sky': 'Sky',
    'sky_uk': 'Sky UK',
    'sky_uk_glass': 'Sky UK Glass',
    'sky_de': 'Sky DE',
    'sky_it': 'Sky IT',
    'deutch_telecom': 'Deutch Telecom',
    'comcast_reg': 'Comcast Reg',
    'comcast_kids': 'Comcast Kids',
    'tellytv': 'TellyTV',
    'cogeco': 'Cogeco',
    'shaw': 'Shaw',
    'rogers': 'Rogers',
    'videotron': 'Videotron',
    'cox': 'Cox',
    'firetv': 'FireTV',
    'sling_androidtv': 'Sling Android TV',
    'sling_firetv': 'Sling FireTV',
    'sling_samsung': 'Sling Samsung',
    'sling_lg': 'Sling LG',
    'sling_vizio': 'Sling Vizio',
    'sling_comcast': 'Sling Comcast',
    'sling_airtvplayer': 'Sling AirTV Player',
    'sling_kepler': 'Sling Kepler',
    'android_hilton': 'Android Hilton',
    'gameloop_lg': 'GameLoop LG',
    'gameloop_adth': 'GameLoop ADTH',
    'gameloop_sony': 'GameLoop Sony',
    'gameloop_hisense': 'GameLoop Hisense',
    'gameloop_samsung': 'GameLoop Samsung',
    'gameloop_samsung_ctv': 'GameLoop Samsung CTV',
    'gameloop_zinwell': 'GameLoop Zinwell',
    'mobitech': 'MobiTech',
    'mobitech_lenovo': 'MobiTech Lenovo',
    'mobitech_tcl': 'MobiTech TCL',
    'mobitech_xiaomi': 'MobiTech Xiaomi',
    'mobitech_coolita': 'MobiTech Coolita',
    'sony': 'Sony',
    'webos_motor': 'WebOS Motor',
    'netgem': 'NetGem',
    'hilton': 'Hilton',
    'titan': 'Titan',
    'cordova': 'Cordova',
    'html': 'HTML',
    'fetch': 'Fetch',
    'review': 'Review',
    'metrological': 'Metrological'
};

// Get DOM elements
const searchInput = document.getElementById('searchInput');
const platformButtons = document.querySelectorAll('.platform-btn');
const noResultsMessage = document.getElementById('noResults');
const loadingScreen = document.getElementById('loadingScreen');

// Initialize event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Search functionality
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        filterPlatforms(searchTerm);
    });

    // Platform button click handlers
    platformButtons.forEach(button => {
        button.addEventListener('click', function() {
            const platform = this.getAttribute('data-platform');
            redirectToPlatform(platform);
        });
    });
});

/**
 * Filter platforms based on search term
 * @param {string} searchTerm - The search term to filter by
 */
function filterPlatforms(searchTerm) {
    let visibleCount = 0;

    platformButtons.forEach(button => {
        const platform = button.getAttribute('data-platform');
        const displayName = platformNames[platform] || platform;

        // Check if the platform name or key matches the search term
        const matches = 
            displayName.toLowerCase().includes(searchTerm) || 
            platform.toLowerCase().includes(searchTerm);

        if (matches) {
            button.classList.remove('hidden');
            visibleCount++;
        } else {
            button.classList.add('hidden');
        }
    });

    // Show/hide no results message
    if (visibleCount === 0 && searchTerm.length > 0) {
        noResultsMessage.classList.remove('hidden');
    } else {
        noResultsMessage.classList.add('hidden');
    }
}

/**
 * Redirect to the specified platform
 * @param {string} platform - The platform key
 */
function redirectToPlatform(platform) {
    const url = platformURLs[platform];
    
    if (!url) {
        console.error(`Platform URL not found for: ${platform}`);
        return;
    }

    // Show loading screen
    loadingScreen.classList.remove('hidden');

    // Redirect after a short delay to show the loading animation
    setTimeout(() => {
        window.location.href = url;
    }, 500);
}
