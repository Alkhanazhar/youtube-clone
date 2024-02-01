const GOOGLE_API_KEY = "AIzaSyDbYK0Ag14Hq2En0PhG32o4ksktsuEgBLk"

export const YOUTUBE_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + GOOGLE_API_KEY

export const searchQuery = async (search) => {

    const searchData = await fetch(
        "http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q=" +
        search
    )
    const searchDatajson = await searchData.json();
    return searchDatajson
}
export const searchResults = async (search) => {
    const fetchdata = await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=" +search+ "&type=video&key=" + GOOGLE_API_KEY)
    const jsonFetch = await fetchdata.json()
    return jsonFetch.items
}