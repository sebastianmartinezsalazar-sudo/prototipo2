
const SHOW_TIPS_BUTTON = document.getElementById('show-tips-btn');
const TIPS_CONTAINER = document.getElementById('tips');


SHOW_TIPS_BUTTON.addEventListener('click', function() {
  if (TIPS_CONTAINER.classList.contains('hidden')) {
    
    TIPS_CONTAINER.classList.remove('hidden');
    SHOW_TIPS_BUTTON.textContent = 'Ocultar consejos';
  } else {
    
    TIPS_CONTAINER.classList.add('hidden');
    SHOW_TIPS_BUTTON.innerHTML = '<i class="fas fa-heart"></i> Mostrar consejos';
  }
});
// Validación del formulario de contacto
const CONTACT_FORM = document.getElementById('support-form');
const NAME_INPUT = document.getElementById('name');
const EMAIL_INPUT = document.getElementById('email');
const SUPPORT_TYPE_SELECT = document.getElementById('support-type');
const MESSAGE_TEXTAREA = document.getElementById('message');

// Función para mostrar errores
function showError(elementId, message) {
  document.getElementById(elementId).textContent = message;
}

// Función para limpiar errores
function clearErrors() {
  document.querySelectorAll('.error').forEach(el => el.textContent = '');
}

// Validación de email
function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

// Manejo del envío
CONTACT_FORM.addEventListener('submit', function(e) {
  e.preventDefault(); // Evita el envío real
  clearErrors();
  
  let isValid = true;

  // Validar nombre
  if (!NAME_INPUT.value.trim()) {
    showError('name-error', 'Por favor, escribe tu nombre.');
    isValid = false;
  }

  // Validar email
  if (!EMAIL_INPUT.value.trim()) {
    showError('email-error', 'El email es obligatorio.');
    isValid = false;
  } else if (!isValidEmail(EMAIL_INPUT.value)) {
    showError('email-error', 'Por favor, escribe un email válido.');
    isValid = false;
  }

  // Validar tipo de apoyo
  if (SUPPORT_TYPE_SELECT.value === '') {
    showError('support-type-error', 'Por favor, selecciona una opción.');
    isValid = false;
  }

  // Validar mensaje
  if (!MESSAGE_TEXTAREA.value.trim()) {
    showError('message-error', 'El mensaje no puede estar vacío.');
    isValid = false;
  }

  if (isValid) {
    alert('¡Gracias! Hemos recibido tu solicitud. Pronto te contactaremos.');
    CONTACT_FORM.reset();
  }
});