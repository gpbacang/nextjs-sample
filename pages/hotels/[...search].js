import { useRouter } from 'next/router'

export default () => {
    const router = useRouter()
    return (
        <div>Hotels Search Page {JSON.stringify(router.query)}</div>
    )
}