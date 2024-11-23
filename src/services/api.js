
// Obtener detalles de un contenido (GET method)
export const obtenerContenidoPorId = async (id) => {
    try {
        const response = await fetch(${API_URLS.contenidos}/${id}, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return await handleResponse(response);
    } catch (error) {
        console.error("Error al obtener el contenido:", error);
    }
};