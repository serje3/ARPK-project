export const Details = ({ summaryContent, children }) => (
    <details className="details-block">
        <summary>{summaryContent}</summary>
        {children}
    </details>
)