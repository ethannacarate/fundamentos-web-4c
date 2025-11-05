# ==========================================
# sp_menu_plazas.py
# CRUD básico con SP para la tabla 'plazas'
# Adaptado del ejemplo original.
# ==========================================
import mysql.connector

# ---------- CONFIGURACIÓN DE CONEXIÓN ----------
# !! RECUERDA CAMBIAR LA CONTRASEÑA Y EL USUARIO SI ES NECESARIO !!
DB_CONFIG = {
    "host": "localhost",
    "user": "root",
    "password": "contrasena",  # <-- CAMBIA ESTO
    "database": "seguridad_plazas" # <-- Base de datos actualizada
}

# ---------- FUNCIÓN DE CONEXIÓN ----------
def conectar():
    """
    Crea y devuelve una conexión a MySQL usando DB_CONFIG.
    """
    return mysql.connector.connect(**DB_CONFIG)

# ---------- FUNCIONES PRINCIPALES (Adaptadas para Plazas) ----------

def sp_insertar_plaza(nombre: str, direccion: str, comuna: str, junta_vecinos: str) -> int:
    """
    Inserta una nueva plaza llamando al SP:
    sp_insertar_plaza(IN p_nombre, IN p_direccion, IN p_comuna, IN p_junta, OUT p_nuevo_id)
    Devuelve el ID generado, o -1 si hay error.
    """
    cnx = cur = None
    try:
        cnx = conectar()
        cur = cnx.cursor()
        
        # Argumentos: 4 de entrada (IN) y 1 de salida (OUT)
        args = [nombre, direccion, comuna, junta_vecinos, 0] 
        
        args = cur.callproc("sp_insertar_plaza", args)
        cnx.commit()
        
        nuevo_id = args[4] # El ID de salida está en el índice 4
        print(f"✅ Plaza insertada correctamente. Nuevo ID: {nuevo_id}")
        return nuevo_id
        
    except mysql.connector.Error as e:
        print(f"❌ Error en sp_insertar_plaza: {e}")
        if cnx and cnx.is_connected():
            try:
                cnx.rollback()
                print("ROLLBACK realizado.")
            except Exception as ex:
                print(f"Error durante rollback: {ex}")
        return -1
    finally:
        if cur: cur.close()
        if cnx and cnx.is_connected(): cnx.close()

def sp_listar_plazas_activas():
    """
    Llama al SP sp_listar_plazas_activas().
    Muestra en consola todas las plazas activas (deleted = 0).
    """
    cnx = cur = None
    try:
        cnx = conectar()
        cur = cnx.cursor()
        cur.callproc("sp_listar_plazas_activas")
        
        print("\n=== PLAZAS ACTIVAS ===")
        
        for result in cur.stored_results():
            rows = result.fetchall()
            if not rows:
                print("No hay plazas activas.")
                continue
                
            # (id_plaza, nombre_plaza, direccion, comuna, junta_vecinos, created_at)
            for (id_, nombre, direccion, comuna, junta, creado) in rows:
                print(
                    f"ID:{id_:<4} | Nombre:{nombre:<25} | Comuna:{comuna:<15} | "
                    f"Dirección:{direccion:<30} | Junta V.:{junta}"
                )
                
    except mysql.connector.Error as e:
        print(f"❌ Error en sp_listar_plazas_activas: {e}")
    finally:
        if cur: cur.close()
        if cnx and cnx.is_connected(): cnx.close()

