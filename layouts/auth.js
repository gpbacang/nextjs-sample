import Navigation from '../components/generic/navigation'
export default ({ children }) => {
    return (
        <div>
            Auth Layout:
            <div></div>
            <Navigation />
            {children}
        </div>
    )
}