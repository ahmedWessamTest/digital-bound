export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
export interface ValidationErrors {
  [key: string]: string | null;
}
