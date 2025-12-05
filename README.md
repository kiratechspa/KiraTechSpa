# 📋 INSTRUCCIONES DE USO Y PERSONALIZACIÓN

## 🔧 Estructura de Archivos

```
KiraTech Spa/
├── index.html           (Página principal)
├── styles.css           (Estilos y diseño)
├── script.js            (Interactividad)
├── KiraTechspa.png      (Logo - DEBES TENER ESTE)
├── ESTRATEGIA_VENTAS.md (Documento de marketing)
└── README.md            (Este archivo)
```

---

## 🎨 PERSONALIZACIONES IMPORTANTES

### 1. **Cambiar el número de WhatsApp**

En `index.html`, busca:
```html
https://wa.me/?text=Hola%20KiraTech%20Spa%20Quiero%20agendar%20un%20servicio
```

Reemplaza con:
```html
https://wa.me/56XXXXXXXXX?text=Hola%20KiraTech%20Spa%20Quiero%20agendar%20un%20servicio
```

(56 = código Chile, incluye tu número sin 9 inicial)

### 2. **Cambiar tu logo**

- Reemplaza `KiraTechspa.png` con tu logo
- Debe estar en la misma carpeta que `index.html`
- Recomendación: 200x200px, PNG con fondo transparente

### 3. **Cambiar colores**

En `styles.css`, busca estos colores:
- `#b266ff` = Púrpura principal
- `#ff9ff3` = Rosa/Magenta
- `#0a0014` = Fondo oscuro
- `#25d366` = Verde WhatsApp

### 4. **Ajustar precios**

En `script.js`, edita los precios en la sección `textos`:
```javascript
<p><strong>💰 Precio:</strong> $45.000 - $65.000</p>
```

### 5. **Cambiar textos de testimonios**

En `index.html`, reemplaza los testimonios ficticios con los reales de tus clientes.

---

## 🚀 CÓMO PUBLICAR TU PÁGINA

### Opción 1: GitHub Pages (GRATIS)
1. Crea cuenta en github.com
2. Crea repositorio llamado "kiratech-spa"
3. Sube tus archivos
4. Ve a Settings → Pages
5. Selecciona "Deploy from branch"
6. Tu sitio estará en: `https://tuusuario.github.io/kiratech-spa`

### Opción 2: Hosting Chile Barato
- **Siteground**: ~$4/mes (bueno para principiantes)
- **Hostinger**: ~$2.99/mes (muy barato)
- **Bluehost**: ~$2.95/mes

Todos incluyen:
- Dominio gratis el primer año
- Email profesional
- Soporte 24/7

### Opción 3: Tu propio dominio + hosting
Compra dominio en NIC.cl (Chile)
Ejemplo: `kiratech-spa.cl` (~$20-30 USD/año)

---

## 📱 PRUEBA EN TU TELÉFONO

1. Si publicaste online: abre el link en WhatsApp
2. Si es local: usa `python -m http.server` en la carpeta
   ```bash
   cd "C:\Users\ricar\OneDrive\Escritorio\KiraTech Spa"
   python -m http.server 8000
   ```
   Luego abre: `http://localhost:8000`

---

## ✨ CARACTERÍSTICAS IMPLEMENTADAS

✅ **Transiciones suaves**
- Animaciones profesionales con cubic-bezier
- Elementos se muestran/ocultan elegantemente
- Indicador visual de selección

✅ **Botones CTA**
- Botón flotante WhatsApp (siempre visible)
- Sección call-to-action grande antes del footer
- Fácil acceso desde cualquier dispositivo

✅ **Social Proof**
- Sección de testimonios con calificaciones
- Genera confianza en nuevos visitantes

✅ **Responsive Design**
- Funciona perfecto en celular
- Adapta tamaños automáticamente
- Botón WhatsApp visible en todo tamaño

✅ **SEO Básico**
- Meta tags
- Títulos descriptivos
- Estructura HTML semántica

---

## 🎯 PRÓXIMOS PASOS RECOMENDADOS

### Semana 1:
- [ ] Personaliza el número WhatsApp
- [ ] Cambia el logo
- [ ] Publica en hosting gratuito
- [ ] Comparte el link

### Semana 2:
- [ ] Agrega fotos reales de tus servicios
- [ ] Reemplaza testimonios con los reales
- [ ] Abre Google My Business
- [ ] Crea Instagram de KiraTech Spa

### Semana 3:
- [ ] Publica en redes sociales
- [ ] Contacta influencers locales
- [ ] Ofrece descuento de lanzamiento
- [ ] Pide reviews a clientes satisfechos

### Semana 4:
- [ ] Analiza Google Analytics
- [ ] Ajusta según resultados
- [ ] Crea estrategia de retención
- [ ] Expande servicios según demanda

---

## 📊 ANÁLITICA RECOMENDADA

Agrega Google Analytics (gratis):

```html
<!-- Agrega esto antes de </head> en index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

Luego ve a analytics.google.com para ver:
- Visitantes diarios
- De dónde vienen
- Qué secciones ven más
- Clicks en WhatsApp

---

## 🐛 TROUBLESHOOTING

### El logo no aparece
- Verifica que `KiraTechspa.png` esté en la misma carpeta
- Revisa que el nombre sea exacto (mayúsculas/minúsculas)

### WhatsApp no abre
- Verifica que incluiste el código de país (56 para Chile)
- Incluye el número sin el 9 inicial
- Prueba en computadora vs teléfono

### Las transiciones se ven raras
- Limpia cache del navegador (Ctrl+Shift+Delete)
- Prueba en otro navegador
- Verifica que JavaScript esté habilitado

### No se ve bien en celular
- Revisa el responsive design en DevTools (F12)
- Abre en diferentes navegadores (Chrome, Safari, Firefox)

---

## 💡 TIPS ADICIONALES

1. **Actualiza regularmente**
   - Nuevas ofertas semanales
   - Blog con tips de mantenimiento
   - Historias en Instagram

2. **Automatiza tu respuesta**
   - Prepara respuesta estándar en WhatsApp
   - Crea formulario con horarios disponibles
   - Bot para responder FAQ

3. **Video marketing**
   - Graba proceso de limpieza (satisfying)
   - Antes/después de servicios
   - Testimonios en video

4. **Email marketing**
   - Crea lista de clientes
   - Envía newsletter mensual
   - Ofertas exclusivas para suscriptores

---

## 📞 SOPORTE

Si tienes preguntas sobre la página:
1. Revisa esta documentación
2. Busca en Google "CSS" o "JavaScript" para problemas técnicos
3. Usa navegador en modo incógnito si hay caché

---

¡Mucho éxito vendiendo tus servicios! 🚀💜
