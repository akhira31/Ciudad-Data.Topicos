import axios from 'axios';

// Función para obtener la Esperanza de Vida (WHOSIS_000001)
export const getLifeExpectancy = async (iso3: string) => {
  try {
    // URL Real de la Organización Mundial de la Salud
    // WHOSIS_000001 es el código para "Life expectancy at birth"
    const url = `https://ghoapi.azureedge.net/api/WHOSIS_000001?$filter=SpatialDim eq '${iso3}'`;
    
    const response = await axios.get(url);
    
    // Si la OMS no devuelve datos para ese país
    if (!response.data.value || response.data.value.length === 0) {
      return { 
        country: iso3, 
        message: "No hay datos recientes disponibles para este país en la OMS" 
      };
    }

    // Tomamos el primer dato disponible (el más reciente)
    const data = response.data.value[0];
    
    return {
      country: iso3,
      indicator: "Esperanza de vida al nacer",
      value: data.NumericValue, // El número de años (ej. 72.5)
      year: data.TimeDim,       // El año del dato (ej. 2020)
      source: "WHO (OMS) GHO API"
    };

  } catch (error) {
    console.error("Error conectando con la OMS:", error);
    throw new Error('Falló la conexión con el servicio de la OMS');
  }
};