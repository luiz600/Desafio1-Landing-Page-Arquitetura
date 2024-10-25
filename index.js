

document.getElementById("meuFormulario").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o comportamento padrão do envio

    // Envia os dados para o Sheet Monkey
    fetch(this.action, {
        method: this.method,
        body: new FormData(this)
    }).then(response => {
        if (response.ok) {
            // Redireciona para a página de agradecimento se o envio foi bem-sucedido
            window.location.href = "pagina-de-agradecimento.html";
        } else {
            alert("Houve um erro ao enviar o formulário. Por favor, tente novamente.");
        }
    }).catch(error => {
        alert("Houve um erro ao enviar o formulário. Por favor, tente novamente.");
    });
});