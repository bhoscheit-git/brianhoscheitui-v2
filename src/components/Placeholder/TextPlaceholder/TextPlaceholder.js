import { Row, Col } from "react-bootstrap";
import '../Placeholder.css'

const TextPlaceholder = ({ isLoading, rows, children }) =>
    isLoading
        ? [...Array(rows)].map((i, key) => (
            <Row key={key}>
                <Col>
                    <div data-testid={`shimmer-${key}`} className="shimmer-placeholder" style={{ height: '10px', marginBottom: '5px' }}></div>
                </Col>
            </Row>
        ))
        : children

export default TextPlaceholder