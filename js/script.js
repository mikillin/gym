 function openEmailClient() {
            // Define email properties
            const to = 'sergey.rogachevsky@google.com';
            const subject = 'A message about fitness';
            const body = document.getElementById("message").value;

            // Create the mailto link with pre-filled fields
            const mailtoLink = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            // Open the user's email client
            window.location.href = mailtoLink;
        }
