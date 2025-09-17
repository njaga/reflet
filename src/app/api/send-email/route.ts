import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Configuration du transporteur email IONOS France
const transporter = nodemailer.createTransport({
  host: 'smtp.ionos.fr', // Serveur SMTP IONOS France
  port: 587, // Port TLS
  secure: false, // TLS pour le port 587
  auth: {
    user: 'contact@reseaureflet.com',
    pass: '#Pwd@ThiernoAmadouBa2025'
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Interface pour les données du formulaire de contact
interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

// Interface pour les données du formulaire d'inscription
interface InscriptionFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age: number;
  city: string;
  profession: string;
  experience?: string;
  education?: string;
  sector?: string;
  motivation: string;
  goals?: string;
  contribution?: string;
  programmes?: string[];
  availability?: string;
  format?: string;
}

// Fonction pour générer le HTML du formulaire de contact
function generateContactEmailHtml(data: ContactFormData): string {
  const phoneSection = data.phone ? `<p><strong>Téléphone :</strong> ${data.phone}</p>` : '';
  
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
        <h1 style="margin: 0; font-size: 24px;">Nouveau Message de Contact</h1>
        <p style="margin: 10px 0 0 0; opacity: 0.9;">REFLET - Réseau des Femmes Leaders</p>
      </div>
      
      <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
        <h2 style="color: #333; margin-top: 0;">Informations du Contact</h2>
        
        <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <p><strong>Nom complet :</strong> ${data.firstName} ${data.lastName}</p>
          <p><strong>Email :</strong> ${data.email}</p>
          ${phoneSection}
          <p><strong>Sujet :</strong> ${data.subject}</p>
        </div>
        
        <div style="background: white; padding: 20px; border-radius: 8px;">
          <h3 style="color: #333; margin-top: 0;">Message</h3>
          <p style="line-height: 1.6; color: #555;">${data.message.replace(/\n/g, '<br>')}</p>
        </div>
        
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6;">
          <p style="color: #6c757d; font-size: 14px;">
            Ce message a été envoyé depuis le formulaire de contact du site REFLET
          </p>
        </div>
      </div>
    </div>
  `;
}

// Fonction pour générer le HTML du formulaire d'inscription
function generateInscriptionEmailHtml(data: InscriptionFormData): string {
  const experienceSection = data.experience ? `<p><strong>Expérience :</strong> ${data.experience}</p>` : '';
  const educationSection = data.education ? `<p><strong>Niveau d'études :</strong> ${data.education}</p>` : '';
  const sectorSection = data.sector ? `<p><strong>Secteur :</strong> ${data.sector}</p>` : '';
  
  const goalsSection = data.goals ? `
    <h3 style="color: #333;">Objectifs de développement</h3>
    <p style="line-height: 1.6; color: #555;">${data.goals.replace(/\n/g, '<br>')}</p>
  ` : '';
  
  const contributionSection = data.contribution ? `
    <h3 style="color: #333;">Contribution à la communauté</h3>
    <p style="line-height: 1.6; color: #555;">${data.contribution.replace(/\n/g, '<br>')}</p>
  ` : '';
  
  const programmesSection = data.programmes && data.programmes.length > 0 ? `
    <h2 style="color: #333;">Programmes d'Intérêt</h2>
    <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
      <ul style="color: #555;">
        ${data.programmes.map(programme => `<li>${programme}</li>`).join('')}
      </ul>
    </div>
  ` : '';
  
  const availabilitySection = (() => {
    if (!data.availability && !data.format) return '';
    
    const availabilityText = data.availability 
      ? `<p><strong>Disponibilité :</strong> ${data.availability}</p>` 
      : '';
    const formatText = data.format 
      ? `<p><strong>Format préféré :</strong> ${data.format}</p>` 
      : '';
    
    return `
      <h2 style="color: #333;">Disponibilité</h2>
      <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        ${availabilityText}
        ${formatText}
      </div>
    `;
  })();

  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
        <h1 style="margin: 0; font-size: 24px;">Nouvelle Candidature REFLET</h1>
        <p style="margin: 10px 0 0 0; opacity: 0.9;">Réseau des Femmes Leaders</p>
      </div>
      
      <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
        <h2 style="color: #333; margin-top: 0;">Informations Personnelles</h2>
        
        <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <p><strong>Nom complet :</strong> ${data.firstName} ${data.lastName}</p>
          <p><strong>Email :</strong> ${data.email}</p>
          <p><strong>Téléphone :</strong> ${data.phone}</p>
          <p><strong>Âge :</strong> ${data.age} ans</p>
          <p><strong>Ville :</strong> ${data.city}</p>
        </div>
        
        <h2 style="color: #333;">Informations Professionnelles</h2>
        <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <p><strong>Profession :</strong> ${data.profession}</p>
          ${experienceSection}
          ${educationSection}
          ${sectorSection}
        </div>
        
        <h2 style="color: #333;">Motivation et Objectifs</h2>
        <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="color: #333; margin-top: 0;">Pourquoi rejoindre REFLET ?</h3>
          <p style="line-height: 1.6; color: #555;">${data.motivation.replace(/\n/g, '<br>')}</p>
          
          ${goalsSection}
          ${contributionSection}
        </div>
        
        ${programmesSection}
        ${availabilitySection}
        
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6;">
          <p style="color: #6c757d; font-size: 14px;">
            Cette candidature a été soumise depuis le formulaire d'inscription du site REFLET
          </p>
        </div>
      </div>
    </div>
  `;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, ...formData } = body;

    let emailHtml = '';
    let subject = '';

    if (type === 'contact') {
      const data = formData as ContactFormData;
      subject = `Nouveau message de contact - ${data.subject}`;
      emailHtml = generateContactEmailHtml(data);
    } else if (type === 'inscription') {
      const data = formData as InscriptionFormData;
      subject = `Nouvelle candidature REFLET - ${data.firstName} ${data.lastName}`;
      emailHtml = generateInscriptionEmailHtml(data);
    } else {
      return NextResponse.json(
        { error: 'Type de formulaire non reconnu' },
        { status: 400 }
      );
    }

    // Envoi de l'email
    const mailOptions = {
      from: 'contact@reseaureflet.com',
      to: 'contact@reseaureflet.com',
      subject: subject,
      html: emailHtml
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email envoyé avec succès' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi de l\'email' },
      { status: 500 }
    );
  }
}
