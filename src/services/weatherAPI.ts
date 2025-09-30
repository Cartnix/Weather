export const fetchData = async(city: string) => {
    const res = await fetch(`https://wttr.in/${city}?format=j1`);
    if(!res.ok){
        throw new Error("Fetch error!!!")
    }
    return await res.json()
}