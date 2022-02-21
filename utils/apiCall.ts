import axios from "axios"

export const apiCall = async(
    loading: boolean,
    setAdvice: any,
    setLoading: any
) => {
    if(loading) return

    setLoading(true)

    try{
        const Response = await axios.get(process.env.NEXT_PUBLIC_API_ENDPOINT ?? '')

        setAdvice(Response.data?.slip)

        setLoading(false)
    }
    catch(error){
        console.log(error)
        setLoading(false)
    }
}