import Navigation from '../components/generic/navigation'
export default ({ children }) => {
    return (
        <div>
            Default Layout
            <div></div>
            <Navigation />
            {children}
        </div>
    )
}