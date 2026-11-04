# Definición de Dominios y Tipos de Dato - Farmacia

En este documento se detallan los tipos de datos seleccionados para cada atributo del esquema relacional del proyecto, garantizando el uso de tipos exactos para montos monetarios (`NUMERIC`), control de fechas y textos delimitados.

## 1. Tipos de Dato por Columna (Proyecto Propio)

| Tabla | Columna | Tipo de Dato | Longitud / Precisión | Justificación |
| :--- | :--- | :--- | :--- | :--- |
| **categoria** | `nombre` | VARCHAR | 80 | Espacio suficiente para albergar denominaciones de categorías farmacéuticas estándar. |
| **fabricante** | `correo` | VARCHAR | 100 | Longitud estándar internacional para correos electrónicos institucionales o de contacto. |
| **producto** | `precioventa` | NUMERIC | (10, 2) | **Obligatorio:** Los montos monetarios NUNCA se manejan en punto flotante para evitar errores de redondeo contable. |
| **medicamento** | `requierereceta` | BOOLEAN | N/A | Permite definir de forma binaria estricta si un fármaco está sujeto a prescripción médica o es de venta libre. |
| **lote** | `fechacaducidad` | DATE | N/A | Crítico en el dominio farmacéutico para controlar de manera exacta la vigencia y caducidad de los fármacos. |
| **venta** | `metodopago` | VARCHAR | 15 | Espacio adecuado para almacenar acotaciones cortas como 'EFECTIVO', 'TARJETA' o 'TRANSFERENCIA'. |

---

## 2. Reglas de Dominio y Restricciones (CHECK, NOT NULL, UNIQUE, DEFAULT)

1. **Categorías Activas (`ck_categoria_estado`):** El estado de una categoría solo puede ser `'ACTIVO'` o `'INACTIVO'`.
2. **Correos Únicos de Fabricantes (`uq_fabricante_correo`):** Ningún laboratorio o fabricante puede registrarse con un correo electrónico duplicado.
3. **Precios Válidos (`ck_producto_precio`):** El precio de venta de un producto no puede ser negativo (`>= 0`).
4. **Fechas de Lotes Coherentes (`ck_lote_fechas`):** La fecha de caducidad de un lote debe ser estrictamente mayor a su fecha de fabricación.
5. **Cantidades en Lotes (`ck_lote_cantidades`):** La cantidad recibida debe ser mayor a cero, y las unidades disponibles no pueden superar el total recibido ni ser negativas.
6. **Métodos de Pago Válidos (`ck_venta_pago`):** Las ventas deben registrarse obligatoriamente bajo los métodos permitidos: `'EFECTIVO'`, `'TARJETA'` o `'TRANSFERENCIA'`.
7. **Montos Financieros No Negativos (`ck_compra_montos` y `ck_venta_montos`):** Los subtotales, descuentos, impuestos y totales en compras y ventas no admiten valores negativos.
8. **Detalles de Venta y Compra (`ck_dventa_cantidad` / `ck_dcompra_cantidad`):** Las cantidades de productos comprados o vendidos en los detalles deben ser estrictamente mayores a cero (`> 0`).
9. **Estados de Lotes Farmacéuticos (`ck_lote_estado`):** Un lote dentro de la farmacia únicamente puede encontrarse en estados controlados: `'DISPONIBLE'`, `'AGOTADO'`, `'VENCIDO'` o `'RETIRADO'`.
10. **Precios y Descuentos Unitarios (`ck_dventa_precio`):** Los precios unitarios y descuentos aplicados en transacciones deben ser mayores o iguales a cero.
