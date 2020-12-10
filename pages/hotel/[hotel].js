import { useRouter } from 'next/router'

export default () => {
    const router = useRouter()
    return (
        <div>Hotel Detail Page {JSON.stringify(router.query)}</div>
    )
}