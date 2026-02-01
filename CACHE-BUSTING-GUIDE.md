# Guía de Cache Busting para Imágenes

## Problema Resuelto
Las imágenes del portafolio (especialmente en la sección de Servicios y en las tarjetas de Proyectos) se estaban viendo desactualizadas en navegadores y dispositivos móviles debido al caché agresivo.

## Solución Implementada

Se han implementado varias estrategias de **cache busting**:

### 1. **Parámetro de Versión Dinámico (`CACHE_VERSION`)**
   - Ubicación: [constants/index.ts](constants/index.ts#L3)
   - Variable global: `CACHE_VERSION = "1738419600"`
   - Se aplica automáticamente a todas las imágenes locales

### 2. **URLs de Freepik Actualizadas**
   - Se agregó parámetro `t=1738419600` a todas las imágenes externas de Freepik
   - Ubicación: [constants/index.ts](constants/index.ts#L18) - Sección SERVICES

### 3. **Headers de Caché en Next.js**
   - Configuración: [next.config.ts](next.config.ts)
   - Max-age: 1 hora (3600 segundos)
   - Must-revalidate: Fuerza revalidación después del max-age

## Cómo Forzar Actualización de Imágenes

Cuando actualices imágenes en tu portafolio, sigue estos pasos:

### Opción 1: Actualizar Globalmente (Recomendado)
1. Abre [constants/index.ts](constants/index.ts)
2. Busca la línea: `export const CACHE_VERSION = "..."`
3. Reemplaza el valor con la fecha/hora actual (puedes usar: `Math.floor(Date.now() / 1000)`)
4. Ejemplo:
   ```typescript
   export const CACHE_VERSION = "1739024400"; // Nuevo timestamp
   ```
5. Guardar - Esto forzará la recarga de TODAS las imágenes locales

### Opción 2: Actualizar URLs de Freepik Específicamente
1. Abre [constants/index.ts](constants/index.ts)
2. En la sección `SERVICES`, actualiza el parámetro `t=` en cada URL
3. Ejemplo:
   ```typescript
   image: "https://img.freepik.com/...jpg?w=826&t=1739024400",
   ```

### Opción 3: Ambas (Recomendado para cambios mayores)
- Actualiza ambos: `CACHE_VERSION` y los parámetros `t=` en las URLs de Freepik
- Garantiza que TODO el caché se limpie completamente

## Archivos Modificados

- **[constants/index.ts](constants/index.ts)** - Agregada constante `CACHE_VERSION` y parámetros de versión en URLs
- **[next.config.ts](next.config.ts)** - Agregados headers de caché
- **[components/Projects.tsx](components/Projects.tsx)** - Aplicado cache busting a imágenes
- **[components/Services.tsx](components/Services.tsx)** - Optimización de propiedades de Image

## Flujo de Cache Busting Automático

```
Usuario visita portafolio
    ↓
Navegador verifica Cache-Control header (max-age=3600)
    ↓
Si han pasado < 1 hora: Usa caché local
Si han pasado > 1 hora: Revalida con servidor
    ↓
Para imágenes locales: Parámetro ?v=CACHE_VERSION fuerza recarga
Para imágenes externas: Parámetro t=... fuerza recarga en CDN
```

## Pruebas

Para verificar que el cache busting funciona:

1. **Navegador Desktop:**
   - Abre DevTools (F12)
   - Network → Disable cache
   - Recarga (Ctrl+Shift+R - hard refresh)
   - Verifica que las imágenes se cargan con la nueva versión

2. **Dispositivos Móviles:**
   - Limpia el caché de la app del navegador
   - Recarga la página
   - Las imágenes deberían verse actualizadas

3. **Verificar Headers:**
   ```bash
   curl -I https://tu-portafolio.com
   # Deberías ver: Cache-Control: public, max-age=3600, must-revalidate
   ```

## Notas Importantes

- El `CACHE_VERSION` se aplica SOLO a imágenes locales (en `/public/img/`)
- Las imágenes de Freepik ya tienen sus propios parámetros de versión
- El cambio se propaga automáticamente a todos los componentes que usan `CACHE_VERSION`
- Para cambios futuros, solo necesitas actualizar la constante en un lugar

## Referencia Rápida

Para forzar recarga inmediata en todos los dispositivos:
1. Genera nuevo timestamp: `date +%s` (Linux/Mac) o usa online tool
2. Actualiza `CACHE_VERSION` en [constants/index.ts](constants/index.ts)
3. Haz commit y deploy
4. Usuarios recibirán imágenes actualizadas dentro de 1 hora (o inmediatamente si hacen hard refresh)
