import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validación básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    // Enviar email
    const data = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: ['gonfarias6@gmail.com'],
      replyTo: email,
      subject: `Nuevo mensaje de ${name} - Portfolio`,
      html: `
        <h2>Nuevo mensaje desde el portfolio</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    console.log('Email enviado exitosamente:', data);

    return NextResponse.json(
      { message: 'Email enviado exitosamente', data },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error completo al enviar email:', error);
    console.error('Detalles del error:', JSON.stringify(error, null, 2));
    return NextResponse.json(
      { 
        error: 'Error al enviar el mensaje. Por favor intenta de nuevo.',
        details: error.message || 'Error desconocido'
      },
      { status: 500 }
    );
  }
}
