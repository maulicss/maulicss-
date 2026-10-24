
const SHOP_WHATSAPP = "91XXXXXXXXXX";

// वरील ठिकाणी 91 नंतर दुकानाचा 10 अंकी WhatsApp नंबर टाका.
// उदाहरण: "919876543210"

document.getElementById("bookingForm")?.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const service = document.getElementById("service").value;
    const details = document.getElementById("details").value.trim();
    const status = document.getElementById("status");

    if (!/^91[0-9]{10}$/.test(SHOP_WHATSAPP)) {
        status.textContent = "script.js मध्ये दुकानाचा योग्य WhatsApp नंबर टाका.";
        return;
    }

    let message = "नमस्कार माऊली CSC सेवा केंद्र, मला सेवा हवी आहे.\n";
    message += "नाव: " + name + "\n";
    message += "मोबाइल: " + phone + "\n";
    message += "सेवा: " + service + "\n";
    message += "माहिती: " + details;

    status.textContent = "WhatsApp उघडत आहे. संदेश तपासून पाठवा.";

    window.open(
        "https://wa.me/" + SHOP_WHATSAPP + "?text=" + encodeURIComponent(message),
        "_blank"
    );
});
