

/**
 * ===========================================
 * SCRIPT.JS - FUNCIONALIDAD INTERACTIVA DEL SITIO
 * ===========================================
 *
 * Este archivo contiene toda la lógica JavaScript para el sitio web de KiraTech Tech Spa.
 * Incluye funciones para mostrar detalles de servicios, efectos visuales y manejo de popups.
 *
 * FUNCIONES PRINCIPALES:
 * - mostrarDetalle(): Muestra popup con información detallada de servicios
 * - initSparkles(): Crea efectos visuales de fondo con partículas
 *
 * OBJETOS PRINCIPALES:
 * - textos: Objeto que contiene las descripciones HTML detalladas de cada servicio
 *
 * VARIABLES GLOBALES:
 * - abierto: Controla si hay un popup abierto actualmente
 * - elementoActivo: Elemento DOM actualmente activo
 */

let abierto = null; // Variable para controlar si hay un popup abierto
let elementoActivo = null; // Elemento DOM que está actualmente activo

/**
 * OBJETO TEXTOS - DESCRIPCIONES DETALLADAS DE SERVICIOS
 * ===========================================
 * Contiene las plantillas HTML para cada servicio técnico.
 * Cada propiedad corresponde a un ID de servicio y contiene:
 * - Título del servicio
 * - Descripción técnica detallada
 * - Proceso paso a paso
 * - Especificaciones técnicas (tiempo, precio, resultados)
 * - Información de garantía
 * - Casos técnicos documentados
 */
