
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Faccilan - Ropería</title>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Montserrat', Arial, sans-serif;
            background: linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%);
            margin: 0;
            padding: 0;
        }
        header {
            background-color: #6366f1;
            color: #fff;
            padding: 2rem 0 1rem 0;
            text-align: center;
        }
        header h1 {
            margin: 0;
            font-size: 2.5rem;
            letter-spacing: 2px;
        }
        nav {
            margin: 2rem 0 1rem 0;
            text-align: center;
        }
        nav a {
            color: #6366f1;
            background: #fff;
            text-decoration: none;
            margin: 0 1rem;
            padding: 0.7rem 2rem;
            border-radius: 25px;
            font-weight: bold;
            box-shadow: 0 2px 8px rgba(99,102,241,0.08);
            transition: background 0.2s, color 0.2s;
        }
        nav a:hover {
            background: #6366f1;
            color: #fff;
        }
        .main-content {
            max-width: 600px;
            margin: 2rem auto;
            background: #fff;
            border-radius: 16px;
            box-shadow: 0 4px 24px rgba(99,102,241,0.08);
            padding: 2rem;
            text-align: center;
        }
        .main-content p {
            font-size: 1.2rem;
            color: #374151;
        }
        footer {
            text-align: center;
            padding: 1rem 0;
            color: #6366f1;
            background: #f3f4f6;
            position: fixed;
            width: 100%;
            bottom: 0;
        }
    </style>
</head>
<body>
    <header>
        <h1>Faccilan</h1>
        <p>MV Fashion</p>
    </header>
    <nav><a href="#" onclick="mostrarVista('principal');return false;">Inicio</a>
    <a href="#" onclick="mostrarVista('ventas');return false;">Ventas</a>
    <a href="#" onclick="mostrarVista('inventarios');return false;">Inventarios</a>
    <a href="#nosotros">Sobre Nosotros</a>
    </nav>
    <section id="principal" class="main-content" style="display:block;">
        <h2>Bienvenido a Faccilan</h2>
        <p>Tu tienda de ropa y accesorios. Gestiona tus ventas y controla tu inventario fácilmente.</p>
        <div style="display:flex;justify-content:center;gap:2rem;margin:2rem 0;flex-wrap:wrap;">
            <a href="#" onclick="mostrarVista('ventas');return false;" style="background:#6366f1;color:#fff;padding:1rem 2rem;border-radius:12px;text-decoration:none;font-weight:bold;box-shadow:0 2px 8px rgba(99,102,241,0.12);transition:background 0.2s;">Ir a Ventas</a>
            <a href="#" onclick="mostrarVista('inventarios');return false;" style="background:#6366f1;color:#fff;padding:1rem 2rem;border-radius:12px;text-decoration:none;font-weight:bold;box-shadow:0 2px 8px rgba(99,102,241,0.12);transition:background 0.2s;">Ir a Inventarios</a>
        </div>
        <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80" alt="Ropa" style="width:80%;border-radius:12px;margin:1rem 0;">
    </section>

    <section id="ventas" class="main-content" style="margin-top:2rem; display:none;">
        <h2>Módulo de Ventas</h2>
        <p>Aquí podrás registrar nuevas ventas, ver el historial y gestionar los productos vendidos.</p>
        <form id="form-venta" style="margin-bottom:2rem;text-align:left;">
            <h3>Registrar nueva venta</h3>
            <label>Producto:<br><input type="text" name="producto" required style="width:100%;padding:0.5rem;margin-bottom:0.5rem;"></label><br>
            <label>Cantidad:<br><input type="number" name="cantidad" min="1" required style="width:100%;padding:0.5rem;margin-bottom:0.5rem;"></label><br>
            <label>Precio:<br><input type="number" name="precio" min="0" step="0.01" required style="width:100%;padding:0.5rem;margin-bottom:0.5rem;"></label><br>
            <button type="submit" style="background:#6366f1;color:#fff;padding:0.7rem 2rem;border:none;border-radius:8px;font-weight:bold;">Agregar venta</button>
        </form>
        <h3>Historial de Ventas</h3>
        <table id="tabla-ventas" style="width:100%;border-collapse:collapse;">
            <thead>
                <tr style="background:#e0e7ff;">
                    <th style="padding:0.5rem;border:1px solid #ddd;">Producto</th>
                    <th style="padding:0.5rem;border:1px solid #ddd;">Cantidad</th>
                    <th style="padding:0.5rem;border:1px solid #ddd;">Precio</th>
                    <th style="padding:0.5rem;border:1px solid #ddd;">Total</th>
                </tr>
            </thead>
            <tbody>
                <!-- Las ventas se agregarán aquí dinámicamente -->
            </tbody>
        </table>
    </section>

    <section id="inventarios" class="main-content" style="margin-top:2rem; display:none;">
        <h2>Módulo de Inventario</h2>
        <p>Aquí puedes agregar productos al inventario y ver el listado actual.</p>
        <form id="form-inventario" style="margin-bottom:2rem;text-align:left;">
            <h3>Agregar producto</h3>
            <label>Producto:<br><input type="text" name="producto" required style="width:100%;padding:0.5rem;margin-bottom:0.5rem;"></label><br>
            <label>Cantidad:<br><input type="number" name="cantidad" min="1" required style="width:100%;padding:0.5rem;margin-bottom:0.5rem;"></label><br>
            <button type="submit" style="background:#6366f1;color:#fff;padding:0.7rem 2rem;border:none;border-radius:8px;font-weight:bold;">Agregar al inventario</button>
        </form>
        <h3>Inventario Actual</h3>
        <table id="tabla-inventario" style="width:100%;border-collapse:collapse;">
            <thead>
                <tr style="background:#e0e7ff;">
                    <th style="padding:0.5rem;border:1px solid #ddd;">Producto</th>
                    <th style="padding:0.5rem;border:1px solid #ddd;">Cantidad</th>
                </tr>
            </thead>
            <tbody>
                <!-- El inventario se agregará aquí dinámicamente -->
            </tbody>
        </table>
    </section>
