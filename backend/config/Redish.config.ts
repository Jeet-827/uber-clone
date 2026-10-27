import {createClient} from "redis"

const client = createClient({
    url: process.env.REDIS_URL 
})

client.on('error', (err) => {
    console.log("Redis connection error:", err)
})

export const RedishConnect = async () => {
    await client.connect()
    console.log('Redis connected successfully')
}

export default  client