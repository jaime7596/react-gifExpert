export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=eNvKcaJ9GAbNBHKpfE9gISE9biVfPTfe&q=${category}&limit=10` ;
    const resp = await fetch( url );
    const { data = [] } = await resp.json();
    const gifts = data.map( img => ({
        id : img.id,
        title : img.title,
        url : img.images.downsized.url
    }))
    return gifts;
}