
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/leandrojales2/portfolio-js/main/data/profile.json';
    const fetching = await fetch(url)
    return await fetching.json
}

