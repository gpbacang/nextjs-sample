import Link from 'next/link'

export default () => {
    return (
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/login">Login</Link></li>
            <li><Link href="/register">Register</Link></li>
            <li><Link href="/hotels/united-arab-emirates/22-12-2020/25-12-2020/2-adults">Hotels Search</Link></li>
            <li><Link href="/hotel/rotana-hotel">Hotel Detail</Link></li>
        </ul>
    )
}