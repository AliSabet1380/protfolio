'use server';
import { Resend } from 'resend';
const resend = new Resend('re_Qfs7DPoz_6GrxdSqweKb9yjvV66eFddSL');

export const sendEmail = async formData => {
  const { name, content, email } = Object.fromEntries(formData);

  if (
    !name ||
    !content ||
    typeof content !== 'string' ||
    !email ||
    !email.includes('@')
  )
    return { error: 'Invalid Inputs' };

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'ali8551sbt@gmail.com',
      subject: 'Portfilio Email',
      reply_to: email,
      html: `<p>${content}</p>
    <span>this message come from ${name}</span>
    `,
    });
  } catch (error) {
    return { error: error.message };
  }
};
