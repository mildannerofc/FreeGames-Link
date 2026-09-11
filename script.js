// Platform URLs mapping
const platformURLs = {
    'default': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=default&initial_app_id=freegames',
    'comcast': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=comcast&initial_app_id=freegames',
    'lg': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=lg&initial_app_id=freegames',
    'webos': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=webos&initial_app_id=freegames',
    'samsung': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=samsung&initial_app_id=freegames',
    'vizio': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=vizio&initial_app_id=freegames',
    'vizio_via': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=vizio_via&initial_app_id=freegames',
    'dishtv': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=dishtv&initial_app_id=freegames',
    'philips': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=philips&initial_app_id=freegames',
    'zeasn': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=zeasn&initial_app_id=freegames',
    'vewd': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=vewd&initial_app_id=freegames',
    'vidaa': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=vidaa&initial_app_id=freegames',
    'youview': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=youview&initial_app_id=freegames',
    'bt': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=bt&initial_app_id=freegames',
    'retail': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=retail&initial_app_id=freegames',
    'talktalk': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=talktalk&initial_app_id=freegames',
    'sony_youview': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=sony_youview&initial_app_id=freegames',
    'lgi': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=lgi&initial_app_id=freegames',
    'lightning': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=lightning&initial_app_id=freegames',
    'orange': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=orange&initial_app_id=freegames',
    'verizon': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=verizon&initial_app_id=freegames',
    'virgin': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=virgin&initial_app_id=freegames',
    'sky': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=sky&initial_app_id=freegames',
    'sky_uk': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=sky_uk&initial_app_id=freegames',
    'sky_uk_glass': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=sky_uk_glass&initial_app_id=freegames',
    'sky_de': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=sky_de&initial_app_id=freegames',
    'sky_it': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=sky_it&initial_app_id=freegames',
    'deutch_telecom': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=deutch_telecom&initial_app_id=freegames',
    'comcast_reg': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=comcast_reg&initial_app_id=freegames',
    'comcast_kids': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=comcast_kids&initial_app_id=freegames',
    'tellytv': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=tellytv&initial_app_id=freegames',
    'cogeco': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=cogeco&initial_app_id=freegames',
    'shaw': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=shaw&initial_app_id=freegames',
    'rogers': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=rogers&initial_app_id=freegames',
    'videotron': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=videotron&initial_app_id=freegames',
    'cox': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=cox&initial_app_id=freegames',
    'firetv': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=firetv&initial_app_id=freegames',
    'sling_androidtv': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=sling_androidtv&initial_app_id=freegames',
    'sling_firetv': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=sling_firetv&initial_app_id=freegames',
    'sling_samsung': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=sling_samsung&initial_app_id=freegames',
    'sling_lg': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=sling_lg&initial_app_id=freegames',
    'sling_vizio': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=sling_vizio&initial_app_id=freegames',
    'sling_comcast': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=sling_comcast&initial_app_id=freegames',
    'sling_airtvplayer': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=sling_airtvplayer&initial_app_id=freegames',
    'sling_kepler': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=sling_kepler&initial_app_id=freegames',
    'android_hilton': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=android_hilton&initial_app_id=freegames',
    'gameloop_lg': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=gameloop_lg&initial_app_id=freegames',
    'gameloop_adth': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=gameloop_adth&initial_app_id=freegames',
    'gameloop_sony': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=gameloop_sony&initial_app_id=freegames',
    'gameloop_hisense': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=gameloop_hisense&initial_app_id=freegames',
    'gameloop_samsung': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=gameloop_samsung&initial_app_id=freegames',
    'gameloop_samsung_ctv': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=gameloop_samsung_ctv&initial_app_id=freegames',
    'gameloop_zinwell': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=gameloop_zinwell&initial_app_id=freegames',
    'mobitech': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=mobitech&initial_app_id=freegames',
    'mobitech_lenovo': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=mobitech_lenovo&initial_app_id=freegames',
    'mobitech_tcl': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=mobitech_tcl&initial_app_id=freegames',
    'mobitech_xiaomi': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=mobitech_xiaomi&initial_app_id=freegames',
    'mobitech_coolita': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=mobitech_coolita&initial_app_id=freegames',
    'sony': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=sony&initial_app_id=freegames',
    'webos_motor': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=webos_motor&initial_app_id=freegames',
    'netgem': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=netgem&initial_app_id=freegames',
    'hilton': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=hilton&initial_app_id=freegames',
    'titan': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=titan&initial_app_id=freegames',
    'cordova': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=cordova&initial_app_id=freegames',
    'html': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=html&initial_app_id=freegames',
    'fetch': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=fetch&initial_app_id=freegames',
    'review': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=review&initial_app_id=freegames',
    'metrological': 'https://service.play.works/service/apps/html5_hub/index.html?config=%2F%2Fservice.play.works%2Fshared%2Fgames_portal%2Fconfig.json&platform=metrological&initial_app_id=freegames'
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