const textos = {
    mantpc: `
    <div class='detalle'>
        <h3>DIAGNÓSTICO Y LIMPIEZA PROFESIONAL – Servicio Técnico Completo</h3>
        <p><strong>Servicio técnico integral para recuperar el rendimiento óptimo de tu computadora.</strong></p>
        <p>Tu PC es una herramienta de trabajo y entretenimiento. Merece mantenimiento técnico profesional para mantener su rendimiento y prolongar su vida útil.</p>
        
        <p style="color:#ff9ff3; margin:15px 0; font-weight:600;">📋 PROCESO TÉCNICO DETALLADO:</p>
        <ul>
            <li><strong>Diagnóstico Inicial:</strong> Análisis completo del hardware y software con herramientas especializadas</li>
            <li><strong>Inspección Visual:</strong> Verificación de componentes físicos y conexiones</li>
            <li><strong>Limpieza Profesional:</strong> Remoción de polvo acumulado con aire comprimido industrial</li>
            <li><strong>Mantenimiento de Componentes:</strong> Limpieza especializada de ventiladores, disipadores y radiadores</li>
            <li><strong>Verificación de Conexiones:</strong> Chequeo de cables, puertos y conectores internos</li>
            <li><strong>Medición de Temperaturas:</strong> Monitoreo antes/después con software profesional</li>
            <li><strong>Test de Estabilidad:</strong> Verificación de funcionamiento óptimo bajo carga</li>
            <li><strong>Reporte Técnico:</strong> Documentación completa del servicio realizado</li>
        </ul>
        
        <p style="margin:15px 0;"><strong>⏱️ Tiempo:</strong> 2-3 horas | <strong>💰 Precio:</strong> MX$950</p>
        <p style="margin:15px 0;"><strong>📊 RESULTADOS TÉCNICOS ESPERADOS:</strong></p>
        <ul>
            <li>🌡️ Reducción de temperatura: 15-20°C en componentes críticos</li>
            <li>🔊 Reducción de ruido: 70-80% menos ruido de ventiladores</li>
            <li>⚡ Mejora de rendimiento: Respuesta más rápida del sistema</li>
            <li>🛡️ Prevención de fallos: Extensión de vida útil del equipo</li>
        </ul>
        
        <p><strong>🛡️ Garantía: 30 días | Incluye Reporte Técnico Detallado</strong></p>
        <p style="color:#d0d0ff; font-size:0.95em;">Tu PC sale con rendimiento óptimo, temperaturas controladas y funcionamiento certificado. Reserva por WhatsApp o inbox — servicio profesional garantizado.</p>
        <p> 
        <strong>Precio regular:</strong> <s>$950 MXN</s><br>
        <strong>Descuento por apertura navideña🎄</strong> –$350 MXN<br>
        🔥 <strong >Total hoy: $600 MXN</strong>
        </p>
        <p style="margin:12px 0; color:#fff7; font-size:0.95em;"><strong>Caso técnico documentado (ejemplo real):</strong> En una Asus TUF A15 (Ryzen 7) realizamos limpieza completa con aire comprimido industrial, mantenimiento de sistema de enfriamiento, y verificación de todos los componentes. Con pruebas antes/después en stress test el CPU mostró reducción de ~32°C y la GPU ~16°C. Los resultados varían según el estado del equipo y condiciones de uso.</p>
    </div>
    `,

    pasta: `
    <div class='detalle'>
        <h3>THERMAL SWAP – Reemplazo Profesional de Pasta Térmica</h3>
        <p><strong>Reemplazo técnico de pasta térmica con compuestos premium para optimizar la disipación de calor.</strong></p>
        <p>La pasta térmica se degrada con el tiempo, creando una barrera térmica que impide la transferencia eficiente de calor entre CPU/GPU y el disipador.</p>
        
        <p style="color:#ff9ff3; margin:15px 0; font-weight:600;">📋 PROCESO TÉCNICO CERTIFICADO:</p>
        <ul>
            <li><strong>Diagnóstico Térmico:</strong> Medición de temperaturas actuales con software especializado</li>
            <li><strong>Desmontaje Profesional:</strong> Retiro del disipador con técnica especializada (sin dañar componentes)</li>
            <li><strong>Remoción de Pasta Antigua:</strong> Limpieza completa con solventes profesionales</li>
            <li><strong>Preparación de Superficies:</strong> Limpieza de CPU/GPU con isopropanol de grado técnico</li>
            <li><strong>Aplicación Técnica:</strong> Método "pea drop" (colocación precisa y uniforme)</li>
            <li><strong>Reensamblaje Controlado:</strong> Torque exacto en tornillos para presión óptima</li>
            <li><strong>Verificación Inmediata:</strong> Test de temperaturas en tiempo real</li>
            <li><strong>Monitoreo de Estabilización:</strong> Verificación térmica durante 30 minutos</li>
        </ul>
        
        <p style="margin:15px 0;"><strong>⏱️ Tiempo:</strong> 45 minutos - 1 hora | <strong>💰 Precio:</strong> MX$400 - MX$650</p>
        <p style="margin:15px 0;"><strong>📊 RESULTADOS TÉCNICOS ESPERADOS:</strong></p>
        <ul>
            <li>🌡️ Reducción térmica: 10-15°C en carga máxima</li>
            <li>⚡ Estabilidad mejorada: Evita throttling automático del procesador</li>
            <li>🔧 Eficiencia energética: Menor consumo por mejor disipación</li>
            <li>📈 Longevidad extendida: 3-5 años adicionales de vida útil</li>
        </ul>
        <p> 
        <strong>Precio regular:</strong> <s>$800 MXN</s><br>
        <strong>Descuento por apertura navideña🎄</strong> –$350 MXN<br>
        🔥 <strong >Total hoy: $450 MXN</strong>
        </p>
        
        <p style="margin:15px 0;"><strong>🏆 COMPUESTOS PREMIUM UTILIZADOS:</strong> Arctic MX-4 | Arctic MX-6 (según especificaciones técnicas)</p>
        <p><strong>🛡️ Garantía: 6 meses | Incluye Reporte Térmico Certificado</strong></p>
        <p style="color:#d0d0ff; font-size:0.95em;">Servicio recomendado para gamers competitivos, creadores de contenido y usuarios que demandan máximo rendimiento. Reserva por WhatsApp para diagnóstico técnico.</p>
    </div>
    `,

    optimizacion: `
    <div class='detalle'>
        <h3>SYSTEM BOOST – Modo Bestia (SSD, salud de disco y recomendaciones)</h3>
        <p><strong>Determinamos qué está afectando el rendimiento real de tu equipo y proponemos mejoras concretas.</strong></p>
        <p>Este servicio está pensado para diagnosticar discos (HDD/SSD), evaluar salud del SSD, tiempos de arranque, y proponer acciones: clonación a SSD, optimización de almacenamiento, o recomendaciones de componentes.</p>
        
        <p style="color:#ff9ff3; margin:15px 0; font-weight:600;">📋 QUÉ INCLUYE EL DIAGNÓSTICO:</p>
        <ul>
            <li><strong>Salud del disco:</strong> SMART, lectura/escritura, sectores defectuosos</li>
            <li><strong>Velocidad de arranque:</strong> Medición antes/después</li>
            <li><strong>Clonación opcional:</strong> Si conviene migrar a SSD</li>
            <li><strong>Recomendación de mejoras:</strong> ajustes de sistema,SSD, RAM, tarjeta grafica, procesador</li>
            <li><strong>Reporte técnico:</strong> Resultados y pasos recomendados por escrito</li>
        </ul>
        
        <p style="margin:15px 0;"><strong>⏱️ Tiempo aproximado:</strong> 45 min - 1.5 horas </p>
        <p> 
        <strong>Precio regular:</strong> <s>$300 MXN</s><br>
        <strong>Descuento por apertura navideña🎄</strong> –$100 MXN<br>
        🔥 <strong >Total hoy: $200 MXN | Gratis al contratar cualquier otro servicio para tu computadora o laptop</strong>
        </p>
        <p style="margin:15px 0;"><strong>📌 TIENDA (KiraTesh Store):</strong> Ofreceremos componentes y SSD recomendados en nuestra tienda (KiraTesh Store) próximamente.</p>
        <p style="color:#d0d0ff; font-size:0.95em;">Servicio ideal si sospechas que tu disco está lento, falla o quieres migrar a SSD con seguridad. Incluye reporte y opción de cotización.</p>
    </div>
    `,

    ssd: `
    <div class='detalle'>
        <h3>SSD OVERDRIVE – Turbo MX</h3>
        <p><strong>De 2 minutos de espera a 15 segundos. La diferencia más notoria que verás en tu PC.</strong></p>
        <p>El SSD es la mejora más impactante. Todo cambia. Todo es más rápido. Todo fluye.</p>
        
        <p style="color:#ff9ff3; margin:15px 0; font-weight:600;">📋 QUÉ HACEMOS EN ESTE SERVICIO:</p>
        <ul>
            <li><strong>Consultoría:</strong> Asesoramos qué SSD es mejor para ti</li>
            <li><strong>Verificación de Compatibilidad:</strong> Revisamos tu motherboard</li>
            <li><strong>Instalación Física:</strong> Montaje seguro del SSD (M.2 o SATA)</li>
            <li><strong>Clonación de Windows (OPCIONAL):</strong> Transferimos tu sistema actual</li>
            <li><strong>Instalación de Windows Fresh (ALTERNATIVA):</strong> Windows limpio desde 0</li>
            <li><strong>Configuración de Particiones:</strong> Distribución óptima de espacio</li>
            <li><strong>Test de Velocidad:</strong> Lectura/escritura medida en tiempo real</li>
            <li><strong>Migración de Datos (OPCIONAL):</strong> Transfieren carpetas importantes</li>
            <li><strong>Optimización Final:</strong> Ajustes de BIOS para máximo rendimiento</li>
            <li><strong>Stress Test:</strong> Verificación de estabilidad completa</li>
        </ul>
        
        <p style="margin:15px 0;"><strong>⏱️ Tiempo:</strong> 1 - 2 horas </p>
        <p>
        <strong>Descuento por apertura navideña</strong> –$350 MXN, pida su descuento al agendar<br>
        </p>
        <p style="margin:15px 0;"><strong>📊 RESULTADOS ESPERADOS:</strong></p>
        <ul>
            <li>⚡ Boot (arranque): De 120s a 15-20s</li>
            <li>📁 Apertura de archivos: Instantáneo</li>
            <li>🎮 Carga de juegos: 50-70% más rápido</li>
            <li>🔧 Transferencia de datos: 10x más veloz que HDD</li>
            <li>💾 Durabilidad: El HDD se va, el SSD durará años</li>
        </ul>
        
        <p style="margin:15px 0;"><strong>💾 SSD RECOMENDADOS:</strong> Samsung 990 Pro | WD Black | Kingston Fury Beast | Seagate FireCuda</p>
        <p style="margin:15px 0;"><strong>📌 OPCIONES POPULARES:</strong></p>
        <ul>
        
            <li>Premium: SSD 1TB Kingston nv3 PCIe 4.0 (MX$1,050) + Instalación</li>
        </ul>
        <p><strong>🛡️ Garantía: Hardware según fabricante + 30 días servicio | Incluye Reporte Técnico</strong></p>
        <p style="color:#d0d0ff; font-size:0.95em;">La mejora MÁS importante que puedes hacer a una PC vieja. Cambia completamente la experiencia.</p>
    </div>
    `,

    ps4: `
    <div class='detalle'>
        <h3>PS4 THERMAL SWAP – Mantenimiento Técnico Profesional</h3>
        <p><strong>Servicio técnico especializado para restaurar el rendimiento óptimo de tu PS4.</strong></p>
        <p>La PS4 acumula polvo en componentes críticos causando sobrecalentamiento, ruido excesivo y degradación del rendimiento. Nuestro servicio técnico restaura las condiciones óptimas de funcionamiento.</p>
        
        <p style="color:#ff9ff3; margin:15px 0; font-weight:600;">📋 PROCESO TÉCNICO CERTIFICADO:</p>
        <ul>
            <li><strong>Desensamble Controlado:</strong> Apertura profesional con herramientas especializadas</li>
            <li><strong>Limpieza Externa:</strong> Carcasa y puertos con productos antistáticos</li>
            <li><strong>Limpieza Interna Profunda:</strong> Componentes críticos con aire comprimido industrial</li>
            <li><strong>Mantenimiento del Sistema de Ventilación:</strong> Limpieza especializada del ventilador axial</li>
            <li><strong>Limpieza de Filtros:</strong> Remoción y reemplazo de filtros de polvo acumulado</li>
            <li><strong>Reemplazo de Pasta Térmica (OPCIONAL):</strong> Si presenta degradación significativa</li>
            <li><strong>Verificación de Pads Térmicos:</strong> Inspección y reemplazo si es necesario</li>
            <li><strong>Reensamblaje Profesional:</strong> Montaje con torque controlado</li>
            <li><strong>Test de Rendimiento:</strong> Verificación térmica y funcional en juegos exigentes</li>
        </ul>
        
        <p style="margin:15px 0;"><strong>📊 RESULTADOS ESPERADOS:</strong></p>
        <ul>
            <li>🔊 Reducción de ruido: 80% menos audible en funcionamiento normal</li>
            <li>🌡️ Control térmico: Temperaturas 10-15°C más bajas</li>
            <li>⚡ Estabilidad de rendimiento: Sin throttling automático</li>
            <li>🎮 Experiencia de juego: Funcionamiento continuo sin interrupciones</li>
            <li>📈 Extensión de vida útil: 2-3 años adicionales de funcionamiento óptimo</li>
        </ul>
           <p> 
        <strong>Precio regular:</strong> <s>$750 MXN</s><br>
        <strong>Descuento por apertura navideña🎄</strong> –$350 MXN<br>
        🔥 <strong >Total hoy: $400 MXN</strong>
        </p>
        <p style="margin:15px 0;"><strong>🛠️ SERVICIO TÉCNICO COMPLETO:</strong></p>
        <p><strong>🛡️ Garantía: 60 días | Incluye Reporte Técnico Certificado</strong></p>
        <p style="color:#d0d0ff; font-size:0.95em;">Servicio recomendado para PS4 con más de 3 años de uso intenso que presentan síntomas de desgaste térmico.</p>
    </div>
    `,

    /* PS5 removed */

    xbox: `
    <div class='detalle'>
        <h3>XBOX COOLING SWAP – Servicio Técnico Especializado</h3>
        <p><strong>Servicio técnico especializado para Xbox Series X/S con componentes de alto rendimiento.</strong></p>
        <p>Las consolas Xbox Series X/S generan mucho calor debido a su potencia gráfica. El mantenimiento técnico especializado asegura funcionamiento óptimo y longevidad.</p>
        
        <p style="color:#ff9ff3; margin:15px 0; font-weight:600;">📋 PROCESO TÉCNICO CERTIFICADO:</p>
        <ul>
            <li><strong>Diagnóstico Inicial:</strong> Evaluación completa de temperaturas, ruido y rendimiento</li>
            <li><strong>Desensamble Controlado:</strong> Apertura profesional sin riesgo de daño a componentes</li>
            <li><strong>Inspección Técnica:</strong> Verificación de acumulación de polvo y posibles corrosiones</li>
            <li><strong>Limpieza Profesional:</strong> Aire comprimido industrial en circuitos y radiadores</li>
            <li><strong>Mantenimiento del Sistema de Ventilación:</strong> Limpieza especializada del ventilador principal</li>
            <li><strong>Optimización Térmica:</strong> Limpieza de disipador y radiador para flujo máximo de aire</li>
            <li><strong>Mantenimiento de Filtros:</strong> Reemplazo de filtros dañados por acumulación</li>
            <li><strong>Reemplazo de Pasta Térmica (OPCIONAL):</strong> Si presenta degradación</li>
            <li><strong>Verificación de Conectores:</strong> HDMI, USB y puertos de expansión</li>
            <li><strong>Reensamblaje Profesional:</strong> Montaje con calibración precisa</li>
            <li><strong>Test de Rendimiento:</strong> Verificación en juegos exigentes (Forza, Starfield)</li>
            <li><strong>Calibración Final:</strong> Ajuste de ventiladores para balance óptimo</li>
        </ul>
        
        <p style="margin:15px 0;"><strong>📊 RESULTADOS TÉCNICOS ESPERADOS:</strong></p>
        <ul>
            <li>🔊 Reducción de ruido: Operación casi silenciosa (especialmente Series X)</li>
            <li>🌡️ Control térmico: Temperaturas óptimas (50-60°C en gaming intenso)</li>
            <li>⚡ Estabilidad de rendimiento: 4K/120fps sin throttling térmico</li>
            <li>🎮 Experiencia de juego: Funcionamiento premium sin interrupciones</li>
            <li>📈 Longevidad extendida: 5+ años de funcionamiento confiable</li>
        </ul>
        
              <p> 
        <strong>Precio regular:</strong> <s>$750 MXN</s><br>
        <strong>Descuento por apertura navideña🎄</strong> –$350 MXN<br>
        🔥 <strong >Total hoy: $400 MXN</strong>
        </p>
        
        <p style="margin:15px 0;"><strong>🎯 RECOMENDADO PARA:</strong> Gamers competitivos, streamers, usuarios intensivos (8+ horas/día)</p>
        <p><strong>🛡️ Garantía: 60 días | Incluye Reporte Técnico + Fotos Before/After</strong></p>
        <p style="color:#d0d0ff; font-size:0.95em;">Tu Xbox mantendrá su rendimiento premium, funcionará silenciosa y tendrá años adicionales de vida útil óptima.</p>
    </div>
    `,

    switch: `
    <div class='detalle'>
        <h3>SWITCH THERMAL FIX – Reparación Técnica Especializada</h3>
        <p><strong>Servicio técnico especializado para Nintendo Switch con componentes delicados y complejos.</strong></p>
        <p>La Switch es un dispositivo portátil complejo que requiere mantenimiento técnico especializado. Sus componentes delicados necesitan cuidado experto para mantener el rendimiento óptimo.</p>
        
        <p style="color:#ff9ff3; margin:15px 0; font-weight:600;">📋 PROCESO TÉCNICO CERTIFICADO:</p>
        <ul>
            <li><strong>Diagnóstico Inicial:</strong> Verificación completa de temperatura, batería y ventilación</li>
            <li><strong>Desensamble Especializado:</strong> Apertura controlada de dispositivo frágil con herramientas precisas</li>
            <li><strong>Limpieza Externa:</strong> Carcasa, botones y rejillas de ventilación</li>
            <li><strong>Limpieza Interna Profesional:</strong> Componentes delicados con equipos especializados</li>
            <li><strong>Mantenimiento del Micro-ventilador:</strong> Limpieza precisa del ventilador de alta precisión</li>
            <li><strong>Optimización Térmica:</strong> Limpieza de disipador y heatsinks para portátiles</li>
            <li><strong>Mantenimiento de Conectores:</strong> Limpieza especializada de conectores Joy-Con</li>
            <li><strong>Limpieza de Puerto USB-C:</strong> Remoción de pelusas y residuos</li>
            <li><strong>Evaluación de Batería:</strong> Verificación de capacidad y salud actual</li>
            <li><strong>Reemplazo de Pasta Térmica (OPCIONAL):</strong> Si presenta degradación significativa</li>
            <li><strong>Limpieza de Pantalla:</strong> Mantenimiento sin rayones ni manchas</li>
            <li><strong>Test de Rendimiento:</strong> Verificación en juegos exigentes (Zelda, Doom, Fortnite)</li>
        </ul>
        
        <p style="margin:15px 0;"><strong>⏱️ Tiempo:</strong> 1.5 - 2 horas | <strong>💰 Precio:</strong> MX$1,150 - MX$1,650</p>
        <p style="margin:15px 0;"><strong>📊 RESULTADOS TÉCNICOS ESPERADOS:</strong></p>
        <ul>
            <li>🌡️ Control térmico: Reducción de 8-12°C en gaming máximo</li>
            <li>🔊 Reducción de ruido: Ventilador menos audible (40% menos perceptible)</li>
            <li>🎮 Estabilidad de rendimiento: 60 FPS constantes sin throttling térmico</li>
            <li>⚡ Eficiencia de batería: Mayor duración (menos consumo térmico)</li>
            <li>🎮 Conexión Joy-Con: Estabilidad mejorada en conexiones</li>
            <li>📈 Longevidad extendida: +2 años de funcionamiento óptimo</li>
        </ul>
            <p> 
        <strong>Precio regular:</strong> <s>$750 MXN</s><br>
        <strong>Descuento por apertura navideña🎄</strong> –$350 MXN<br>
        🔥 <strong >Total hoy: $400 MXN</strong>
        </p>
        <p style="margin:15px 0;"><strong>🔋 NOTA TÉCNICA SOBRE BATERÍA:</strong></p>
        <ul>
            <li>Dispositivos con 3+ años probablemente requieren reemplazo de batería</li>
            <li>Costo adicional: MX$640 - MX$900 (componente original certificado)</li>
            <li>Recomendado: Switch recupera duración completa de 5+ horas</li>
        </ul>
        
        <p style="margin:15px 0;"><strong>🎯 RECOMENDADO PARA:</strong> Gamers portátiles, familias con Switch usada, coleccionistas, creadores de contenido móvil</p>
        <p><strong>🛡️ Garantía: 45 días | Incluye Reporte Técnico + Mantenimiento de Pantalla</strong></p>
        <p style="color:#d0d0ff; font-size:0.95em;">Tu Switch recuperará el rendimiento óptimo, funcionará fresca y estará lista para gaming portátil de calidad.</p>
    </div>
    `,
};

