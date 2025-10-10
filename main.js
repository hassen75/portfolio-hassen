emailjs.sendForm("service_nkgb4gz", "template_8ji7se4", formElement, "publicKey_WbzOTI6oQfjkK_62D")
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_nkgb4gz", "template_8ji7se4", this, "WbzOTI6oQfjkK_62D")
        .then(() => {
            document.getElementById("form-status").innerText = "✅ Message envoyé avec succès !";
            this.reset(); // vide le formulaire
        })
        .catch(() => {
            document.getElementById("form-status").innerText = "❌ Erreur lors de l’envoi, réessaie plus tard.";
        });
});
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_nkgb4gz", "template_8ji7se4", this, "WbzOTI6oQfjkK_62D")
        .then(() => {
            const status = document.getElementById("form-status");
            status.innerText = "✅ Message envoyé avec succès !";
            status.style.color = "green";
            this.reset(); // vide le formulaire
        })
        .catch(() => {
            const status = document.getElementById("form-status");
            status.innerText = "❌ Erreur lors de l’envoi, réessaie plus tard.";
            status.style.color = "red";
        });
});
setTimeout(() => {
    status.innerText = "";
}, 5000);
.then(() => {
    const status = document.getElementById("form-status");
    status.innerText = "✅ Message envoyé avec succès !";
    status.style.color = "green";
    this.reset();
    setTimeout(() => { status.innerText = ""; }, 5000);
})
    .catch(() => {
        const status = document.getElementById("form-status");
        status.innerText = "❌ Erreur lors de l’envoi, réessaie plus tard.";
        status.style.color = "red";
    });