def sp_listar_plazas_todas():
    """
    Llama al SP sp_listar_plazas_todas().
    Muestra todas las plazas, incluidas las eliminadas lógicamente.
    """
    cnx = cur = None
    try:
        cnx = conectar()
        cur = cnx.cursor()
        cur.callproc("sp_listar_plazas_todas")
        
        print("\n=== PLAZAS (TODAS) ===")
        
        for result in cur.stored_results():
            rows = result.fetchall()
            if not rows:
                print("No hay plazas en el sistema.")
                continue
            
            # (id_plaza, nombre_plaza, direccion, comuna, deleted, created_at, deleted_at)
            for (id_, nombre, direccion, comuna, deleted, creado, borrado) in rows:
                estado = "ELIMINADA" if deleted == 1 else "ACTIVA"
                fecha_borrado = borrado if borrado else "-"
                
                print(
                    f"ID:{id_:<4} | {estado:<9} | Nombre:{nombre:<25} | "
                    f"Comuna:{comuna:<15} | Borrado:{fecha_borrado}"
                )
                
    except mysql.connector.Error as e:
        print(f"❌ Error en sp_listar_plazas_todas: {e}")
    finally:
        if cur: cur.close()
        if cnx and cnx.is_connected(): cnx.close()

def sp_borrado_logico_plaza(id_plaza: int):
    """
    Llama a sp_borrado_logico_plaza(IN p_id)
    """
    cnx = cur = None
    try:
        cnx = conectar()
        cur = cnx.cursor()
        
        cur.callproc("sp_borrado_logico_plaza", [id_plaza])
        cnx.commit()
        
        print(f"✅ Borrado lógico aplicado a la Plaza ID {id_plaza} (si estaba activa).")
        
    except mysql.connector.Error as e:
        print(f"❌ Error en sp_borrado_logico_plaza: {e}")
        if cnx and cnx.is_connected():
            try: cnx.rollback()
            except: pass
    finally:
        if cur: cur.close()
        if cnx and cnx.is_connected(): cnx.close()

def sp_restaurar_plaza(id_plaza: int):
    """
    Llama a sp_restaurar_plaza(IN p_id)
    """
    cnx = cur = None
    try:
        cnx = conectar()
        cur = cnx.cursor()
        
        cur.callproc("sp_restaurar_plaza", [id_plaza])
        cnx.commit()
        
        print(f"✅ Restaurada la Plaza ID {id_plaza} (si estaba eliminada).")
        
    except mysql.connector.Error as e:
        print(f"❌ Error en sp_restaurar_plaza: {e}")
        if cnx and cnx.is_connected():
            try: cnx.rollback()
            except: pass
    finally:
        if cur: cur.close()
        if cnx and cnx.is_connected(): cnx.close()

# ---------------- MENÚ PRINCIPAL ----------------
def menu():
    """
    Muestra el menú interactivo para gestionar Plazas.
    """
    while True:
        print("\n===== GESTIÓN DE PLAZAS (MySQL + SP) =====")
        print("1) Insertar nueva plaza")
        print("2) Listar plazas ACTIVAS")
        print("3) Listar plazas (TODAS)")
        print("4) Borrado lógico por ID")
        print("5) Restaurar plaza por ID")
        print("0) Salir")

        opcion = input("Selecciona una opción: ").strip()

        if opcion == "1":
            print("-- Nueva Plaza --")
            nombre = input("Nombre Plaza: ").strip()
            direccion = input("Dirección: ").strip()
            comuna = input("Comuna: ").strip()
            junta = input("Junta de Vecinos (Opcional): ").strip()
            
            if not nombre or not direccion or not comuna:
                print("❌ Nombre, Dirección y Comuna son obligatorios.")
                continue
                
            sp_insertar_plaza(nombre, direccion, comuna, junta)

        elif opcion == "2":
            sp_listar_plazas_activas()

        elif opcion == "3":
            sp_listar_plazas_todas()

        elif opcion == "4":
            try:
                id_p = int(input("ID de la plaza a eliminar lógicamente: ").strip())
                sp_borrado_logico_plaza(id_p)
            except ValueError:
                print("❌ ID inválido. Debe ser un número.")

        elif opcion == "5":
            try:
                id_p = int(input("ID de la plaza a restaurar: ").strip())
                sp_restaurar_plaza(id_p)
            except ValueError:
                print("❌ ID inválido. Debe ser un número.")
                
        elif opcion == "0":
            print("Saliendo del sistema...")
            break
            
        else:
            print("❌ Opción no válida. Intenta nuevamente.")

# Punto de entrada del programa
if __name__ == "__main__":
    menu()