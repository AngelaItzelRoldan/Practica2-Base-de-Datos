# Gestión de Usuarios, Roles y Permisos - Farmacia

Para garantizar la seguridad de la información, el sistema implementa el principio de mínimo privilegio sobre PostgreSQL, separando las operaciones mediante roles específicos.

## 1. Definición de Roles del Sistema
1. **Rol de Aplicación (`rol_app_farmacia`):** Diseñado para el sistema operativo de caja y backend. Posee permisos exclusivos de lectura y escritura (`SELECT`, `INSERT`, `UPDATE`) únicamente en las tablas operativas (`producto`, `venta`, `detalle_venta`, `lote`, etc.).
2. **Rol de Consulta (`rol_consulta_farmacia`):** Diseñado para auditoría y gerencia. Posee permisos estrictos de solo lectura (`SELECT`) en todo el esquema para generar reportes analíticos sin riesgo de alterar datos.
3. **Rol de Administración (`rol_admin_farmacia`):** Posee control total (`ALL PRIVILEGES`) sobre la base de datos para tareas de mantenimiento, respaldos y control de esquemas.

## 2. Matriz de Permisos por Rol y Tabla

| Tabla | Rol de Consulta (`SELECT`) | Rol de Aplicación (`SELECT, INSERT, UPDATE`) | Rol de Administración (`ALL`) |
| :--- | :---: | :---: | :---: |
| **categoria** | ✅ Sí | ✅ Sí | ✅ Sí |
| **fabricante** | ✅ Sí | ✅ Sí | ✅ Sí |
| **producto** | ✅ Sí | ✅ Sí | ✅ Sí |
| **medicamento** | ✅ Sí | ✅ Sí | ✅ Sí |
| **compra** | ✅ Sí | ✅ Sí | ✅ Sí |
| **detalle_compra**| ✅ Sí | ✅ Sí | ✅ Sí |
| **lote** | ✅ Sí | ✅ Sí | ✅ Sí |
| **venta** | ✅ Sí | ✅ Sí | ✅ Sí |
| **detalle_venta** | ✅ Sí | ✅ Sí | ✅ Sí |

## 3. Pruebas de Restricción de Permisos (Ejemplo)
* **Operación negada:** Al intentar realizar un `DELETE` utilizando el usuario con `rol_consulta_farmacia`, el gestor devuelve el siguiente mensaje de error:
  `ERROR: permission denied for table producto`
* **Resultado:** Se comprueba que el rol cumple estrictamente con el principio de no poder modificar ni borrar información.
