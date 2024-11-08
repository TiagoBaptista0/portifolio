// Seleciona o formulário de contato
const form = document.querySelector('.contact-form');

// Seleciona o botão de envio
const submitBtn = form.querySelector('button[type="submit"]');

// Adiciona um evento de escuta para o envio do formulário
form.addEventListener('submit', async (event) => {
  event.preventDefault();

  // Pega os valores dos campos de entrada
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const projectInput = document.getElementById('project');
  const messageInput = document.getElementById('message');

  // Prepara o conteúdo do e-mail
  const emailSubject = 'New Contact Form Submission';
  const emailBody = `
    Name: ${nameInput.value}
    Email: ${emailInput.value}
    Project: ${projectInput.value}
    Message: ${messageInput.value}
  `;

  // Abre o cliente de e-mail do usuário usando um link mailto
  const mailtoLink = `mailto:tt1827471@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
  window.location.href = mailtoLink;

  // Simula o envio do formulário
  submitBtn.textContent = 'Enviando...';
  submitBtn.disabled = true;

  // Aguarda 1.5 segundos antes de mostrar a mensagem de sucesso
  await new Promise(resolve => setTimeout(resolve, 1500));

  // Exibe mensagem de confirmação e muda a cor do botão
  submitBtn.textContent = 'Mensagem Enviada!';
  submitBtn.style.background = '#10B981';

  // Restaura o botão e o formulário após 2 segundos
  setTimeout(() => {
    form.reset();
    submitBtn.textContent = 'Enviar Mensagem';
    submitBtn.style.background = 'var(--accent)';
    submitBtn.disabled = false;
  }, 2000);
});

