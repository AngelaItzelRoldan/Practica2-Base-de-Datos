# Fuente de Datos - Proyecto Farmacia y Varios

En este documento se describe el origen y tratamiento de los datos utilizados para poblar inicialmente las tablas del sistema de la farmacia.

## 1. Referencia de la Fuente (Formato APA 7ª Edición)
* **Institución / Autor:** Instituto Nacional de Estadística y Geografía (INEGI).
* **Año:** 2024.
* **Título del conjunto:** Directorio Estadístico Nacional de Unidades Económicas (DENUE): Comercio al por menor de productos farmacéuticos.
* **Fecha de consulta:** 3 de noviembre de 2026.
* **Enlace / Dirección:** Portal de Datos Abiertos INEGI.
* **Licencia:** Uso libre y abierto para fines académicos y estadísticos bajo los términos de atribución del gobierno federal.

## 2. Descripción del Formato Original
* **Formato original:** CSV / Tablas relacionales normalizadas.
* **Tamaño aproximado:** 15 MB.
* **Registros obtenidos:** ~500 establecimientos y catálogos de insumos médicos de referencia.

## 3. Tabla de Correspondencia (Datos vs Esquema)
| Campo Original en Fuente | Tabla Destino en Esquema | Columna Destino | ¿Se utiliza? | Justificación / Observación |
| :--- | :--- | :--- | :--- | :--- |
| `nom_estab` | `fabricante` | `nombre` | SÍ | Se adapta para registrar el nombre de los laboratorios o proveedores farmacéuticos. |
| `correo_e` | `fabricante` | `correo` | SÍ | Corresponde al correo de contacto institucional del fabricante. |
| `razon_social`| `categoria` | `nombre` | SÍ | Se utiliza para extraer clasificaciones de productos genéricos. |
| `personal_ocu`| *Ninguna* | N/A | NO | Dato estadístico de personal ocupado; no relevante para el control de inventario de la farmacia. |

## 4. Limpieza de Datos Realizados
* **Duplicados:** Se eliminaron registros con nombres de laboratorios repetidos mediante filtros de coincidencia exacta.
* **Acentos y Caracteres:** Se normalizó la codificación a UTF-8 para corregir acentos rotos en nombres de medicamentos y principios activos.
* **Campos vacíos:** Los registros que carecían de número telefónico o sitio web se rellenaron con valores nulos controlados (`NULL`).