/**
 * FUNCIÓN mostrarDetalle() - GESTIÓN DE POPUPS DE SERVICIOS
 * ===========================================
 * Función principal para mostrar/ocultar los detalles técnicos de cada servicio.
 * Maneja la lógica de popups, previene múltiples popups abiertos y proporciona
 * navegación suave hacia el contenido detallado.
 *
 * PARÁMETROS:
 * - el: Elemento DOM del servicio que fue clickeado
 * - tipo: String identificador del servicio (ej: 'mantpc', 'pasta', 'ps4')
 *
 * FUNCIONALIDAD:
 * - Verifica existencia del contenido del servicio
 * - Maneja apertura y cierre de popups
 * - Previene múltiples popups simultáneos
 * - Aplica animaciones y navegación suave
 * - Actualiza estado global de elementos activos
 *
 * VARIABLES GLOBALES AFECTADAS:
 * - abierto: Referencia al popup actualmente abierto
 * - elementoActivo: Elemento DOM actualmente activo
 */
function mostrarDetalle(el, tipo){
    console.log('mostrarDetalle llamado con:', tipo);
    
    // Verificar que el texto existe
    if (!textos[tipo]) {
        console.error(`No existe el servicio: ${tipo}`);
        return;
    }
    
    // Verificar si ya existe un detalle abierto dentro de este elemento (direct child)
    let detalleExistente = null;
    for (let node of el.childNodes) {
        if (node.nodeType === 1 && node.classList && node.classList.contains('detalle')){
            detalleExistente = node;
            break;
        }
    }
    if (detalleExistente) {
        // Si ya está abierto dentro del item, cerrarlo
        console.log('Cerrando detalle existente dentro del item');
        detalleExistente.style.display = 'none';
        detalleExistente.remove();
        el.classList.remove('activo');
        elementoActivo = null;
        abierto = null;
        return;
    }
    
    // Cerrar detalle anterior si existe
    if (abierto) {
        console.log('Removiendo detalle anterior');
        abierto.remove();
    }
    
    // Remover clase activo del elemento anterior
    if (elementoActivo && elementoActivo !== el) {
        elementoActivo.classList.remove('activo');
    }
    
    // Crear nuevo detalle
    console.log('Creando nuevo detalle para:', tipo);
    const wrapper = document.createElement('div');
    wrapper.innerHTML = textos[tipo];
    
    // Buscar el primer elemento (no nodo de texto)
    let detalleDiv = null;
    for (let node of wrapper.childNodes) {
        if (node.nodeType === 1) { // ELEMENT_NODE
            detalleDiv = node;
            break;
        }
    }
    
    // Verificar que encontramos el elemento
    if (!detalleDiv) {
        console.error('No se pudo encontrar el elemento detalle en el HTML');
        return;
    }
    
    // Asegurar que tiene la clase detalle
    detalleDiv.classList.add('detalle');
    detalleDiv.classList.add('mostrar');
    
    // Insertar DENTRO del item, al final, para que el detalle quede en su propio cuadro
    try {
        el.appendChild(detalleDiv);
    } catch (err) {
        console.error('No se pudo insertar detalle dentro del item, intentando como sibling:', err);
        if (el.parentNode) {
            el.parentNode.insertBefore(detalleDiv, el.nextSibling);
        } else {
            console.error('El elemento no tiene parentNode');
            return;
        }
    }
    
    // Actualizar variables globales
    abierto = detalleDiv;
    elementoActivo = el;
    el.classList.add('activo');
    
    console.log('Detalle insertado, scrolling...');
    
    // Scroll suave hacia el detalle
    setTimeout(() => {
        if (detalleDiv && detalleDiv.scrollIntoView) {
            detalleDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, 100);
}

/**
 * FUNCIÓN initSparkles() - EFECTOS VISUALES DE FONDO
 * ===========================================
 * Crea un efecto visual de partículas brillantes (sparkles) en el fondo de la página.
 * Estas partículas son estáticas y no reaccionan al scroll, creando una atmósfera
 * elegante similar a un spa tech.
 *
 * PARÁMETROS:
 * - options: Objeto de configuración opcional
 *   - count: Número de partículas a crear (default: 20)
 *
 * FUNCIONALIDAD:
 * - Crea elementos div con clase 'sparkle'
 * - Asigna tamaños aleatorios (small, medium, large)
 * - Posiciona aleatoriamente en toda la viewport
 * - Aplica delays de animación aleatorios para evitar sincronización
 * - Establece opacidad sutil para efecto elegante
 * - Agrega clase 'sparkle-static' al body para estilos CSS
 *
 * EFECTO VISUAL:
 * - Partículas brillantes que parpadean suavemente
 * - Distribución aleatoria por toda la pantalla
 * - Opacidad baja para no interferir con el contenido
 * - Animación CSS continua para movimiento sutil
 */
function initSparkles(options = {}){
    const count = options.count || 20;

    // create sparkles positioned across the viewport
    for (let i = 0; i < count; i++){
        const s = document.createElement('div');
        s.className = 'sparkle';
        // random size class
        const sz = Math.random();
        if (sz < 0.45) s.classList.add('small');
        else if (sz < 0.85) s.classList.add('medium');
        else s.classList.add('large');

        // random position
        const left = Math.random() * 100; // vw
        const top = Math.random() * 100; // vh
        s.style.left = left + 'vw';
        s.style.top = top + 'vh';

        // random animation delay so they don't sync visually
        s.style.animationDelay = (Math.random() * 4) + 's';

        // set a gentle, constant opacity (static background)
        s.style.opacity = 0.28 + Math.random() * 0.18;

        document.body.appendChild(s);
    }

    // mark body with static sparkle class for CSS tuning
    document.body.classList.add('sparkle-static');
}

// Initialize sparkles once DOM is ready
if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', ()=> initSparkles({count:22}));
} else {
    initSparkles({count:22});
}

/**
 * ===========================================
 * INICIALIZACIÓN DEL SCRIPT
 * ===========================================
 * El script se inicializa automáticamente cuando el DOM está listo.
 * Crea 22 partículas de efecto visual para el fondo de la página.
 * No requiere configuración adicional - funciona automáticamente.
 */

