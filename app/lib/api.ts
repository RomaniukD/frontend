const API_URL = process.env.NEXT_PUBLIC_API_URL

export async function getBrands(category: string) {
    try {
        const res = await fetch(`${API_URL}/${category}`, {
            cache: 'force-cache'
        })
        if (!res.ok) return { error: true };
        return res.json()
    } catch (err) {
        console.log(err)
    }
}

export async function getModels(category: string, brand: string) {
    try {
        const res = await fetch(`${API_URL}/${category}/${brand}`, {
            cache: 'force-cache'
        })
        if (!res.ok) return { error: true };
        return res.json()
    } catch (err) {
        console.log(err)
    }
}

export async function getDetails(model: string) {
    try {
        const res = await fetch(`${API_URL}/category/brand/${model}`, {
            cache: 'force-cache'
        })
        if (!res.ok) return { error: true };
        return res.json()

    } catch (err) {
        console.log(err)
    }
}

export async function getSubDetails(detailId:string) {
    try {
        const res = await fetch(`${API_URL}/category/brand/model/${detailId}`, {
            cache: 'force-cache'
        })
        if(!res.ok) return
        const result = await res.json()
        return result
    }catch(err) {
        throw (err)
    }
}