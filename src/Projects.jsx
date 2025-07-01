import { projectItems } from "./constants/projects";

export default function Projects() {
    return (
        <div style={accordionGrid}>
            {projectItems.map((item, index) => (
                <details key={index} style={accordionItem}>
                    <summary style={accordionSummary}>{item.title}</summary>
                    <p style={accordionText}>{item.description}</p>
                </details>
            ))}
        </div>
    )

}

const accordionGrid = {
    marginTop: 20,
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: 25,
};

const accordionItem = {
    background: '#faf5ff',
    border: '1px solid #ddd6fe',
    borderRadius: 10,
    padding: '15px 20px',
    boxShadow: '0 4px 10px rgba(139, 92, 246, 0.1)',
    transition: 'all 0.3s ease-in-out',
};

const accordionSummary = {
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#6b21a8',
};

const accordionText = {
    fontSize: 14,
    marginTop: 10,
    color: '#4b5563',
    lineHeight: 1.5,
};