<script>
    function mostrarVista(vista) {
        document.getElementById('principal').style.display = 'none';
        document.getElementById('ventas').style.display = 'none';
        document.getElementById('inventarios').style.display = 'none';
        if (vista === 'principal') {
            document.getElementById('principal').style.display = 'block';
        } else if (vista === 'ventas') {
            document.getElementById('ventas').style.display = 'block';
            cargarVentas();
        } else if (vista === 'inventarios') {
            document.getElementById('inventarios').style.display = 'block';
            cargarInventario();
        }
    }
    window.onload = function() {
        mostrarVista('principal');
    };

    // Ventas
    async function cargarVentas() {
        const tabla = document.getElementById('tabla-ventas').getElementsByTagName('tbody')[0];
        tabla.innerHTML = '';
        try {
            const res = await fetch('http://localhost:3000/api/sales');
            const ventas = await res.json();
            ventas.forEach(v => {
                const fila = document.createElement('tr');
                fila.innerHTML = `<td style='padding:0.5rem;border:1px solid #ddd;'>${v.producto}</td><td style='padding:0.5rem;border:1px solid #ddd;'>${v.cantidad}</td><td style='padding:0.5rem;border:1px solid #ddd;'>$${v.precio.toFixed(2)}</td><td style='padding:0.5rem;border:1px solid #ddd;'>$${v.total.toFixed(2)}</td>`;
                tabla.appendChild(fila);
            });
        } catch (err) {
            tabla.innerHTML = '<tr><td colspan="4">Error al cargar ventas</td></tr>';
        }
    }
    document.getElementById('form-venta').addEventListener('submit', async function(e) {
        e.preventDefault();
        const producto = this.producto.value;
        const cantidad = parseInt(this.cantidad.value);
        const precio = parseFloat(this.precio.value);
        try {
            await fetch('http://localhost:3000/api/sales', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ producto, cantidad, precio })
            });
            this.reset();
            cargarVentas();
        } catch (err) {
            alert('Error al registrar venta');
        }
    });

    // Inventario
    async function cargarInventario() {
        const tabla = document.getElementById('tabla-inventario').getElementsByTagName('tbody')[0];
        tabla.innerHTML = '';
        try {
            const res = await fetch('http://localhost:3000/api/inventory');
            const inventario = await res.json();
            inventario.forEach(item => {
                const fila = document.createElement('tr');
                fila.innerHTML = `<td style='padding:0.5rem;border:1px solid #ddd;'>${item.producto}</td><td style='padding:0.5rem;border:1px solid #ddd;'>${item.cantidad}</td>`;
                tabla.appendChild(fila);
            });
        } catch (err) {
            tabla.innerHTML = '<tr><td colspan="2">Error al cargar inventario</td></tr>';
        }
    }
    document.getElementById('form-inventario').addEventListener('submit', async function(e) {
        e.preventDefault();
        const producto = this.producto.value;
        const cantidad = parseInt(this.cantidad.value);
        try {
            await fetch('http://localhost:3000/api/inventory', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ producto, cantidad })
            });
            this.reset();
            cargarInventario();
        } catch (err) {
            alert('Error al agregar producto');
        }
    });
    </script>

    
    <footer>
        &copy; 2025 Faccilan. Todos los derechos reservados.
    </footer>
</body>
</html>
