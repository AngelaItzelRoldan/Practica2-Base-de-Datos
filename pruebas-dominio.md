# Pruebas de Violación de Restricciones de Dominio

A continuación se presentan 10 casos de prueba ejecutados sobre el motor de PostgreSQL para verificar que las restricciones implementadas protegen correctamente la integridad del negocio farmacéutico.

### Prueba 1: Violación de Clave Foránea inexistente (`fk_producto_categoria`)
* **Operación intentada:** Insertar un producto vinculándolo a una categoría que no existe (`categoria_id = 999`)[cite: 6].
* **Resultado esperado:** Rechazo por parte de la base de datos debido a la violación de integridad referencial.
* **Mensaje del gestor:** `ERROR: insert or update on table "producto" violates foreign key constraint "fk_producto_categoria" / DETAIL: Key (categoria_id)=(999) is not present in table "categoria".`
* **Regla protegida:** Todo producto comercializado debe pertenecer obligatoriamente a una categoría registrada previamente en el catálogo.

### Prueba 2: Violación de Restricción `UNIQUE` (`uq_fabricante_correo`)
* **Operación intentada:** Registrar un segundo fabricante utilizando un correo electrónico que ya se encuentra asignado en la tabla (`info@labuno.com`)[cite: 6].
* **Resultado esperado:** Rechazo de la transacción por duplicidad de datos únicos.
* **Mensaje del gestor:** `ERROR: duplicate key value violates unique constraint "uq_fabricante_correo" / DETAIL: Key (correo)=(info@labuno.com) already exists.`
* **Regla protegida:** Evitar la duplicidad de cuentas de contacto institucionales para los laboratorios farmacéuticos.

### Prueba 3: Violación de Restricción `CHECK` de Rango (`ck_producto_precio`)
* **Operación intentada:** Intentar registrar un producto con un precio de venta negativo (`precioventa = -1.00`)[cite: 6].
* **Resultado esperado:** Rechazo inmediato por incumplimiento del rango numérico permitido.
* **Mensaje del gestor:** `ERROR: new row for relation "producto" violates check constraint "ck_producto_precio"`
* **Regla protegida:** Ningún medicamento o producto diverso puede tener un precio comercial negativo.

### Prueba 4: Violación de Restricción `NOT NULL` (`nombre` en producto)
* **Operación intentada:** Insertar un registro de producto omitiendo el nombre obligatorio (`nombre = NULL`)[cite: 6].
* **Resultado esperado:** Rechazo por valor nulo no permitido en columna esencial.
* **Mensaje del gestor:** `ERROR: null value in column "nombre" of relation "producto" violates not-null constraint`
* **Regla protegida:** Todo artículo en el inventario de la farmacia debe contar con una denominación descriptiva obligatoria.

### Prueba 5: Violación de Restricción `CHECK` de Estado de Categoría (`ck_categoria_estado`)
* **Operación intentada:** Insertar una categoría con un estado no autorizado (`estado = 'EN_ESPERA'`).
* **Resultado esperado:** Rechazo por restricción de lista de valores permitidos.
* **Mensaje del gestor:** `ERROR: new row for relation "categoria" violates check constraint "ck_categoria_estado"`
* **Regla protegida:** Las categorías de los productos solo pueden aceptar los estados estipulados (`ACTIVO` o `INACTIVO`).

### Prueba 6: Violación de Restricción `CHECK` de Fechas en Lotes (`ck_lote_fechas`)
* **Operación intentada:** Registrar un lote farmacéutico donde la fecha de caducidad sea anterior o igual a la de fabricación.
* **Resultado esperado:** El gestor rechaza la operación lógica de tiempos.
* **Mensaje del gestor:** `ERROR: new row for relation "lote" violates check constraint "ck_lote_fechas"`
* **Regla protegida:** Un medicamento nunca puede caducar antes de haber sido fabricado, garantizando la seguridad sanitaria.

### Prueba 7: Violación de Restricción `CHECK` de Cantidades en Lotes (`ck_lote_cantidades`)
* **Operación intentada:** Asignar una cantidad de unidades disponibles mayor a la cantidad total recibida inicialmente.
* **Resultado esperado:** Rechazo por incongruencia matemática en el inventario.
* **Mensaje del gestor:** `ERROR: new row for relation "lote" violates check constraint "ck_lote_cantidades"`
* **Regla protegida:** El stock disponible de un lote farmacéutico no puede rebasar el total de unidades que ingresaron en la recepción.

### Prueba 8: Violación de Restricción `CHECK` de Métodos de Pago (`ck_venta_pago`)
* **Operación intentada:** Registrar una venta utilizando un método de pago no contemplado por la farmacia (`metodopago = 'BITCOIN'`).
* **Resultado esperado:** Rechazo por incumplimiento del dominio de pagos válidos.
* **Mensaje del gestor:** `ERROR: new row for relation "venta" violates check constraint "ck_venta_pago"`
* **Regla protegida:** La caja de la farmacia solo procesa transacciones bajo los medios financieros autorizados.

### Prueba 9: Violación de Restricción `CHECK` de Cantidades en Detalle (`ck_dventa_cantidad`)
* **Operación intentada:** Registrar una venta de un medicamento con una cantidad cero o negativa (`cantidad = 0`).
* **Resultado esperado:** Rechazo por parte de la regla de cantidad mínima de venta.
* **Mensaje del gestor:** `ERROR: new row for relation "detalle_venta" violates check constraint "ck_dventa_cantidad"`
* **Regla protegida:** No se pueden procesar transacciones de venta con cantidades nulas o negativas de productos.

### Prueba 10: Violación de Restricción `CHECK` de Montos Monetarios Totales (`ck_compra_montos`)
* **Operación intentada:** Insertar un registro de compra con un impuesto negativo (`impuesto = -50.00`).
* **Resultado esperado:** Rechazo de la inserción contable.
* **Mensaje del gestor:** `ERROR: new row for relation "compra" violates check constraint "ck_compra_montos"`
* **Regla protegida:** Los cargos fiscales y montos totales de adquisición a proveedores no pueden registrarse con valores negativos.
