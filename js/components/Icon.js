const { useEffect } = React;

const Icon = ({ name, size = 20, className = "" }) => {
    useEffect(() => {
        if (window.lucide) {
            window.lucide.createIcons();
        }
    }, [name]);
    
    return (
        <i 
            data-lucide={name} 
            className={className} 
            style={{ width: size, height: size }}
        ></i>
    );
};

// Exportar globalmente para que otros scripts de Babel puedan usarlo
window.Icon = Icon;
