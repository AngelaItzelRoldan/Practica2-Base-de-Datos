# Documentación de Claves Foráneas e Integridad Referencial - Farmacia

En este documento se enlistan todas las llaves foráneas (`FOREIGN KEY`) que conectan las tablas del modelo relacional de la farmacia, especificando su relación y comportamiento operativo.

| Tabla Hija | Columna Local | Tabla Padre Referenciada | Columna Padre | Admite Nulos | Relación / Descripción |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **producto** | `categoria_id` | categoria | id | NO | Relación Categoría-Producto (Un producto pertenece estrictamente a una categoría). |
| **producto** | `fabricante_id` | fabricante | id | NO | Relación Fabricante-Producto (Todo producto es producido por un laboratorio registrado). |
| **medicamento** | `producto_id` | producto | id | NO | Especialización de Producto: Entidad dependiente que almacena los atributos exclusivos de fármacos. |
| **otro_producto** | `producto_id` | producto | id | NO | Especialización de Producto: Entidad dependiente para artículos de diversa índole (ej. perfumería, cuidado personal). |
| **detalle_compra** | `compra_id` | compra | id | NO | Detalla los artículos adquiridos dentro de una orden de compra general. |
| **detalle_compra** | `producto_id` | producto | id | NO | Asocia el catálogo de productos con los renglones de abastecimiento del proveedor. |
| **lote** | `producto_id` | producto | id | NO | Control físico: Todo lote pertenece y rastrea un producto específico del catálogo. |
| **lote** | `compra_id`, `producto_id` | detalle_compra | compra_id, producto_id | SÍ | Vincula el lote físico directamente con la partida de compra específica que le dio origen. |
| **detalle_venta** | `venta_id` | venta | id | NO | Registra los renglones de salida de artículos por cada ticket de caja generado. |
| **detalle_venta** | `producto_id` | producto | id | NO | Asegura que el producto vendido exista en el catálogo general de la farmacia. |
