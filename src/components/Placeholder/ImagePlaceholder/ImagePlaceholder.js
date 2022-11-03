import '../Placeholder.css'

const ImagePlaceholder = ({ isLoading, aspectRatio, children }) =>
    isLoading
        ? <>
            <div data-testid="shimmer-placeholder" className="shimmer-placeholder" style={{ aspectRatio }}></div>
            <div data-testid="placeholder-child-container" style={{visibility: 'hidden', position: 'absolute'}}>{children}</div>
        </>
        : children
export default ImagePlaceholder