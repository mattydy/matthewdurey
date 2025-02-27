const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

export default (req, res) => {
    const body = JSON.parse(req.body);

    const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Company: ${body.company}\r\n
    Phone: ${body.phone}\r\n
    Subject: ${body.subject}\r\n
    Message: ${body.enquiry}`;

    const data = {
        to: 'me@matthewdurey.com',
        from: 'enquiries@matthewdurey.com',
        subject: 'New message from Website',
        test: message,
        html: message.replace(/\r\n/g, '<br>')
    }

    mail.send(data);

    res.status(200).json({status: 'jinokml'});
}